import React from "react";
import aboutImage from "../assets/about1.jpg";

const HeroSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Empowering ICT Education</h1>
          <p className="mb-4">
            Our platform is dedicated to transforming the way students learn Information and Communication Technology (ICT).
          </p>
          <p>
            Unlocking ICT Learning Hub, we offer resources to help students master ICT concepts.
          </p>
        </div>
        <div className="w-1/2">
          <img src={aboutImage} alt="Person using a tablet with digital icons" className="rounded shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
