/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Home.module.css";
import UseHomeController from "./Home.controller";
import { Card } from "@components/Card/Card";

const Home = () => {
  const { States } = UseHomeController();
  return (
    <div className={styles.container}>
      <Card.Container>
        <Card.Section title="titulo de seção">
          <Card.GroupItems items={States.cardTest} />
        </Card.Section>
      </Card.Container>
    </div>
  );
};

export default Home;
