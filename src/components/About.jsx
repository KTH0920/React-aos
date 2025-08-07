import React from "react";
import "./style/About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {
  return (
    <section>
      <div className="t-wrap">
        <h2 data-aos="fade-up">aboutme title</h2>
        <p data-aos="fade-up" data-aos-delay="50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
          voluptas!
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
