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
    // Footer
    'footer.rights': '© 2024 أحمد الجمال – جميع الحقوق محفوظة.',
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
