import React from 'react';
import projectcss from './project.module.css';

const Project = () => {
  return (
    <section id="projects" className={projectcss.projectSection}>
      <div className={projectcss.sectionHeader}>
        <h3 className={projectcss.sectionSubheading}>Projects</h3>
        <ul className={projectcss.projectList}>
          <li>
            <strong>EventSphere Web App</strong> –{' '}
            <a
              href="https://github.com/MUzairKhan-17/eventsphere.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <p>
              Responsive event system with user auth, OTP, admin dashboard & event CRUD.
              <br /><br />
              <em>Tech Stack:</em> React.js, Node.js, Express, MongoDB, CSS Modules
            </p>
          </li>
          <li>
            <strong>Car360 Platform</strong> –{' '}
            <a
              href="https://github.com/MUzairKhan-17/Car360.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <p>
              Booking site with admin panel for managing users, products, employees.
              <br /><br />
              <em>Tech Stack:</em> ASP.NET Core MVC, Razor Pages, SQL Server, Bootstrap
            </p>
          </li>
          <li>
            <strong>Chef Recipes Site</strong> –{' '}
            <a
              href="https://github.com/MUzairKhan-17/Chef-Recipe.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <p>
              Cooking recipe site with admin/user dashboards, CRUD operations.
              <br /><br />
              <em>Tech Stack:</em> ASP.NET Core MVC, Razor Pages, SQL Server, Bootstrap
            </p>
          </li>
          <li>
            <strong>Gun360 Landing Page</strong> –{' '}
            <a
              href="https://beamish-tulumba-c1234a.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <p>
              Responsive single-page site with modern UI and smooth navigation.
              <br /><br />
              <em>Tech Stack:</em> HTML, CSS, JavaScript
            </p>
          </li>
          <li>
            <strong>Gmail Verification</strong> –{' '}
            <a
              href="https://github.com/MUzairKhan-17/Gmail-Verification.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <p>
              Email OTP verification with modern UI and responsive design.
              <br /><br />
              <em>Tech Stack:</em> ASP.NET Core MVC, Razor Pages, SQL Server, SMTP MailKit, Bootstrap
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Project;