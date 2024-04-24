

## Streamlining Android App Deployment with Docker and Fastlane

In the world of mobile app development, deploying Android applications to the Google Play Store involves numerous dependencies and configurations. However, with the Android Docker Image for Building and Deploying Apps to the Google Play Store, this process is streamlined. By integrating the Android SDK and Fastlane into a Docker container, developers can easily incorporate the deployment process into their Continuous Integration/Continuous Deployment (CI/CD) pipelines. Let’s explore how to use this Docker image to simplify the deployment process.

![](https://cdn-images-1.medium.com/max/2000/1*kShKmYh0Br09F68LdhZSHg.png)

## Introduction

Deploying an Android application to the Google Play Store usually requires a series of complex steps involving the setup of the Android SDK, generation of signed APKs, and submission to the Play Store. These tasks can be repetitive and time-consuming, especially when integrated into a CI/CD pipeline. To alleviate this, a Docker image has been developed, encompassing all necessary tools, such as the Android SDK and Fastlane, to streamline the deployment process.

## Using the Android Docker Image

## 1. Pull the Docker Image:

First, you need to pull the Docker image:

    docker pull mohamedhelmy/android-docker:34

## Build Your Android App:

Use the following command to build your Android app within the Docker container:

    docker run -v /path/to/your/android/app:/root/app mohamedhelmy/android-docker:34 fastlane build

This command builds your Android app within the Docker container, ensuring that all necessary dependencies are included in the build process.

## 3. Deploy Your Android App to the Google Play Store:

After building your app, you can deploy it to the Google Play Store using the following command:

    docker run -v /path/to/your/android/app:/root/app mohamedhelmy/android-docker:34 fastlane deploy

This command deploys your Android app to the Google Play Store. All you need to provide is the path to your Android app.

## Dockerfile:

The Dockerfile used to build the Docker image is as follows:

    FROM ubuntu:20.04
    
    MAINTAINER Mohamed Helmy <helmy419@gmail.com>
    
    # Environment variables
    ENV LANG=en_US.UTF-8 \
        LANGUAGE=en_US \
        LC_ALL=en_US.UTF-8 \
        DEBIAN_FRONTEND=noninteractive \
        ANDROID_HOME=/opt/android-sdk-linux \
        ANDROID_SDK_HOME=/opt/android-sdk-linux \
        ANDROID_SDK_ROOT=/opt/android-sdk-linux \
        ANDROID_SDK=/opt/android-sdk-linux \
        PATH="${PATH}:${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/cmdline-tools/tools/bin:${ANDROID_HOME}/tools/bin:${ANDROID_HOME}/build-tools/34.0.0:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/emulator:${ANDROID_HOME}/bin"
    
    # Update and install dependencies
    RUN dpkg --add-architecture i386 \
        && apt-get update -yqq \
        && apt-get install -y curl expect git libc6:i386 libgcc1:i386 libncurses5:i386 libstdc++6:i386 zlib1g:i386 openjdk-17-jdk wget unzip vim \
        && apt-get clean \
        && groupadd android \
        && useradd -d /opt/android-sdk-linux -g android android
    
    # Copy tools and licenses
    COPY tools /opt/tools
    COPY licenses /opt/licenses
    
    # Set work directory
    WORKDIR /opt/android-sdk-linux
    
    # Run entrypoint
    RUN /opt/tools/entrypoint.sh built-in
    
    # Install Android SDK components
    RUN /opt/android-sdk-linux/cmdline-tools/tools/bin/sdkmanager "cmdline-tools;latest" \
        && /opt/android-sdk-linux/cmdline-tools/tools/bin/sdkmanager "build-tools;34.0.0" \
        && /opt/android-sdk-linux/cmdline-tools/tools/bin/sdkmanager "platform-tools" \
        && /opt/android-sdk-linux/cmdline-tools/tools/bin/sdkmanager "platforms;android-34" \
        && /opt/android-sdk-linux/cmdline-tools/tools/bin/sdkmanager "system-images;android-34;google_apis;x86_64"
    
    # Install FastLane dependencies
    RUN apt install ruby-full build-essential -y \
        && gem install fastlane -NV \
        && fastlane --version
    
    # Clean up
    RUN apt-get autoremove -y \
        && apt-get clean
    
    # Default command
    CMD ["/opt/tools/entrypoint.sh", "built-in"]

## Example Fastfile:

Here’s an example Fastfile you can use in your Android project:

    default_platform(:android)
    
    platform :android do
      lane :build do
        # Your build steps here
        gradle(
          task: "assemble",
          build_type: "Release"
        )
      end
    
      lane :deploy do
        # Your deployment steps here
        supply(
          track: 'internal',
          apk: 'app/build/outputs/apk/release/app-release.apk'
        )
      end
    end

## Example .gitlab-ci.yml:

To integrate this Docker image into your GitLab CI/CD pipeline, you can use the following .gitlab-ci.yml file:

    image: mohamedhelmy/android-docker:34
    
    stages:
      - build
      - deploy
    
    build:
      stage: build
      script:
        - fastlane build
    
    deploy:
      stage: deploy
      script:
        - fastlane deploy

## Example of Using This Image in a CI/CD Pipeline (GitHub Actions):

Below is an example GitHub Actions workflow for integrating this Docker image into your CI/CD pipeline:

    name: Android CI/CD
    
    on: [push]
    
    jobs:
      build:
        name: Build and Deploy
        runs-on: ubuntu-latest
    
        steps:
        - name: Checkout Repository
          uses: actions/checkout@v2
    
        - name: Pull Docker Image
          run: docker pull mohamedhelmy/android-docker:34
    
        - name: Run Docker Container
          run: docker run -v ${{ github.workspace }}:/workspace mohamedhelmy/android-docker:34
    
        - name: Build Android App
          run: |
            cd /workspace
            fastlane build
    
        - name: Deploy Android App to Google Play Store
          run: |
            cd /workspace
            fastlane deploy

With this Docker image, building and deploying Android applications to the Google Play Store has never been easier. Developers can now seamlessly integrate this process into their CI/CD pipelines, enhancing efficiency and ensuring a smooth deployment process.

## Conclusion

The Android Docker Image for Building and Deploying Apps to the Google Play Store simplifies and streamlines the process of deploying Android applications. By integrating the Android SDK and Fastlane into a Docker container, developers can now build and deploy Android apps to the Google Play Store seamlessly. This Docker image enables easy integration into Continuous Integration/Continuous Deployment (CI/CD) pipelines, saving time and effort. Streamline your Android app deployment process today with this efficient Docker image.

## GitHub Repository

To access and utilize this Docker image, you can visit the [GitHub repository](https://github.com/mohamed-helmy/android-docker).

Feel free to contribute, report issues, or provide feedback to improve the Android Docker image
