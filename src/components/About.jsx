import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/* =======================
   Floating Animation
======================= */

const floatingMotion = {
  animate: { y: [0, -10, 0] },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* =======================
   Styled Components
======================= */

const AboutContainer = styled.section`
  width: 100%;
  margin-top: 110px;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const AboutCard = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  padding: 3rem 3rem;
  border-radius: 26px;
  position: relative;
  overflow: hidden;
  text-align: center;

  /* 🌊 Ocean glass */
  background: linear-gradient(
    180deg,
    rgba(10, 40, 70, 0.55) 0%,
    rgba(5, 25, 45, 0.7) 60%,
    rgba(2, 15, 30, 0.85) 100%
  );

  backdrop-filter: blur(45px) saturate(140%);
  -webkit-backdrop-filter: blur(45px) saturate(140%);

  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 0 120px rgba(0, 170, 220, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -10px 30px rgba(0, 0, 0, 0.6);

  border: 1px solid rgba(120, 220, 255, 0.25);

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

  /* 🌊 Water shine */
  &::after {
    content: "";
    position: absolute;
    inset: -50%;
    background: linear-gradient(
      120deg,
      transparent 40%,
      rgba(120, 220, 255, 0.08),
      transparent 60%
    );
    animation: waterShine 9s linear infinite;
    pointer-events: none;
  }

  @keyframes waterShine {
    from {
      transform: translateX(-40%);
    }
    to {
      transform: translateX(40%);
    }
  }

  @media (max-width: 600px) {
    padding: 2.2rem 1.6rem;
  }
`;

const AboutTitle = styled(motion.h1)`
  margin-bottom: 2rem;
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

const AboutText = styled(motion.p)`
  max-width: 760px;
  margin: 0 auto;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #cfe9f1;
  opacity: 0.95;

  @media (max-width: 900px) {
    font-size: 1.05rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.65;
  }
`;

const Highlight = styled.span`
  color: #00d4ff;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
`;

/* =======================
   Component
======================= */

const About = () => {
  return (
    <AboutContainer>
      <AboutCard
        {...floatingMotion}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AboutTitle>About Me</AboutTitle>

        <AboutText>
          Hi, I’m <Highlight>Kiran Badhekar</Highlight>, a dedicated{" "}
          <Highlight>React JS Developer</Highlight> passionate about building
          modern, scalable, and user-focused web applications.
          <br />
          <br />
          I have developed multiple real-world projects, including a{" "}
          <Highlight>Travel Booking Web App</Highlight> with secure authentication
          and advanced filtering, an{" "}
          <Highlight>Animated Portfolio Website</Highlight> with smooth UI
          animations, and a{" "}
          <Highlight>Hospital Website</Highlight> with clean, responsive layouts.
          <br />
          <br />
          I enjoy creating reusable components, clean UI architecture, and
          responsive designs while working with{" "}
          <Highlight>Framer Motion</Highlight> and{" "}
          <Highlight>styled-components</Highlight>. I continuously refine my
          skills to deliver performant, accessible, and visually engaging
          applications.
        </AboutText>
      </AboutCard>
    </AboutContainer>
  );
};

export default About;
