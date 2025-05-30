import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">TestPrep</h2>
          <p className="text-sm text-gray-400">
            Empowering learners with real-time, AI-driven exams and analytics.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/exams" className="hover:underline">Exams</Link></li>
            <li><Link to="/analytics" className="hover:underline">Analytics</Link></li>
            <li><Link to="/admin" className="hover:underline">Admin</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand-600 hover:bg-brand-500 text-white text-sm py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TestPrep. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
