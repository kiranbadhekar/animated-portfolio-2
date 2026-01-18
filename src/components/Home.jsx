import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

/* =======================
   Styled Components
======================= */

const HomeContainer = styled.section`
  width: 100%;
  padding: 9rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const ProfileImage = styled(motion.img)`
  margin-top: 80px;
  width: 160px;
  height: 160px;

  /* 🔥 Rounded square instead of circle */
  border-radius: 22px;

  object-fit: cover;
  margin-bottom: 1.8rem;

  /* Ocean glass border */
  border: 2px solid rgba(0, 212, 255, 0.75);

  /* Depth + water glow */
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.45),
    0 0 35px rgba(0, 212, 255, 0.55),
    inset 0 0 14px rgba(255, 255, 255, 0.25);

  /* Glass reflection highlight */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.02)
  );

  @media (max-width: 600px) {
    width: 130px;
    height: 130px;
    border-radius: 18px;
  }
`;


const GlassCard = styled(motion.div)`
  width: 100%;
  max-width: ${(props) => props.max || "900px"};
  margin-bottom: ${(props) => props.mb || "2.5rem"};
  padding: 2.6rem 2.4rem;
  border-radius: 26px;
  position: relative;
  overflow: hidden;

  background: linear-gradient(
    180deg,
    rgba(10, 40, 70, 0.55),
    rgba(5, 25, 45, 0.75),
    rgba(2, 15, 30, 0.9)
  );

  backdrop-filter: blur(45px) saturate(140%);
  -webkit-backdrop-filter: blur(45px) saturate(140%);

  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 0 120px rgba(0, 170, 220, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  border: 1px solid rgba(120, 220, 255, 0.25);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 10%, rgba(120,220,255,0.25), transparent 55%),
      radial-gradient(circle at 70% 30%, rgba(0,180,255,0.18), transparent 60%);
    mix-blend-mode: screen;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 2rem 1.6rem;
  }
`;

const Name = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  background: linear-gradient(90deg, #00d4ff, #7c7cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 900px) {
    font-size: 2.2rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const RoleText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #cfe9f1;
  opacity: 0.95;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #00d4ff;
`;

const Skills = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  padding: 0.75rem 1.4rem;
  border-radius: 14px;
  font-size: 0.95rem;

  background: linear-gradient(
    145deg,
    rgba(0, 212, 255, 0.25),
    rgba(124, 124, 255, 0.25)
  );

  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 212, 255, 0.5);
  color: #ffffff;
`;

const ProjectCard = styled(motion.div)`
  margin: 1rem 0;
  padding: 1.4rem 1.6rem;
  border-radius: 18px;
  text-align: left;

  background: rgba(0, 212, 255, 0.08);
  backdrop-filter: blur(12px);
  border-left: 4px solid #00d4ff;

  h3 {
    color: #7c7cff;
    margin-bottom: 0.4rem;
  }

  p {
    color: #cfd8dc;
    font-size: 0.95rem;
  }

  small {
    color: #00d4ff;
    font-size: 0.8rem;
  }
`;

const ContactPreview = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  padding: 2rem 2.5rem;
  border-radius: 22px;

  /* CARD BACKGROUND */
  background: linear-gradient(
    180deg,
    rgba(10, 35, 55, 0.95),
    rgba(5, 20, 35, 0.95)
  );

  border: 1px solid rgba(0, 212, 255, 0.35);

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 0 40px rgba(0, 212, 255, 0.25);

  position: relative;
  z-index: 2;

  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    padding: 1.4rem 1.6rem;
  }
`;


const IconLink = styled.a`
  color: #ffffff;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.25);
    color: #00d4ff;
  }
`;

/* =======================
   Home Component
======================= */

const Home = () => {
  return (
    <HomeContainer>
      {/* Profile Image */}
      <ProfileImage
        src="/profile.jpeg"
        alt="Kiran Badhekar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Intro */}
      <GlassCard
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Name>Kiran Badhekar</Name>
        <RoleText>
          React JS Developer building modern, responsive, and high-performance
          web applications with real-world experience in Firebase authentication,
          filtering systems, and animated user interfaces.
        </RoleText>
      </GlassCard>

      {/* Education */}
      <GlassCard
        max="700px"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <SectionTitle>Education</SectionTitle>
        <h4 style={{ color: "#00d4ff" }}>Bachelor of Science (B.Sc)</h4>
        <p style={{ color: "#cfd8dc" }}>
          Information Technology & Analytics
        </p>
        <small style={{ color: "#9fdfff" }}>
          Strong foundation in programming, data analysis, and software
          development principles.
        </small>
      </GlassCard>

      {/* Skills */}
      <GlassCard max="850px">
        <SectionTitle>Skills</SectionTitle>
        <Skills>
          {[
            "React JS",
            "JavaScript",
            "HTML & CSS",
            "Bootstrap",
            "Styled Components",
            "Framer Motion",
          ].map((skill) => (
            <SkillCard key={skill} whileHover={{ scale: 1.1 }}>
              {skill}
            </SkillCard>
          ))}
        </Skills>
      </GlassCard>

      {/* Featured Projects */}
      <GlassCard max="900px">
        <SectionTitle>Featured Projects</SectionTitle>

        <ProjectCard whileHover={{ scale: 1.03 }}>
          <h3>Animated Portfolio Website</h3>
          <p>
            A modern developer portfolio with smooth animations, scroll effects,
            and interactive UI.
          </p>
          <small>React · Styled Components · Framer Motion</small>
        </ProjectCard>

        <ProjectCard whileHover={{ scale: 1.03 }}>
          <h3>Travel Booking Web App</h3>
          <p>
            Secure travel booking platform with authentication, filtering, and
            booking flow using Firebase.
          </p>
          <small>React · Firebase Auth · Firestore · Hosting</small>
        </ProjectCard>
      </GlassCard>

      {/* Contact Icons */}
      <ContactPreview
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <IconLink href="https://github.com/kiranbadhekar" target="_blank">
          <FaGithub size={30} />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/kiran-badhekar-98329534a"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </IconLink>
        <IconLink href="mailto:kiranbadhekar8@email.com">
          <FaEnvelope size={30} />
        </IconLink>
      </ContactPreview>
    </HomeContainer>
  );
};

export default Home;
