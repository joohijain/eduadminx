import Link from "next/link";
import {
  Globe,
  Code2,
  LayoutDashboard,
  Smartphone,
  Cloud,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function WebDevelopmentPage() {
  const services = [
    {
      title: "Business Websites",
      icon: Globe,
      desc: "Modern responsive websites for companies, startups and institutions.",
    },
    {
      title: "Custom Web Apps",
      icon: Code2,
      desc: "Scalable applications tailored to your business workflow.",
    },
    {
      title: "Admin Dashboards",
      icon: LayoutDashboard,
      desc: "Powerful admin panels with analytics and management tools.",
    },
    {
      title: "Mobile Responsive UI",
      icon: Smartphone,
      desc: "Optimized experience across desktop, tablet and mobile devices.",
    },
    {
      title: "Cloud Integration",
      icon: Cloud,
      desc: "Secure deployment and cloud-connected infrastructure solutions.",
    },
  ];

  const features = [
    "Modern UI/UX Design",
    "SEO Optimized Structure",
    "Fast Loading Performance",
    "Secure Architecture",
    "Scalable Solutions",
    "Cross Device Compatibility",
  ];

  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 font-semibold mb-4">
              Web Development Services
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Modern Websites & Web Applications
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              EduAdminX builds responsive websites, SaaS platforms,
              admin portals and cloud-enabled applications designed
              for modern businesses and institutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold text-black"
              >
                Contact Us
              </Link>

              <Link
                href="/demo"
                className="border border-white/20 hover:border-cyan-400 transition px-6 py-3 rounded-xl font-semibold"
              >
                Book Demo
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE MOCKUP */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
              <div className="bg-black rounded-2xl p-4 border border-white/10">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="h-20 rounded-xl bg-cyan-500/20" />
                  <div className="h-20 rounded-xl bg-blue-500/20" />
                  <div className="h-20 rounded-xl bg-purple-500/20" />
                </div>

                <div className="h-40 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-4" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-xl bg-white/5" />
                  <div className="h-24 rounded-xl bg-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What We Build
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              We create scalable digital solutions that help businesses
              automate operations and improve online presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 hover:border-cyan-400 transition rounded-3xl p-8 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                    <Icon className="text-cyan-400" size={28} />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="flex items-center gap-2 text-cyan-400 group-hover:translate-x-1 transition">
                    Learn More <ArrowRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Businesses Choose EduAdminX
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              We focus on performance, scalability and modern design
              to deliver solutions that grow with your business.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-cyan-400"
                    size={22}
                  />

                  <span className="text-gray-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl border border-white/10 p-10">
            <div className="space-y-4">
              <div className="h-5 rounded-full bg-white/10 w-3/4" />
              <div className="h-5 rounded-full bg-white/10 w-full" />
              <div className="h-5 rounded-full bg-white/10 w-2/3" />

              <div className="h-52 rounded-3xl bg-black/40 border border-white/10 mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready To Build Your Next Digital Platform?
          </h2>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let EduAdminX help you create scalable, secure and
            modern digital solutions for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold text-black"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="border border-white/20 hover:border-cyan-400 transition px-8 py-4 rounded-xl font-semibold"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}