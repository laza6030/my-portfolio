import React, { ReactNode, useCallback } from "react";

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import Header from "../Header";
import Footer from "../Footer";

import { Wrapper } from "./Layout.styled";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.1,
            },
          },
          detectRetina: true,
        }}
      />
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
