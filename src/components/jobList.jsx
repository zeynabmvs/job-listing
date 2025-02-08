import React from "react";
import JobCompanyProfile from "./companyProfile";

const JobList = ({ jobs, onAddFilter }) => {
  return (
    <div>
      {jobs?.map((job) => (
        <JobCompanyProfile onAddFilter={onAddFilter} job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobList;
