export const projectsData = [
  {
    id: 1,
    slug: "ecommerce-application",
    title: "E-commerce Application",
    type: "Freelance Project",
    duration: "2024",
    description: "Developed a full-featured e-commerce web application with Next.js, Supabase, Razorpay payments, cart management, ratings, wishlist management, and order confirmation emails.",
    cover: {
      label: "Commerce Platform",
      metric: "Next.js + Supabase",
      tone: "emerald",
      image: "/coverimage/ecommerce.png"
    },
    keyFeatures: [
      "Authentication using Supabase",
      "Cart management with quantity updates",
      "Wishlist management for saved products",
      "Product rating functionality",
      "Razorpay payment integration",
      "Email confirmation after order confirmation",
      "Responsive design for all devices",
      "Supabase database for product and order data"
    ],
    technologies: ["Next.js", "Supabase", "Supabase Auth", "Razorpay", "Cart Management", "Ratings", "Wishlist Management", "Payment Flow", "Email Confirmation", "Tailwind CSS"],
    highlights: [
      "Built freelance e-commerce workflow",
      "Implemented Supabase auth and Razorpay payments",
      "Optimized for performance and SEO",
      "Added cart, wishlist, rating, and order email flows"
    ],
    github: "https://github.com/syamprasadkalarikkal/ecommerce",
    live: "https://ecommerce-iota-eight-24.vercel.app/"
  },
  {
    id: 2,
    slug: "tech-fest-registration",
    title: "College Tech Fest Registration Website",
    type: "College Tech Fest",
    duration: "2023",
    description: "Designed and developed a responsive Next.js event website for a college technical fest, with event pages and a mobile-friendly participant experience.",
    cover: {
      label: "Tech Fest Site",
      metric: "Next.js Event Page",
      tone: "violet",
      image: "/coverimage/techfest.png"
    },
    keyFeatures: [
      "Next.js event page for the tech fest",
      "Responsive UI across mobile and desktop",
      "Event details and participant information sections",
      "Online event registration flow",
      "Participant data collection and validation",
      "Clean interface for quick event browsing"
    ],
    technologies: ["Next.js", "Responsive UI", "Event Page", "Tailwind CSS"],
    highlights: [
      "Processed 500+ registrations successfully",
      "Simple and intuitive event interface",
      "Mobile-responsive design",
      "Built focused pages for event discovery"
    ],
    github: "https://github.com/syamprasadkalarikkal/aiconclave2025-govt-arts-and-science-college-tanur",
    live: "https://aiconclave2025.gctanur.in/"
  },
  {
    id: 3,
    slug: "collaborative-online-compiler",
    title: "Collaborative Online Compiler",
    type: "Academic Project",
    duration: "2024",
    description: "Built a collaborative online compiler with real-time compilation, Docker sandboxing for safe execution, code saving, AI error fixing, AI code generation, collaborative editing, and room-based messaging.",
    cover: {
      label: "Compiler Workspace",
      metric: "Realtime + Docker",
      tone: "sky",
      image: "/coverimage/compiler.svg"
    },
    keyFeatures: [
      "Real-time compilation and output display",
      "Docker sandbox for safe code running",
      "Code saving for user sessions",
      "AI error fixing support",
      "AI code generator for faster development",
      "Collaborative code editing with friends",
      "Real-time messaging inside coding rooms",
      "Support for multiple programming languages",
      "Supabase for app data and user sessions",
      "WebSocket-powered collaboration"
    ],
    technologies: ["Next.js", "Docker", "Docker Sandbox", "Supabase", "WebSocket", "Groq AI", "Real-time Compilation", "Code Saving", "AI Error Fixing", "AI Code Generator", "Room Messaging"],
    highlights: [
      "Implemented real-time synchronization",
      "Handled concurrent user edits",
      "Secure code execution environment",
      "Optimized for low-latency communication"
    ],
    github: "https://github.com/syamprasadkalarikkal/online-compailer",
    live: "https://github.com/syamprasadkalarikkal/online-compailer"
  }
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);
