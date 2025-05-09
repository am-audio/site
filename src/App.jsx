import React, { useState } from "react";
import { FaTv, FaBullhorn, FaBolt, FaMusic, FaCameraRetro, FaSlidersH, FaVideo, FaBoxOpen } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation
} from "react-router-dom";
import SeoHead from './SeoHead';

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
  {
    icon: <FaTv size={32} />,
    title: 'Head Unit Install',
    price: '$100',
    link: 'https://calendly.com/austinlm132/head-unit-install',
    description: "Swap out your factory radio for a modern aftermarket receiver—complete with hands-free Bluetooth, Apple CarPlay/Android Auto, and premium sound controls. We handle removal of the old unit, secure mounting of the new head unit, all wiring and harness integration, and a full functionality test so you drive away ready to rock."
  },
  {
    icon: <FaBullhorn size={32} />,
    title: 'Sub & Amp Install',
    price: '$150',
    link: 'https://calendly.com/austinlm132/sub-amp-install',
    description: "Bring the bass back to your ride with a professional subwoofer and amplifier installation. We’ll custom-mount your sub enclosure, run power and remote wiring, set up the amp’s gain and crossover, and fine-tune levels for deep, distortion-free low end that transforms your listening experience."
  },
  {
    icon: <FaBolt size={32} />,
    title: '4-Channel Amp Install',
    price: '$150',
    link: 'https://calendly.com/austinlm132/4-channel-amp-install',
    description: "Boost your speakers’ power with a dedicated 4-channel amplifier installation. This service includes expert placement and secure mounting of the amp, factory-style wiring harness integration, and gain structure calibration—delivering cleaner, louder sound to each door speaker without overtaxing your car’s electrical system."
  },
  {
    icon: <FaBolt size={32} />,
    title: '5-Channel Amp Install',
    price: '$150',
    link: 'https://calendly.com/austinlm132/5-channel-amp-install',
    description: "Upgrade both your subwoofer and door speakers in one go: a single 5-channel amp feeds four speakers plus your sub. We handle optimal amp placement, power/ground harness installation, line-output conversion, and initial tuning—so every channel performs at peak clarity and punch."
  },
  {
    icon: <FaMusic size={32} />,
    title: 'Speaker Upgrade (All 4 Doors)',
    price: '$150',
    link: 'https://calendly.com/austinlm132/speaker-upgrade-all-4-doors',
    description: "Replace worn-out factory speakers with premium, unmatched clarity in every door. This service covers removal of existing speakers, installation of high-performance aftermarket units with proper baffling, secure mounting, and a sound demo—unlocking fuller mids and highs for a richer in-car audio experience."
  },
  {
    icon: <FaCameraRetro size={32} />,
    title: 'Backup Camera',
    price: '$100',
    link: 'https://calendly.com/austinlm132/backup-camera-install',
    description: "See what’s behind you in real time with a professional backup-camera install. We’ll mount and waterproof the camera, route the video cable to your display, integrate it seamlessly into your dash, and calibrate the image—so reversing has never been safer or simpler. NOTE: Requires an aftermarket head unit with a video-input port."
  },
  {
    icon: <FaSlidersH size={32} />,
    title: 'System Tuning',
    price: '$60',
    link: 'https://calendly.com/austinlm132/system-tuning',
    description: "Get the absolute best from your aftermarket audio gear with a dedicated tuning session. We’ll adjust crossovers, time alignment, EQ, and gain settings on your existing system to eliminate distortion, balance frequency response, and deliver studio-quality sound—tailored to your vehicle’s acoustics."
  },
  {
    icon: <FaVideo size={32} />,
    title: 'Virtual Audio Consult (30 min)',
    price: '$20',
    link: 'https://calendly.com/austinlm132/virtual-audio-consult-30-min',
    description: "Not sure what upgrade is right for you? Book a 30-minute one-on-one video session to discuss your goals, budget, and vehicle. We’ll recommend gear, wiring solutions, and installation strategies, then send you a custom quote—so you can upgrade with confidence."
  }
];

const BUNDLES = [
  {
    icon: <FaBoxOpen size={32} />,
    title: 'Radio & Bass Combo',
    price: '$150',
    link: 'https://calendly.com/austinlm132/radio-bass-combo',
    description: "Our best-selling duo: a brand-new head unit plus a subwoofer & amp install in one streamlined appointment. You’ll enjoy modern connectivity up front and earth-shaking low end in the back—all professionally installed, wired, and tuned for seamless performance."
  },
  {
    icon: <FaBoxOpen size={32} />,
    title: 'Head Unit & Backup',
    price: '$150',
    link: 'https://calendly.com/austinlm132/head-unit-backup-camera-install',
    description: "Combine a state-of-the-art radio upgrade with a full backup-camera install. We’ll enhance your dash with Bluetooth/CarPlay functionality and add a high-definition camera to your rear bumper—so you get both hands-free audio and safe reversing in a single visit."
  },
  {
    icon: <FaBoxOpen size={32} />,
    title: 'Head Unit & Speakers',
    price: '$200',
    link: 'https://calendly.com/austinlm132/head-unit-speakers-install',
    description: "Upgrade your dash and your doors together: a new head unit plus premium speakers in all four doors. Expect crystal-clear audio from your receiver, lifelike mids and highs from your door speakers, and expert wiring/integration for a cohesive, immersive soundstage."
  },
  {
    icon: <FaBoxOpen size={32} />,
    title: 'Complete Audio Upgrade',
    price: '$250',
    link: 'https://calendly.com/austinlm132/complete-audio-upgrade',
    description: "The all-around overhaul that covers your core gear: head unit install, subwoofer & amp install, plus full 4-door speaker replacement. It’s everything you need for a dramatic audio overhaul—professionally installed and ready to transform every drive. NOTE: Does not include 4-channel amp install."
  },
  {
    icon: <FaBoxOpen size={32} />,
    title: 'True Complete Audio Upgrade',
    price: '$300',
    link: 'https://calendly.com/austinlm132/true-complete-audio-upgrade',
    description: "Our ultimate package: head unit, speaker upgrade in all doors, plus a 5-channel amplifier feeding both your door speakers and subwoofer. You get top-tier power distribution, crystal-clear speakers, and the latest radio tech—all installed, wired, and tuned to perfection."
  }
];

const MY_PICKS = {
  Premium: {
    Speakers: [
      {
        name: "Hertz Mille Pro MPX-165.3",
        link:"https://www.amazon.com/HERTZ-MPX-1653-Two-Way-Coaxial-Speakers/dp/B01AC0YVPC?tag=amaudio614-20"
      },
      {
        name: "Sony Mobile ES XS-162ES",
        link:"https://www.amazon.com/Sony-XS162ES-Mobile-Component-Speakers/dp/B0CBX84DBF?tag=amaudio614-20"
      },
      {
        name: "Memphis VIV60CV2",
        link:"https://www.amazon.com/Memphis-Audio-VIV60CV2-Component-Speakers/dp/B013SPTO6Y?tag=amaudio614-20"
      }
    ],
    Amplifiers: [
      {
        name: "Memphis VIV400.4V2",
        link: "https://amzn.to/43kHQ2N"
      },
      {
        name: "Memphis MJP3000.1",
        link: "https://amzn.to/4dbFfvp"
      }
    ],
    "Head Units": [
      {
        name: "Sony XAV-AX6000",
        link:"https://amzn.to/3GNGKE3"
      },
      {
        name: "Sony XAV-AX4000",
        link: "https://amzn.to/44vjTXM"
      }
    ]
  },
  Budget: {
    Speakers: [
      {
        name: "Kicker 46CSC654",
        link:"https://www.amazon.com/Kicker-46CSC654-Component-Speakers/dp/B01M8POT5C?tag=amaudio614-20"
      }
    ],
    Amplifiers: [
      {
        name: "Rockford Fosgate P1694",
        link:"https://www.amazon.com/Rockford-Fosgate-P1694-Speaker-Black/dp/B00TS2ZZL0?tag=amaudio614-20"
      }
    ],
    "Head Units": [
      {
        name: "Pioneer TS-A1670F",
        link:"https://www.amazon.com/Pioneer-TS-A1670F-6-5-Inch-Component-Speaker/dp/B00NEK90FM?tag=amaudio614-20"
      }
    ]
  }
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "My Picks", path: "/mypicks" },
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
      <h2 className="text-3xl md:text-5xl mb-4">Our Services</h2>
      <p className="mb-6">Click any of the cards below to book your desired service or bundle with A & M Audio.</p>
      <h3 className="text-2xl md:text-3xl mb-3">Individual Services</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {SERVICES.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col p-4 bg-[#2a2a2a] hover:bg-gray-700 rounded-lg transition">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl">{s.icon}</span>
                <span className="text-xl font-semibold">{s.title}</span>
                <span className="ml-auto text-lg font-medium">{s.price}</span>
              </div>
              <p className="text-sm">{s.description}</p>
            </div>
          </a>
        ))}
      </div>
      <h3 className="text-2xl md:text-3xl mb-3">Bundle Deals</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BUNDLES.map((b, i) => (
          <a
            key={i}
            href={b.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col p-4 bg-[#2a2a2a] hover:bg-gray-700 rounded-lg transition">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl">{b.icon}</span>
                <span className="text-xl font-semibold">{b.title}</span>
                <span className="ml-auto text-lg font-medium">{b.price}</span>
              </div>
              <p className="text-sm">{b.description}</p>
            </div>
          </a>
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
  const tiersToShow = tierKey && MY_PICKS[tierKey]
    ? { [tierKey]: MY_PICKS[tierKey] }
    : MY_PICKS;

  return (
    <div className="container mx-auto px-4 py-12 text-gray-200">
      <h2 className="text-center text-2xl md:text-4xl mb-6">My Picks</h2>
      {Object.entries(tiersToShow).map(([tier, categories]) => (
        <div key={tier} className="mb-12">
          <h3 className="text-xl md:text-2xl mb-4 text-red-600">{tier} Picks</h3>
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="mb-8">
              <h4 className="text-lg mb-2">{category}</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-4 bg-[#2a2a2a] rounded-lg"
                  >
                    <span>{item.name}</span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      View on Amazon
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    <><SeoHead /><Router>
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
                    className={({ isActive }) => `block text-gray-200 ${isActive ? 'text-red-500' : 'hover:text-red-500'}`}
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router></>
  );
}
