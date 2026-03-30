"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Icon components
function QuoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.128-2.01L9.19 6c-.presuppose 0 0-.83.42-1.57 1.27-2.24.84-.67 1.8-1.15 2.85-1.43.19-.05.38-.09.57-.12L12.85 6c-.49.2-.96.46-1.41.79-.62.45-1.07.97-1.36 1.55-.28.58-.34 1.22-.16 1.93.05.2.13.39.23.57.1.18.22.35.37.5.15.15.31.28.5.38.18.1.38.17.6.2.21.03.44.03.69 0 .94-.12 1.67-.56 2.2-1.32.52-.76.78-1.65.78-2.67 0-.97-.27-1.85-.8-2.64-.54-.8-1.28-1.43-2.22-1.9L13 2.5c1.28.54 2.3 1.35 3.05 2.43.74 1.08 1.11 2.3 1.11 3.67 0 1.13-.28 2.18-.84 3.15-.56.97-1.33 1.74-2.3 2.3-.98.56-2.07.84-3.27.84-.73 0-1.43-.1-2.1-.3-.67-.2-1.27-.5-1.8-.9-.54-.4-.97-.89-1.3-1.47-.33-.58-.5-1.23-.5-1.95zM1.554 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.128-2.01L-.448 6c-.83.42-1.57 1.27-2.24.84-.67 1.8-1.15 2.85-1.43.19-.05.38-.09.57-.12L3.212 6c-.49.2-.96.46-1.41.79-.62.45-1.07.97-1.36 1.55-.28.58-.34 1.22-.16 1.93.05.2.13.39.23.57.1.18.22.35.37.5.15.15.31.28.5.38.18.1.38.17.6.2.21.03.44.03.69 0 .94-.12 1.67-.56 2.2-1.32.52-.76.78-1.65.78-2.67 0-.97-.27-1.85-.8-2.64-.54-.8-1.28-1.43-2.22-1.9L3.362 2.5c1.28.54 2.3 1.35 3.05 2.43.74 1.08 1.11 2.3 1.11 3.67 0 1.13-.28 2.18-.84 3.15-.56.97-1.33 1.74-2.3 2.3-.98.56-2.07.84-3.27.84-.73 0-1.43-.1-2.1-.3-.67-.2-1.27-.5-1.8-.9-.54-.4-.97-.89-1.3-1.47-.33-.58-.5-1.23-.5-1.95z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "Horizon Retail Co.",
    category: "Web Development",
    stars: 5,
    quote:
      "The team completely transformed our online presence. Our new site is fast, beautiful, and our conversion rate jumped 40% in the first month. They understood our brand immediately and delivered beyond our expectations.",
    initials: "SM",
  },
  {
    id: 2,
    name: "James Okafor",
    role: "Marketing Director",
    company: "Elevate Agency",
    category: "Content Creation",
    stars: 5,
    quote:
      "Their content strategy gave our brand a voice we didn't know we were missing. Every piece felt tailored, sharp, and on-brand. We've seen a measurable lift in engagement across every channel since working with them.",
    initials: "JO",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Founder",
    company: "Bloom Wellness",
    category: "Social Media",
    stars: 5,
    quote:
      "We went from 800 followers to over 12,000 in four months. Their social media management is strategic, creative, and consistent. I finally feel like our online presence matches the quality of our product.",
    initials: "PN",
  },
  {
    id: 4,
    name: "Tom Baxter",
    role: "Operations Manager",
    company: "ClearPath Logistics",
    category: "Digital Products",
    stars: 5,
    quote:
      "They built us a custom internal tool that our whole team now relies on daily. The UX is intuitive, the delivery was on time, and they walked us through every step. Genuinely impressed with the craftsmanship.",
    initials: "TB",
  },
  {
    id: 5,
    name: "Leila Fontaine",
    role: "Creative Director",
    company: "Studio Noma",
    category: "Web Development",
    stars: 5,
    quote:
      "As a design studio, we're extremely particular about aesthetics and detail. These guys nailed it. The site they built for us gets compliments from clients constantly. Worth every penny.",
    initials: "LF",
  },
  {
    id: 6,
    name: "Marcus Webb",
    role: "Head of Growth",
    company: "Launchpad SaaS",
    category: "Content Creation",
    stars: 5,
    quote:
      "They produced a full content library for our product launch — blog posts, email sequences, landing copy — and it was all exceptional. Our launch outperformed projections by 60%. These are serious professionals.",
    initials: "MW",
  },
];

const categoryColors = {
  "Web Development": "from-sky-900/80 to-sky-950/80",
  "Content Creation": "from-gray-700/80 to-gray-900/80",
  "Social Media": "from-slate-700/80 to-slate-900/80",
  "Digital Products": "from-zinc-700/80 to-zinc-900/80",
};

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/25 hover:border-gray-300/40 transition-all duration-300"
    >
      {/* Top row: avatar + name + category badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className={`w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 bg-gradient-to-br ${
              categoryColors[testimonial.category] || "from-gray-700 to-gray-900"
            }`}
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-black text-sm leading-tight">{testimonial.name}</p>
            <p className="text-gray-500 text-xs">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
        {/* Category badge */}
        <span className="px-2.5 py-1 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black text-xs font-medium whitespace-nowrap backdrop-blur-sm flex-shrink-0">
          {testimonial.category}
        </span>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-sm leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </motion.div>
  );
}

const CARDS_PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const visibleTestimonials = testimonials.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <div className="relative">
      <div className="mx-auto container px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Real results from real partnerships
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleTestimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-xl backdrop-blur-lg border transition-all duration-300 ${
                page === 0
                  ? "bg-white/10 border-gray-300/20 text-gray-400 cursor-not-allowed"
                  : "bg-white/20 border-gray-300/30 text-black hover:bg-white/30"
              }`}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === page ? "bg-sky-950 scale-125" : "bg-gray-400/50 hover:bg-gray-500/70"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-xl backdrop-blur-lg border transition-all duration-300 ${
                page === totalPages - 1
                  ? "bg-white/10 border-gray-300/20 text-gray-400 cursor-not-allowed"
                  : "bg-white/20 border-gray-300/30 text-black hover:bg-white/30"
              }`}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}