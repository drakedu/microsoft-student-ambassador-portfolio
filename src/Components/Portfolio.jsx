/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "This image is of an aerial view of a desk with a planner overlaid with a pen and a vase of pink flowers.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Citadel Summer Invitational Datathon Champion",
    description:
      "Conducted with a team an empirical analysis on both the causes and consequences of airline route elimination in rural and small towns across the United States",
    url: "https://www.linkedin.com/in/drake-du/overlay/1635535413183/single-media-viewer/",
  },
  {
    title: "Outr — Find Out Corporations' True Colors",
    description:
      "Engineered a Google Chrome extension for users to more readily understand corporations’ political donations to anti-LGBTQIA+ campaigns",
    url: "https://chrome.google.com/webstore/detail/outr-%E2%80%94-find-out-corporati/miobpojmajfkaniipifhinbgadokmajd",
  },
  {
    title: "Harvard Tech for Social Good Product Manager",
    description:
      "Oversaw a team programming an extract, transform, and load (ETL) data consolidation script for the National Institute for Occupational Safety and Health to more efficiently analyze 20 data sets maintained by the Mine Safety and Health Administration",
    url: "https://www.linkedin.com/in/drake-du/details/experience/",
  },
  {
    title: "Ersilia Software Engineer",
    description:
      "Engineered with a team a graphical user interface (GUI) for labs, universities, and clinics conducting infectious and neglected disease research to more easily access the 100+ machine learning (ML) models assembled by the Ersilia Open Source Initiative",
    url: "https://www.linkedin.com/in/drake-du/details/experience/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
