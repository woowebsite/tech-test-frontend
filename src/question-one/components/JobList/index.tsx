import React from "react";
import Job from "../Job";

interface JobListProps {
  jobs: any[];
}

const JobList = (props: JobListProps) => {
  return (
    <ul className="list-unstyled">
      {props.jobs.map((job: any) => (
        <li key={job.id}>
          <Job
            name={job.name}
            start={job.start}
            end={job.end}
            contact={job.contact}
          />
        </li>
      ))}
    </ul>
  );
};
export default JobList;
