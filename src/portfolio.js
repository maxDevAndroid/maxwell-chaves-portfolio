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
    username: "Maxwell Chaves",
    title: "Hi, I'm Max",
    subTitle: emoji(
        "Senior Android Engineer 🚀 | 6+ years delivering high-quality mobile applications using Kotlin and Jetpack Compose. Specialized in scalable architectures, multiplatform development (KMP), and driving measurable business results, with over $200K in revenue impact for clients."
    ),
    resumeLink:
        "https://drive.google.com/file/d/1wTuowSuEleXNR_WgzVGjBwoXXnr0qgBs/view?usp=sharing",
    displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/maxDevAndroid",
    linkedin: "https://www.linkedin.com/in/maxwellchavesdev/",
    gmail: "maxwellbezerra112233@gmail.com",
    gitlab: "https://stackoverflow.com/users/14865889/maxdevandroid",
    medium: "https://medium.com/@maxwellbezerra112233",
    stackoverflow: "https://stackoverflow.com/users/10422806/maxDevAndroid",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I Do",
    subTitle: "PASSIONATE ANDROID ENGINEER BUILDING INNOVATIVE, SCALABLE, AND BEAUTIFULLY CRAFTED APPS",
    skills: [
        emoji("⚡ Architecting and developing high-performance Android apps using Kotlin and Jetpack Compose"),
        emoji("⚡ Designing clean, scalable, and maintainable architectures (MVVM, Clean Architecture, KMP)"),
        emoji("⚡ Integrating cloud and third-party services (AWS, Firebase, Stripe, REST APIs, GraphQL)"),
        emoji("⚡ Building delightful UI/UX experiences with Compose and Material Design 3"),
        emoji("⚡ Automating CI/CD pipelines, optimizing performance, and ensuring production-grade quality")
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
    /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "Android",
            fontAwesomeClassname: "fab fa-android"
        },
        {
            skillName: "Kotlin",
            fontAwesomeClassname: "fas fa-code"
        },
        {
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "Jetpack Compose",
            fontAwesomeClassname: "fas fa-layer-group"
        },
        {
            skillName: "Kotlin Multiplatform (KMP)",
            fontAwesomeClassname: "fas fa-project-diagram"
        },
        {
            skillName: "AWS",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "Firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "Ktor",
            fontAwesomeClassname: "fas fa-server"
        },
        {
            skillName: "Git / GitHub",
            fontAwesomeClassname: "fab fa-git-alt"
        },
        {
            skillName: "Room / SQL",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "CI/CD (GitHub Actions)",
            fontAwesomeClassname: "fas fa-cogs"
        },
        {
            skillName: "Docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "Python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "GraphQL / REST",
            fontAwesomeClassname: "fas fa-exchange-alt"
        },
        {
            skillName: "Testing (JUnit, MockK, Turbine)",
            fontAwesomeClassname: "fas fa-vial"
        }
    ],
    display: true
};


// Education Section

const educationInfo = {
    display: true,
    schools: [
        {
            schoolName: "Estácio de Sá University",
            logo: require("./assets/images/estacioLogo.png"),
            subHeader: "Bachelor's Degree in Computer Science",
            duration: "July 2020 - December 2024",
            desc: "Focused on software engineering, algorithms, data structures, and system design. Developed Android applications with real-world impact during academic research projects.",
            descBullets: [
                "Developed local mobile solutions to improve digital accessibility.",
                "Collaborated on research involving mobile usability and system optimization."
            ]
        },
        {
            schoolName: "Udemy",
            logo: require("./assets/images/udemyLogo.png"),
            subHeader: "Mobile Penetration Testing for Android Applications",
            duration: "September 2022 - December 2022",
            desc: "Learned advanced techniques to assess and secure Android applications against real-world threats.",
            descBullets: [
                "Performed real-world security audits and penetration testing on Android apps.",
                "Mastered SSL Pinning bypass techniques and reverse engineering fundamentals.",
                "Explored OWASP Top 10 Mobile vulnerabilities and mitigation strategies.",
                "Conducted Android malware behavior analysis and detection patterns."
            ]
        },
        {
            schoolName: "Udemy",
            logo: require("./assets/images/udemyLogo.png"),
            subHeader: "Android TDD Masterclass – Coroutines & Jetpack",
            duration: "January 2021 - February 2021",
            desc: "Built a production-grade Android application using modern architecture patterns and test-driven development.",
            descBullets: [
                "Implemented Clean Architecture with Kotlin, Hilt, Jetpack Navigation, Flow, and MVVM.",
                "Applied Outside-In Test-Driven Development to ensure scalability and maintainability."
            ]
        },
        {
            schoolName: "Udemy",
            logo: require("./assets/images/udemyLogo.png"),
            subHeader: "Master CI/CD for Android Developers",
            duration: "July 2023 - August 2023",
            desc: "Automated build, testing, and deployment pipelines for Android apps using modern DevOps practices.",
            descBullets: [
                "Configured CI/CD pipelines with App Center and GitHub Actions.",
                "Automated app distribution, error tracking, and branch protection policies.",
                "Streamlined collaboration through automated testing and release workflows."
            ]
        },
        {
            schoolName: "Udemy",
            logo: require("./assets/images/udemyLogo.png"),
            subHeader: "Jetpack Compose Crash Course for Android with Kotlin",
            duration: "October 2023 - November 2023",
            desc: "Mastered declarative UI development with Jetpack Compose for modern Android applications.",
            descBullets: [
                "Built dynamic UI and animations using Compose and Material Design 3.",
                "Integrated Compose with ViewModel, Navigation, Coroutines, and Retrofit.",
                "Applied Compose within MVVM architecture for scalable, reactive apps."
            ]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true,
    experience: [
        {
            Stack: "Android Development (Kotlin / Jetpack Compose)",
            progressPercentage: "95%"
        },
        {
            Stack: "Backend & API Development (Ktor / AWS / Firebase)",
            progressPercentage: "90%"
        },
        {
            Stack: "Architecture & Clean Code (MVVM / KMP / TDD)",
            progressPercentage: "88%"
        },
        {
            Stack: "Cloud & DevOps (CI/CD / Docker / GitHub Actions)",
            progressPercentage: "85%"
        },
        {
            Stack: "UI/UX Design & Performance Optimization",
            progressPercentage: "80%"
        }
    ],
    displayCodersrank: false
};


// Work experience section

const workExperiences = {
    display: true,
    experience: [
        {
            role: "Software Engineer",
            company: "TriVisionTech",
            companylogo: require("./assets/images/trivisiontechLogo.png"),
            date: "December 2024 – Present",
            desc: "",
            descBullets: [
                "Designing and developing modern, scalable, and user-centric Android solutions for the river transportation and digital ticketing sector.",
                "Owning the full mobile architecture — Kotlin, Jetpack Compose, and Kotlin Multiplatform (KMP) — applying MVVM and Clean Architecture principles.",
                "Building secure, testable, and performant features with automated testing, end-to-end encryption, error handling, and payment integrations (Pix, Boleto, Credit Card).",
                "Leading daily stand-ups, managing tasks through Agile methodologies (Scrum/Kanban), aligning deliveries with business goals, and driving continuous product and UX improvement."
            ]
        },
        {
            role: "Software Engineer",
            company: "Instituto Atlântico",
            companylogo: require("./assets/images/iaLogo.png"),
            date: "May 2021 – November 2024",
            desc: "",
            descBullets: [
                "Developed and maintained large-scale Android applications for international markets using Kotlin, Jetpack Compose, and MVVM.",
                "Collaborated with global, cross-functional teams and participated in code reviews to maintain technical excellence and consistency.",
                "Led R&D initiatives for innovative mobile solutions, enhancing performance, scalability, and maintainability.",
                "Implemented modular architectures and Clean Architecture patterns to ensure long-term code quality and team productivity."
            ]
        },
        {
            role: "Software Engineer",
            company: "AtlasTech",
            companylogo: require("./assets/images/atlastechLogo.png"),
            date: "January 2020 – May 2021",
            desc: "",
            descBullets: [
                "Enhanced and optimized e-commerce and fintech Android applications with improved performance and UX.",
                "Integrated Firebase, Retrofit, and Room for efficient data handling, caching, and API communication.",
                "Contributed to scalable mobile architectures using Kotlin, Coroutines, and MVVM for multiple product lines."
            ]
        },
        {
            role: "IT Support Specialist",
            company: "I.E.N.S.F",
            companylogo: require("./assets/images/iensfLogo.png"),
            date: "February 2018 – January 2020",
            desc: "",
            descBullets: [
                "Provided system and hardware maintenance to ensure high availability and operational continuity.",
                "Managed local network configurations, monitored performance, and resolved connectivity and security issues.",
                "Applied best practices for endpoint protection, data integrity, and system optimization."
            ]
        }
    ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "Saayahealth",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://saayahealth.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Nextu",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://nextu.se/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements & Certifications 🏆"),
    subtitle:
        "Recognitions, certifications, and milestones achieved throughout my journey as an Android developer and technology innovator.",

    achievementsCards: [
        {
            title: "🏅 Winner - HackInRio 2020 (Tourism Cluster)",
            subtitle:
                "Led the development of a smart tourism platform focused on digital transformation for the tourism sector, awarded 1st place at HackInRio 2020.",
            image: require("./assets/images/hackinriologo.png"),
            imageAlt: "HackInRio Tourism Cluster Logo",
            footerLink: [
                {
                    name: "View Certificate",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                }
            ]
        },
        {
            title: "🏆 Google Achievements",
            subtitle:
                "Recognized in Google initiatives and training programs focused on modern Android development and ecosystem innovation.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Logo",
            footerLink: [
                {
                    name: "Google Code-in Winners Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        }
    ],
    display: true
};


// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/",
            event_url: "https://www.facebook.com/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        ""
    ],
    display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",

    // Please Provide with Your Podcast embeded Link
    display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+55-21968656114",
    email_address: "maxwellbezerra112233@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
