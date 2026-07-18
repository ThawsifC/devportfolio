export const siteConfig = {
  name: "Thawsif Chowdhury",
  title: "Software Engineering Intern at ThinkNeuro",
  description: "Portfolio website of Thawsif Chowdhury",
  accentColor: "#db2777",
  social: {
    email: "thawsifchowdhury@gmail.com",
    linkedin: "http://www.linkedin.com/in/thawsif-chowdhury-1a103b392",
    twitter: "",
    github: "https://github.com/ThawsifC",
  },
  aboutMe:
    "Hi, I am Thawsif - an upcoming Sophomore at Lehigh University. I’m currently majoring in Electrical Engineering, but I have a keen interest in Computer Science and Mathematics. Other than academics and personal projects, I like to watch sports and play various competitive games.",
  skills: ["Python", "Java", "C++", "Arduino UNO", "Tinkercad", "LTSpice", "MS Office Suite", "Google Suite"],
  projects: [
    {
      name: "Mechanical Arm",
      description:
        "● Designed a mechanical hand controlled using an Arduino UNO\n ● Implemented servo motors with strings that connected to the fingers\n ● Programmed the control software in Arduino IDE (C++) to rotate servo motors in response to keyboard",
      link: "https://drive.google.com/drive/folders/18GoUOoIfCgqBmZNjHI0aGm0GWALO1LC4?usp=drive_link",
      skills: ["C++", "Arduino IDE", "Tinkercad", "Microcontrollers", "Servo Motors"],
      images: [
        {
          src: "/devportfolio/images/2.png",
          alt: "The Mechanical Hand Structure"}]
    },
    {
      name: "Arduino Irrigation System",
      description:
        "● Designed a controlled irrigation system using Arduino UNO to maintain optimum soil moisture levels\n ● Programmed in C++ to display real-time analog data of moisture levels using a soil sensor\n ● Implemented a threshold logic (500 ADC) which activated the motor via a relay module to water plants ",
      link: "https://drive.google.com/drive/folders/1IAOP78hrFnlELp_sCbBZj68Zc2DOMZXX?usp=drive_link",
      skills: ["C++", "Arduino IDE", "Tinkercad", "Microcontrollers", "Relay Modules", "Moisture Sensors"],
      images: [{src:"/devportfolio/images/1.png", alt:"The Irrigation System Structure"}]
    }
  ],
  experience: [
    {
      company: "ThinkNeuro",
      title: "Software Engineering Intern",
      dateRange: "Jun 2026 - Present",
      bullets: [
        "Manage version control using Git fundamentals such as merging, pulling, branching, committing to prevent code conflicts among collaborators"
      ],
    },
    {
      company: "Lehigh University Creative Inquiry",
      title: "Global Social Impact Fellow - PureSpaces",
      dateRange: "Jan 2026 - Present",
      bullets: [
        "Coordinating an international partnership between 3 universities to implement low-cost, high efficiency air purifiers in Almaty, Kazakhstan targeting a $10.5B health crisis caused by extreme air pollution",  
        "Lead the experimental validation of PureAura filtration systems, executing 9+ trials using Bunsen burners and IQ Air monitors to analyze 1-minute interval CSV data to ensure PM 2.5 stability"
      ],
    },
    {
      company: "Lehigh University Community Service Office",
      title: "America Reads America Counts Tutor",
      dateRange: "Sep 2025 - May 2026",
      bullets: [
        "Tutored 40+ 8th-grade students in Science, English, Math to prepare them for high school coursework",  
        "Dedicated 3 hours per week across 3 sessions to clarify 10+ core concepts in Science, English, Math"
      ],
    },
    {
      company: "Vaughn College",
      title: "Engineering Student Researcher",
      dateRange: "Jul 2024 - Aug 2024",
      bullets: [
        "Engineered and trained a Convolutional Neural Network (CNN) model for handwritten digit recognition and a Long Short-Term Memory (LSTM) model for performing sentiment analysis on a dataset of 50,000 IMDb movie reviews",
        "Implemented a machine learning system using a Linear Regression model for analyzing housing prices",
        "Engineered an AI-powered voice recognition program using Python to control game movements", 
        "Developed a research project on AI voice recognition in games like Pac-Man" 
      ],
    }
  ],
  education: [
    {
      school: "Lehigh University",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2025 - 2029",
      achievements: [
        "Dean's List with a GPA of 3.96"
      ]
    },
  ],
};
