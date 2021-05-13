import React from "react";
import Job from "../Job";

interface JobListProps {
  jobs: any[];
}

const JobList = (props: JobListProps) => {
  // empty
  if (props.jobs && props.jobs.length === 0)
    return (
      <div className="card">
        <div className="card-body text-muted">There is no job match with your input</div>
      </div>
    );

  // has data
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
