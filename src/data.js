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

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
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
    name: 'experience',
    href: 'experience',
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
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
    name: 'MCacheDB',
    category: 'Web Application',
  },
  {
    id: '2',
    image: Project2,
    desc:'Android application for NGO/Volunteers which help them moniter their functions and attendance using virtual ID Card ',
    name: 'Tog Alora',
    category: 'Android Application',
  },
  {
    id: '3',
    image: Project3,
    desc:'Web application which helps you to automate whatsapp messages',
    name: 'Whatsauto',
    category: 'Web Application',
  },
  {
    id: '4',
    image: Project4,
    name: 'NFT Warrenty System',
    desc:'An application to replace physical warrenty with soul bound NFT warrenty [Digital Warrenty]',
    category: 'Web Application',
  },
  {
    id: '5',
    image: Project5,
    name: 'File Sharing App',
    desc:'Web application to share files using generated links',
    category: 'Web Application',
  },
];

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
    description:
      'Build a Machine Learning Model in python to give predictions based on description and display it on the frontend using APIs using flask',
  },
  {
    icon: SkillImg13,
    company:'IIT Bombay',
    path:'https://drive.google.com/file/d/1xLcdewhnEf1KgSWoD_Iy_61wjyVog2BA/view?usp=drive_link',
    name: 'Web Developer',
    description:
      'Implement Faceted Search functionality to their project using Elasticsearch and real time data collection engine Logstash to fetch records from their PostgreSQL server',
  },
  {
    icon: SkillImg14,
    company:'Tricket.in',
    name: 'Backend Developer',
    description:
      'Design entire backend in Nodejs (TypeScript) following MVC architecture for their Game and Admin APIs [ user-onboarding, handling real time data (firebase), using ORM tool (Sequilize) for PostgreSQL]',
  },
  {
    icon: SkillImg15,
    company:'Eatoes',
    path:'https://drive.google.com/file/d/1Lsp3_Ey2qyLC3qZgnkBmkrKPd_eqMhmJ/view?usp=drive_link',
    name: 'Backend Developer',
    description:
      'Design and built APIs using Nodejs (JavaScript) [for user-onboarding, user validation and backlisting] & for Business logic. Built web scrapper to crawl restaurants data from multiple sources',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
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
