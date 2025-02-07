import skd from "./images/skd.png";
import aqua from "./images/aqua.png";
import ga from "./images/ga.jpeg";
import uob from "./images/uob.png";

export const profile = {
  name: "Abbas Naser",

  brandStatement:
    "Software Engineer and Data Analyst with Electrical Engineering background. A fast learner motivated by solving problems that have an impact on people, business and myself.",
  email: "",
  linkedInAccount: "http://www.linkedin.com/in/abbas-naser",
};

export const highlightedSkill = [
  {
    icon: "code",
    title: "Programming languages",
    text: "JavaScript, HTML, CSS, Python, Dart",
  },
  {
    icon: "code_blocks",
    title: "Frameworks and Libraries",
    text: "Flutter, React, Express",
  },

  {
    icon: "analytics",
    title: "Data Analytics",
    text: "Python, Pandas, SQL, Excel",
  },
  {
    icon: "bar_chart",
    title: "Data Visualization",
    text: "Power BI, Tableau",
  },
  {
    icon: "database",
    title: "Databases",
    text: "MongoDB, PostgreSQL",
  },
  {
    icon: "terminal",
    title: "Others",
    text: "Node.js, Web Scraping (Selenium, BeautifulSoup), Large Language Models (LLM), Github, Mongoose, OAuth - Google Auth, JWT authentication, EJS, Cloudinary, Bootstrap",
  },
];

export const toDo = [
  {
    icon: "clock_loader_10",
    text: "Create a mobile app using Flutter to help people learn Tajweed",
    doing: true,
    done: false,
  },
  {
    icon: "radio_button_checked",
    text: "Learn Data Analytics",
    doing: false,
    done: true,
  },
];

export const languages = [
  {
    icon: "language",
    text: "Arabic (Native) , English (Intermediate)",
  },
];

export const education = [
  {
    title: "Data Analytics Immersive Program",
    location: "General Assembly, Bahrain",
    date: "Oct 2024 - Jan 2025",
    img: ga,
  },
  {
    title: "Software Engineering Immersive Program",
    location: "General Assembly, Bahrain",
    date: "Jun - Sep 2023",
    img: ga,
  },
  {
    title: "B.Sc. in Electrical Engineering",
    location: "University of Bahrain, Bahrain",
    date: "Sep 2013 - Mar 2019",
    img: uob,
  },
];
export const experienses = [
  {
    img: skd,
    title: "Electrical Engineer",
    location: "SKD Group, Bahrain",
    date: "Oct - Dec 2022",
    tasks: [
      "Overseeing the installation of electrical systems to ensure that they meet the standards",
      "Talking to customers to get their requirements and adjustments on the project",
      "Calculating the appropriate sizes for cables, wires and other electrical equipment",
    ],
  },
  {
    img: aqua,
    title: "Electrical Engineer",
    location: "Aqua Technology Transfer, Bahrain",
    date: "Oct 2020 - Sep 2022",
    tasks: [
      "Testing of electrical motors",
      "Troubleshooting electrical problems",
      "Logging defective machines issues and keeping track of the fixing process stages",
    ],
  },
];
