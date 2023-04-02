import React from 'react';
import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from "react-icons/ai";

const jobs = [
    {
        company: "Perficient",
        url: "https://www.perficient.com/",
        title: "Senior Software Engineer",
        startDate: "2022-11-02",
        endDate: "Current",
        description: "Works as a senior software engineer, specializing in frontend development for a product that rewards automobile sellers across multiple companies in the USA and Europe. Their expertise in frontend development and experience in a complex product make them a skilled and reliable professional.",
        technologies: ["Javascript", "React", "Typescript", "Next JS", "Jest", "Storybook"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "1Health",
        url: "https://www.1health.io/",
        title: "Technical Lead",
        startDate: "2021-04-01",
        endDate: "2022-10-31",
        description: "Worked as a technical lead for a team of five, responsible for ensuring quality and providing guidance in the delivery of health exam results. Their experience demonstrates strong leadership skills and attention to detail in a demanding industry.",
        technologies: ["Javascript", "React", "Jest", "Python", "Django", "AWS", "PostgreSQL", "Storybook"],
        metotology: ["Agile", "Kanban"],
    },
    {
        company: "1Health",
        url: "https://www.1health.io/",
        title: "Senior Software Engineer",
        startDate: "2019-07-15",
        endDate: "2021-03-31",
        description: "Worked as a senior software engineer in a product that specializes in genetic analysis and family tree tracking. Their expertise in using artificial intelligence for data analysis and creating intuitive user interfaces showcases their skills in software development. Their ability to create interactive and user-friendly visualizations for complex data sets demonstrates their attention to detail and dedication to delivering high-quality products.",
        technologies: ["Javascript", "React", "Jest", "Python", "Django", "AWS", "PostgreSQL"],
        metotology: ["Agile", "Kanban"],
    },
    {
        company: "Open Green Road",
        url: "https://www.opengreenroad.com/",
        title: "Software Engineer",
        startDate: "2017-09-01",
        endDate: "2019-07-02",
        description: "Worked on an educational platform for companies, specializing in developing interactive user interfaces. Their experience in creating engaging interfaces showcases their expertise in software development and dedication to delivering high-quality products.",
        technologies: ["Javascript", "React", "Jest", "JQuery", "Node JS", "Express JS", "MongoDB"],
        metotology: ["Agile", "Kanban"],
    },
    {
        company: "Nursoft",
        url: "https://www.nursoft.cl/",
        title: "Software Engineer",
        startDate: "2017-04-01",
        endDate: "2017-08-20",
        description: "Worked as a software developer on various agile projects catering to different clients, providing technical support to assigned developers. Their ability to work effectively in different teams and adapt to new challenges demonstrates their skills in software development.",
        technologies: ["Javascript", "React", "Jest", "JQuery", "React Native", "Electron"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "Mediastream",
        url: "https://www.mediastream.co/",
        title: "Jr Software Engineer",
        startDate: "2016-09-22",
        endDate: "2017-03-25",
        description: "Worked as a Junior Developer in a streaming services company catering to clients throughout Latin America. Their primary role was to support the development team with various tasks related to the visualization of content through Over the Top (OTT) platforms. Their experience in this role showcases their knowledge in software development and their ability to work effectively within a team.",
        technologies: ["Javascript", "React", "Node JS", "Express JS", "JQuery", "MongoDB"],
        metotology: ["Agile", "Scrum", "Kanban"],
    },
]

const otherExperiences = [
    {
        company: "Aevum",
        title: "Senior Frontend Developer",
        startDate: "2022-04-01",
        url: "https://www.aevum.cl/",
        endDate: "Current",
        description: "Works as a freelance analyst specializing in investment analysis for large companies. He provides economic projections and market analysis, with a focus on user interface design for end-users. His insights help clients make informed investment decisions.",
        technologies: ["Javascript", "React", "Storybook"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "Digital Partners",
        url: "https://www.digitalpartners.ai/",
        title: "Senior Fullstack Developer",
        startDate: "2022-03-01",
        endDate: "2022-09-05",
        description: "Worked on a startup that provided a platform to match suppliers with businesses in need of their services. The role was to develop and ensure the delivery of a minimum viable product for the platform.",
        technologies: ["Javascript", "Vue", "JQuery", "Python", "Django", "GraphQl", "PostgreSQL"],
        metotology: ["Agile", "Scrum"],
    },
    {
        company: "4Geeks Academy",
        url: "https://www.4geeksacademy.com/",
        title: "Teacher",
        startDate: "2021-03-01",
        endDate: "2021-12-31",
        description: "I worked as a fullstack teacher, mainly teaching technologies such as Javascript, React, Python, and Flask.",
        technologies: ["Javascript", "React", "Python", "Flask", "PostgreSQL"],
        metotology: ["online sessions"],
    },
]

const About = () => {
  return (
    <>
      <Head>
        <title>delrio.dev</title>
        <meta name="description" content="A Personal Web for Mauricio Del Río" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://delrio.dev" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex justify-center">
          <div className="flex justify-center w-2/3 max-[1200px]:w-3/4 max-[1200px]:block">
              <div className="w-1/4 max-[1200px]:w-full mt-4 mb-4">
                  <h1 className="text-4xl max-[1200px]:text-3xl font-bold font-sans mb-6">Mauricio Del Río Zorrilla</h1>
                  <p>Software developer, IT consultant and Human.</p>
                  <p>Open to work: WFH or Hybrid</p>
                  <p>
                      +56 9 3333 9394
                  </p>
                  <p>
                      contacto@delrio.dev
                  </p>
                  <div className="flex mb-4">
                    <a href="https://www.linkedin.com/in/mauricio-del-r%C3%ADo-a4b1a98b/" target="__blank">
                      <AiFillLinkedin size={'2em'}/>
                    </a>
                    <a href="https://github.com/mauriciodelrio" target="__blank">
                      <AiFillGithub size={'2em'}/>
                    </a>
                    <a href="https://gitlab.com/mauricio.delr" target="__blank">
                      <AiFillGitlab size={'2em'}/>
                    </a>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans mb-4">Skills</h2>
                      <ul>
                          <li>
                              Javascript [ ********** ]
                          </li>
                          <li>
                              React [ ********** ]
                          </li>
                          <li>
                              Node JS [ ******** ]
                          </li>
                          <li>
                              Express JS [ ******** ]
                          </li>
                          <li>
                              JQuery [ ******** ]
                          </li>
                          <li>
                              Typescript [ ******* ]
                          </li>
                          <li>
                              Storybook [ ******* ]
                          </li>
                          <li>
                              PostgreSQL [ ******* ]
                          </li>
                          <li>
                              Next JS [ ******* ]
                          </li>
                          <li>
                              Jest [ ****** ]
                          </li>
                          <li>
                              Python [ ****** ]
                          </li>
                          <li>
                              Django [ ****** ]
                          </li>
                          <li>
                              Mongo DB [ ****** ]
                          </li>
                          <li>
                              React Native [ ****** ]
                          </li>
                          <li>
                              Electron [ ****** ]
                          </li>
                          <li>
                              AWS [ ***** ]
                          </li>
                      </ul>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans mb-4">Languages</h2>
                      <ul>
                          <li>
                              Spanish [ ********** ] Native
                          </li>
                          <li>
                              English [ ******* ] IELTS B2
                          </li>
                      </ul>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans mb-4">Education</h2>
                      <ul>
                          <li>
                              <h3 className="text-xl max-[1200px]:text-xl font-bold font-sans">Universidad Técnica Federico Santa María</h3>
                              <p>Ingeniería Civil Informática</p>
                              <p>2010 - 2015 (Incomplete)</p>
                          </li>
                          <li>
                              <h3 className="text-xl max-[1200px]:text-xl font-bold font-sans">Universidad de Santiago de Chile</h3>
                              <p>Bachelor Degree on Computer Science</p>
                              <p>2015 - 2020 (Incomplete)</p>
                          </li>
                      </ul>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans mb-4">Salary Range</h2>
                      <p>USD 110,000 - USD 150,000 /Yr</p>
                  </div>
                  <div className="border-b-2 border-gray-300"></div>
                  <div className="mt-4 mb-4">
                      <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans"> Posible Relocation</h2>
                      <p>Yes: CA, NZ</p>
                  </div>

              </div>

              <div className="border-l-2 border-gray-300 h-[100%] max-[1200px]:hidden"></div>
              <div className="border-b-2 border-gray-300 min-[1200px]:hidden"></div>
              <div className="w-3/4 max-[1200px]:w-full ml-8 max-[1200px]:ml-0 mt-4 mb-4">
                  <p className="mb-4">
                  Mauricio is an experienced software developer with over 6 years of experience in the industry. With a strong focus on Javascript technologies and frameworks, Mauricio has worked on challenging projects across various industries, including software factories, education products, streaming, and health and wellness.
                  <br></br>
                  <br></br>
                  In addition to their software development expertise, Mauricio is also a passionate instructor who has worked as a bootcamp teacher, sharing their knowledge and expertise with the next generation of professionals. Their dedication to teaching and mentoring demonstrates their commitment to helping others succeed in their careers.
                  <br></br>
                  <br></br>
                  Overall, Mauricio is a talented and dedicated individual with a wealth of experience in the software industry. Their passion for teaching and mentoring, combined with their desire for personal and professional growth, make them a valuable asset to any team.
                  </p>
                  <div className="border-b-2 border-gray-300"></div>
                  <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans mt-4 mb-4">Experience</h2>
                  <ul>
                      {jobs.map((job, index) => (
                          <li key={index}>
                              <h3 className="text-xl max-[1200px]:text-xl font-bold font-sans">{job.company}</h3>
                              <p>{job.title}</p>
                              <p>  {job.startDate} - {job.endDate}</p>
                              <p> <a href={job.url} target="__blank"> {job.url} </a> </p>
                              <p className="mb-4">{job.description}</p>
                              <p>Technologies:</p>
                              <ul className="flex flex-wrap items-center justify-start mb-4">
                                  {job.technologies.map((technology, index) => (
                                      <li key={index}>{technology} &nbsp; </li>
                                  ))}
                              </ul>
                              <p>Metotology:</p>
                              <ul className="flex flex-wrap items-center justify-start mb-4"> 
                                  {job.metotology.map((metotology, index) => (
                                      <li key={index}>{metotology} &nbsp; </li>
                                  ))}
                              </ul>
                          </li>
                      ))}
                  </ul>
                  <div className="border-b-2 border-gray-300"></div>
                  <h2 className="text-2xl max-[1200px]:text-2xl font-bold font-sans mt-4 mb-4">Freelance Experiences</h2>
                  <ul>
                      {otherExperiences.map((experience, index) => (
                          <li key={index}>
                              <h3 className="text-xl max-[1200px]:text-xl font-bold font-sans">{experience.company}</h3>
                              <p>{experience.title}</p>
                              <p>  {experience.startDate} - {experience.endDate}</p>
                              <p className="mb-4">{experience.description}</p>
                              <p>Technologies:</p>
                              <ul className="flex flex-wrap items-center justify-start mb-4">
                                  {experience.technologies.map((technology, index) => (

                                      <li key={index}>{technology} &nbsp; </li>
                                  ))}
                              </ul>
                              <p>Metotology:</p>
                              <ul className="flex flex-wrap items-center justify-start mb-4">
                                  {experience.metotology.map((metotology, index) => (
                                      <li key={index}>{metotology} &nbsp; </li>
                                  ))}
                              </ul>
                          </li>
                      ))}
                  </ul>
                  <div className="mb-8">
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                  </div>

                  
              </div>
          </div>
      </div>
    </>
)}

export default About