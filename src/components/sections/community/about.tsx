"use client"

import { motion } from "framer-motion"
import { Users, Target, Heart, Zap } from "lucide-react"
import { communityValues } from "@/data/community-values"

const iconMap = {
  Users,
  Target,
  Heart,
  Zap
}

export default function CommunityAbout() {
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
            About Our{" "}
            <span className="neon-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our community is more than just a network - it's a thriving ecosystem of 
            creators, innovators, and change-makers who are shaping the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Building Connections, Creating Impact
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At KrowdKraft Community, we believe in the power of collaboration and 
              shared learning. Our community brings together passionate individuals 
              from diverse backgrounds to learn, grow, and create together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through our seminars, workshops, hackathons, and competitions, we provide 
              a platform for knowledge sharing, skill development, and meaningful 
              networking that extends beyond traditional boundaries.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {communityValues.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap] || Users
              return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  z: 5
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-card p-6 transform-gpu cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
