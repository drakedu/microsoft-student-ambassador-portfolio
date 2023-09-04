/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about.jpg";

const imageAltText = "This image is of a bouquet of purple and white peonies.";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a student at Harvard University pursuing a Double Concentration in Statistics and Computer Science and a Secondary Field in Economics. Previously, I've worked at Scale AI and Cleveland Clinic.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python | JavaScript | C++ | SQL",
  "React | Angular | Django | Flask",
  "R | OCaml | LaTeX | HTML/CSS",
  "Data Modeling",
  "Graphic Design",
  "Public Speaking",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Outside of work and school, I serve as a Microsoft Student Ambasador, Harvard-MIT Mathematics Tournament (HMMT) Director of Outreach, and Mathematical Association of America Mathematics Grader. I'm also involved with Out in Tech and the Harvard Computer Society. In my free time, I like to develop technology for social good and learn about the many different genera of orchids.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
