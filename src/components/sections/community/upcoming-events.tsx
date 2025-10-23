"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { upcomingEventCategories } from "@/data/upcoming-events"

const iconMap = {
  Calendar,
  MapPin,
  Clock,
  ArrowRight
}

export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Upcoming{" "}
            <span className="neon-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Stay tuned for our upcoming events. We're constantly planning new 
            workshops, seminars, and competitions for our community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Calendar className="h-12 w-12 text-neon" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-4">Something Amazing is Coming</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              We're working on some incredible events that will bring our community 
              together for learning, networking, and innovation. Be the first to know 
              when we announce our next big event!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {upcomingEventCategories.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Calendar
                return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-neon/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-8 w-8 text-neon" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
                )
              })}
            </div>

            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 3,
                rotateY: 3,
                z: 10
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="cursor-pointer"
              onClick={() => {
                const footer = document.querySelector('#newsletter-section');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Button variant="neon" size="lg" className="group transform-gpu pointer-events-none">
                Get Notified
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
