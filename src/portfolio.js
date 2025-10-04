/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "martinhuszti",
  title: "Hi, I'm Martin,",
  subTitle: emoji(
    `a well-rounded, hardworking Cyber Security master’s student with 3.5+ years of professional software engineer experience 💪.
    Currently doing my final semester in University of Turku 🎓, but I'm living in Helsinki 🏙.
    I'm mostly focused on mobile application development 📱 (both native and cross platform), but full-stack development is also a strong side of mine.`
  ),
  resumeLink: null, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/martinhuszti/",
  github: "https://github.com/martinhuszti",
  // gmail: "martin",
  gitlab: "https://gitlab.com/martinhuszti",
  // facebook: "https://www.facebook.com/huszti.martin",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Full-stack development 💻 but my favourite part is mobile development 📱",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "kotlin/ java",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fas fa-mobile"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "dart",
      fontAwesomeClassname: "fas fa-meteor"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: `type- javascript`,
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      schoolName: "University of Turku",
      logo: require("./assets/logos/turku.jpg"),
      subHeader: "Cyber Security - Master of Science | EIT Double Degree",
      duration: "September 2021 - July 2022",
      desc: `Thesis about Security Analysis of Android Applications`,
      desc2: `Specialization in Security of Networked Systems took courses on:`,
      descBullets: [
        "Security Engineering",
        "Secure Sensor Network Systems",
        "Protocol Processing and Security",
        "Firewall and IPS Technology",
        "Innovation and Entrepreneurship Studies"
      ]
    },
    {
      schoolName: "KTH Royal Institute of Technology",
      logo: require("./assets/logos/kth.svg"),
      subHeader: "EIT Digital Summer School",
      duration: "August 2021 - 2 weeks",
      desc: "Certificate of Program Completion | Internet of Things and Business Transformation",
      descBullets: [
        "Solving bridge monitoring problems in the infrastructure sector with IoT"
      ]
    },
    {
      schoolName: "University of Trento",
      logo: require("./assets/logos/untin.png"),
      subHeader: "Cyber Security - Master of Science | EIT Double Degree",
      duration: "September 2020 - August 2021",
      desc: `Took courses on:`,
      descBullets: [
        "Introduction to Computer and Network Security",
        "Security Testing",
        "Privacy and Intellectual Property Rights",
        "Network Security",
        "Multimedia Data Security",
        "Cyber Security Risk Assessment",
        "Innovation and Entrepreneurship",
        "Business Development Laboratory"
      ]
    },
    {
      schoolName: "Budapest University of Technology and Economics",
      logo: require("./assets/logos/bme.jpeg"),
      subHeader: "Computer Engineering - Bachelor of Science",
      duration: "September 2016 - February 2020",
      desc: "Specialization in Mobile Technologies",
      descBullets: [
        "Thesis about Modern Architectures and Technologies in Android Development",
        "Extra courses on Advanced Android, IOS, and NodeJS server development"
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
      role: "Software Engineer",
      company: "Dream Broker Oy",
      companylogo: require("./assets/logos/dreambroker.png"),
      companyLink: "https://dreambroker.com/",
      date: "Nov 2021 – Present",
      desc: "Leading android application development",
      descBullets: [
        "In Kotlin and Java language",
        "Security analysis and penetration testing",
        "MVVM architecture (reactive and observable approaches)",
        "Data- and View binding",
        "Coroutines",
        "Dependency injection",
        "Persistent and secured data storing and synchronization",
        "Notification handling"
      ]
    },
    {
      role: "Mobile Architect",
      company: "ohhi world Startup",
      companylogo: require("./assets/logos/ohhi.png"),
      companyLink: "https://ohhi.world/",
      date: "Feb 2021 – Nov 2021",
      desc: "Leading mobile (iOS and Android) and backend development with Flutter and Firebase technology",
      descBullets: [
        "Cross platform mobile application in Flutter",
        "Headless backend implementation with Firebase",
        "Navigation,  Dependency Injection and State handling with GetX flutter library",
        "SMS-OTP based authentication with Firebase",
        "Cloud Firestore",
        "Cloud Function",
        "Real-time data sync-update",
        "Secured communication and authorization between mobile application and firebase"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Develops Hungary Kft.",
      companylogo: require("./assets/logos/develops.png"),
      companyLink: "https://develops.hu/",
      date: "June 2020 – Nov 2021",
      desc: "Full Stack development with modern technologies, mostly focused on mobile side",
      descBullets: [
        "Participated in more than 10 projects including mobile, web, and backend solutions",
        "Led 5 different mobile development projects",
        "Created multiple software solutions for companies",
        "Web payment integration",
        "AWS headless backend integration"
      ]
    },
    {
      role: "Software Engineer",
      company: "Nokia Bell Labs",
      companylogo: require("./assets/logos/nokia.png"),
      companyLink: "https://www.bell-labs.com/",
      date: "Jan 2020 – June 2020",
      desc: "Worked in various Research & Development projects",
      descBullets: [
        "Main Android developer for a research project",
        "Koin dependency injection framework",
        "Kotlin Coroutines",
        "Android tablet application optimization",
        "Custom protocol design and implementation",
        "Custom real-time communication with IOT device through TCP",
        "Software engineer in robot programming",
        "Raspberry Pi programming with python",
        "Real time communication with Android device",
        "Software engineer in Unreal Engine 4 game development project",
        "Unreal Engine 4 game development with Map design and simulation implementation"
      ]
    },
    {
      role: "Junior Android Developer",
      company: "Vodafone Hungary",
      companylogo: require("./assets/logos/vodafone.png"),
      companyLink: "https://www.vodafone.hu/",
      date: "Sept 2019 – Jan 2020",
      desc: "Created frontend Android application using VIPER and MVVM architectures with an agile software development team",
      descBullets: [
        "Modern technologies",
        "VIPER | MVVM architecture",
        "SCRUM working framework",
        "RxJava/RxKotlin",
        "Google's Dagger2 dependency injection",
        "REST API",
        "JWT authentication implementation",
        "Working in SCRUM "
      ]
    },
    {
      role: "Project Manager",
      company: "schdesign",
      companyLink: "https://schdesign.hu/",
      companylogo: require("./assets/logos/schdesign.png"),
      date: "Mar 2019 – Jun 2020",
      desc: "Managing all the projects, keeping deadlines, communicating with different customers",
      descBullets: [
        "More than 50 projects in one year",
        "Responsible member of the management team",
        "Introduced and updated Trello framework"
      ]
    },
    {
      role: "Junior Android and Web Developer",
      company: "Lightport",
      companyLink: "https://lightport.hu/",
      companylogo: require("./assets/logos/lightport.png"),
      date: "Feb 2019 – Sept 2019",
      desc: "Developed a car leasing mobile application with Java and Kotlin for MKB bank and several web applications for customers",
      descBullets: [
        "Android application development with Kotlin and Java",
        "MVVM architecture implementation",
        "Static analysis setup with SonarQube",
        "Web technologies",
        "Mobile technologies",
        "DevOps Continous integration setup with Docker, GitLab CI, and Jenkins"
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
      image: require("./assets/logos/ohhi.png"),
      projectName: "ohhi",
      projectSubTitle: "IOS / Android / Firebase",
      projectDesc: `A social application where users can share their interests with people around them`,
      technologies: ["Flutter", "Dart", "Typescript"],
      descBullets: [
        "Cloud Firestore and Cloud Functions for backend",
        "Real time chat"
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://ohhi.world/"
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/ohhi_world/"
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/ohhi.world/"
        }
      ]
    },
    {
      image: require("./assets/logos/votesess.png"),
      projectName: "VoteSess",
      projectSubTitle: "IOS / Android",
      projectDesc: `A social media application where users can share their videos and pictures.`,
      descBullets: ["Video / Photo", "Cross platform with React Native"],
      technologies: ["React Native", "Typescript"],
      footerLink: [
        {
          name: "Website",
          url: "https://www.uniqpon.com/"
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/uniqpon/"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/votesess/id1588036776"
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.votesess.app"
        }
      ]
    },
    {
      image: require("./assets/logos/pizzasprint.png"),
      projectName: "Pizza Sprint",
      projectSubTitle: "Frontend / Backend / CMS",
      projectDesc: `A restaurant website with online ordering system`,
      descBullets: [
        "Implementation of the Backend side with online payment and invoice system integrations",
        "Content Management System for workers",
        "Frontend for customers"
      ],
      technologies: ["React", "TypeScript", "NodeJs", "Express"],
      footerLink: [
        {
          name: "Website",
          url: "https://www.pizzasprint.hu/"
        }
      ]
    },
    {
      image: require("./assets/logos/skillscom.webp"),
      projectName: "SkillsCom",
      projectSubTitle: "Android / IOS",
      projectDesc: `A unique platform that allows students, vocational training institutions, educators and companies involved in dual training to find each other.`,
      descBullets: ["Acted as the lead developer in mobile development"],
      technologies: ["React Native", "Typescript"],
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/hu/app/skillscom/id1551926599"
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=hu.ikk.skillscom"
        }
      ]
    },

    {
      image: require("./assets/logos/my-vodafone.webp"),
      projectName: "My Vodafone",
      projectSubTitle: "Android",
      projectDesc: `A mobile application to track Vodafone account`,
      descBullets: [
        "Applied modern architecture technologies and built modular application",
        "Helped in communicating issues between the test and the development team"
      ],
      technologies: ["Kotlin"],
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.myvodafoneapp&hl=en&gl=US"
        }
      ]
    },
    {
      image: require("./assets/logos/nivo.png"),
      projectName: "Nivo",
      projectSubTitle: "Web, Backend",
      projectDesc: `A company product website and online ordering system`,
      descBullets: [
        `Created customized website for customers which allows price calculation depending on various pre-defined variables`,
        `Created backend service that integrated the new frontend with the customer's CMS platforms`
      ],
      technologies: ["NextJs", "JavaScript", "NodeJs", "Express", "SCSS"],
      footerLink: [
        {
          name: "Website",
          url: "https://nivo.hu/"
        }
      ]
    },

    {
      image: require("./assets/logos/raspberry.png"),
      projectName: "DrawBot",
      projectSubTitle: "Raspberry Pi / Android",
      projectDesc: `The user draws on the tablet while the robot will draw the same thing on a piece of paper. The robot is configurable with voltage, speed, real-time drawing settings through the application.`,
      descBullets: [
        "Created an Android application that is able to communicate with Raspberry Pi which controls the robot",
        "Created Python program that listens to android instruction",
        "Created communcation protocol between the android device and the robot"
      ],

      technologies: ["Kotlin", "Python"],
      footerLink: []
    },
    {
      image: require("./assets/logos/scanimal.webp"),
      projectName: "Scanimal",
      projectSubTitle: "IOS / Android / AWS",
      projectDesc: `A community application for pet owners and their pets.`,
      technologies: ["React Native", "Typescript", "NodeJs"],
      descBullets: [
        "Used AWS Lambda for serverless backend",
        "Used AWS DynamoDb for NoSQL database",
        "Fully functioning mobile application with authentication, location sharing and tracking and reporting functions"
      ],
      footerLink: [
        {
          name: "Website",
          url: "https://appadvice.com/app/scanimal/1513796963"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/hu/app/scanimal/id1513796963"
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.develops.scanimal"
        }
      ]
    },
    {
      image: require("./assets/logos/unreal_engine.png"),
      projectName: "City Simulator",
      projectSubTitle: "Unreal Engine 4",
      projectDesc: `Modelled a city with buildings, cars, and terrain roads in Unreal Engine 4`,
      technologies: ["C#"],
      footerLink: []
    },
    {
      image: require("./assets/logos/card_scan.png"),
      projectName: "ID Scanner",
      projectSubTitle: "IOS / Android",
      projectDesc: `An mobile application which allows the user to scan Covid Pass and show its validity`,
      technologies: ["React Native", "Typescript"],
      footerLink: []
    },
    {
      image: require("./assets/logos/obnb.svg"),
      projectName: "OBNB",
      projectSubTitle: "IOS / Android",
      projectDesc: `A frontend application where the user can see building informations.`,
      descBullets: ["User interface visualization based on dynamic content"],
      technologies: ["React Native", "Typescript"],
      footerLink: []
    },

    {
      image: require("./assets/logos/youtrack.png"),
      projectName: "YouTrack Plugin",
      projectSubTitle: "YouTrack Widget / Backend",
      projectDesc: `A proprietary, commercial browser-based bug tracker, issue tracking system, and project management software.`,
      descBullets: [
        "Developed the server which calculates statistics about users such as efficiency and estimated work hours with the help of the backend."
      ],
      technologies: ["Javascript"],
      footerLink: []
    },
    {
      image: require("./assets/logos/smart-lizing.webp"),
      projectName: "Smart Lizing",
      projectSubTitle: "Android",
      projectDesc: `
      An application with a comprehensive database that helps users find the most suitable new or used car which also offers an online leasing calculation.`,
      descBullets: [
        "Converted Java - MVC architecture into MVVM architecture in Kotlin",
        "Implemented new features",
        "Optimized the code"
      ],
      technologies: ["Kotlin", "Java"],
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.lightport.mkb.smartcar.android&hl=en&gl=US"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Other Achievements🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "Cybersecurity Hackathon 2020 1st place",
      subtitle:
        "Our team, SecurIT, had to find and solve problems about digital footprint.",
      image: require("./assets/logos/oxo.png"),
      footerLink: [
        {
          name: "News",
          url: "http://www.bme.hu/hirek/20201021/Kiberbiztonsagi_versenyt_nyertek_muegyetemi_hallgatok"
        }
      ]
    },
    {
      title: "Summer School Certificate",
      subtitle:
        "Certificate of Program Completion | Internet of Things and Business Transformation",
      image: require("./assets/logos/kth.svg"),
      footerLink: [
        {
          name: "Certificate",
          url: require("./assets/docs/Martin_Huszti_Certificate.pdf")
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
  title: emoji("Contact Me ☎️"),
  subtitle: "Write me a PM in LinkedIn",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
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
