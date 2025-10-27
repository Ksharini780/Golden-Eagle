import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png" // replace with your logo image path
          alt="Golden Eagle Logo"
          className="logo"
        />
        <h1 className="text-xl font-semibold">Golden Eagle</h1>
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
        <li><Link to="/book" className="hover:text-yellow-400">Book Now</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
