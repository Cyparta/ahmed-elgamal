import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.business-analysis': 'Business Analysis',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',

    // Home Page
    'home.title': 'Ahmed El-Gamal',
    'home.subtitle': 'Business Analyst & Product Owner',
    'home.description': 'Helping businesses turn complex needs into intelligent systems. With 120+ projects, 80+ satisfied clients, 30 industry domains, and 40+ launched products, I lead from analysis to delivery with clarity and agility.',
    'home.cta': 'Explore My Projects',
    'home.stats.projects': 'Projects Delivered',
    'home.stats.clients': 'Satisfied Clients',
    'home.stats.industries': 'Industries',
    'home.stats.products': 'Products Launched',

    // About Page
    'about.title': 'About Me',
    'about.subtitle': 'Passionate About Digital Innovation',
    'about.description1': "I'm Ahmed El-Gamal, a Business Analyst & Product Owner with a BSc in Computer Science and Artificial Intelligence from Helwan University. I specialize in translating business goals into actionable technical plans, ensuring every product delivered meets user needs and strategic KPIs.",
    'about.description2': 'With extensive experience across multiple industries, I bridge the gap between business requirements and technical implementation, leading teams to deliver scalable digital products that drive real business value.',
    'about.education': 'Education',
    'about.education.desc': 'BSc in Computer Science and Artificial Intelligence from Helwan University',
    'about.specialization': 'Specialization',
    'about.specialization.desc': 'Translating business goals into actionable technical plans',
    'about.collaboration': 'Collaboration',
    'about.collaboration.desc': 'Working with cross-functional teams to deliver exceptional results',
    'about.innovation': 'Innovation',
    'about.innovation.desc': 'Ensuring every product meets user needs and strategic KPIs',

    // Experience Page
    'experience.title': 'Professional Experience',
    'experience.company': 'Cyparta',
    'experience.role': 'Business Analyst & Product Owner',
    'experience.duration': 'March 2024 – Present',
    'experience.contributions': 'Key Contributions',
    'experience.resp1': 'Define business requirements and user stories',
    'experience.resp2': 'Prioritize product backlog and plan sprints',
    'experience.resp3': 'Collaborate with cross-functional teams',
    'experience.resp4': 'Align features with client objectives',
    'experience.resp5': 'Maintain detailed documentation for stakeholders',
    'experience.impact': 'Current Impact',
    'experience.impact.desc': 'Leading product development initiatives that have streamlined business processes and improved client satisfaction. Actively managing multiple product backlogs while ensuring alignment with strategic business objectives and maintaining high-quality deliverables.',

    // skills Page
  "skills.title": "Technical & Strategic Skills",
  "skills.technical": "Technical Expertise",
  "skills.soft": "Core Competencies",
  "skills.proficiency": "Proficiency Overview",

  "skills.technical1": "Business Documentation",
  "skills.technical2": "Modeling & Visualization",
  "skills.technical3": "Product Tools",
  "skills.technical4": "Design Tools",
  "skills.userStories": "User Stories",
  "skills.uml": "UML Diagrams",
  "skills.flowcharts": "Flowcharts",
  "skills.wireframes": "Wireframes",

  "skills.soft1": "Strategic Planning",
  "skills.soft2": "Analytical Thinking",
  "skills.soft3": "Team Collaboration",
  "skills.soft4": "Communication",
  "skills.soft5": "Agile Product Ownership",

  "skills.proficiency1": "Business Analysis",
  "skills.proficiency2": "Product Management",
  "skills.proficiency3": "Agile Methodology",
  "skills.proficiency4": "Stakeholder Management",
  "skills.proficiency5": "Documentation",
  "skills.proficiency6": "Strategic Planning",
  
/////////////////
// Business Analysis Page
"ba.title": "Business Analysis",
  "ba.subtitle": "Transforming requirements into working systems through strategic analysis and agile product design.",
  "ba.services": "Core Services",
  "ba.services.1.title": "Stakeholder Discovery",
  "ba.services.1.desc": "Identifying and engaging key stakeholders to understand business needs and objectives.",
  "ba.services.2.title": "Requirement Elicitation",
  "ba.services.2.desc": "Gathering, analyzing, and documenting detailed business and functional requirements.",
  "ba.services.3.title": "Feature Prioritization",
  "ba.services.3.desc": "Strategic prioritization of features based on business value and user impact.",
  "ba.services.4.title": "Documentation (BRD, FRD, SRS)",
  "ba.services.4.desc": "Creating comprehensive documentation to guide development and ensure clarity.",
  "ba.services.5.title": "Sprint Planning & Product Ownership",
  "ba.services.5.desc": "Leading agile ceremonies and managing product backlogs for optimal delivery.",
  "ba.services.6.title": "MVP Definition",
  "ba.services.6.desc": "Defining minimum viable products that deliver maximum business value.",
  "ba.services.7.title": "Wireframes & Journey Mapping",
  "ba.services.7.desc": "Creating visual representations of user flows and system interactions.",
  "ba.highlights": "Case Highlights",
  "ba.highlights.1.project": "Fast Taxi",
  "ba.highlights.1.achievement": "Reduced failed bookings by 22%",
  "ba.highlights.1.desc": "Optimized booking flow and implemented smart matching algorithms",
  "ba.highlights.2.project": "Investo",
  "ba.highlights.2.achievement": "Smart alerts boosted investor engagement",
  "ba.highlights.2.desc": "Designed personalized notification system for investment opportunities",
  "ba.highlights.3.project": "Florida",
  "ba.highlights.3.achievement": "Fully automated daily farm operations",
  "ba.highlights.3.desc": "Streamlined agricultural processes with predictive analytics integration",
  "ba.process": "My Analysis Process",
  "ba.process.1.step": "01",
  "ba.process.1.title": "Discovery",
  "ba.process.1.desc": "Understanding business context and stakeholder needs",
  "ba.process.2.step": "02",
  "ba.process.2.title": "Analysis",
  "ba.process.2.desc": "Deep dive into requirements and process mapping",
  "ba.process.3.step": "03",
  "ba.process.3.title": "Design",
  "ba.process.3.desc": "Creating solutions and defining user experiences",
  "ba.process.4.step": "04",
  "ba.process.4.title": "Delivery",
  "ba.process.4.desc": "Agile implementation with continuous feedback",

// CONTACT
'contact.lets': "Let's",
'contact.connect': "Connect",
'contact.ready': "Ready to transform your business ideas into reality? Let's discuss how we can work together.",
'contact.getInTouch': "Get in Touch",
'contact.email': "Email",
'contact.phone': "Phone",
'contact.linkedin': "LinkedIn",
'contact.chatWhatsapp': "Chat with Me on WhatsApp",
'contact.sendMessage': "Send a Message",
'contact.name': "Name",
'contact.namePlaceholder': "Your full name",
'contact.emailPlaceholder': "your.email@example.com",
'contact.message': "Message",
'contact.messagePlaceholder': "Tell me about your project or how I can help...",
'contact.sendMessageBtn': "Send Message",
'contact.readyProject': "Ready to Start Your Next Project?",
'contact.projectDesc': "Whether you need business analysis, product strategy, or end-to-end project management, I'm here to help turn your vision into reality.",
'contact.emailMe': "Email Me",
'contact.whatsapp': "WhatsApp",

// ashievements Page
'achievements.title': 'Professional',
'achievements.titleGold': 'Achievements',
'achievements.subtitle': 'Measurable impact across industries, delivering value through strategic analysis and product excellence',
'achievements.projectsLabel': 'Projects Delivered',
'achievements.projectsDesc': 'Successfully completed projects across multiple domains',
'achievements.clientsLabel': 'Clients Across Multiple Sectors',
'achievements.clientsDesc': 'Satisfied clients from startups to enterprise companies',
'achievements.industriesLabel': 'Industries Explored',
'achievements.industriesDesc': 'Diverse industry experience from fintech to agriculture',
'achievements.productsLabel': 'Digital Products Launched',
'achievements.productsDesc': 'End-to-end product development and successful launches',
'achievements.timelineTitle': 'Key Milestones',
'achievements.timeline.2024.title': 'Product Owner at Cyparta',
'achievements.timeline.2024.desc': 'Leading product development initiatives and strategic planning',
'achievements.timeline.2023.title': '100+ Projects Milestone',
'achievements.timeline.2023.desc': 'Reached significant milestone in project delivery across multiple industries',
'achievements.timeline.2022.title': 'Multi-Industry Expertise',
'achievements.timeline.2022.desc': 'Expanded expertise across 30+ different industry domains',
'achievements.timeline.2021.title': 'Enterprise Solutions',
'achievements.timeline.2021.desc': 'Started delivering large-scale enterprise solutions and ERP systems',
'achievements.recognitionTitle': 'Impact & Recognition',
'achievements.recognition.0': 'Average improvement in operational efficiency',
'achievements.recognition.1': 'Client satisfaction rate across all projects',
'achievements.recognition.2': 'Average increase in business revenue',


// Projects Page
'projects.title': 'Featured Projects',
'projects.subtitle': 'A selection of impactful projects delivered across industries.',
'projects.impactLabel': 'Impact:',
'projects.metricLabel': 'Key Metric:',
'projects.completed': 'Project Completed',
'projects.ctaTitle': 'Have a Project in Mind?',
'projects.ctaDesc': "Let's discuss how I can help transform your business challenges into successful digital solutions.",
'projects.ctaBtn': 'Start Your Project',

'projects.businessCloudInfinity.title': 'Business Cloud Infinity',
'projects.businessCloudInfinity.description': 'ERP system used by 15 companies. Reduced reporting time by 50%.',
'projects.businessCloudInfinity.impact': 'Streamlined operations for 15+ companies',
'projects.businessCloudInfinity.metrics': '50% faster reporting',
'projects.businessCloudInfinity.category': 'Enterprise',

'projects.fastTaxi.title': 'Fast Taxi',
'projects.fastTaxi.description': 'Transport app with 50K+ rides/month. Increased ad revenue by 30%.',
'projects.fastTaxi.impact': '50K+ monthly rides',
'projects.fastTaxi.metrics': '30% revenue increase',
'projects.fastTaxi.category': 'Transportation',

'projects.helloShawarma.title': 'Hello Shawarma',
'projects.helloShawarma.description': 'Self-service restaurant system deployed in 10 branches. Order time cut from 5 to 2 minutes.',
'projects.helloShawarma.impact': '10 restaurant branches',
'projects.helloShawarma.metrics': '60% faster ordering',
'projects.helloShawarma.category': 'Food & Beverage',

'projects.floridaSystem.title': 'Florida System',
'projects.floridaSystem.description': 'Agri-tech platform managing over 100,000 animals with predictive analytics.',
'projects.floridaSystem.impact': '100K+ animals managed',
'projects.floridaSystem.metrics': 'Predictive analytics',
'projects.floridaSystem.category': 'Agriculture',

'projects.investo.title': 'Investo',
'projects.investo.description': 'Investment platform managing $10M+ in assets with personalized alerts.',
'projects.investo.impact': '$10M+ assets managed',
'projects.investo.metrics': 'Personalized alerts',
'projects.investo.category': 'Finance',

'projects.changeMe.title': 'Change Me',
'projects.changeMe.description': 'Clinic app with 1,200+ monthly bookings. Reduced cancellations to 8%.',
'projects.changeMe.impact': '1,200+ monthly bookings',
'projects.changeMe.metrics': '8% cancellation rate',
'projects.changeMe.category': 'Healthcare',

'projects.darAlAjooz.title': 'Dar Al Ajooz',
'projects.darAlAjooz.description': 'Quran memorization app with 5,000+ users and progress tracking.',
'projects.darAlAjooz.impact': '5,000+ active users',
'projects.darAlAjooz.metrics': 'Progress tracking',
'projects.darAlAjooz.category': 'Education',

'projects.yesCap.title': 'YesCap',
'projects.yesCap.description': 'Taxi booking app with 100K+ monthly rides. Dynamic pricing improved profits by 20%.',
'projects.yesCap.impact': '100K+ monthly rides',
'projects.yesCap.metrics': '20% profit increase',
'projects.yesCap.category': 'Transportation',

    // Footer
    'footer.rights': '© 2024 Ahmed El-Gamal – All rights reserved.',
  },





  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.experience': 'الخبرة',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.business-analysis': 'تحليل الأعمال',
    'nav.achievements': 'الإنجازات',
    'nav.contact': 'التواصل',

    // Home Page
    'home.title': 'أحمد الجمل',
    'home.subtitle': 'محلل أعمال ومالك منتج',
    'home.description': 'أساعد الشركات في تحويل الاحتياجات المعقدة إلى أنظمة ذكية. مع أكثر من 120 مشروع، و80+ عميل راضٍ، و30 مجال صناعي، و40+ منتج مُطلق، أقود من التحليل إلى التسليم بوضوح ومرونة.',
    'home.cta': 'استكشف مشاريعي',
    'home.stats.projects': 'مشروع مُنجز',
    'home.stats.clients': 'عميل راضٍ',
    'home.stats.industries': 'مجال صناعي',
    'home.stats.products': 'منتج مُطلق',

    // About Page
    'about.title': 'نبذة عني',
    'about.subtitle': 'شغوف بالابتكار الرقمي',
    'about.description1': 'أنا أحمد الجمال، محلل أعمال ومالك منتج حاصل على بكالوريوس علوم الحاسوب والذكاء الاصطناعي من جامعة حلوان. أتخصص في ترجمة أهداف الأعمال إلى خطط تقنية قابلة للتنفيذ، مما يضمن أن كل منتج يتم تسليمه يلبي احتياجات المستخدمين ومؤشرات الأداء الاستراتيجية.',
    'about.description2': 'مع خبرة واسعة عبر صناعات متعددة، أربط بين متطلبات الأعمال والتنفيذ التقني، وأقود الفرق لتقديم منتجات رقمية قابلة للتوسع تحقق قيمة تجارية حقيقية.',
    'about.education': 'التعليم',
    'about.education.desc': 'بكالوريوس علوم الحاسوب والذكاء الاصطناعي من جامعة حلوان',
    'about.specialization': 'التخصص',
    'about.specialization.desc': 'ترجمة أهداف الأعمال إلى خطط تقنية قابلة للتنفيذ',
    'about.collaboration': 'التعاون',
    'about.collaboration.desc': 'العمل مع فرق متعددة التخصصات لتحقيق نتائج استثنائية',
    'about.innovation': 'الابتكار',
    'about.innovation.desc': 'ضمان أن كل منتج يلبي احتياجات المستخدمين ومؤشرات الأداء الاستراتيجية',

    // Experience Page
    'experience.title': 'الخبرة المهنية',
    'experience.company': 'سايبارتا',
    'experience.role': 'محلل أعمال ومالك منتج',
    'experience.duration': 'مارس 2024 – حتى الآن',
    'experience.contributions': 'المساهمات الرئيسية',
    'experience.resp1': 'تحديد متطلبات الأعمال وقصص المستخدمين',
    'experience.resp2': 'ترتيب أولويات المنتج وتخطيط السبرنت',
    'experience.resp3': 'التعاون مع الفرق متعددة التخصصات',
    'experience.resp4': 'مواءمة الميزات مع أهداف العملاء',
    'experience.resp5': 'الحفاظ على التوثيق المفصل لأصحاب المصلحة',
    'experience.impact': 'التأثير الحالي',
    'experience.impact.desc': 'قيادة مبادرات تطوير المنتجات التي عملت على تبسيط العمليات التجارية وتحسين رضا العملاء. إدارة نشطة لعدة قوائم انتظار للمنتجات مع ضمان التوافق مع الأهداف التجارية الاستراتيجية والحفاظ على جودة عالية للمخرجات.',


    // skills Page
    "skills.title": "المهارات التقنية والاستراتيجية",
  "skills.technical": "الخبرة التقنية",
  "skills.soft": "الكفاءات الأساسية",
  "skills.proficiency": "نظرة عامة على الكفاءة",

  "skills.technical1": "توثيق الأعمال",
  "skills.technical2": "النمذجة والتصور",
  "skills.technical3": "أدوات إدارة المنتجات",
  "skills.technical4": "أدوات التصميم",
  "skills.userStories": "قصص المستخدمين",
  "skills.uml": "مخططات UML",
  "skills.flowcharts": "مخططات التدفق",
  "skills.wireframes": "إطارات التصميم",

  "skills.soft1": "التخطيط الاستراتيجي",
  "skills.soft2": "التفكير التحليلي",
  "skills.soft3": "العمل الجماعي",
  "skills.soft4": "الاتصال والتواصل",
  "skills.soft5": "ملكية المنتج بطريقة أجايل",

  "skills.proficiency1": "تحليل الأعمال",
  "skills.proficiency2": "إدارة المنتجات",
  "skills.proficiency3": "منهجية أجايل",
  "skills.proficiency4": "إدارة أصحاب المصلحة",
  "skills.proficiency5": "التوثيق",
  "skills.proficiency6": "التخطيط الاستراتيجي",

    // Business Analysis Page
     "ba.title": "تحليل الأعمال",
  "ba.subtitle": "تحويل المتطلبات إلى أنظمة عمل من خلال التحليل الاستراتيجي وتصميم المنتجات المرن.",
  "ba.services": "الخدمات الأساسية",
  "ba.services.1.title": "اكتشاف أصحاب المصلحة",
  "ba.services.1.desc": "تحديد أصحاب المصلحة الرئيسيين والتفاعل معهم لفهم احتياجات الأعمال والأهداف.",
  "ba.services.2.title": "جمع المتطلبات",
  "ba.services.2.desc": "جمع وتحليل وتوثيق المتطلبات التجارية والوظيفية بالتفصيل.",
  "ba.services.3.title": "ترتيب أولويات الميزات",
  "ba.services.3.desc": "ترتيب استراتيجي للميزات بناءً على القيمة التجارية وتأثير المستخدم.",
  "ba.services.4.title": "التوثيق (BRD, FRD, SRS)",
  "ba.services.4.desc": "إنشاء مستندات شاملة لتوجيه التطوير وضمان الوضوح.",
  "ba.services.5.title": "تخطيط السبرنت وملكية المنتج",
  "ba.services.5.desc": "قيادة اجتماعات الأجايل وإدارة قوائم المهام لتحقيق التسليم الأمثل.",
  "ba.services.6.title": "تحديد المنتج القابل للإطلاق MVP",
  "ba.services.6.desc": "تحديد الحد الأدنى من المنتج القابل للإطلاق الذي يقدم أعلى قيمة تجارية.",
  "ba.services.7.title": "مخططات UX وخريطة الرحلة",
  "ba.services.7.desc": "إنشاء تصورات مرئية لتدفقات المستخدمين وتفاعلات النظام.",
  "ba.highlights": "أبرز الحالات",
  "ba.highlights.1.project": "فاست تاكسي",
  "ba.highlights.1.achievement": "انخفاض في الحجوزات الفاشلة بنسبة 22%",
  "ba.highlights.1.desc": "تحسين مسار الحجز وتطبيق خوارزميات مطابقة ذكية",
  "ba.highlights.2.project": "إنفستو",
  "ba.highlights.2.achievement": "زيادة تفاعل المستثمرين عبر التنبيهات الذكية",
  "ba.highlights.2.desc": "تصميم نظام تنبيهات مخصص لفرص الاستثمار",
  "ba.highlights.3.project": "فلوريدا",
  "ba.highlights.3.achievement": "أتمتة كاملة للعمليات اليومية في المزرعة",
  "ba.highlights.3.desc": "تبسيط العمليات الزراعية باستخدام تحليلات تنبؤية",
  "ba.process": "عملية التحليل الخاصة بي",
  "ba.process.1.step": "٠١",
  "ba.process.1.title": "الاكتشاف",
  "ba.process.1.desc": "فهم سياق الأعمال واحتياجات أصحاب المصلحة",
  "ba.process.2.step": "٠٢",
  "ba.process.2.title": "التحليل",
  "ba.process.2.desc": "تحليل عميق للمتطلبات ورسم العمليات",
  "ba.process.3.step": "٠٣",
  "ba.process.3.title": "التصميم",
  "ba.process.3.desc": "إنشاء الحلول وتحديد تجارب المستخدم",
  "ba.process.4.step": "٠٤",
  "ba.process.4.title": "التنفيذ",
  "ba.process.4.desc": "تنفيذ مرن مع تغذية راجعة مستمرة",
  
    // Contact Page
  'contact.lets': "هيا",
'contact.connect': "نتواصل",
'contact.ready': "هل أنت مستعد لتحويل أفكارك التجارية إلى واقع؟ دعنا نناقش كيف يمكننا العمل معًا.",
'contact.getInTouch': "تواصل معي",
'contact.email': "البريد الإلكتروني",
'contact.phone': "الهاتف",
'contact.linkedin': "لينكدإن",
'contact.chatWhatsapp': "تحدث معي على واتساب",
'contact.sendMessage': "أرسل رسالة",
'contact.name': "الاسم",
'contact.namePlaceholder': "اسمك الكامل",
'contact.emailPlaceholder': "your.email@example.com",
'contact.message': "الرسالة",
'contact.messagePlaceholder': "حدثني عن مشروعك أو كيف يمكنني مساعدتك...",
'contact.sendMessageBtn': "إرسال الرسالة",
'contact.readyProject': "هل أنت مستعد لبدء مشروعك القادم؟",
'contact.projectDesc': "سواء كنت بحاجة لتحليل الأعمال أو استراتيجية المنتج أو إدارة المشروع من البداية للنهاية، أنا هنا لمساعدتك في تحقيق رؤيتك.",
'contact.emailMe': "راسلني",
'contact.whatsapp': "واتساب",


// ashievements Page
'achievements.title': 'الإنجازات',
'achievements.titleGold': 'المهنية',
'achievements.subtitle': 'أثر ملموس عبر الصناعات، وتقديم قيمة من خلال التحليل الاستراتيجي والتميز في المنتجات',
'achievements.projectsLabel': 'مشاريع مُنجزة',
'achievements.projectsDesc': 'مشاريع مكتملة بنجاح في مجالات متعددة',
'achievements.clientsLabel': 'عملاء من قطاعات متعددة',
'achievements.clientsDesc': 'عملاء راضون من الشركات الناشئة إلى المؤسسات الكبرى',
'achievements.industriesLabel': 'صناعات تم استكشافها',
'achievements.industriesDesc': 'خبرة صناعية متنوعة من التقنية المالية إلى الزراعة',
'achievements.productsLabel': 'منتجات رقمية تم إطلاقها',
'achievements.productsDesc': 'تطوير منتجات من البداية للنهاية وإطلاقها بنجاح',
'achievements.timelineTitle': 'أهم المحطات',
'achievements.timeline.2024.title': 'مالك منتج في سايبارتا',
'achievements.timeline.2024.desc': 'قيادة مبادرات تطوير المنتجات والتخطيط الاستراتيجي',
'achievements.timeline.2023.title': 'تجاوز 100 مشروع',
'achievements.timeline.2023.desc': 'تحقيق إنجاز كبير في تسليم المشاريع عبر صناعات متعددة',
'achievements.timeline.2022.title': 'خبرة متعددة الصناعات',
'achievements.timeline.2022.desc': 'توسيع الخبرة عبر أكثر من 30 مجال صناعي مختلف',
'achievements.timeline.2021.title': 'حلول للمؤسسات',
'achievements.timeline.2021.desc': 'بدء تقديم حلول مؤسسية واسعة النطاق وأنظمة ERP',
'achievements.recognitionTitle': 'الأثر والتقدير',
'achievements.recognition.0': 'متوسط التحسن في الكفاءة التشغيلية',
'achievements.recognition.1': 'معدل رضا العملاء عبر جميع المشاريع',
'achievements.recognition.2': 'متوسط زيادة الإيرادات التجارية',

    // Projects Page
  
'projects.title': 'المشاريع المميزة',
'projects.subtitle': 'مجموعة من المشاريع المؤثرة التي تم تنفيذها عبر مختلف الصناعات.',
'projects.impactLabel': 'الأثر:',
'projects.metricLabel': 'المؤشر الرئيسي:',
'projects.completed': 'تم إنجاز المشروع',
'projects.ctaTitle': 'هل لديك مشروع في ذهنك؟',
'projects.ctaDesc': 'دعنا نناقش كيف يمكنني مساعدتك في تحويل تحديات عملك إلى حلول رقمية ناجحة.',
'projects.ctaBtn': 'ابدأ مشروعك',

'projects.businessCloudInfinity.title': 'بيزنس كلاود إنفينيتي',
'projects.businessCloudInfinity.description': 'نظام ERP يُستخدم في 15 شركة. تم تقليل وقت التقارير بنسبة 50٪.',
'projects.businessCloudInfinity.impact': 'تبسيط العمليات لأكثر من 15 شركة',
'projects.businessCloudInfinity.metrics': 'تقارير أسرع بنسبة 50٪',
'projects.businessCloudInfinity.category': 'المؤسسات',

'projects.fastTaxi.title': 'فاست تاكسي',
'projects.fastTaxi.description': 'تطبيق نقل مع أكثر من 50 ألف رحلة شهريًا. زيادة إيرادات الإعلانات بنسبة 30٪.',
'projects.fastTaxi.impact': 'أكثر من 50 ألف رحلة شهريًا',
'projects.fastTaxi.metrics': 'زيادة الإيرادات بنسبة 30٪',
'projects.fastTaxi.category': 'النقل',

'projects.helloShawarma.title': 'هالو شاورما',
'projects.helloShawarma.description': 'نظام مطاعم الخدمة الذاتية في 10 فروع. تقليل وقت الطلب من 5 إلى دقيقتين.',
'projects.helloShawarma.impact': '10 فروع مطاعم',
'projects.helloShawarma.metrics': 'تسريع الطلب بنسبة 60٪',
'projects.helloShawarma.category': 'الأغذية والمشروبات',

'projects.floridaSystem.title': 'نظام فلوريدا',
'projects.floridaSystem.description': 'منصة زراعية تدير أكثر من 100,000 حيوان مع تحليلات تنبؤية.',
'projects.floridaSystem.impact': 'إدارة أكثر من 100 ألف حيوان',
'projects.floridaSystem.metrics': 'تحليلات تنبؤية',
'projects.floridaSystem.category': 'الزراعة',

'projects.investo.title': 'إنفستو',
'projects.investo.description': 'منصة استثمار تدير أصولًا بأكثر من 10 مليون دولار مع تنبيهات مخصصة.',
'projects.investo.impact': 'إدارة أصول بأكثر من 10 مليون دولار',
'projects.investo.metrics': 'تنبيهات مخصصة',
'projects.investo.category': 'التمويل',

'projects.changeMe.title': 'تغيير مي',
'projects.changeMe.description': 'تطبيق عيادة مع أكثر من 1200 حجز شهريًا. تقليل الإلغاءات إلى 8٪.',
'projects.changeMe.impact': 'أكثر من 1200 حجز شهريًا',
'projects.changeMe.metrics': 'معدل إلغاء 8٪',
'projects.changeMe.category': 'الرعاية الصحية',

'projects.darAlAjooz.title': 'دار العجوز',
'projects.darAlAjooz.description': 'تطبيق تحفيظ القرآن مع أكثر من 5000 مستخدم وتتبع التقدم.',
'projects.darAlAjooz.impact': 'أكثر من 5000 مستخدم نشط',
'projects.darAlAjooz.metrics': 'تتبع التقدم',
'projects.darAlAjooz.category': 'التعليم',

'projects.yesCap.title': 'يس كاب',
'projects.yesCap.description': 'تطبيق حجز تاكسي مع أكثر من 100 ألف رحلة شهريًا. التسعير الديناميكي زاد الأرباح بنسبة 20٪.',
'projects.yesCap.impact': 'أكثر من 100 ألف رحلة شهريًا',
'projects.yesCap.metrics': 'زيادة الأرباح بنسبة 20٪',
'projects.yesCap.category': 'النقل',

    // Footer
    'footer.rights': '© 2024 أحمد الجمل – جميع الحقوق محفوظة.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'font-arabic' : 'font-inter'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
