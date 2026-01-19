import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/* =======================
   Floating Animation
======================= */

const floatingMotion = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* =======================
   Styled Components
======================= */

const ContactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 120px;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
`;

const FloatingCard = styled(motion.div)`
  width: 100%;
  max-width: 460px;
  padding: 2.6rem 2.2rem;
  border-radius: 24px;
  position: relative;
  overflow: hidden;

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

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 10%, rgba(120, 220, 255, 0.25), transparent 55%),
      radial-gradient(circle at 70% 30%, rgba(0, 180, 255, 0.18), transparent 60%);
    mix-blend-mode: screen;
    pointer-events: none;
  }

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
    animation: waterShine 8s linear infinite;
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
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.6rem;
  color: #eafcff;
  text-shadow:
    0 2px 6px rgba(0, 0, 0, 0.6),
    0 0 10px rgba(0, 180, 255, 0.4);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  text-align: center;
`;

const ContactItem = styled.p`
  font-size: 1.1rem;
  color: #eafcff;

  a {
    margin-left: 8px;
    color: #6fe8ff;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ContactButton = styled(motion.a)`
  margin-top: 1.5rem;
  padding: 0.95rem;
  border-radius: 14px;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;

  background: linear-gradient(135deg, #00b4db, #0083b0);

  box-shadow:
    0 12px 30px rgba(0, 180, 220, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
`;

/* =======================
   Component
======================= */

const Contact = () => {
  return (
    <ContactContainer>
      <FloatingCard
        {...floatingMotion}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Title>Contact Me</Title>

        <ContactInfo>
          <ContactItem>
            📧 Email:
            <a href="mailto:kiranbadhekar8@gmail.com">
              kiranbadhekar8@gmail.com
            </a>
          </ContactItem>

          <ContactItem>
            📞 Phone:
            <a href="tel:+918446050780">
              +91 8446050780
            </a>
          </ContactItem>

          <ContactButton
            href="https://wa.me/918446050780"
            target="_blank"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 Chat on WhatsApp
          </ContactButton>
        </ContactInfo>
      </FloatingCard>
    </ContactContainer>
  );
};

export default Contact;
