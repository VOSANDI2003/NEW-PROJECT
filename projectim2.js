<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ICT Education Platform</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }
  </style>
</head>
<body class="bg-gray-100">
  <div id="root"></div>
  <script type="text/babel">
    const App = () => {
      return (
        <div>
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
            <div className="flex items-center">
              <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-ewpVOggjwMaiyKiYd3VIveHY.png?st=2024-09-17T08%3A15%3A48Z&se=2024-09-17T10%3A15%3A48Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-16T23%3A16%3A26Z&ske=2024-09-17T23%3A16%3A26Z&sks=b&skv=2024-08-04&sig=kxIZi6NqQtRPK6pqp9zyXdlCGmaRZne5%2B8eKfU4Ssh8%3D" alt="Logo" className="h-10" width="50" height="50"/>
              <nav className="ml-10 space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Products</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
              </nav>
            </div>
            <div>
              <a href="#" className="text-gray-700 hover:text-blue-500 mr-4">Log In</a>
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</a>
            </div>
          </div>
        </header>
      );
    };

    const MainSection = () => {
      return (
        <section className="bg-white py-16">
          <div className="container mx-auto flex items-center">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Empowering ICT Education</h1>
              <p className="text-gray-700 mb-4">
                Our platform is dedicated to transforming the way students learn Information and Communication Technology (ICT). By providing a comprehensive suite of tools and resources, we aim to make ICT education accessible, engaging, and effective for learners of all ages.
              </p>
              <p className="text-gray-700 mb-4">
                Embracing the ICT Learning Hub, our platform is designed to support students in developing the skills they need to succeed in the digital age. From interactive lessons to real-world projects, we offer a dynamic learning environment that fosters creativity, critical thinking, and collaboration.
              </p>
            </div>
            <div className="w-1/2">
              <img src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-GyNcGqPpjMyGfy0gbR8X6HJF.png?st=2024-09-17T08%3A15%3A50Z&se=2024-09-17T10%3A15%3A50Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-17T00%3A01%3A43Z&ske=2024-09-18T00%3A01%3A43Z&sks=b&skv=2024-08-04&sig=YMzk%2Ba99pzS8ZRFrN10ISp8ZoYI9L91P3L%2Bd4d%2B14lg%3D" alt="Notebook and keyboard" className="rounded shadow-md" width="600" height="400"/>
            </div>
          </div>
        </section>
      );
    };

    const AboutSection = () => {
      return (
        <section className="bg-gradient-to-b from-yellow-300 to-green-300 py-16">
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">About Our Virtual Learning Platform</h2>
          </div>
          <div className="container mx-auto flex justify-between space-x-6">
            <Card
              title="Unlocking Success"
              description="How Our ICT Education Supports Students and Educators:"
              points={[
                "Clear Goals: Define what success looks like for each student.",
                "Interactive Content: Engage students with multimedia lessons and activities.",
                "Personalized Learning: Tailor instruction to meet individual needs.",
                "Progress Tracking: Monitor student progress and provide feedback."
              ]}
            />
            <Card
              title="Elevating ICT Education"
              description="The Benefits of Our Virtual Learning Hub:"
              points={[
                "Up-to-date Curriculum: Teach modern ICT concepts and skills.",
                "Experiential Learning: Provide hands-on experiences with real-world applications.",
                "Collaboration: Foster teamwork and communication skills.",
                "Take the Next Step: Equip students with the skills they need to succeed in the digital age."
              ]}
            />
            <Card
              title="Why Students Should Choose Our ICT Learning Platform"
              description="The Benefits for Students:"
              points={[
                "Interactive Content: Engage students with multimedia lessons and activities.",
                "Personalized Learning: Tailor instruction to meet individual needs.",
                "Progress Tracking: Monitor student progress and provide feedback.",
                "Expert Guidance: Learn from experienced educators and industry professionals."
              ]}
            />
          </div>
        </section>
      );
    };

    const Card = ({ title, description, points }) => {
      return (
        <div className="bg-white p-6 rounded shadow-md w-1/3">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <ul className="text-gray-700 mb-4">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">Explore</a>
        </div>
      );
    };

    const FeaturesSection = () => {
      return (
        <section className="bg-gradient-to-b from-green-300 to-yellow-300 py-16">
          <div className="container mx-auto grid grid-cols-2 gap-6">
            <FeatureCard
              title="Course Management"
              description="Manage and organize courses, including schedules and materials."
            />
            <FeatureCard
              title="Communication Tools"
              description="Facilitate communication between students and educators."
            />
            <FeatureCard
              title="Assessment and Feedback"
              description="Provide tools for assessment and feedback."
            />
            <FeatureCard
              title="Resource Sharing"
              description="Share educational resources and materials."
            />
          </div>
        </section>
      );
    };

    const FeatureCard = ({ title, description }) => {
      return (
        <div className="bg-yellow-200 p-6 rounded shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      );
    };

    const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto grid grid-cols-4 gap-6">
            <FooterColumn
              title="Products"
              links={["Product 1", "Product 2", "Product 3", "Product 4"]}
            />
            <FooterColumn
              title="Resources"
              links={["Resource 1", "Resource 2", "Resource 3", "Resource 4"]}
            />
            <FooterColumn
              title="Company"
              links={["About Us", "Careers", "Blog", "Contact"]}
            />
            <FooterColumn
              title="Legal"
              links={["Privacy Policy", "Terms of Service", "Cookie Policy"]}
            />
          </div>
          <div className="text-center mt-8">
            <p>© 2023 ICT Education. All rights reserved.</p>
          </div>
        </footer>
      );
    };

    const FooterColumn = ({ title, links }) => {
      return (
        <div>
          <h4 className="font-bold mb-4">{title}</h4>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</body>
</html>