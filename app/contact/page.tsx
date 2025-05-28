'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react'
import WaveShape from '../components/WaveShape'
import BlobShape from '../components/BlobShape'

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["New Iqra Techno School", "123 Education Street", "Knowledge City, State 12345"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 87654 32109", "Toll Free: 1800-123-4567"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Addresses", 
      details: ["info@newiqratechno.edu", "admissions@newiqratechno.edu", "principal@newiqratechno.edu"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 4:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <BlobShape className="absolute top-10 right-10 text-primary-500/10" size={300} />
        <div className="container-width">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with New Iqra Techno. We &apos; re here to answer your questions about 
              admissions, academics, and everything about our school community.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveShape />

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us for your convenience</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Images Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="academics">Academic Information</option>
                    <option value="events">Events & Activities</option>
                    <option value="general">General Information</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            
            {/* Images Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={60} className="text-primary-500 mx-auto mb-3" />
                    <p className="text-gray-600">School Campus View</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <User size={30} className="text-primary-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Office Staff</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare size={30} className="text-primary-500 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Reception Area</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Visit Our Campus</h4>
                <p className="text-gray-600 mb-4">
                  We welcome parents and students to visit our campus and experience our 
                  learning environment firsthand. Schedule a campus tour to see our facilities 
                  and meet our faculty.
                </p>
                <button className="btn-secondary w-full">Schedule Campus Tour</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
              <h3 className="text-2xl font-bold mb-2">Find Us on Map</h3>
              <p className="opacity-90">Located in the heart of the educational district</p>
            </div>
            
            <div className="h-64 bg-gradient-to-br from-primary-500/10 to-primary-600/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={60} className="text-primary-500 mx-auto mb-3" />
                <p className="text-gray-600">Interactive Map Placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Google Maps integration would go here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}