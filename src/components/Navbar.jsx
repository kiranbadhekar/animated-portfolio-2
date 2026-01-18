import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

/* =======================
   Aurora Animation
======================= */

const auroraMove = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

/* =======================
   Layout & Glass
======================= */

const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 96px;
  z-index: 999;

  backdrop-filter: blur(22px);
  background: rgba(2, 6, 20, 0.55);

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  /* 🌈 Aurora accent line */
  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;

    background: linear-gradient(
      90deg,
      #ff00ff,
      #7f7cff,
      #00ffff,
      #00ff99,
      #ffff00,
      #ff9900,
      #ff0066
    );

    background-size: 300% 100%;
    animation: ${auroraMove} 10s linear infinite;
    opacity: 0.85;
  }
`;

const NavContent = styled(motion.div)`
  height: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;

  background: linear-gradient(
    90deg,
    #00ffff,
    #7f7cff,
    #ff00ff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 0 14px rgba(120, 120, 255, 0.35);
`;

/* =======================
   Desktop Links
======================= */

const NavLinks = styled.nav`
  display: flex;
  gap: 2.2rem;

  a {
    color: #e6faff;
    text-decoration: none;
    font-size: 0.95rem;
    position: relative;
    transition: 0.3s ease;

    &:hover {
      color: #ffffff;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0%;
      height: 2px;

      background: linear-gradient(
        90deg,
        #ff00ff,
        #7f7cff,
        #00ffff,
        #00ff99,
        #ffff00,
        #ff9900,
        #ff0066
      );

      transition: width 0.35s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* =======================
   Mobile Menu
======================= */

const MenuButton = styled.div`
  display: none;
  color: #e6faff;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 96px;
  left: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(2, 6, 25, 0.92);
  backdrop-filter: blur(28px);

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  padding: 2rem 0;

  a {
    color: #e6faff;
    font-size: 1.1rem;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background: linear-gradient(
        90deg,
        #ff00ff,
        #00ffff
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

/* =======================
   NAV COMPONENT
======================= */

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavbarWrapper>
        <NavContent
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Logo>Kiran Badhekar</Logo>

          <NavLinks>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </NavLinks>

          <MenuButton onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </NavContent>
      </NavbarWrapper>

      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            <a onClick={() => setOpen(false)} href="/">Home</a>
            <a onClick={() => setOpen(false)} href="/about">About</a>
            <a onClick={() => setOpen(false)} href="/projects">Projects</a>
            <a onClick={() => setOpen(false)} href="/contact">Contact</a>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}
