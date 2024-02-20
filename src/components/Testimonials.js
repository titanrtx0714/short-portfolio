import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">What Friends Say?</h2>
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        <div className="testimonial-col">
          <div className="say">
            <p>
              With a heart full of dreams and a mind open to possibilities, 
              she is poised to make waves in the world. A beacon of inspiration for those around her, 
              she is a reminder that age is just a number, and the pursuit of one's passions knows no bounds.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>Best Friend Lucky</span>
              <label>Programmer</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>
              Beyond her talents, she radiates warmth and kindness. 
              Her love for animals extends to a broader compassion for all living beings. A gentle spirit, 
              she believes in the power of empathy and connection, seeking to make a positive impact in the lives of those she encounters.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar2.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>New Sister Val</span>
              <label>Painter</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>
              Meet an incredible young woman, 
              a harmonious blend of passion, talent, 
              and creativity. At the age of 19, 
              she stands as a testament to the extraordinary potential that youth holds.
              <br/><br/>
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar3.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>Child Friend</span>
              <label>Student</label>
            </div>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};
export default Testimonials;
