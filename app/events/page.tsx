"use client";
import { motion } from "framer-motion";
import { Users, Star, Camera, Award, Music } from "lucide-react";
import WaveShape from "../components/WaveShape";
import BlobShape from "../components/BlobShape";

export default function Events() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  {
    /*
  const upcomingEvents = [
    {
      title: "Annual Sports Day",
      date: "2025-06-15",
      time: "9:00 AM - 4:00 PM",
      location: "School Sports Complex",
      description:
        "A day filled with athletic competitions, team spirit, and celebration of physical fitness.",
      category: "Sports",
      icon: Award,
      participants: "All Students",
    },
    {
      title: "Science Exhibition",
      date: "2025-06-22",
      time: "10:00 AM - 3:00 PM",
      location: "Science Laboratories",
      description:
        "Students showcase innovative science projects and experiments.",
      category: "Academic",
      icon: Star,
      participants: "Grades 6-12",
    },
    {
      title: "Islamic Cultural Night",
      date: "2025-07-05",
      time: "6:00 PM - 9:00 PM",
      location: "School Auditorium",
      description:
        "Evening of Islamic poetry, nasheeds, and cultural performances.",
      category: "Cultural",
      icon: Music,
      participants: "All Grades",
    },
  ];
    */
  }
  const pastEvents = [
    {
      title: "Annual Function 2024",
      date: "2024-12-15",
      description:
        "A grand celebration showcasing student talents through various performances.",
      images: 3,
      highlights: [
        "Cultural Performances",
        "Award Ceremony",
        "Parent Participation",
      ],
    },
    {
      title: "Ramadan Iftar Gathering",
      date: "2024-04-10",
      description:
        "Community iftar bringing together students, parents, and faculty.",
      images: 2,
      highlights: ["Community Bonding", "Islamic Values", "Shared Meals"],
    },
    {
      title: "Inter-School Quiz Competition",
      date: "2024-11-20",
      description:
        "Academic competition testing knowledge across various subjects.",
      images: 4,
      highlights: ["Academic Excellence", "Team Work", "Prize Distribution"],
    },
    {
      title: "Parent-Teacher Conference",
      date: "2024-10-05",
      description:
        "Individual meetings to discuss student progress and development.",
      images: 1,
      highlights: [
        "Student Progress",
        "Parent Engagement",
        "Academic Planning",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <BlobShape
          className="absolute top-10 right-10 text-primary-500/10"
          size={300}
        />
        <div className="container-width">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              School <span className="gradient-text">Events</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with our vibrant school community events, from
              academic competitions to cultural celebrations and Islamic
              programs throughout the year.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveShape />

      {/* Upcoming Events Section */}
      {/* 
       
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
              <span className="gradient-text">Upcoming</span> Events
            </h2>
            <p className="text-xl text-gray-600">Mark your calendars for these exciting upcoming events</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover border-l-4 border-primary-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <event.icon className="text-white" size={20} />
                  </div>
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary-500" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-primary-500" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 btn-primary text-sm">
                  Register Interest
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Past Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Past</span> Events
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating our memorable moments and achievements
            </p>
          </motion.div>

          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {event.title}
                      </h3>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Event Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Camera size={40} className="text-primary-500" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {event.images} Photos Available
                    </p>
                    <button className="btn-secondary text-sm">
                      View Gallery
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <BlobShape
          className="absolute bottom-10 right-10 text-primary-500/10"
          size={250}
        />
        <div className="container-width">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Event <span className="gradient-text">Categories</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Academic",
                icon: Star,
                color: "from-blue-500 to-blue-600",
                count: "12+",
              },
              {
                name: "Cultural",
                icon: Music,
                color: "from-purple-500 to-purple-600",
                count: "8+",
              },
              {
                name: "Sports",
                icon: Award,
                color: "from-green-500 to-green-600",
                count: "6+",
              },
              {
                name: "Islamic",
                icon: Users,
                color: "from-primary-500 to-primary-600",
                count: "10+",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-2xl font-bold gradient-text">
                  {category.count}
                </p>
                <p className="text-sm text-gray-600">Events per year</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
