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
  /* ❌ background removed */
`;

const FloatingCard = styled(motion.div)`
  width: 100%;
  max-width: 460px;
  padding: 2.6rem 2.2rem;
  border-radius: 24px;
  position: relative;
  overflow: hidden;

  /* 🌊 Ocean glass card */
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

  /* 🌊 Caustic underwater light */
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

  /* 🌊 Moving water shine */
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
  margin-bottom: 1.8rem;
  text-align: center;
  font-size: 2.6rem;
  color: #eafcff;
  text-shadow:
    0 2px 6px rgba(0, 0, 0, 0.6),
    0 0 10px rgba(0, 180, 255, 0.4);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(120, 220, 255, 0.15);
  outline: none;
  font-size: 0.95rem;
  color: #ffffff;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );

  ::placeholder {
    color: rgba(200, 240, 255, 0.6);
  }

  &:focus {
    border-color: rgba(0, 200, 255, 0.6);
    box-shadow:
      0 0 0 3px rgba(0, 200, 255, 0.18),
      inset 0 0 8px rgba(0, 200, 255, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(120, 220, 255, 0.15);
  outline: none;
  resize: none;
  font-size: 0.95rem;
  color: #ffffff;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );

  ::placeholder {
    color: rgba(200, 240, 255, 0.6);
  }

  &:focus {
    border-color: rgba(0, 200, 255, 0.6);
    box-shadow:
      0 0 0 3px rgba(0, 200, 255, 0.18),
      inset 0 0 8px rgba(0, 200, 255, 0.2);
  }
`;

const Button = styled(motion.button)`
  margin-top: 0.8rem;
  padding: 0.95rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;

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

        <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea rows="5" placeholder="Your Message" required />

          <Button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </Button>
        </Form>
      </FloatingCard>
    </ContactContainer>
  );
};

export default Contact;
