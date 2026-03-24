"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "luxury-home-audio-installation",
    title: "Luxury Home Audio Installation",
    img: "https://plus.unsplash.com/premium_photo-1680297665011-597de783fb92?w=500&h=500&fit=crop&auto=format&q=80",
  },
  {
    id: "premium-listening-experience",
    title: "Premium Listening Experience",
    img: "https://images.unsplash.com/photo-1737885197886-9e34a03ad226?w=500&h=500&fit=crop&auto=format&q=80",
  },
  {
    id: "cinema-quality-home-theater",
    title: "Cinema-Quality Home Theater",
    img: "https://images.unsplash.com/photo-1662454420647-3d20ddcdb8f8?w=500&h=500&fit=crop&auto=format&q=80",
  },
  {
    id: "commercial-audio-solutions",
    title: "Commercial Audio Solutions",
    img: "https://images.unsplash.com/photo-1632582204758-5ac65783517a?w=500&h=500&fit=crop&auto=format&q=80",
  },
  {
    id: "professional-av-systems",
    title: "Professional AV Systems",
    img: "https://images.unsplash.com/photo-1621976975813-10e88ae6e450?w=500&h=500&fit=crop&auto=format&q=80",
  },
];

export default function Projects() {
  return (
    <section className="team-section" aria-labelledby="team-heading">
      <div className="relative flex min-h-[420px] md:min-h-[480px]">
        <div className="team-text text-white">
          
          <Link href="/projects">
          
          <h2>PROJECTS</h2>
          </Link>
          
        </div>

        <div className="team-scroll w-full">
          <div className="team-card spacer" aria-hidden />
          {projects.map((project) => (
            <article key={project.id} className="team-card">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 260px, 320px"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
