import React from "react";
import "../assets/css/Hero.css";
export const Hero = () => {
  return (
    <>
      <section className="py-5 text-center container-fluid bg-img">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-8 mx-auto">
            <div className="glass">
              <h1 className="fw-light titleMB"><strong>Ed Bondame</strong></h1>
              <p className="lead text-dark">
              I am Front-End Web Developer for a year, I’m working as web developer.i have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good web design projects.
                Always available for your website and application solutions needs.
              </p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <a
                  href="https://docs.google.com/document/d/1gt-ZtLGaz6VmpSVhekvAYnDLQ77rZQRROZc_gUh2tI4/edit?usp=sharing"
                  type="button"
                  className="btn btn-outline-secondary"
                  target="_blank"
                >
                  My CV
                </a>
                <a
                  href="https://www.linkedin.com/in/ed-bondame/"
                  type="button"
                  className="btn btn-outline-secondary"
                  target="_blank"
                >
                LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
