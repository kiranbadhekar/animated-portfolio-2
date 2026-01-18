import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/* =======================
   Floating Animation
======================= */

const floatingMotion = {
  animate: { y: [0, -8, 0] },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* =======================
   Styled Components
======================= */

const ProjectsContainer = styled.section`
  width: 100%;
  padding: 9rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 5rem 1.5rem 3rem;
  }

  @media (max-width: 600px) {
    padding: 10rem 1rem 2rem;
  }
`;

const Title = styled(motion.h1)`
  margin-bottom: 2.5rem;
  font-size: 3rem;
  color: #eafcff;

  text-shadow:
    0 2px 6px rgba(0, 0, 0, 0.6),
    0 0 12px rgba(0, 180, 255, 0.4);

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const ProjectGrid = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 900px) {
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    gap: 1.2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  padding: 2rem 1.8rem;
  border-radius: 22px;
  text-align: left;

  /* 🌊 Ocean glass card */
  background: linear-gradient(
    180deg,
    rgba(10, 40, 70, 0.55) 0%,
    rgba(5, 25, 45, 0.7) 60%,
    rgba(2, 15, 30, 0.85) 100%
  );

  backdrop-filter: blur(40px) saturate(140%);
  -webkit-backdrop-filter: blur(40px) saturate(140%);

  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.6),
    0 0 90px rgba(0, 170, 220, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  border: 1px solid rgba(120, 220, 255, 0.22);

  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 35px 70px rgba(0, 0, 0, 0.7),
      0 0 140px rgba(0, 200, 255, 0.45);
  }

  /* 🌊 Caustic light */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        circle at 30% 10%,
        rgba(120, 220, 255, 0.25),
        transparent 55%
      ),
      radial-gradient(
        circle at 70% 30%,
        rgba(0, 180, 255, 0.18),
        transparent 60%
      );
    mix-blend-mode: screen;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 1.6rem 1.4rem;
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.6rem;
  font-size: 1.5rem;
  color: #ffffff;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: #cfe9f1;
  opacity: 0.95;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const TechStack = styled.div`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #00d4ff;
  letter-spacing: 0.5px;
`;

/* =======================
   Component
======================= */

const Projects = () => {
  const projects = [
    {
      title: "Travel Booking Web App",
      desc:
        "A full-featured travel booking application with authentication, destination filtering, and booking forms. Secure login and data storage using Firebase.",
      tech: "React · Firebase Auth · Firestore · Firebase Hosting",
    },
    {
      title: "Animated Portfolio Website",
      desc:
        "A modern animated portfolio showcasing projects and skills with smooth scroll-based animations and transitions.",
      tech: "React · Styled Components · Framer Motion",
    },
    {
      title: "Hospital Management Website",
      desc:
        "A responsive hospital website presenting departments, doctors, and healthcare services with clean UI.",
      tech: "React · JavaScript · CSS · Responsive Design",
    },
    {
      title: "Task Management App",
      desc:
        "A responsive task manager built with reusable React components and efficient state handling.",
      tech: "React · JavaScript · CSS",
    },
    {
      title: "E-Commerce Frontend UI",
      desc:
        "A modern e-commerce frontend with product listings, reusable UI components, and a clean user experience.",
      tech: "React · API Integration · UI Design",
    },
  ];

  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </Title>

      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...floatingMotion}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.desc}</ProjectDesc>
            <TechStack>{project.tech}</TechStack>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
