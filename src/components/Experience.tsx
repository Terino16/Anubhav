import React from 'react';
import ExperienceItem from './ExperienceItem';

const exp = [
    {
      id: 1,
      company: "Jibbs",
      tenure: "May 2024 - Present",
      location: "Remote (New York)",
      work: [
        { id: 1, task: "Worked as a fullstack software engineering on the web product of Jibbs" },
        { id: 2, task: "Worked with UI/UX team for design implementation and Better User Experience" },
        { id: 3, task: "Created various API endpoints for the Backend" }
      ]
    },
    {
      id: 2,
      company: "DineLift",
      tenure: "Aug 2023 - Dec 2023",
      location: "Mumbai (Remote)",
      work: [
        { id: 1, task: "Helped with the Design and Development of the Mobile and Desktop versions of the website" },
        { id: 2, task: "Implemented responsive designs and ensured cross-browser compatibility" },
        { id: 3, task: "Developed server-side applications and APIs using Node.js and Express.js, integrating with databases like MongoDB and Firebase" },
        { id: 4, task: "Used Git for version control, managing codebase changes and collaborating with team members on platforms like GitHub" },
        { id: 5, task: "Gained experience deploying applications on AWS and GCP, leveraging cloud services for scalability and reliability" }
      ],
      techStack: "Next, MERN, AWS"
    }
  ];
  

const Experience = () => {
  return (
    <>
      <p className="font-bold">Experience</p>
      <hr/>
      <div>
        {exp.map((item) => (
          <ExperienceItem
            key={item.id}
            company={item.company}
            tenure={item.tenure}
            location={item.location}
            work={item.work}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
