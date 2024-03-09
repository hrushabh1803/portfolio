import {
      mobile,
      backend,
      creator,
      web,
      javascript,
      prmierePro,
      html,
      css,
      reactjs,
      photoshop,
      tailwind,
      nodejs,
      mongodb,
      git,
      figma,
      codeigniter,
      ipragti,
      eagrocareLogo,
      eagrocare,
      Stock,
      mailchimp,
      angular,
    } from "../assets";
    
    export const navLinks = [
      {
        id: "about",
        title: "About",
      },
      {
        id: "work",
        title: "Work",
      },
      {
        id: "contact",
        title: "Contact",
      }
    ];
    
    const services = [
      {
        title: "Web Developer",
        icon: web,
      },
      {
        title: "Gaphic Designer",
        icon: mobile,
      },
      {
        title: "Backend Developer",
        icon:  creator,
      },
      {
        title: "Photographer",
        icon: backend,
      },
    ];
    
    const technologies = [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "Prmiere Pro",
        icon: prmierePro,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Photoshop",
        icon: photoshop,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Angular CLI",
        icon: angular,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "figma",
        icon: figma,
      },
      {
        name: "codeigniter",
        icon: codeigniter,
      },
    ];
    
    const experiences = [
    
      {
        title: "Full stack Developer",
        company_name: "eAgrocare",
        icon:   eagrocareLogo,
        iconBg: "#370e09",
        date: "Jan 2023 - Present",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
      {
        title: "PHP Developer",
        company_name: "iPragati",
        icon:   ipragti,
        iconBg: "#ffa922",
        date: "March 2020 - April 2021",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
      {
        title: "Graphic Design",
        company_name: "eAgrocare",
        icon:   eagrocareLogo,
        iconBg: "#370e09",
        date: "Jan 2021 - Feb 2022",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },

    ];
    
    const testimonials = [
      {
        testimonial:
          "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial:
          "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ];
    
    const projects = [
      {
        name: "eAgrocare Website",
        description:
          "A dynamic website built with Angular, featuring an extensive range of products and content. Powered by a backend developed with CodeIgniter and SQL, it efficiently stores and manages data through APIs. With custom graphics and design, it offers a seamless user experience for all agricultural needs",
        tags: [
          {
            name: "Angular",
            color: "blue-text-gradient",
          },
          {
            name: "API",
            color: "green-text-gradient",
          },
          {
            name: "Bootstrap",
            color: "pink-text-gradient",
          },
        ],
        image: eagrocare,
        source_code_link: "https://github.com/hrushabh1803/eAgrocareAngular.git",
      },
      {
        name: "Stock Managment",
        description:
          "Created a user-friendly stock management system with CodeIgniter, empowering branch users to handle stock orders effortlessly. Stored data securely using MySQLi, ensuring smooth inventory tracking and management across branches.",
        tags: [
          {
            name: "CodeIgniter",
            color: "blue-text-gradient",
          },
          {
            name: "MySQLi",
            color: "green-text-gradient",
          },
          {
            name: "CSS",
            color: "pink-text-gradient",
          },
        ],
        image: Stock,
        source_code_link: "https://github.com/hrushabh1803/eagrocare-app.git",
      },
      {
        name: "Mailchimp Clone",
        description:
          "A project that mirrors the Mailchimp website using HTML and pure CSS. This project aims to refine web development skills by replicating the design and functionality of a top email marketing platform's landing page.Special thanks to Mailchimp for the inspiration.",
        tags: [
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
          {
            name: "CSS",
            color: "green-text-gradient",
          },
          {
            name: "Clone",
            color: "pink-text-gradient",
          },
        ],
        image: mailchimp,
        source_code_link: "https://github.com/hrushabh1803/Mailchimp-Clone.git",
      },
    ];
    
    export { services, technologies, experiences, testimonials, projects };