import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "DIGITAL MARKETING EXECUTIVE",
    paragraph:
      "Join our dynamic team as Digital Marketing Executive, leveraging your 3+ years of experience to drive innovative digital strategy.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "26-Feb-2024",
  },
  {
    id: 2,
    title: "BUSINESS DEVELOPMENT REPRESENTATIVE",
    paragraph:
      "Required a Business Development Representative with 1-2 years of IT products and services sale experience.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "26-Feb-2024",
  },
  {
    id: 3,
    title: "FULL STACK DEVELOPER",
    paragraph:
      "Seeking a Full Stack Developer, 2-3 years of experience to contribute to the design, development and maintenance of our web applications.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "26-Feb-2024",
  },
];
export default blogData;