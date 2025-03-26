import React, { useState } from 'react';
import { Menu, X, Scan as Scanner, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import TeamMember from './components/TeamMember';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const events = [
    {
      title: "Startup Summit 2024",
      date: "March 15, 2024",
      description: "Join us for an exciting day of networking with successful entrepreneurs and investors.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Pitch Perfect",
      date: "April 2, 2024",
      description: "Perfect your startup pitch with guidance from industry experts.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Innovation Workshop",
      date: "April 15, 2024",
      description: "Learn the latest innovation methodologies and design thinking approaches.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const pastEvents = [
    {
      title: "Tech Startup Bootcamp",
      date: "January 15, 2024",
      description: "An intensive 3-day bootcamp covering all aspects of launching a tech startup.",
      image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Venture Capital Forum",
      date: "February 1, 2024",
      description: "Connect with leading VCs and learn about startup funding strategies.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Entrepreneurship Week",
      date: "February 20, 2024",
      description: "A week-long celebration of entrepreneurship featuring workshops and networking events.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Michael Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Emily Rodriguez",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Users/raghav/Desktop/project/ecell.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Welcome to E-Cell</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">Empowering Tomorrow's Entrepreneurs</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Previous Events Section */}
      <section className="py-20 px-4 bg-blue-950 bg-opacity-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Previous Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={index} {...event} isPast={true} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-blue-900 bg-opacity-30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              E-Cell is the entrepreneurship cell dedicated to fostering innovation and entrepreneurial spirit among students. 
              We organize workshops, seminars, and competitions to help aspiring entrepreneurs turn their ideas into reality.
            </p>
            <p className="text-lg">
              Our mission is to create a vibrant ecosystem that nurtures entrepreneurial mindsets and provides the resources 
              needed to build successful startups.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-900 bg-opacity-30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <span>contact@ecell.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span>123 Innovation Street, Tech City, TC 12345</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-300 transition">
                  <Facebook className="h-8 w-8" />
                </a>
                <a href="#" className="hover:text-blue-300 transition">
                  <Twitter className="h-8 w-8" />
                </a>
                <a href="#" className="hover:text-blue-300 transition">
                  <Instagram className="h-8 w-8" />
                </a>
                <a href="#" className="hover:text-blue-300 transition">
                  <Linkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© 2024 E-Cell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;