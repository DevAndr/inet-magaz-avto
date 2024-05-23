import React, { FC } from "react";
import "./styles.scss";
import NavBar from "../components/NavBar/NavBar.tsx";
import { Container } from "react-bootstrap";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar />
      <main className="content">
        <Container>{children}</Container>
      </main>
      <footer><Container>Магазаин автозапчатей 2024 ©</Container></footer>
    </div>
  );
};

export default MainLayout;
