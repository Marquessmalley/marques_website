import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Self Taught Programmer",
    years: "2019 - Present",
    content:
      "Since graduating college and with the pandemic coming down hard, I've been able to teach myself multiple languages and been able to build projects",
  },
  {
    id: 2,
    title: "Bachelor’s Of Buisness Degree",
    years: "2016 - 2020",
    content:
      "Attened Western Michigan University on Full-Ride Academic Scholarship and Graduated from the college of business in Dec.2020 ",
  },
  {
    id: 3,
    title: "Honours Degree",
    years: "2012 - 2016",
    content: "Graduated top 10 students in highschool with honors.",
  },
];

const experienceData = [
  // {
  //   id: 1,
  //   title: "Web Designer",
  //   years: "2019 - Present",
  //   content:
  //     "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  // },
  {
    id: 1,
    title: "Front-End Developer",
    years: "2020 - 2021",
    content:
      "In-depth knowledge of coding the user-facing aspects of a website ",
  },
  {
    id: 2,
    title: "Back-End Developer",
    years: "2020 - 2021",
    content:
      "In-depth knowledge of at least one backend programming language and framework. ",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
