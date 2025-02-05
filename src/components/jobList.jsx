import React from "react";
import JobCompanyProfile from "./companyProfile";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobCompanyProfile job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobList;
