import SectionContainer from "./SectionContainer";

const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About"}
      subTitle={"WHO I AM"}
      leftImage="static/img/title-1.jpg"
      leftImageTitle={"About Me"}
    >
      <div className="row">
        <div className="col-md-4">
          <img src="static/img/title-4.jpg" title alt />
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">I'm Tara, My child name was Teresa </h3>
            <p className="m-0px">
              As a 19-year-old individual with a passion for canine companions and a flair for artistic expression, I bring a unique blend of skills and interests to any endeavor. 
            </p>
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-ruler-pencil" />
                <div className="feature-content">
                  <h5 className="dark-color">Passion learner</h5>
                  <p>
                    As I navigates the exciting journey of young adulthood, my passion for learning remains insatiable.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-image" />
                <div className="feature-content">
                  <h5 className="dark-color">Photographer</h5>
                  <p>
                    Photography is my visual poetry. Armed with a camera, I captures moments that tell stories, freezing time in frames that evoke emotions. 
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-brush-alt" />
                <div className="feature-content">
                  <h5 className="dark-color">Art aficionado</h5>
                  <p>
                    With a heart attuned to melodies, I immerses myself in the world of music, exploring rhythms that resonate with my soul. 
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <i className="icon dark-color theme-after ti-mobile" />
                <div className="feature-content">
                  <h5 className="dark-color">Gentle spirit </h5>
                  <p>
                    I am poised to make waves in the world. 
                    A beacon of inspiration for those around me, 
                    I am a reminder that age is just a number, and the pursuit of one's passions knows no bounds.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>{" "}
          {/* row */}
        </div> 
      </div>{" "}
      {/* row */}
      {/* 
     ==========================
       Counter
     ==========================
     */}
      <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
        <div className="row">
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-face-smile" />
                <div className="count dark-color">75</div>
                <h6>Happy Friends</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-headphone" />
                <div className="count dark-color">105</div>
                <h6>Telephonic Talk</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-camera" />
                <div className="count dark-color">375</div>
                <h6>Photo Capture</h6>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </SectionContainer>
  );
};
export default AboutUs;
