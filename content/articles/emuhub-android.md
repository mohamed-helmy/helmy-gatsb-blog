---
title: "EmuHub: Simplify Android App Testing with Multiple Emulators"
date: 2024-04-24 10:51:13
subtitle: "emuhub"
category: "Mobile"
draft: false
---



## Introduction

EmuHub is a powerful tool designed to streamline the testing of Android applications. By providing access to multiple emulators through web browsers, EmuHub offers developers and QA engineers a seamless platform for testing APKs across various Android device configurations. Built with Docker and NoVNC, this tool eliminates the need for complex local installations and configurations, making the testing process more efficient and user-friendly.



## Key Features

 1. Multiple Emulators: EmuHub allows users to access multiple Android emulators simultaneously. This feature enables parallel testing of applications, increasing productivity and saving time.

 2. Web-Based Interface: With EmuHub, you can control and interact with emulators directly from your web browser. This eliminates the need for local installations or complex configurations, making it easier for both developers and QA engineers to perform testing tasks.

 3. Dockerized Environment: EmuHub is built using Docker containers, ensuring easy deployment and scalability across different environments. Docker simplifies the setup process and provides a consistent testing environment for all team members.

 4. Seamless Testing Experience: EmuHub offers a user-friendly interface and centralized access to emulator instances, providing a seamless testing experience. Developers and QA engineers can easily navigate through the tool, enhancing their productivity and efficiency.

## Supported Tags
```
* docker pull mohamedhelmy/emuhub:latest
```
## Getting Started

To start using EmuHub, follow these simple steps:

 1. Clone the Repository: Begin by cloning the EmuHub repository to your local machine using the following command:
```
    git clone git@github.com:mohamed-helmy/emuhub.git
```
2. Build the Docker Image: Once you have cloned the repository, build the Docker image by running the following command:
```
    docker build -t emuhub .
```
3. Run EmuHub Container: Start the EmuHub container using the following command:
```
    docker run -d -p 6080:6080 emuhub
```
4. Access Emulators: Open your web browser and navigate to [http://localhost:6080](http://localhost:6080/) to access the EmuHub interface.
>  Example Docker Compose

Here is an example Docker Compose configuration file that can be used with EmuHub:
```
    services:
      emulator:
        image: mohamedhelmy/emuhub:latest
        privileged: true
        scale: 1
        environment:
          - VNCPASS=admin
          - emuhubPASS=admin
          - LISTENPORT=8000
        ports:
          - 8000:8000
        volumes:
          - ./apk-demo:/home/emuhub/apk
        logging:
          driver: json-file
          options:
            max-size: 20m
            max-file: '10'
```
Modify the configuration according to your requirements. Make sure to set appropriate values for VNCPASS, emuhubPASS, and LISTENPORT.

To start EmuHub using Docker Compose, run the following command:
```
    docker compose up -d
```
Once EmuHub is running, access it via a web browser using the URL http://<your-server-ip>:8000. Replace <your-server-ip> with the IP address of the server where EmuHub is hosted.

![](https://cdn-images-1.medium.com/max/2000/1*gIbf1lNUcunTsNa0ZQjqPw.gif)

## Conclusion

EmuHub simplifies Android application testing by providing a user-friendly interface and access to multiple emulators through web browsers. With its Dockerized environment and customizable configurations, EmuHub offers a flexible and efficient solution for developers and QA engineers. By streamlining the testing process, EmuHub enhances productivity and helps ensure the quality of Android applications before deployment.
