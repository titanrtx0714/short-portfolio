import SectionContainer from "./SectionContainer";
const Services = () => {
  return (
    <SectionContainer
      name={"resume"}
      extraClass={"resume-section"}
      title={"My Resume"}
      subTitle={"History"}
      leftImage="static/img/title-2.jpg"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Experience</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Arts</span>
                  <label>OCT 2005 - JAN 2024</label>
                </div>
                <div className="r-info">
                  <p>
                    My love for the arts, particularly in music, has allowed me to immerse myself in the world of melodies and rhythms, 
                    providing a unique avenue for self-expression. Additionally, my enthusiasm for photography has given me 
                    a creative outlet to capture and share meaningful moments.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="dark-color">Animal Training</span>
                  <label>OCT 2015 - JUNE 2023</label>
                </div>
                <div className="r-info">
                  <p>
                    My experience in training dogs has not only showcased my patience and understanding but has also strengthened my ability to connect 
                    with and positively influence others, including our four-legged friends.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after dark-color">Education</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Canberra Grammar School</span>
                  <label>OCT 2010 - JUNE 2022</label>
                </div>
                <div className="r-info">
                  <p>
                    I am proud to have completed my secondary education at Canberra Grammar School, 
                    an institution renowned for its commitment to academic excellence and holistic development. 
                    Graduating with full marks is a testament to my dedication, hard work, 
                    and the invaluable education I received during my time at this esteemed institution.
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="dark-color">Australian National University (ANU)</span>
                  <label>JUNE 2022 - Present</label>
                </div>
                <div className="r-info">
                  <p>
                    I am honing my artistic skills and gaining a deeper understanding of the rich world of art. 
                    ANU's vibrant community and state-of-the-art facilities have created an inspiring environment for me to flourish as an artist.
                    Excited about the journey ahead, I am committed to embracing new perspectives and contributing 
                    my artistic voice to the diverse tapestry of ANU's creative community.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="dark-color theme-after">My Skills</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="dark-color">Art Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Photography</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Singing</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Illustrator</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
          <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
            <h3 className="dark-color">Other Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Training Animal</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Cooking</h6>
                <span className="theme-bg">95%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Helping</h6>
                <span className="theme-bg">100%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
