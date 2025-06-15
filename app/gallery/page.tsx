'use client'
import { motion } from 'framer-motion'
import { Camera, Play } from 'lucide-react'
import WaveShape from '../components/WaveShape'
import BlobShape from '../components/BlobShape'

export default function Gallery() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const galleryItems = [
    { type: 'image', category: 'Campus', title: 'Main Building', height: 'h-64' },
    { type: 'image', category: 'Students', title: 'Classroom Activities', height: 'h-80' },
    { type: 'image', category: 'Events', title: 'Annual Function', height: 'h-64' },
    { type: 'image', category: 'Sports', title: 'Sports Day', height: 'h-72' },
    { type: 'video', category: 'Events', title: 'School Assembly', height: 'h-64' },
    { type: 'image', category: 'Campus', title: 'Library', height: 'h-80' },
    { type: 'image', category: 'Students', title: 'Science Lab', height: 'h-64' },
    { type: 'image', category: 'Events', title: 'Cultural Program', height: 'h-72' },
    { type: 'image', category: 'Campus', title: 'Prayer Hall', height: 'h-64' },
    { type: 'video', category: 'Students', title: 'Student Presentations', height: 'h-80' },
    { type: 'image', category: 'Sports', title: 'Football Tournament', height: 'h-64' },
    { type: 'image', category: 'Events', title: 'Graduation Ceremony', height: 'h-72' }
  ]

  //const categories = ['All', 'Campus', 'Students', 'Events', 'Sports']
  const categories = [] as string[]

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
              School <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore the vibrant life at New Iqra Techno through our collection of photos and videos 
              showcasing our campus, students, events, and memorable moments.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveShape />

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-width">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${item.height} relative group cursor-pointer overflow-hidden rounded-xl shadow-lg card-hover`}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <div className="text-center">
                    {item.type === 'video' ? (
                      <Play size={40} className="text-primary-500 mx-auto mb-2" />
                    ) : (
                      <Camera size={40} className="text-primary-500 mx-auto mb-2" />
                    )}
                    <p className="text-sm text-gray-600">{item.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs bg-primary-500 px-2 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-sm font-semibold mt-1">{item.title}</h3>
                  </div>
                  
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: '500+', label: 'Photos' },
              { number: '50+', label: 'Videos' },
              { number: '25+', label: 'Events Covered' },
              { number: '10+', label: 'Years of Memories' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}