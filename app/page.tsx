import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Lightbulb, Users, Rocket, BookOpen, Award } from "lucide-react";

export default function InnovativeLeadershipHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Innovative Leadership Hub
          </motion.h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Empowering young leaders to solve real-world problems through innovation,
            service, and ethical leadership.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-2xl">Join the Hub</Button>
            <Button size="lg" variant="secondary" className="rounded-2xl">Our Programs</Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
        <Card className="rounded-2xl bg-slate-900/60 border-slate-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-slate-300">
              To nurture innovative, ethical, and community-driven leaders by
              providing mentorship, hands-on projects, and global exposure.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-slate-900/60 border-slate-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-slate-300">
              A generation of youth leaders transforming Africa and the world
              through ideas that matter.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">What We Focus On</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            icon: Lightbulb,
            title: "Innovation",
            desc: "Design thinking, problem-solving, and creative impact projects."
          },{
            icon: Users,
            title: "Leadership",
            desc: "Ethical leadership, teamwork, and community engagement."
          },{
            icon: BookOpen,
            title: "Learning",
            desc: "Workshops, research clubs, and academic excellence."
          },{
            icon: Globe,
            title: "Global Exposure",
            desc: "International programs, competitions, and collaborations."
          },{
            icon: Rocket,
            title: "Entrepreneurship",
            desc: "Startups, social enterprises, and youth-led ventures."
          },{
            icon: Award,
            title: "Excellence",
            desc: "Recognition, scholarships, and leadership pathways."
          }].map((p, i) => (
            <motion.div key={i} whileHover={{ y: -6 }}>
              <Card className="rounded-2xl bg-slate-900/60 border-slate-800 h-full">
                <CardContent className="p-6">
                  <p.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-slate-300">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Leadership Bootcamp", "STEM & Innovation Lab", "Community Impact Projects"].map((p) => (
              <Card key={p} className="rounded-2xl bg-slate-950 border-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{p}</h3>
                  <p className="text-slate-300">
                    Practical, mentor-led experiences designed to build skills and
                    measurable impact.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4">Build the Future With Us</h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Whether you are a student, mentor, or partner, the Innovative Leadership
          Hub is your platform to lead with purpose.
        </p>
        <Button size="lg" className="rounded-2xl">Get Involved</Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-4 justify-between text-slate-400">
          <p>© {new Date().getFullYear()} Innovative Leadership Hub</p>
          <p>Founded by student leaders • Rwanda</p>
        </div>
      </footer>
    </div>
  );
}
