import React, { useState } from "react";
import { FaBullhorn, FaMusic, FaTv, FaCameraRetro, FaSlidersH, FaVideo } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation
} from "react-router-dom";

// Equalizer component for consistent bars across all pages
function Equalizer() {
  const barCount = 12;
  return (
    <div className="hidden sm:flex justify-between items-center px-4 sm:px-8 opacity-20 pointer-events-none">
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          style={{
            width: "3px",
            height: "100px",
            backgroundColor: i % 4 === 0 ? "#e53e3e" : "#888",
            transformOrigin: "bottom",
            animation: `equalizer 1.2s ${i * 0.08}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

const SERVICES = [
  { icon: <FaBullhorn size={32} />, title: 'Sub & Amp Install' },
  { icon: <FaMusic size={32} />, title: 'Speaker Upgrade' },
  { icon: <FaTv size={32} />, title: 'Head Unit Install' },
  { icon: <FaCameraRetro size={32} />, title: 'Backup Camera' },
  { icon: <FaSlidersH size={32} />, title: 'System Tuning' },
  { icon: <FaVideo size={32} />, title: 'Virtual Audio Consult' }
];

const MY_PICKS = {
  Premium: [
    { name: "Hertz Mille Pro MPX-165.3", link: "#" },
    { name: "Sony Mobile ES XS-162ES", link: "#" },
    { name: "Memphis VIV60CV2", link: "#" },
  ],
  Budget: [
    { name: "Kicker 46CSC654", link: "#" },
    { name: "Rockford Fosgate P1694", link: "#" },
    { name: "Pioneer TS-A1670F", link: "#" },
  ],
};

const PRICING = [
  { service: "Sub & Amp Install", price: "$150" },
  { service: "Door Speaker Install (Front Only)", price: "$90" },
  { service: "Door Speaker Install (Rear Only)", price: "$90" },
  { service: "Door Speaker Install (Front & Rear)", price: "$150" },
  { service: "Head Unit Install", price: "$100" },
  { service: "Backup Camera Install", price: "$100" },
  { service: "Troubleshooting / Tuning", price: "$60 (flat rate)" },
  { service: "Virtual Audio Consult", price: "$20 for 30 minutes" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "My Picks", path: "/mypicks" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
  { label: "About Me", path: "/about" },
];

function LandingPage() {
  return (
    <>
      <section className="relative w-full">
        {/* Hero image */}
        <img
          src="/hero.png"
          alt="A & M Audio hero"
          className="w-full h-auto block"
        />

        {/* Desktop-only overlay buttons */}
        <div className="absolute inset-0 px-4 hidden sm:flex items-center justify-center">
          <div className="flex gap-6 w-full max-w-md">
            <NavLink
              to="/services"
              className="flex-1 text-center px-4 py-2 text-base bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition"
            >
              Services
            </NavLink>
            <NavLink
              to="/pricing"
              className="flex-1 text-center px-4 py-2 text-base bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Pricing
            </NavLink>
          </div>
        </div>
      </section>

      {/* Intro copy below the hero */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-[#1a1a1a] p-8 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-gray-100">
            After honing my skills at several leading car-audio installation shops, I brought the same discipline and attention to detail I learned in the military to found A&nbsp;&amp;&nbsp;M Audio. As a veteran-owned business, I specialize in clean, hidden wiring, precision subwoofer and amplifier installs, and seamless head-unit integrations. Every system is custom-tuned to your listening preferences, and I stand behind each install with a 100% satisfaction guarantee.
          </p>
        </div>
      </section>

      <Equalizer />
    </>
  );
}


function Services() {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-2xl md:text-4xl mb-6">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 p-4 bg-[#2a2a2a] rounded-lg"
          >
            <span className="text-3xl">{s.icon}</span>
            <span className="text-lg">{s.title}</span>
          </div>
        ))}
      </div>
      <Equalizer />
    </div>
  );
}

function MyPicks() {
  const { search } = useLocation();
  const tierParam = new URLSearchParams(search).get("tier");
  const tierKey = tierParam
    ? tierParam.charAt(0).toUpperCase() + tierParam.slice(1)
    : null;
  const picksToShow = tierKey && MY_PICKS[tierKey] ? MY_PICKS[tierKey] : null;
  const entries = picksToShow
    ? [[tierKey, picksToShow]]
    : Object.entries(MY_PICKS);

  return (
    <div className="container mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-2xl md:text-4xl mb-6">My Picks</h2>
      {entries.map(([key, list]) => (
        <div key={key} className="mb-8">
          <h3 className="text-xl md:text-2xl mb-4">{key} Picks</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {list.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-4 bg-[#2a2a2a] rounded-lg"
              >
                <span>{item.name}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Equalizer />
    </div>
  );
}

function About() {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-2xl md:text-4xl mb-6">About Me</h2>
      <p className="mb-4">
        Hello, I’m Austin, the driving force behind A &amp; M Audio. My passion
        for high-quality audio systems stems from my military discipline and
        precision.
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Veteran-owned business</li>
        <li>Expert sub/amp and head unit installations</li>
        <li>Clean, hidden wiring and custom tuning</li>
      </ul>
      <Equalizer />
    </div>
  );
}

function Pricing() {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-2xl md:text-4xl mb-6">Pricing</h2>
      <table className="w-full text-left mb-8">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="pb-2">Service</th>
            <th className="pb-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {PRICING.map((item, idx) => (
            <tr key={idx} className="border-b border-gray-700">
              <td className="py-2">{item.service}</td>
              <td className="py-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Equalizer />
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    window.location.href = `mailto:austinlm132@gmail.com?subject=${encodeURIComponent(
      "Contact from " + name
    )}&body=${encodeURIComponent(message + " Email: " + email)}`;
  };

  return (
    <div className="container mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-2xl md:text-4xl mb-6">Contact &amp; Inquiries</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-8">
        <input
          name="name"
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full p-3 bg-[#2a2a2a] rounded text-gray-200 focus:outline-none"
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="w-full p-3 bg-[#2a2a2a] rounded text-gray-200 focus:outline-none"
        />
        <textarea
          name="message"
          onChange={handleChange}
          required
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 bg-[#2a2a2a] rounded text-gray-200 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-red-600 rounded hover:bg-red-700 transition text-white"
        >
          Send Message
        </button>
      </form>
      <Equalizer />
    </div>
  );
}

export default function AandMAudioSite() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
      <div className="relative bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] min-h-screen overflow-hidden text-gray-200">
        <style>
          {`@keyframes equalizer {0%,100%{transform:scaleY(0.5)}50%{transform:scaleY(1)}}`}
        </style>
        <header className="relative z-10">
  <nav className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 sm:px-6 lg:px-8 bg-[#1c1c1c]">
    <div className="flex items-center justify-between w-full sm:w-auto">
      <div className="text-xl font-bold text-gray-200">A &amp; M Audio</div>
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="sm:hidden text-gray-200"
        aria-label="Toggle menu"
      >
        {navOpen ? '✕' : '☰'}
      </button>
    </div>

    {/* This <ul> now lives in the normal flow, so opening it pushes content down */}
    <ul
      className={`transition-all duration-300 ease-in-out
        overflow-hidden
        ${navOpen ? 'max-h-screen py-4' : 'max-h-0'}
        sm:max-h-full sm:py-0
        sm:flex sm:flex-row sm:space-x-6`}
    >
      {navItems.map(({ label, path }) => (
        <li key={path} className="px-2">
          <NavLink
            to={path}
            className={({ isActive }) =>
              `block text-gray-200 ${
                isActive ? 'text-red-500' : 'hover:text-red-500'
              }`
            }
            onClick={() => setNavOpen(false)}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
</header>


        <main className="pt-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mypicks" element={<MyPicks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
