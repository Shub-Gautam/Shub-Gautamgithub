//  icons
import {
  // FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiPhone
} from 'react-icons/fi';

import {SiLeetcode} from 'react-icons/si'

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/mcachedb.png';
import Project2 from './assets/img/projects/togalora.png';
import Project3 from './assets/img/projects/whatsauto.png';
import Project4 from './assets/img/projects/nftwar.png';
import Project5 from './assets/img/projects/sharefile.png';
import Project6 from './assets/img/projects/p6.webp';

import moreimg from './assets/img/projects/moreimg.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg9 from './assets/img/skills/android.png';
import SkillImg10 from './assets/img/skills/java.png';
import SkillImg11 from './assets/img/skills/spring.png';
import SkillImg12 from './assets/img/skills/adobe.png';
import SkillImg13 from './assets/img/skills/iit.jpg';
import SkillImg14 from './assets/img/skills/tricket.png';
import SkillImg15 from './assets/img/skills/eatoes.jpg';

import githubimg from './assets/img/github.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/t1.jpeg';
import TestiImage2 from './assets/img/testimonials/iitb.jpg';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'resume',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/shubham-gautam-156b501b9',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Shub-Gautam',
  },
  {
    icon:<FiInstagram/>,
    href: 'https://instagram.com/shubhamgautam__'
  },
  {
    icon:<SiLeetcode/>,
    href:'https://leetcode.com/sgautam393/'
  }
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    desc:'In memory key-value database written in java',
    link_github:'',
    link_presentation:'',
    name: 'MCacheDB',
    category: 'Web Applications',
    gitlink:"https://github.com/Shub-Gautam/MCacheDB",
    ytlink:"",
    pptlink:""
  },
  {
    id: '2',
    image: Project2,
    desc:'Android application for NGO/Volunteers which help them moniter their functions and attendance using virtual ID Card ',
    name: 'Tog Alora',
    link_github:'',
    link_presentation:'',
    category: 'Android Applications',
    gitlink:"https://github.com/Shub-Gautam/TOGS",
    ytlink:"",
    pptlink:"https://1drv.ms/p/s!Ao-vGXK6WdzgpWTy1Wd5H79Va6tS"
  },
  {
    id: '3',
    image: Project3,
    desc:'Web application which helps you to automate whatsapp messages',
    name: 'Whatsauto',
    link_github:'',
    link_presentation:'',
    category: 'Web Applications',
    gitlink:"https://github.com/Shub-Gautam/whatauto",
    ytlink:"",
    pptlink:""
  },
  {
    id: '4',
    image: Project4,
    name: 'NFT Warrenty System',
    link_github:'',
    link_presentation:'',
    desc:'An application to replace physical warrenty with soul bound NFT warrenty [Digital Warrenty]',
    category: 'Web Applications',
    gitlink:"https://github.com/Shub-Gautam/NFT_Warranty_backend",
    ytlink:"",
    pptlink:""
  },
  {
    id: '5',
    image: Project5,
    name: 'File Sharing App',
    link_github:'',
    link_presentation:'',
    desc:'Web application to share files using generated links',
    category: 'Web Applications',
    gitlink:"https://github.com/Shub-Gautam/FileSharing-App",
    ytlink:"",
    pptlink:"https://1drv.ms/p/s!Ao-vGXK6WdzgpWKgWfMNz8X38Zxc"
  },
];

export const github_link = 'https://github.com/Shub-Gautam/'

export const more = {
  image: moreimg,
  name : 'Explore all projects on Github',
  category:'  '
}

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Web Applications',
  },
  {
    name: 'Android Applications',
  },
];

// skill
export const skills = [
  {
    image: SkillImg11,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg1,
  },
];

// services
export const services = [
  {
    icon: SkillImg12,
    path:'https://drive.google.com/file/d/1a7U4nFAzlebLZV63WbHh5dtuRLKo1-cA/view?usp=sharing',
    company:'Adobe',
    name: 'Customer Experience Maker',
    description:[`• Build a Machine Learning Model in python to give predictions based on description and display it 
    on the frontend using APIs using flask`,`
    • Develop a Microsoft Power App application to implement functionality of Planner to manage tasks 
    and generate automated reports using Power BI`]
  },
  {
    icon: SkillImg13,
    company:'IIT Bombay',
    path:'https://drive.google.com/file/d/1xLcdewhnEf1KgSWoD_Iy_61wjyVog2BA/view?usp=drive_link',
    name: 'Web Developer',
    description:
      [`• Work with their backend [Nodejs (JavaScript)] and frontend team to build APIs, adding new features, creating views and removing 
      bugs from their project`,`
      • Implement Faceted Search functionality to their project using Elasticsearch and real time data collection engine Logstash to fetch 
      records from their PostgreSQL server`,`
      • Design and optimize their Frontend pages using EJS template engine and migrating pages from EJS to ReactJS`
      ] },
  {
    icon: SkillImg14,
    company:'Tricket.in',
    name: 'Backend Developer',
    description:
      [`• Design entire backend in Nodejs (TypeScript) following MVC architecture for their Game and Admin APIs [ user-onboarding, 
        handling real time data (firebase), using ORM tool (Sequilize) for PostgreSQL]`
        ,`• Built scheduler function jobs (Cron jobs) and HTTP trigger scripts for Azure cloud functions for data clean-up`
        ,`• Design Models in Sequilize and integrate flow between their repos`]  },
  {
    icon: SkillImg15,
    company:'Eatoes',
    path:'https://drive.google.com/file/d/1Lsp3_Ey2qyLC3qZgnkBmkrKPd_eqMhmJ/view?usp=drive_link',
    name: 'Backend Developer',
    description:
      [`• Design and built APIs using Nodejs (JavaScript) [for user-onboarding, user validation and backlisting] & for Business logic`,
      `• Built web scrapper to crawl restaurants data from multiple sources`,
      `• Handling data storage on Mongo DB and Redis`]  },
];


export const education = [
  {
    name: 'Maharaja Agrasen Institute of Technology, Delhi',
    course: 'B.Tech (Computer Science & Technology)',
    duration: '2020-2024',
    percentage: 'CGPA 9.27/10'
  },
  {
    name: 'Radha Krishna Public Sr. Sec. School, Uttar Pradesh',
    course: 'Higher Secondary',
    duration: '2019',
    percentage: 'Percentage 92.6%'
  },
  {
    name: 'Radha Krishna Public Sr. Sec. School, Uttar Pradesh',
    course: 'High School',
    duration: '2017',
    percentage: 'CGPA 10/10'
  },
]

export const awahor = [
  {
    title:'• Innerve Hack IGDTUW',
    desc:'Secured finalist position under 30 teams'
  }
]

export const posres = [
  {
    title:'Web Developer Mentor @ Girl Code it',
    desc:'• Mentor freshers in web development roadmap',
    duration:'Feb 2022 - Feb 2023'
  }
]


export const certi = [
  {
    name:'• Core JAVA Programming - Beginner to Master',
    link:'https://drive.google.com/file/d/1USGx6krzO2K17to8q22f8M2JXRa4tbBa/view?usp=drive_link',
  },
  {
    name:'• Getting started with AWS',
    link:'https://drive.google.com/file/d/1-z_bVCnXPIkWJOtGWQUASE666kwHvtGO/view?usp=drive_link',
  },
  {
    name:'• Docker and Kubernetes: The Complete Guide',
    link:'https://drive.google.com/file/d/1bwKPNM6ujsmDqpHpYWeAGYsPh7HHyA-m/view?usp=drive_link',
  },
  {
    name:'• Cloud Computing 101',
    link:'',
  },
  {
    name:'• Arithmetic Toolbox',
    link:'https://drive.google.com/file/d/1jec2Jme_Q3B-O1xS-bGsVv95gmd6VfLg/view?usp=drive_link',
  },
  {
    name:'• Cloud Networking',
    link:'https://skillsoft.digitalbadges.skillsoft.com/a8898466-9911-4330-abbd-23ee24a837ff#gs.435a8q',
  },
  {
    name:'• Fundamentals of Reinforcement Learning',
    link:'https://drive.google.com/file/d/1HVC240fA5__ZOirrwQ0atTdJnDknYSDS/view?usp=drive_link',
  }
]





// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
    `""`,
    authorName: 'Atul Tiwari',
    authorPosition: 'System Analyst, @DZAN',
  },
  {
    authorImg: TestiImage2,
    authorText:
      `"Shubham has worked independently and handled the back end and front end
      with full dedication. He has contributed to website development and the Android app
      backend in NodeJS. His design skills, in addition to his coding prowess, deserve special
      attention. He is a quick learner and was responsible for developing and testing the
      website and android app.
      He has been enthusiastic, sincere, and dedicated and has performed
      commendably on the project. He demonstrated excellent teamwork skills and
      coordination. We take this opportunity to thank him and wish him luck for the future."`,
    authorName: 'Ayush Maheshwari',
    authorPosition: 'Phd CSE, @IIT Bombay',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at skgautam393@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Delhi, India',
    description: '',
  },
  {
    icon: <FiPhone/>,
    title: 'Phone no',
    subtitle: '+91 9548425684'
  }
];


export const resumeLink = 'https://1drv.ms/b/s!Ao-vGXK6WdzgpTchxgj6ntWizQUU?e=wEB8jb'
