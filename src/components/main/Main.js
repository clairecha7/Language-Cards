import React from "react";
import "./Main.css";
import { languages } from "../../helper/data";
import Card from "../card/Card";

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">Languages</h1>
      <div className="cards-container">
        {languages.map((language) => {
          return <Card language={language} key={language.id} />;
        })}
      </div>
    </div>
  );
};

export default Main;
