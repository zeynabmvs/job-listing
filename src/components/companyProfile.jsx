import React from "react";
import { URL } from "../config/config";
import Tag from "./tag";

const JobCompanyProfile = ({ job }) => {
  return (
    <div className="job-company-profile">
      <img
        src={`${URL}${job.logo.slice(1)}`}
        className="job-company-profile__company-logo"
        alt="company logo"
      />

      <div className="job-company-profile__details">
        <div className="job-company-profile__header">
          <h1 className="job-company-profile__company-name">{job.company}</h1>

          <Tag New={job.new} featured={job.featured} />
        </div>

        <h2 className="job-company-profile__position">{job.position}</h2>

        <div className="job-company-profile__post-timeline">
          <p className="job-company-profile__meta">{job.postedAt}</p>
          <p className="job-company-profile__meta">
            <strong>.</strong>
            {job.contract}
          </p>

          <p className="job-company-profile__meta">
            <strong>.</strong>
            {job.location
              .split(" ")
              .map((elem, i) => (i === 1 ? elem.toLowerCase() : elem))
              .join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCompanyProfile;
