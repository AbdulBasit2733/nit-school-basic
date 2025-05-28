'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Users, Award, Heart, ArrowRight, Star } from 'lucide-react'
import WaveShape from './components/WaveShape'
import BlobShape from './components/BlobShape'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
          <BlobShape className="absolute top-10 right-10 text-primary-500/10" size={400} />
          <BlobShape className="absolute bottom-20 left-10 text-primary-600/10" size={300} />
        </div>
        
        <div className="container-width relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome to{' '}
                  <span className="gradient-text">New Iqra Techno</span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  CBSE Affiliated School providing excellence in education from Junior KG to 12th Standard, 
                  nurturing students in both <span className="font-semibold text-primary-500">Deen and Duniya</span>
                </motion.p>
              </div>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                  Discover Our School <ArrowRight size={20} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="text-sm text-gray-600">CBSE Affiliated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-primary-500" size={20} />
                  <span className="text-sm text-gray-600">Excellence in Education</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-96 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen size={80} className="text-primary-500 mx-auto mb-4" />
                    <p className="text-gray-600">School Building Image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Users className="text-primary-500 mb-2" size={24} />
                <p className="text-sm font-semibold">500+ Students</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveShape />

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">N.I.T</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a unique blend of modern education and Islamic values, 
              preparing students for success in this world and the hereafter.
            </p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BookOpen,
                title: "CBSE Curriculum",
                description: "Comprehensive education following CBSE standards from KG to 12th"
              },
              {
                icon: Heart,
                title: "Islamic Studies",
                description: "Strong foundation in Islamic values and teachings alongside academics"
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Dedicated and qualified teachers committed to student success"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Proven track record of academic achievements and student success"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-80 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <Users size={60} className="text-primary-500 mx-auto mb-3" />
                    <p className="text-gray-600">Students in Classroom</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  About <span className="gradient-text">New Iqra Techno</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  New Iqra Techno is a premier CBSE affiliated educational institution 
                  committed to providing holistic education that balances academic excellence 
                  with moral and spiritual development.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Comprehensive education from Junior KG to 12th Standard</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Integration of Islamic studies with modern curriculum</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Focus on character building and moral development</p>
                </div>
              </div>
              
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveShape flip />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600 text-white relative overflow-hidden">
        <BlobShape className="absolute top-0 right-0 text-white/10" size={300} />
        <BlobShape className="absolute bottom-0 left-0 text-white/10" size={200} />
        
        <div className="container-width relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our School Community?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards your child&apos;s bright future. 
              Contact us today to learn more about admissions and our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Contact Us Today
              </Link>
              <Link href="/academics" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300">
                View Academics
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
