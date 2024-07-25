import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">Logo</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl mb-6">
          We are a forward-thinking company dedicated to creating innovative solutions. 
          Our mission is to provide high-quality products and services that make a difference in people's lives.
        </p>
        <p className="text-xl">
          Founded in 2024, we've quickly grown to become a leader in our industry, 
          thanks to our commitment to excellence and customer satisfaction.
        </p>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          &copy; 2024 Your Application. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;