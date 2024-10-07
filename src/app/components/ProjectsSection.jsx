"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce App",
    description:
      "I developed an E-Commerce App using TypeScript and Next.js to ensure type safety and server-side rendering. The frontend features Tailwind CSS for styling and Material-UI for pre-designed components. Key functionalities include product filtering, product cards, and a streamlined payment process, enhancing the overall shopping experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Movflix - Movie App",
    description:
      "I created Movflix - Movie App, a web application that utilizes JavaScript to provide movie and TV show analysis, user reviews, and IMDb ratings. The app allows users to explore and comment on their favorite films and series, enhancing their viewing experience through detailed insights and ratings.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Internship and Job Posting Platform",
    description:
      "I developed a web app for job and internship listings in the IT sector, featuring user authentication and an admin panel. It uses ASP.NET Core MVC, Entity Framework, N-Tier Architecture, and SQL Server for efficient organization, database management, and routing.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Job and Order Tracking System",
    description:
      "I developed a Job and Order Tracking System using ASP.NET Core for the backend, with MS SQL as the database and a RESTful API architecture. The app is containerized using Docker for easy deployment. On the frontend, I utilized Next.js, TypeScript, and Tailwind CSS along with shadcn UI to create a modern, responsive user interface.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Code Quiz: Test Your Programming Skills",
    description:
      "This app is a quiz platform testing knowledge in various programming languages. It features a scalable .NET backend with a RESTful API and MS SQL for secure data storage. The frontend, built with React, offers a user-friendly interface for accessing and answering questions, catering to both beginners and experienced developers.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Desktop Medical Stock Control System",
    description:
      "It is a project I have done for a medical company with C#, DevExpress and Sql Server.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
