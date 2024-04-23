

// Define the TFeature type
export interface TFeature {
  id: number;
  image: string; // Add the image property
  title: string;
  paragraph: string;
}

// Define the array of features
const featuresData: TFeature[] = [
  {
    id: 1,
    image: "/images/techstack/java.png",
    title: "Java Development ",
    paragraph:
      "Fuel robust, scalable solutions with Java. Harness the power of Spring Boot for streamlined development and Hibernate for seamless database integration. Elevate your enterprise software.",
  },
  {
    id: 2,
    image: "/images/techstack/python.png",
    title: "Python Development",
    paragraph:
      "Craft dynamic applications with Python. Utilize Django for rapid development and Flask for lightweight solutions. Python’s versatility powers data science, AI and web development.",
  },
  {
    id: 3,
    image: "/images/techstack/ml.png",
    title: "Machine Learning and AI",
    paragraph:
      "Elevate insights with machine learning and AI. Python frameworks TensorFlow and PyTorch drive innovation, enabling predictive analytics and intelligent decision-making.",
  },
  {
    id: 4,
    image: "/images/techstack/js.png",
    title: "JavaScript Development",
    paragraph:
      "Empower your web presence with JavaScript. Leverage React for interactive UI, Node.js for server-side power and Express.js for swift back-end development. Unleash full-stack potential.",
  },
  {
    id: 5,
    image: "/images/techstack/php.png",
    title: "PHP Development",
    paragraph:
      "Drive web innovation with PHP. Employ Laravel for robust frameworks and Symfony for modular, maintainable code. PHP excels in dynamic website and application development.",
  },
  {
    id: 6,
    image: "/images/techstack/appdevelopment.png",
    title: "Mobile App Development",
    paragraph:
      "Enrich user experiences with mobile app development. iOS thrives with Swift, while Android excels with Kotlin and Flutter. React Native unifies cross-platform development, ensuring broader reach.",
  },
  {
    id: 7,
    image: "/images/techstack/upload.png",
    title: "Cloud Computing",
    paragraph:
      "Scale effortlessly with cloud computing. Amazon Web Services (AWS), Microsoft Azure and Google Cloud Platform (GCP) empower seamless, reliable and scalable solutions for diverse business needs.",
  },
  {
    id: 8,
    image: "/images/techstack/devops.png",
    title: "DevOps and CI/CD",
    paragraph:
      "Transform workflows with DevOps principles. Embrace Continuous Integration and Continuous Deployment (CI/CD) pipelines using Jenkins, GitLab CI and Travis CI for agile, efficient development.",
  },
  {
    id: 9,
    image: "/images/techstack/database.png",
    title: "Database Management",
    paragraph:
      "Ensure data efficiency with diverse database solutions. MySQL and PostgreSQL offer relational strength, MongoDB excels in NoSQL, while Redis boosts caching and real-time applications.",
  },
  {
    id: 8,
    image: "/images/techstack/programming.png",
    title: "Front-End Technologies",
    paragraph:
      "Craft captivating interfaces using front-end technologies. HTML5, CSS3 and modern JavaScript libraries like ReactJS, Vue.js and Angular bring user-centric design to the forefront.",
  },
  {
    id: 9,
    image: "/images/techstack/cybersecurity.png",
    title: "Cybersecurity",
    paragraph:
      "Safeguard your digital landscape. Employ cybersecurity technologies like SSL, firewalls and intrusion detection systems to fortify networks and protect sensitive data.",
  },
  {
    id: 10,
    image: "/images/techstack/figma.png",
    title: "UI/UX",
    paragraph:
    "Design with Figma, Adobe XD and Sketch. Craft captivating interfaces, prototype seamlessly and elevate user experiences effortlessly."
      //"Safeguard your digital landscape. Employ cybersecurity technologies like SSL, firewalls and intrusion detection systems to fortify networks and protect sensitive data.",
  },
  // {
  //   id: 10,
  //   image: "/images/techstack/technical-support.png",
  //   title: "MAINTENANCE & SUPPORT",
  //   paragraph:
  //     "Ongoing & prompt support (L1 and L2) to maintain the seamless operation of IT systems. Transparent information about maintenance schedules, support availability and associated costs.",
  // },
  // {
  //   id: 11,
  //   image: "/images/techstack/iot.png",
  //   title: "IOT",
  //   paragraph:
  //     "Explore the endless possibilities of IoT integration for your business with our comprehensive solutions. Seamlessly connect devices, collect data and optimize operations.",
  // },
 
  // {
  //   id: 13,
  //   image: "/images/techstack/bitcoins.png",
  //   title: "BLOCKCHAIN",
  //   paragraph:
  //     "Discover the power of blockchain technology for your business. Improve security, transparency and efficiency with blockchain solutions tailored to your needs. Stay ahead of the curve and revolutionize your operations with blockchain integration.",
  // },
  // {
  //   id: 14,
  //   image: "/images/techstack/programing.png",
  //   title: "WEBSITE DEVELOPMENT",
  //   paragraph:
  //     "Creating modern, responsive websites aligned with brand identity. Transparent pricing models and regular updates for a clear development journey.",
  // },

  // Add other feature objects...
];

export default featuresData;
