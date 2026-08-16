import { useRef, useEffect, useState } from 'react'
import { achievements, certifications } from '../../data/profile'
import { Trophy, Medal, Star, Award } from 'lucide-react'

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
}

export default function Achievements() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="achievements" ref={sectionRef} className="section-container">
      <h2 className="section-heading" data-num="05.">Achievements & Certifications</h2>

      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Achievements */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Award
            return (
              <div key={i} className="glass-card p-6 text-center group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={22} />
                </div>
                <h3 className="text-slate-light font-display font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-dark">{item.detail}</p>
                <p className="font-mono text-accent text-xs mt-2">{item.year}</p>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <h3 className="text-slate-light font-display font-semibold text-lg mb-6">
          Professional Certifications
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-navy-800/50 hover:bg-navy-800 transition-colors">
              <Award className="text-accent shrink-0 mt-0.5" size={16} />
              <div>
                <p className="text-slate-light text-sm font-medium">{cert.name}</p>
                <p className="text-xs text-slate-dark font-mono mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
