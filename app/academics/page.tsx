'use client'
import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Clock, CheckCircle, GraduationCap } from 'lucide-react'
import WaveShape from '../components/WaveShape'
import BlobShape from '../components/BlobShape'

export default function Academics() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const classLevels = [
    {
      level: "Junior KG - Senior KG",
      age: "3-5 years",
      description: "Foundation learning through play-based activities and basic Islamic teachings",
      subjects: ["Phonics", "Numbers", "Arts & Crafts", "Islamic Values", "Physical Development"]
    },
    {
      level: "Primary (1st - 5th)",
      age: "6-10 years", 
      description: "Building fundamental skills in core subjects with Islamic studies integration",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Islamic Studies", "Arabic"]
    },
    {
      level: "Middle School (6th - 8th)",
      age: "11-13 years",
      description: "Comprehensive CBSE curriculum with enhanced Islamic education",
      subjects: ["English", "Mathematics", "Science", "Social Science", "Islamic Studies", "Arabic", "Computer Science"]
    },
    {
      level: "Secondary (9th - 10th)",
      age: "14-15 years",
      description: "CBSE Board preparation with career guidance and Islamic character building",
      subjects: ["English", "Mathematics", "Science", "Social Science", "Islamic Studies", "Arabic", "Computer Applications"]
    },
    {
      level: "Senior Secondary (11th - 12th)",
      age: "16-17 years",
      description: "Specialized streams preparation for higher education and career",
      subjects: ["Science Stream", "Commerce Stream", "Arts Stream", "Islamic Studies", "Career Counseling"]
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
              Academic <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive CBSE curriculum integrated with Islamic studies, 
              preparing students for academic success and spiritual growth from Junior KG to 12th Standard.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveShape />

      {/* CBSE Curriculum Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="gradient-text">CBSE</span> Curriculum
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Our school follows the Central Board of Secondary Education (CBSE) curriculum, 
                  recognized for its comprehensive and balanced approach to education. This ensures 
                  our students receive world-class academic preparation.
                </p>
                <p>
                  The CBSE framework emphasizes conceptual understanding, critical thinking, 
                  and practical application of knowledge, preparing students for competitive 
                  examinations and higher education opportunities.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, text: "CBSE Affiliated" },
                  { icon: BookOpen, text: "Updated Curriculum" },
                  { icon: Users, text: "Expert Faculty" },
                  { icon: GraduationCap, text: "Board Exam Prep" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="py-2.5 px-2.5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <item.icon className="text-white" size={20} />
                    </div>
                    <span className="font-semibold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-96 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen size={80} className="text-primary-500 mx-auto mb-4" />
                    <p className="text-gray-600">CBSE Curriculum Image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Class Levels Section */}
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
              Class <span className="gradient-text">Levels</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progressive education from Junior KG to 12th Standard, each level carefully designed 
              to build upon previous learning while introducing new challenges and opportunities.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {classLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.level}</h3>
                    <p className="text-primary-500 font-semibold mb-4">Age: {level.age}</p>
                    <p className="text-gray-600">{level.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject, subIndex) => (
                        <span
                          key={subIndex}
                          className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Studies Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-96 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen size={80} className="text-primary-500 mx-auto mb-4" />
                    <p className="text-gray-600">Islamic Studies Image</p>
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
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="gradient-text">Islamic Studies</span> Integration
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  At New Iqra Techno, Islamic Studies is not just an additional subject but an 
                  integral part of our educational philosophy. We ensure that students develop 
                  a strong foundation in Islamic knowledge alongside their academic pursuits.
                </p>
                <p>
                  Our Islamic Studies curriculum covers Quranic recitation, Islamic history, 
                  Arabic language, Islamic ethics, and practical implementation of Islamic 
                  values in daily life.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Quranic Studies and Tajweed",
                  "Islamic History and Civilization", 
                  "Arabic Language Learning",
                  "Islamic Ethics and Morals",
                  "Practical Islamic Life Skills"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="text-primary-500" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <BlobShape className="absolute bottom-10 right-10 text-primary-500/10" size={250} />
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Academic <span className="gradient-text">Features</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Flexible Timings",
                description: "Well-structured daily schedule balancing academics, Islamic studies, and activities"
              },
              {
                icon: Users,
                title: "Small Class Sizes", 
                description: "Personalized attention with optimal student-teacher ratios for effective learning"
              },
              {
                icon: Award,
                title: "Regular Assessments",
                description: "Continuous evaluation system to track student progress and provide timely feedback"
              },
              {
                icon: BookOpen,
                title: "Modern Resources",
                description: "Updated textbooks, digital learning tools, and well-equipped laboratories"
              },
              {
                icon: GraduationCap,
                title: "Career Guidance",
                description: "Professional counseling for higher education and career path selection"
              },
              {
                icon: CheckCircle,
                title: "Board Preparation",
                description: "Specialized coaching and practice sessions for CBSE board examinations"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
