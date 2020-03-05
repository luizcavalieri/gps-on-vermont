import React, { useEffect } from "react";
import { headerScrolling } from "./commons";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import DarkFooter from "../../components/Footers/DarkFooter";
import { Container } from "reactstrap";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import { RibbonContainer, RightCornerLargeRibbon } from "react-ribbons";
import jobOffers from "../../data/job-offers";

const CareerPage = () => {
  useEffect(() => {
    headerScrolling();
  });

  const DEFAULT_IMAGE = "gpv-news.png";

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          backgroundImgName={"career-large.jpg"}
          imageClassName={"page-header page-header-small"}
          contentClassName={"content-center"}
          titleClassName={"title-landing-page"}
        />

        <div className="section text-center">
          <Container className=" text-muted">
            <div className="section-career-overview">
              <div className="separator separator-primary"></div>
              {jobOffers.filter( job => job.enabled).map((job, index) => (
                <RibbonContainer key={index} className={"ribbon-container"}>
                  <RightCornerLargeRibbon
                    backgroundColor={job.ribbonTextBkgColor}
                    color={job.ribbonTextColor}
                  >
                    {job.ribbonText}
                  </RightCornerLargeRibbon>

                  <article>
                    <img
                      src={require(`../../assets/img/${
                        !job.image ? DEFAULT_IMAGE : job.image
                      }`)}
                      alt={job.title}
                    />
                    <section>
                      <h3>{job.title}</h3>

                      {job.descriptions.map((par, index) => (
                        <p key={index}>{par}</p>
                      ))}
                      <div>
                        {job.links.map((link, index) => (
                          <cite key={index}>
                            <a href={`tel: ${link.value}`}>{link.display}</a>
                          </cite>
                        ))}
                      </div>

                      <footer>
                        <br></br>
                        <h5>{job.footer}</h5>
                      </footer>
                    </section>
                  </article>
                </RibbonContainer>
              ))}
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default CareerPage;
