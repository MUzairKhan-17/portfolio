import React from "react";
import styles from "./resume.module.css";

const Resume = () => {
  return (
    <section id="resume" className={styles.resumeSection}>
      {/* Section Title */}
      <div className={styles.sectionTitle} data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Passionate and detail-oriented ASP.NET Core developer with hands-on experience building scalable web applications. Proficient in full-stack development using C#, .NET Core, JavaScript, React, and SQL. Proven ability to build responsive UIs and integrate backend APIs. Enthusiastic about learning new technologies and contributing to impactful software solutions.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left Column */}
          <div className={styles.column} data-aos="fade-up" data-aos-delay="100">
            <h3 className={styles.resumeTitle}>Personal Info</h3>
            <div className={styles.resumeItem}>
              <h4>Muhammad Uzair Khan</h4>
              <ul>
                <li>📍 Karachi, Pakistan</li>
                <li>📞 0317-1043099</li>
                <li>✉ uzairarif1718@gmail.com</li>
                <li>💻 <a href="https://github.com/MUzairKhan-17" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
              </ul>
            </div>

            <h3 className={styles.resumeTitle}>Education</h3>
            <div className={styles.resumeItem}>
              <h4>Diploma in Information Technology</h4>
              <h5>2022 – Present</h5>
              <p><em>Aptech Metro Star Gate</em></p>
            </div>
            <div className={styles.resumeItem}>
              <h4>Intermediate in General Science</h4>
              <h5>2023 – 2025</h5>
              <p><em>Ziauddin School & College, Karachi</em></p>
            </div>
            <div className={styles.resumeItem}>
              <h4>Matriculation in Computer Science</h4>
              <h5>2020 – 2022</h5>
              <p><em>Karachi Board</em></p>
            </div>

            <h3 className={styles.resumeTitle}>Technical Skills</h3>
            <div className={styles.resumeItem}>
              <ul>
                <li><strong>Languages:</strong> C#, Dart, JavaScript, PHP, SQL</li>
                <li><strong>Web Technologies:</strong> HTML5, CSS3, Bootstrap, jQuery, XML</li>
                <li><strong>Frameworks & Tools:</strong> ASP.NET Core, MVC, Node JS, React.js, Express.js, Laravel, Flutter, Angular CLI</li>
                <li><strong>Databases:</strong> MongoDB, MySQL, SQL Server, Firebase</li>
                <li><strong>Design Tools:</strong> Adobe XD, Figma</li>
                <li><strong>Version Control & Utilities:</strong> GitHub, MS Office</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.column} data-aos="fade-up" data-aos-delay="200">
            <h3 className={styles.resumeTitle}>Projects</h3>

            <div className={styles.resumeItem}>
              <h4>EventSphere Web App</h4>
              <p><a href="https://github.com/MUzairKhan-17/eventsphere.git" target="_blank">GitHub Repo</a></p>
              <ul>
                <li>Responsive event system with user auth and OTP verification</li>
                <li>Admin and sub-admin dashboards with full event CRUD</li>
                <li><strong>Tech Stack:</strong> React.js, Express.js, MongoDB, CSS Media Queries</li>
              </ul>
            </div>

            <div className={styles.resumeItem}>
              <h4>Car360 Web Platform</h4>
              <p><a href="https://github.com/MUzairKhan-17/Car360.git" target="_blank">GitHub Repo</a></p>
              <ul>
                <li>Vehicle booking and admin dashboard with user/product/employee management</li>
                <li><strong>Tech Stack:</strong> HTML5, CSS3, Bootstrap 5, ASP.NET Core, SQL Server</li>
              </ul>
            </div>

            <div className={styles.resumeItem}>
              <h4>Chef Recipes Website</h4>
              <p><a href="https://github.com/MUzairKhan-17/Chef-Recipe.git" target="_blank">GitHub Repo</a></p>
              <ul>
                <li>Admin/user dashboard with CRUD, login/signup, and status toggling</li>
                <li><strong>Tech Stack:</strong> ASP.NET Core, SQL Server, Bootstrap</li>
              </ul>
            </div>

            <div className={styles.resumeItem}>
              <h4>Gun360 Landing Page</h4>
              <p><a href="https://beamish-tulumba-c1234a.netlify.app" target="_blank">Live Site</a></p>
              <ul>
                <li>Responsive single-page website with smooth navigation and modern UI</li>
                <li><strong>Tech Stack:</strong> HTML5, CSS3, Media Queries, Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;