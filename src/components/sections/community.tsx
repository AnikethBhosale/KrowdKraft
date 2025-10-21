"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, MessageCircle, Share2, Zap, Users, Calendar, GraduationCap } from "lucide-react"
import { communityStats } from "@/data/community-stats"

const iconMap = {
  Users,
  Calendar,
  GraduationCap,
  Heart,
  MessageCircle,
  Share2,
  Zap,
  ArrowRight
}

export default function Community() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Vibrant{" "}
            <span className="neon-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-balance">
            Join KrowdKraft's thriving community where we host seminars, workshops, 
            hackathons, and competitions. Connect with like-minded individuals and grow together.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 max-w-4xl mx-auto px-4">
          {communityStats.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Users
            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 3,
                rotateY: 3,
                z: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card p-6 text-center transform-gpu cursor-pointer w-64 flex-shrink-0"
            >
              <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="h-8 w-8 text-neon" />
              </div>
              <div className="text-3xl font-bold neon-text mb-2">{item.metric}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
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
            className="inline-block"
          >
            <Button asChild variant="neon" size="lg" className="group transform-gpu">
              <a href="/community">
                Explore Our Community
                <ArrowRight className="ml-2 h-4 w-4 pointer-events-none" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
