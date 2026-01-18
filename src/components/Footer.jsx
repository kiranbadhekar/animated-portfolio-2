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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* Aurora glow overlay */
  background: radial-gradient(
    circle at top center,
    rgba(0, 212, 255, 0.08),
    rgba(0, 0, 20, 0.9)
  );
  backdrop-filter: blur(24px);
  border-top: 1px solid rgba(0, 212, 255, 0.1);
`;

const FooterContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 700px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.8rem;
  padding: 2rem 1rem;
`;

const FooterTitle = styled.h2`
  font-size: 2.2rem;
  color: #00d4ff;
  text-shadow: 0 0 12px rgba(0, 212, 255, 0.7);
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #c0f0ff;
  text-shadow: 0 0 6px rgba(0, 212, 255, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.06);
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition: 0.3s;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: #00d4ff;
    box-shadow: 0 0 12px rgba(0, 212, 255, 0.4);
  }
`;

const TextArea = styled.textarea`
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 212, 255, 0.3);
  background: rgba(0, 212, 255, 0.06);
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  resize: vertical;
  transition: 0.3s;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: #00d4ff;
    box-shadow: 0 0 12px rgba(0, 212, 255, 0.4);
  }
`;

const Button = styled(motion.button)`
  padding: 0.9rem 1.2rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.9), rgba(30, 144, 255, 0.9));
  box-shadow: 0 10px 25px rgba(0, 191, 255, 0.4);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 30px rgba(0, 212, 255, 0.6);
  }
`;

/* Aurora glowing particles for premium effect */
const ParticleLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(circle, rgba(0,212,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: float 20s linear infinite;

  @keyframes float {
    0% { background-position: 0 0; }
    100% { background-position: 200px 200px; }
  }
`;

/* =======================
   Footer Component
======================= */

export default function AuroraFooter() {
  return (
    <FooterWrapper>
      <ParticleLayer /> {/* subtle floating particles layer */}
      <FooterContent
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FooterTitle>Get In Touch</FooterTitle>
        <FooterText>
          I'd love to hear from you! Fill out the form below to reach me.
        </FooterText>

        <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea rows="5" placeholder="Your Message" required />
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </Button>
        </Form>
      </FooterContent>
    </FooterWrapper>
  );
}
