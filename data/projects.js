export const projectsData = [
  {
    category: "Commerce",
    slug: "ecommerce-application",
    title: "E-commerce Application",
    duration: "2026",
    description: "An online storefront with shopping, Razorpay checkout, and order confirmations.",
    overview: [
      "I built an online store in Next.js where customers can browse products, check ratings, save items to a wishlist, and adjust quantities in their cart.",
      "Supabase handles authentication and stores product and order information. Customers pay through Razorpay and receive an email after their order is confirmed.",
    ],
    cover: { image: "/coverimage/ecommerce-homepage.webp", alt: "Kalika storefront homepage" },
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
    github: "https://github.com/syamprasadkalarikkal/ecommerce"
  },
  {
    slug: "printq",
    title: "PrintQ & PrintQ Agent",
    category: "Web apps",
    duration: "2026",
    description: "QR document uploads and a Windows desktop agent for managing print jobs.",
    overview: [
      "PrintQ gives print-shop customers a QR-based way to upload documents, choose print settings, and review the total before submitting a job. Shop staff can manage the queue and review reports from the web dashboard.",
      "I also built the Windows desktop agent in Electron. It connects to the shared Supabase queue, detects printers installed on the shop computer, and uses a background worker to monitor and process jobs.",
    ],
    technologies: ["Next.js", "Supabase", "Electron", "pdf-lib", "Tailwind CSS"],
    keyFeatures: [
      "QR-based customer uploads, print settings, and order totals",
      "Shop dashboard with queue management and reports",
      "Windows agent with local printer detection and selection",
      "Background queue monitoring and PDF printing through the desktop agent",
    ],
    github: "https://github.com/syamprasadkalarikkal/automated-printing-system",
    relatedLink: { label: "Desktop agent", href: "https://github.com/syamprasadkalarikkal/PrintQ-Agent" },
    live: "https://automated-printing-system.vercel.app",
    cover: { image: "/coverimage/printq.webp", alt: "PrintQ web app showing the counter QR scan screen", treatment: "print" },
  },
  {
    slug: "doctor-appointment-system",
    title: "Doctor Appointment System",
    category: "Web apps",
    description: "Appointment management for patients, doctors, and administrators.",
    overview: [
      "I built a Next.js appointment system with separate areas for patients, doctors, and administrators. Patients and doctors have dedicated workspaces, and administrators can review and approve or reject doctor registrations.",
      "The project includes sign-in and account registration, a chat endpoint, an email endpoint, and a WebSocket server for real-time communication.",
    ],
    technologies: ["Next.js", "JavaScript", "WebSockets"],
    keyFeatures: ["Separate patient, doctor, and admin pages", "Doctor approval workflow", "Chat and email endpoints"],
    github: "https://github.com/syamprasadkalarikkal/dr-appoinment-system",
    cover: { image: "/coverimage/doctor-appointments.webp", alt: "Illustrated cover showing the Doctor Appointment System and an appointment calendar" },
  },
  {
    category: "Developer tools",
    slug: "collaborative-online-compiler",
    title: "Collaborative Online Compiler",
    duration: "2025",
    description: "A collaborative coding workspace with real-time execution and shared rooms.",
    overview: [
      "I built an online workspace where users can write and run code in multiple languages, save their work, and collaborate in shared rooms.",
      "WebSockets synchronize edits and room messages. Docker isolates code execution from the web application, and AI-assisted tools help generate code or explain errors during a session.",
    ],
    cover: { image: "/coverimage/compiler.svg" },
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
    github: "https://github.com/syamprasadkalarikkal/online-compailer"
  },
  {
    slug: "corplearn",
    title: "CorpLearn",
    category: "Website contributions",
    description: "A training website for accounting, finance, and business software.",
    overview: [
      "I built the CorpLearn website and deployed it at www.thecorplearn.com. My role covered the complete build and launch. The site helps visitors explore courses, find career information, and request a callback.",
    ],
    keyFeatures: ["Course discovery", "Career information", "Callback request", "Production deployment"],
    live: "https://www.thecorplearn.com",
    cover: { image: "/coverimage/corplearn-homepage.webp", alt: "The CorpLearn homepage with course and callback links" },
  },
  {
    slug: "outright-global",
    title: "Outright Global",
    category: "Website contributions",
    description: "An English and Arabic website for an accounting and advisory firm.",
    overview: [
      "I built and deployed the Outright Global website for an accounting, audit, tax, and business advisory firm serving India and the GCC.",
      "The site organizes its financial and regional services into browsable pages and provides clear paths to make an appointment, contact a regional office, or explore careers. Visitors can switch between English and Arabic.",
    ],
    keyFeatures: ["English and Arabic navigation", "Financial and GCC service pages", "Appointment and regional contact links", "Careers and company information"],
    live: "https://outrightglobal.co",
    cover: { image: "/coverimage/outright-homepage.webp", alt: "Outright Global homepage with its English and Arabic navigation" },
  },
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);
