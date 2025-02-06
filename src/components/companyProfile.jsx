import React from "react";
import { URL } from "../config/config";
import Tag from "./tag";
import JobDescription from "./JobDescription";

const JobCompanyProfile = ({ job }) => {
  return (
    <div
      className={`job-company-profile ${
        job.featured ? "job-company-profile--featured" : ""
      }`}
    >
      <div className="job-company-profile__header-container">
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
      <div className="job-description-container">
        <JobDescription job={job}></JobDescription>
      </div>
    </div>
  );
};

export default JobCompanyProfile;
