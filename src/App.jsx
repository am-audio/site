// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const SERVICES = [
  { icon: '🔊', title: 'Sub & Amp Install' },
  { icon: '🎶', title: 'Speaker Upgrade' },
  { icon: '📻', title: 'Head Unit Install' },
  { icon: '🎥', title: 'Backup Camera' },
  { icon: '🛠️', title: 'System Tuning' },
  { icon: '💬', title: 'Virtual Audio Consult' }
];

const PREMIUM_PICKS = [
  { name: 'Hertz Mille Pro MPX-165.3', link: 'https://www.amazon.com/HERTZ-MPX-1653-Two-Way-Coaxial-Speakers/dp/B01AC0YVPC?tag=amaudio614-20' },
  { name: 'Sony Mobile ES XS-162ES', link: 'https://www.amazon.com/Sony-XS162ES-Mobile-Component-Speakers/dp/B0CBX84DBF?tag=amaudio614-20' },
  { name: 'Memphis VIV60CV2', link: 'https://www.amazon.com/Memphis-Audio-VIV60CV2-Component-Speakers/dp/B013SPTO6Y?tag=amaudio614-20' }
];

const PRICING = [
  { service: 'Sub & Amp Install', price: '$150' },
  { service: 'Door Speaker Install (Front Only)', price: '$90' },
  { service: 'Door Speaker Install (Rear Only)', price: '$90' },
  { service: 'Door Speaker Install (Front & Rear)', price: '$150' },
  { service: 'Head Unit Install', price: '$100' },
  { service: 'Backup Camera Install', price: '$100' },
  { service: 'Troubleshooting / Tuning', price: '$60 (flat rate)' },
  { service: 'Virtual Audio Consult', price: '$20 for 30 minutes' }
];

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Premium Picks', path: '/premiumpicks' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
  { label: 'About Me', path: '/about' }
];

function LandingPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-center text-gray-200 px-4 relative z-10">
      <h1 className="text-6xl font-extrabold mb-4">A &amp; M Audio</h1>
      <p className="text-xl mb-8">Premium mobile car &amp; motorcycle audio installs.</p>
      <div className="space-x-4">
        <NavLink to="/services" className="px-6 py-3 bg-[#888] rounded-lg hover:bg-[#aaa] transition">
          Services
        </NavLink>
        <NavLink to="/pricing" className="px-6 py-3 bg-[#aaa] text-gray-900 rounded-lg hover:bg-[#888] transition">
          Pricing
        </NavLink>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="container mx-auto px-6 py-12 relative z-10">
      <h2 className="text-3xl text-gray-200 mb-6">About Me</h2>
      <p className="text-gray-300 mb-4">
        Hello, I’m Austin, the driving force behind A &amp; M Audio. After serving in the military, I channelled my discipline and attention to detail into a hobbyist passion: crafting immersive audio experiences for cars and motorcycles.
      </p>
      <p className="text-gray-300 mb-4">
        Over several years I’ve honed installations from high-powered subs and amplifiers to seamless head-unit integrations, focusing on clean cable management, optimized tuning, and personalized consultations.
      </p>
      <p className="text-gray-300 mb-4">
        As a veteran, I bring integrity, commitment, and reliability to every project. My goal is to elevate your driving experience with crystal-clear, tailored sound.
      </p>
      <p className="text-gray-300">
        Ready to transform your ride? Explore my services, check out top gear picks, or reach out via the contact form. Let’s make your next drive unforgettable.
      </p>
    </div>
  );
}

function Services() {
  return (
    <div className="container mx-auto px-6 py-12 relative z-10">
      <h2 className="text-3xl text-gray-200 mb-6">Our Services</h2>
      <ul className="space-y-4">
        {SERVICES.map((s, i) => (
          <li key={i} className="flex items-center space-x-4 p-4 bg-[#2a2a2a] rounded hover:bg-[#333] transition">
            <span className="text-4xl text-[#e53e3e]">{s.icon}</span>
            <span className="text-xl text-gray-100">{s.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Picks() {
  return (
    <div className="container mx-auto px-6 py-12 relative z-10">
      <h2 className="text-3xl text-gray-200 mb-6">Premium Picks</h2>
      <ol className="list-decimal list-inside space-y-4">
        {PREMIUM_PICKS.map((p, i) => (
          <li key={i} className="flex justify-between items-center p-4 bg-[#2a2a2a] rounded hover:bg-[#333] transition">
            <span className="text-lg text-gray-100">{p.name}</span>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#888] text-gray-100 rounded hover:bg-[#aaa] transition"
            >
              View
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Pricing() {
  return (
    <div className="container mx-auto px-6 py-12 relative z-10">
      <h2 className="text-3xl text-gray-200 mb-6">Pricing</h2>
      <table className="w-full text-left text-gray-100">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="pb-2">Service</th>
            <th className="pb-2">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {PRICING.map((item, idx) => (
            <tr key={idx}>
              <td className="py-2">{item.service}</td>
              <td className="py-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = form;
    window.location.href = `mailto:austinlm132@gmail.com?subject=${encodeURIComponent(
      'Contact from ' + name
    )}&body=${encodeURIComponent(message + '\n\nEmail: ' + email)}`;
  };

  return (
    <div className="container mx-auto px-6 py-12 relative z-10 text-gray-200">
      <h2 className="text-3xl mb-6">Contact &amp; Inquiries</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          name="name"
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="w-full p-3 bg-[#2a2a2a] rounded text-gray-200"
        />
        <input
          name="email"
          type="email"
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="w-full p-3 bg-[#2a2a2a] rounded text-gray-200"
        />
        <textarea
          name="message"
          onChange={handleChange}
          required
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 bg-[#2a2a2a] rounded text-gray-200"
        />
        <button type="submit" className="w-full py-3 bg-[#888] rounded hover:bg-[#aaa] transition">
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-400">
        <p>Serving Columbus, OH • Mobile Car &amp; Motorcycle Audio</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com/amaudiocolumbus" className="hover:text-gray-200 transition">
            Facebook
          </a>
          <a href="https://instagram.com/amaudio614" className="hover:text-gray-200 transition">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AandMAudioSite() {
  const barCount = 16;
  return (
    <div className="relative bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-gray-100 min-h-screen overflow-hidden">
      <style>{`@keyframes equalizer {0%,100%{transform:scaleY(0.5)}50%{transform:scaleY(1)}}`}</style>
      <div className="absolute inset-0 flex justify-between items-center px-8 opacity-20 pointer-events-none">
        {Array.from({ length: barCount }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '4px',
              height: '120px',
              backgroundColor: i % 5 === 0 ? '#c53030' : '#888',
              transformOrigin: 'bottom',
              animation: `equalizer 1.2s ${i * 0.1}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <Router>
        <nav className="bg-transparent text-gray-100 px-6 py-4 flex space-x-8 relative z-10">
          {navItems.map(({ label, path }) => (
            <NavLink key={path} to={path} className={({ isActive }) => (isActive ? 'text-[#c53030]' : 'hover:text-[#c53030]')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/premiumpicks" element={<Picks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
