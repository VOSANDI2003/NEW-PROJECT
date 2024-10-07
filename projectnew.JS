<html lang="en">
'head'
  meta charset="UTF-8"
  meta name="viewport" content="width=device-width, initial-scale=1.0"
  <title>ICT Education Platform</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
  <style>
    body {
      font-family} 'Roboto', sans-serif;
    
  </style>
/head
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
  <script type="text/babel">

    const Header = () ={">"} (
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="D:\NEW PROJECT\projectnew\src\assets\HeaderIMG.png" alt="Logo" className="h-10 w-10" />
            <nav className="ml-6">
              <a href="#" className="text-gray-700 hover:text-blue-500 mx-3">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 mx-3">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-500 mx-3">Contact</a>
            </nav>
          </div>
          <div>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Log In</a>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</a>
          </div>
        </div>
      </header>
    );

    const HeroSection = () ={'>'} (
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">Empowering ICT Education</h1>
            <p className="mb-4">
              Our platform is dedicated to transforming the way students learn Information and Communication Technology (ICT). With our innovative tools and resources, students can gain the skills they need to succeed in the digital age.
            </p>
            <p>
              Unlocking ICT Learning Hub, our platform is designed to provide students with a comprehensive and engaging learning experience. From interactive lessons to hands-on projects, we offer a variety of resources to help students master ICT concepts.
            </p>
          </div>
          <div className="w-1/2">
            <img src="D:\NEW PROJECT\projectnew\src\assets\about1.jpg" alt="Person using a tablet with digital icons" className="rounded shadow-lg" />
          </div>
        </div>
      </section>
    );

    const FeatureCard = ({ title}features ) ={'>'} (
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="text-left mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <i className="fas fa-check-circle text-blue-500 mr-2"></i>
              {feature}
            </li>
          ))}
        </ul>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Explore</a>
      </div>
    );

    const FeaturesSection = () ={'>'} (
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

    const AdditionalFeatureCard = ({ title} description ) ={'>'} (
      <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <i className="fas fa-check-circle text-blue-500 text-2xl"></i>
      </div>
    );

    const AdditionalFeaturesSection = () ={'>'} (
      <section className="bg-blue-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <AdditionalFeatureCard
              title="Course Management"
              description="Our platform helps educators manage their classes, including scheduling, assignments, and assessments."
            />
            <AdditionalFeatureCard
              title="Communication Tools"
              description="Our platform provides various communication tools, including forums, chat rooms, and video conferencing."
            />
            <AdditionalFeatureCard
              title="Assessment and Feedback"
              description="Our platform allows educators to give assignments and assessments and provide feedback to students."
            />
            <AdditionalFeatureCard
              title="Resource Sharing"
              description="Our platform allows educators to share class materials and resources with students."
            />
          </div>
        </div>
      </section>
    );

    const Footer = () ={'>'} (
      <footer className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Features</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Pricing</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Help Center</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">© 2023 AMS Amplify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );

    const App = () ={'>'} (
      <div>
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AdditionalFeaturesSection />
        </main>
        <Footer />
      </div>
    );

    ReactDOM.render(<App />, document.getElementById('root'));

  </script>
</body>
</html>