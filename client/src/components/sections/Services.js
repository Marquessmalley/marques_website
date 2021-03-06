import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  // {
  //   id: 1,
  //   icon: "images/service-1.svg",
  //   title: "UI/UX design",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  //   color: "#6C6CE5",
  //   contentColor: "light",
  // },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "Web Development",
    content:
      "Provding Full-stack web developement, covering both front-end and back-end task, with the latest modern programming languages. ",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "images/smartphone.png",
    title: "Mobile Development",
    content: "Coming Soon...",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
