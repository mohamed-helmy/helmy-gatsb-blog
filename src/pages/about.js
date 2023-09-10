import * as React from "react";
import "./about.scss";
import Profile from "../components/profile";
import { Footer } from "../components/footer";

export default function About() {
  return (
    <div className="aboutRoot">
      <div className="aboutNavbar" />
      <div className="aboutContent">
        <Profile></Profile>
        <hr />
        <div className="aboutContentText">

          <p style={{ textAlign: "justify" }}>I am A software developer with over 9 years of experience in the industry. Throughout my career, I have been dedicated to developing the functionality and design of applications using cutting-edge technologies to deliver the best results for the required features.</p>

          <p style={{ textAlign: "justify" }}>I have extensive expertise in mobile app development, having worked with Android native using Java &nbsp;Additionally, I am well-versed in cross-platform development using React Native. This allows me to create versatile and high-performance mobile applications that can run seamlessly on multiple platforms.</p>

          <p style={{ textAlign: "justify" }}>In terms of backend development, I have a strong command of several technologies. I have successfully worked with .NET &nbsp;(C#), developing robust web applications that are secure and scalable. My proficiency extends to Python, Node.js, and Java, enabling me to build efficient backend solutions to support complex application architectures.</p>

          <p style={{ textAlign: "justify" }}>Furthermore, I have experience with Odoo, an open-source ERP platform. I have leveraged my skills to customize and implement Odoo solutions for businesses, improving their operational efficiency and streamlining their workflows.</p>

          <p style={{ textAlign: "justify" }}>Alongside my backend expertise, I am proficient in web frontend development. I have a deep understanding of JavaScript and have worked with popular frameworks such as Angular 2 and React. This allows me to create dynamic and responsive web interfaces that deliver a seamless user experience.</p>

          <p style={{ textAlign: "justify" }}>In addition to my technical skills, I have a strong background in DevOps practices. I understand the importance of continuous integration, delivery, and deployment in ensuring efficient software development processes. I am familiar with various DevOps tools and methodologies, allowing me to optimize the development lifecycle and improve team collaboration.</p>

          <p style={{ textAlign: "justify" }}>Throughout my career, I have been committed to staying updated with the latest industry trends and advancements. I actively seek opportunities to enhance my skill set and explore emerging technologies. This drive for continuous learning empowers me to deliver innovative solutions and tackle complex challenges effectively.</p>

          <p style={{ textAlign: "justify" }}><br />
            In summary, I am a dedicated and experienced software developer with expertise in mobile app development, backend and frontend web development, DevOps practices, and customization of Odoo solutions. With my broad skill set, up-to-date knowledge, and passion for delivering exceptional results, I continue to make valuable contributions to the software development industry.</p>
        </div>
        <Footer />
      </div>
    </div >
  );
}
