import styled from "styled-components";
import { motion } from "framer-motion";

/* =======================
   Aurora Footer Styles
======================= */

const FooterWrapper = styled.footer`
  position: relative;
  width: 100vw;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  background: radial-gradient(
    circle at top center,
    rgba(0, 212, 255, 0.12),
    rgba(0, 0, 20, 0.95)
  );

  backdrop-filter: blur(24px);
  border-top: 1px solid rgba(0, 212, 255, 0.15);
`;

const ParticleLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(circle, rgba(0,212,255,0.12) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: float 20s linear infinite;

  @keyframes float {
    0% { background-position: 0 0; }
    100% { background-position: 200px 200px; }
  }
`;

const FooterContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 720px;
  width: 90%;
  text-align: center;
  padding: 3rem 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FooterTitle = styled.h2`
  font-size: 2.6rem;
  color: #00d4ff;
  text-shadow: 0 0 16px rgba(0, 212, 255, 0.75);
`;

const FooterText = styled.p`
  font-size: 1.1rem;
  color: #c0f0ff;
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 0 6px rgba(0, 212, 255, 0.3);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.a)`
  padding: 1rem 2.6rem;
  border-radius: 18px;
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;

  background: linear-gradient(
    135deg,
    rgba(0, 191, 255, 0.95),
    rgba(30, 144, 255, 0.95)
  );

  box-shadow:
    0 14px 35px rgba(0, 191, 255, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  &:hover {
    box-shadow:
      0 18px 45px rgba(0, 212, 255, 0.75);
  }
`;

const SecondaryButton = styled(motion.a)`
  padding: 1rem 2.6rem;
  border-radius: 18px;
  font-size: 1.05rem;
  font-weight: 600;
  color: #00d4ff;
  text-decoration: none;

  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.35);

  backdrop-filter: blur(12px);

  &:hover {
    background: rgba(0, 212, 255, 0.15);
  }
`;

const FooterBottom = styled.p`
  margin-top: 2.5rem;
  font-size: 0.85rem;
  color: rgba(180, 240, 255, 0.6);
`;

/* =======================
   Footer Component
======================= */

export default function AuroraFooter() {
  return (
    <FooterWrapper>
      <ParticleLayer />

      <FooterContent
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FooterTitle>Let’s Build Something Amazing</FooterTitle>

        <FooterText>
          I’m open to freelance work, full-time roles, and meaningful
          collaborations. Let’s create something impactful together.
        </FooterText>

        {/* CTA Buttons */}
        <ButtonGroup>
          <PrimaryButton
            a href="mailto:kiranbadhekar8@gmail.com"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </PrimaryButton>

          <SecondaryButton
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </SecondaryButton>
        </ButtonGroup>

        <FooterBottom>
          © {new Date().getFullYear()} KIRAN BADHEKAR. All rights reserved.
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
}
