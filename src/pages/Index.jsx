import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
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
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Application</h1>
        <p className="text-xl mb-6">This is a bare-bones web application that you can easily modify and build upon.</p>
        <Button asChild>
          <Link to="/about">Learn More</Link>
        </Button>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          &copy; 2024 Your Application. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;