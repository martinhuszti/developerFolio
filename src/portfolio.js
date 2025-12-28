/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Martin Huszti",
  title: "Hi, I'm Martin Huszti",
  subTitle:
    "Senior Mobile Developer with 7+ years of experience delivering Android and iOS solutions across healthcare, media, and R&D domains. Specialized in mobile development but also comfortable with DevOps and full-stack development.",
  resumeLink: "custom", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/martinhuszti/",
  github: "https://github.com/martinhuszti",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Skills",
  skills: [
    emoji(
      "📱 Mobile Development: Android (Kotlin/Java), iOS (Swift), and cross-platform solutions with Flutter and React Native."
    ),
    emoji(
      "🚀 DevOps: Automating build, test, and deployment pipelines using GitLab-CI, Github Actions, Docker, Jenkins and Firebase."
    ),
    emoji(
      "☁️ Backend & Cloud: Building and deploying backend services with Node.js and leveraging Firebase and AWS for cloud infrastructure."
    )
  ],

  softwareSkills: [
    {
      skillName: "android (kotlin/java)",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "ios (swift)",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "gitlab-ci",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "node js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Security Analysis of --- Android Applications",
      subHeader: "Master's Thesis",
      link: "https://www.utupub.fi/handle/10024/154737",
      duration: "Sep 2022",
      desc: "Research focused on Android application security, combining static and dynamic analysis techniques.",
      descBullets: [
        "The thesis has been cited multiple times in IEEE publications."
      ]
    },
    {
      schoolName: "University of Turku - Finland",
      logo: require("./assets/logos/turku.jpg"),
      subHeader: "Master's Double Degree in EIT Digital - Cyber Security",
      duration: "Sep 2021 - Jun 2022",
      desc: "Completed the specialization year of the EIT Digital Master's in Cyber Security.",
      descBullets: [
        "Specialized in Security of Networked Systems, combining advanced technical courses with innovation and entrepreneurship.",
        "Recipient of the EIT Digital Excellence Scholarship."
      ]
    },
    {
      schoolName: "KTH Royal Institute of Technology",
      logo: require("./assets/logos/kth.png"),
      subHeader: "Summer School in IoT and Business Transformation",
      duration: "Aug 2021",
      desc: "EIT Digital Summer School Program.",
      descBullets: [
        "Intensive two-week program focused on IoT and Business Transformation."
      ]
    },
    {
      schoolName: "University of Trento - Italy",
      logo: require("./assets/logos/unitrento.webp"),
      subHeader: "Master's Double Degree in EIT Digital - Cyber Security",
      duration: "Sep 2020 - Jun 2021",
      desc: "Completed the entry year of the EIT Digital Master's program.",
      descBullets: [
        "Covered the Cyber Security common core (network security, cryptography, system security).",
        "Completed a minor in Innovation & Entrepreneurship.",
        "Recipient of the EIT Digital Excellence Scholarship."
      ]
    },
    {
      schoolName: "Budapest University of Technology and Economics",
      logo: require("./assets/logos/bme.jpeg"),
      subHeader: "Bachelor's degree in Computer Engineering",
      duration: "Sep 2016 - Jan 2020",
      desc: "Specialized in Automation and Applied Informatics, focusing on mobile application development.",
      descBullets: [
        "Authored a thesis on Android application development, emphasizing modern architectures and cutting-edge technologies."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Mobile Developer",
      company: "BeeHealthy",
      companylogo: require("./assets/logos/beehealthy.png"),
      companyLink: "https://beehealthy.com/",
      date: "Oct 2022 - Present",
      desc: "Private and Public Healthcare SaaS",
      descBullets: [
        "Leading mobile development for Bookings, Surveys, and Attachment modules across 19 mobile apps in 8 countries with over 800,000 installs.",
        "Implemented 3rd-party digital triage using KrakenD and Infermedica.",
        "Optimized mobile CI/CD pipelines in Gitlab CI (static analysis, caching)."
      ]
    },
    {
      role: "Software Engineer",
      company: "Dream Broker",
      companylogo: require("./assets/logos/dreambroker.png"),
      companyLink: "https://dreambroker.com/products/one/",
      date: "Nov 2021 - Oct 2022",
      desc: "Secure Online Video Software",
      descBullets: [
        "Full-cycle development and deployment of the Dream Broker One mobile app.",
        "Enhanced offline support, and real-time chat communication using WebSocket.",
        "Introduced modern Android technologies such as Jetpack Compose, Dagger Hilt, Coroutines, Flows and WorkManager."
      ]
    },
    {
      role: "Mobile Architect",
      company: "Ohhi",
      companylogo: require("./assets/logos/ohhi.png"),
      companyLink: "https://www.ohhi.world/",
      date: "Feb 2021 - Nov 2021",
      desc: "Social Media Platform Startup",
      descBullets: [
        "Led Flutter mobile app development, leveraging GetX for state management, navigation, and dependency injection.",
        "Built a headless Google Firebase backend using Cloud Firestore, Cloud Functions, and SMS-OTP authentication.",
        "Ensured real-time data synchronization, secure communication, and scalable architecture."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Develops.hu",
      companylogo: require("./assets/logos/develops.png"),
      companyLink: "https://develops.hu/en",
      date: "Jun 2020 - Nov 2021",
      desc: "Consulting",
      descBullets: [
        "Delivered 10+ full-stack projects, led 5 mobile apps, integrated secure web payments, and built scalable AWS-based headless backends.",
        "Cross-platform mobile development with React Native.",
        "Backend services using Node.js, Express and MySQL."
      ]
    },
    {
      role: "Research and Development Engineer",
      company: "Nokia Bell Labs",
      companylogo: require("./assets/logos/nokia.png"),
      companyLink: "https://www.nokia.com/bell-labs/",
      date: "Jan 2020 - Jun 2020",
      desc: "Research and Innovation",
      descBullets: [
        "Led Android development for a research project optimized for tablets.",
        "Designed custom communication protocols and enabled real-time TCP communication between Android and IoT devices.",
        "Developed robotic systems using Python with real-time communication."
      ]
    },
    {
      role: "Junior Android Developer",
      company: "Vodafone",
      companylogo: require("./assets/logos/vodafone.png"),
      companyLink: "https://www.vodafone.com/",
      date: "Sep 2019 - Jan 2020",
      desc: "Telecommunication / Mobile Services",
      descBullets: ["Android mobile application development"]
    },
    {
      role: "Software Engineer",
      company: "Lightport inc",
      companylogo: require("./assets/logos/lightport.png"),
      companyLink: "https://lightport.hu/index_en.shtml",
      date: "Feb 2019 - Sep 2019",
      desc: "Consulting",
      descBullets: [
        "Frontend development",
        "Backend development",
        "Mobile development"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Previous Projects"),
  subtitle: "Here are some of the projects that I loved and I’m proud of",
  projects: [
    {
      image: require("./assets/logos/raspberry.png"),
      projectName: "E-paper calendar - Inkycal",
      projectDesc:
        "Built a custom e-paper display using Raspberry Pi Zero W, PiSugar 3, and a Waveshare 7.5” E-Ink Display, integrating both hardware and software for a fully functional, low-power digital calendar solution.",
      technologies: ["Python", "Google Calendar API"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/aceinnolab/Inkycal"
        }
      ]
    },
    {
      image: require("./assets/logos/apple-watch.jpg"),
      projectName: "Apple Watch Application Project",
      projectDesc:
        "Developed a standalone Apple Watch application to track real-time electricity prices in Finland directly from the watch, with WidgetKit for live pricing data on the watch face.",
      technologies: ["Swift", "WidgetKit"],
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "ISTQB Certification - Foundation level v4.0",
      subtitle: "Issued by ISTQB, October 2025.",
      image: require("./assets/images/istqb.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://app.skillsclub.com/credential/269756-7d2eed5f92d3016d507e00d339b7c950ff3a0fb8620086615ecc7477d2f0d1be"
        }
      ]
    },
    {
      title: "CompTIA Security+",
      subtitle: "Issued by CompTIA, July 2025",
      image: require("./assets/logos/comptia.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/44f8ccb2-14d1-4450-b494-ea9dd395077d/linked_in_profile"
        }
      ]
    },
    {
      title: "Internet Of Things and Business transformation certificate",
      subtitle: "Issued by KTH Royal Institute of Technology in August 2021.",
      image: require("./assets/logos/kth.png"),
      footerLink: []
    },
    {
      title: "Cybersecurity Hackathon Winner",
      subtitle: "Awarded by National University of Public Service in 2020.",
      image: require("./assets/logos/nke.jpeg"),
      footerLink: [
        {
          name: "News Article",
          url: "http://www.bme.hu/hirek/20201021/Kiberbiztonsagi_versenyt_nyertek_muegyetemi_hallgatok"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    // {
    //   title: "Build Actions For Google Assistant",
    //   subtitle: "Codelab at GDG DevFest Karachi 2019",
    //   slides_url: "https://bit.ly/saadpasta-slides",
    //   event_url: "https://www.facebook.com/events/2339906106275053/"
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  display: false,
  title: emoji("Contacts")
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
