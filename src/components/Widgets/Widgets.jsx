import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticles = [
    { heading: "The Full Stack Junkie Is Back", subtitle: "Top news - 9099 reader" },
    { heading: "Coronavirus: UK updates", subtitle: "Top news - 886 reader" },
    { heading: "Bitcoin Breaks $22K", subtitle: "Crypto - 8000 reader" },
    { heading: "JavaScript Mastery", subtitle: "Code - 120000 reader" },
    { heading: "Tesla hits new highs", subtitle: "Cars & auto - 300 reader" },
  ];

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article" key={heading}>
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticles.map((article) => newsArticle(article.heading, article.subtitle))}
    </div>
  );
};

export default Widgets;
