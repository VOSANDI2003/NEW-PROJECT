import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">About Our Virtual Learning Platform</h2>
        <div className="flex justify-center space-x-8">
          <FeatureCard
            title="Unlocking Success"
            features={[
              "Clear Goals: Define and succeed.",
              "Interactive Lessons: Engaging and effective.",
              "Method: Gamified growth.",
              "Planning: Create a strategic path with personalized guidance."
            ]}
          />
          <FeatureCard
            title="Elevating ICT Education"
            features={[
              "Up-to-date Curriculum: Teach modern skills.",
              "Interactive Tools: Hands-on experience.",
              "Teacher Resources: Enhance teaching methods.",
              "Community: Join a network of educators."
            ]}
          />
          <FeatureCard
            title="Why Students Should Choose Our ICT Learning Platform"
            features={[
              "Up-to-Date Content: Our platform helps students stay current with the latest ICT trends.",
              "Practical Skills: Hands-on projects and real-world applications.",
              "Expert Guidance: Learn from experienced educators and industry leaders."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
