import React from 'react';

interface WorkItem {
  id: number;
  task: string;
}

interface ExperienceItemProps {
  company: string;
  tenure: string;
  location: string;
  work: WorkItem[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, tenure, location, work }) => {
  return (
    <div className="mb-4">
        <span className='flex items-center justify-between'>
        <h3 className="font-bold text-sm">{company}</h3>
      <p className="text-sm ">{tenure}</p>
      <p className="text-sm ">{location}</p>
        </span>
     
      <ul className="list-disc list-inside mt-2">
        {work.map((item) => (
          <li key={item.id} className="text-sm">
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
