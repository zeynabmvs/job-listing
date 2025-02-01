import React from "react";
import JobCompanyProfile from "./companyProfile";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobCompanyProfile job={job} />
      ))}
    </div>
  );
};

export default JobList;
