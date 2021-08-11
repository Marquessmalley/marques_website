import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/react-logo.png",
  },
  {
    id: 2,
    image: "images/git-logo.png",
  },
  {
    id: 3,
    image: "images/client-3-light.svg",
  },
  {
    id: 4,
    image: "images/client-4-light.svg",
  },
  {
    id: 5,
    image: "images/github-logo.png",
  },
  {
    id: 6,
    image: "images/client-6-light.svg",
  },
  {
    id: 7,
    image: "images/nodejs-logo.png",
  },
  {
    id: 8,
    image: "images/client-8-light.svg",
  },
];

function BrandlogosDark() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandlogosDark;
