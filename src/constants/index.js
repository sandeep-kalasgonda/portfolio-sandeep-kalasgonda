import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte,
  aws,
  kubenetes,
  Terraform,
  linux


} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: ux,
  },
  {
    title: "Monitoring and Logging",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML ',
    icon: aws,
  },
  {
    name: 'CSS 3',
    icon: kubenetes,
  },
  {
    name: 'JavaScript',
    icon: Terraform,
  },
   {
     name: 'TypeScript',
     icon: linux,
   },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  //{
     //name: 'postgresql',
    //icon: postgresql,
 // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },

  {
     name: 'postgresql',
    icon: css,
 },
];

const experiences = [
  {
    title: 'DevOps Intern',
    company_name: 'Subhanu Technologies',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'July 2024 - Present',
  },
  {
    title: 'SDE Intern',
    company_name: 'VidPhone',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2023 - Sep 2023',
  },
  {
    title: 'B.tech CSE',
    company_name: ' VTU, Belgaum',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Oct 2021 - May 2024',
  },
  {
    title: 'Diploma, Computer Enginnering',
    company_name: 'MSBTE, Mumbai',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2018 - Aug 2023',
  },
];

const projects = [
  {
    id: "project-1",
    name: "DevOps: Lean and Agile ",
    description: "View my verified achievement from LinkedIn Learning certificate.",
    image: foundation,
    repo: "#",
    demo: "https://hrhubsystem.s3.us-east-1.amazonaws.com/sandeep-kalasgonda-cert/CertificateOfCompletion_DevOps+Foundations+Lean+and+Agile.pdf",
  },
  {
    id: "project-2",
    name: "AWS Certified Cloud Practitioner",
    description:
      "AWS Academy Graduate issued by  Amazon Web Services Training and Certification.",
    image: practitioner,
    repo: "#",
    demo: "https://hrhubsystem.s3.us-east-1.amazonaws.com/sandeep-kalasgonda-cert/CertificateOfCompletion_AWS+Certified+Solutions+Architect++Associate+SAAC02+Cert+Prep+1+Cloud+Services+Overview.pdf",
  },
  {
    id: "project-3",
    name: "Agile Development",
    description: "Create a virtual machine and deploy a Web Server",
    image: azure,
    repo: "#",
    demo: "https://hrhubsystem.s3.us-east-1.amazonaws.com/sandeep-kalasgonda-cert/CertificateOfCompletion_Develop+Your+Skills+in+Agile+Software+Development+(1).pdf",
  },
 // {
 //   id: "project-4",
 //   name: "Deloitte",
 //   description:
 //     "Technology Consulting Virtual Internship",
 //   image: deloitte,
 //   repo: "#",
  //  demo: "https://manp1209.s3.ap-south-1.amazonaws.com/FqFtWwQzNxJ8Qsh5H_Deloitte_P9vz2x4Mcp37hehcd_completion_certificate.pdf",
 // },
//  {
//    id: "project-5",
   // name: "AWS Academy Foundation Graduate ",
  //  description: "View my verified achievement from Amazon Web Services (AWS).",
 //   image: foundation,
 //   repo: "#",
 //   demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
 // },
//
];

export { services, technologies, experiences, projects };
