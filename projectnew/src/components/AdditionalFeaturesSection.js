import React from "react";

const AdditionalFeatureCard = ({ title, description }) => {
  return (
    <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <i className="fas fa-check-circle text-blue-500 text-2xl"></i>
    </div>
  );
};

const AdditionalFeaturesSection = () => {
  return (
    <section className="bg-blue-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <AdditionalFeatureCard
            title="Course Management"
            description="Manage classes, assignments, and assessments."
          />
          <AdditionalFeatureCard
            title="Communication Tools"
            description="Includes forums, chat rooms, and video conferencing."
          />
          <AdditionalFeatureCard
            title="Assessment and Feedback"
            description="Give assignments and feedback to students."
          />
          <AdditionalFeatureCard
            title="Resource Sharing"
            description="Share class materials and resources with students."
          />
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeaturesSection;
