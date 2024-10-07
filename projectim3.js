<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ICT Education Platform</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const App = () => {
      return (
        <div className="font-roboto">
          <Header />
          <MainSection />
          <AboutSection />
          <FeaturesSection />
          <Footer />
        </div>
      );
    };

    const Header = () => {
      return (
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-blue-600">A</div>
              <nav className="space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
              </nav>
            </div>
            <div className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Log In</a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</a>
            </div>
          </div>
        </header>
      );
    };

    const MainSection = () => {
      return (
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 px-6">
              <h1 className="text-4xl font-bold mb-4">Empowering ICT Education</h1>
              <p className="mb-4">
                Our platform is dedicated to transforming the way students learn and engage with Information and Communication Technology (ICT). We provide a comprehensive suite of tools and resources designed to enhance the learning experience and foster a deeper understanding of ICT concepts.
              </p>
              <p className="mb-4">
                Introducing the ICT Learning Hub: A platform designed to provide students with the resources they need to succeed in their ICT studies. Our platform offers a range of features, including interactive lessons, real-time feedback, and collaborative tools, all designed to support students in their educational journey.
              </p>
              <p>
                Join us in revolutionizing ICT education and empowering students to achieve their highest educational aspirations.
              </p>
            </div>
            <div className="md:w-1/2 px-6 mt-8 md:mt-0">
              <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-yfxJKXGaePnuvJFkhwnk1Byy.png?st=2024-09-17T08%3A26%3A26Z&se=2024-09-17T10%3A26%3A26Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-16T23%3A35%3A06Z&ske=2024-09-17T23%3A35%3A06Z&sks=b&skv=2024-08-04&sig=2yZnLE/Mack66Pfnt%2BrH2EEuRpde6b9LG%2BYtol3NN4Q%3D" alt="Laptop displaying online learning content" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      );
    };

    const AboutSection = () => {
      return (
        <section className="bg-blue-800 text-white py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold">About Our Virtual Learning Platform</h2>
          </div>
        </section>
      );
    };

    const FeaturesSection = () => {
      return (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <FeatureCard
              title="Unlocking Success"
              description="How Our ICT Learning Hub Supports Students and Teachers:"
              features={[
                "Data-Driven: Deliver lessons based on powerful analytics.",
                "Engagement: Interactive and engaging content.",
                "Planning: Create a structured learning environment.",
                "Collaboration: Tools for group activities and projects."
              ]}
            />
            <FeatureCard
              title="Elevating ICT Education"
              description="The advantages of our ICT Learning Hub:"
              features={[
                "Up-to-date Curriculum: Access to the latest ICT curriculum.",
                "Resources: Extensive library of ICT resources.",
                "Feedback: Real-time feedback on assignments.",
                "Teaching Tools: Advanced tools for teaching ICT effectively."
              ]}
            />
            <FeatureCard
              title="Why Students Should Choose Our ICT Learning Platform"
              description="Benefits of Our ICT Learning Hub:"
              features={[
                "Comprehensive: All-in-one platform for ICT learning.",
                "Support: Access to expert support and guidance.",
                "Flexibility: Learn at your own pace.",
                "Community: Join a community of like-minded learners."
              ]}
            />
          </div>
        </section>
      );
    };

    const FeatureCard = ({ title, description, features }) => {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="mb-4">{description}</p>
          <ul className="list-disc list-inside mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Explore</button>
        </div>
      );
    };

    const Footer = () => {
      return (
        <footer className="bg-gray-200 py-8">
          <div className="container mx-auto text-center">
            <div className="flex justify-center space-x-8 mb-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Resources</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Company</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Legal</a>
            </div>
            <p className="text-gray-600">© 2023 ICT Learning Hub. All rights reserved.</p>
          </div>
        </footer>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</body>
</html>
