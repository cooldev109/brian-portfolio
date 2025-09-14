export const projects = [
  {
      id:2,
      title: 'Q10 - EdTech Platform',
      description: 'Education Technology that provides for scholls and universities throughout Latin America',
      image:'/png/Q10.png',
      url: 'https://q10.com/Colombia/',
      technologies: ['Typescript','React.js','Nest.js','PostgreSQL','Redis','GraphQL','CI/CD'],
      features: [
          'Worked on new features for the Q10 platform including designing backend systems and building responsive frontend interfaces',
          'Support the data security standards and growth of company into new markets',
          '40% faster speed during peak times by using Redis catching and batched HTTP requests'
      ],
      role: 'Full-Stack Developer',
      company: 'Q10 S.A.S',
      period: '2023-2025'
  },
  {
      id: 3,
      title: 'PayZen LatAm - Fintech Payment Platform',
      description: 'Modern fintech platform enabling real-time payment management with robust transaction processing and seamless integration of international and local payment methods.',
      image: '/png/payzen.png',
      url: 'https://payzen.com/',
      technologies: ['Node.js', 'TypeScript', 'React.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS Lambda', 'OAuth2', 'JWT', 'CI/CD'],
      features: [
        'Enhanced payment-related features within the company’s web application, focusing on real-time transaction management',
        'Integrated Stripe and regional LatAm payment solutions to support a wider range of financial operations',
        'Resolved peak-hour performance issues by implementing a Redis queue with Bull for efficient background task handling',
        'Improved system reliability and response times under high traffic loads, increasing platform stability and scalability'
      ],
      role: 'Full Stack Web Developer',
      company: 'PayZen LatAm',
      period: '03/2021 - 08/2023'
    },
    {
      id: 4,
      title: 'Loggro - ERP & POS Platform',
      description: 'Enterprise resource planning and point-of-sale platform tailored for SMEs, featuring advanced invoicing, business operations management, and electronic billing compliance.',
      image: '/png/loggro1.png',
      url: 'https://loggro.com/',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'MySQL', 'REST APIs', 'Git', 'CI/CD'],
      features: [
        'Developed new features and optimized key modules within the core ERP platform, improving business operations efficiency',
        'Focused on building invoicing tools and enhancing backend performance to support high-volume transactions',
        'Ensured ongoing compliance with Colombia’s DIAN electronic invoicing standards by refactoring the invoicing system',
        'Implemented robust data validation and reporting logic to address frequent changes in national billing regulations'
      ],
      role: 'Full Stack Web Developer',
      company: 'Loggro',
      period: '01/2019 - 02/2021'
    }
];

// Skills data
export const skillCategories = [
  {
    name: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Vue', icon: '🖖' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'TailwindCSS', icon: '🌊' },
      { name: 'TypeScript', icon: '📝' },
    ]
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🐈' },
      { name: 'PHP', icon: '🐘' },
      { name: 'Laravel', icon: '🔺' },
      { name: 'ASP.NET', icon: '🌐' },
    ]
  },
  {
    name: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Firebase', icon: '🔥' },
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: 'Settings',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Kafka', icon: '📊' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Redis', icon: '🔻' },
      { name: 'Linux', icon: '🐧' },
    ]
  },
];


//Experience data

export const experienceData = [
  {
    title: "Senior Full Stack Web Developer",
    company: "Q10 S.A.S",
    period: "09/2023 - Present",
    location: "Bogotá, Colombia",
    descriptions: [
      "Developed new features for the Q10 EdTech platform, including backend systems and responsive frontend interfaces.",
      "Ensured platform compliance with strict data security standards while supporting market expansion initiatives.",
      "Resolved performance bottlenecks during enrollment periods by implementing Redis caching and batching HTTP requests, improving system speed by 40%."
    ]
  },
  {
    title: "Full Stack Web Developer",
    company: "PayZen LatAm",
    period: "03/2021 - 08/2023",
    location: "Buenos Aires, Argentina",
    descriptions: [
      "Enhanced the fintech web application by adding real-time transaction management features and integrating Stripe and local LatAm payment methods.",
      "Tackled high-traffic performance issues by introducing a Redis queue using Bull for background task handling, significantly boosting app stability.",
      "Worked closely with product and engineering teams to optimize financial operations and user experience."
    ]
  },
  {
    title: "Full Stack Web Developer",
    company: "Loggro",
    period: "01/2019 - 02/2021",
    location: "Medellín, Colombia",
    descriptions: [
      "Contributed to the core ERP platform, focusing on invoicing tools, backend optimization, and data accuracy improvements for SMEs.",
      "Adapted the invoicing system to frequent national billing regulation changes by refactoring for DIAN compliance with enhanced data validation and reporting.",
      "Improved system performance and operational reliability under regulatory constraints."
    ]
  }
];

// Contact section data
export const contactInfo = [
  {
    icon: "Phone",
    title: "Phone",
    value: "+573158269368"
  },
  {
    icon: "Mail",
    title: "Email",
    value: "briangereztop@gmail.com"
  },
  {
    icon: "MapPin",
    title: "Location",
    value: "Calle 18 #43g-90, Medellin, Colombia"
  },
  {
    icon: "Calendar",
    title: "Availability",
    value: "Ready for new projects"
  }
];

//Contact section data

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/in/juan-daniel-ri"
  },
  {
    name: "GitHub",
    icon: "Github",
    url: "#"
  },
  {
    name: "Blog",
    icon: "BookOpen",
    url: "#"
  },
 
];
