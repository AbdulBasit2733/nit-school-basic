'use client'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react'
import WaveShape from '../components/WaveShape'
import BlobShape from '../components/BlobShape'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

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
              About <span className="gradient-text">New Iqra Techno</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our journey, mission, and commitment to providing 
              exceptional education that nurtures both academic excellence and spiritual growth.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveShape />

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="gradient-text">Introduction</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  New Iqra Techno (N.I.T) stands as a beacon of educational excellence, 
                  seamlessly blending modern academic rigor with Islamic values and principles. 
                  Established with the vision of nurturing well-rounded individuals, our school 
                  has been at the forefront of quality education.
                </p>
                <p>
                  As a CBSE affiliated institution, we provide comprehensive education from 
                  Junior KG to 12th Standard, ensuring that our students receive world-class 
                  academic preparation while staying rooted in their faith and cultural values.
                </p>
                <p>
                  Our approach to education goes beyond textbooks and examinations. We believe 
                  in developing critical thinking, creativity, and character - preparing our 
                  students to be successful in both this world (Duniya) and the hereafter (Deen).
                </p>
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
                    <Users size={80} className="text-primary-500 mx-auto mb-4" />
                    <p className="text-gray-600">School Community Image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Our <span className="gradient-text">Mission & Vision</span>
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 sm:gap-12 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:p-8 py-6 px-4 shadow-lg card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  To provide exceptional education that integrates academic excellence with 
                  Islamic values, fostering the development of knowledgeable, compassionate, 
                  and responsible global citizens.
                </p>
                <p>
                  We are committed to creating an environment where students can excel 
                  academically while developing strong moral character, critical thinking 
                  skills, and a deep understanding of their faith and cultural heritage.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:p-8 py-6 px-4 shadow-lg card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  To be a leading educational institution that produces graduates who are 
                  academically accomplished, spiritually grounded, and socially responsible 
                  leaders of tomorrow.
                </p>
                <p>
                  We envision a world where our students contribute positively to society, 
                  excel in their chosen fields, and maintain strong connections to their 
                  faith and values throughout their lives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
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
                    <p className="text-gray-600">Teaching Excellence Image</p>
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
                Our <span className="gradient-text">Aim</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Heart,
                    title: "Holistic Development",
                    description: "Nurturing the intellectual, emotional, physical, and spiritual growth of every student."
                  },
                  {
                    icon: Award,
                    title: "Academic Excellence",
                    description: "Maintaining high academic standards while making learning engaging and meaningful."
                  },
                  {
                    icon: Users,
                    title: "Character Building",
                    description: "Instilling strong moral values, ethics, and Islamic principles in daily life."
                  }
                ].map((aim, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <aim.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{aim.title}</h3>
                      <p className="text-gray-600">{aim.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide everything we do at New Iqra Techno
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Excellence", description: "Striving for the highest standards in education and character" },
              { title: "Integrity", description: "Upholding honesty, transparency, and ethical behavior" },
              { title: "Compassion", description: "Showing kindness, empathy, and care for all members of our community" },
              { title: "Innovation", description: "Embracing new ideas and modern teaching methodologies" },
              { title: "Unity", description: "Building a harmonious community that celebrates diversity" },
              { title: "Faith", description: "Strengthening Islamic values and spiritual connection" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}