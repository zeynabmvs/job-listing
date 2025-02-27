import React from "react";
import { URL } from "../config/config";
import Tag from "./tag";
import JobDescription from "./JobDescription";

const JobCompanyProfile = ({ job, onAddFilter }) => {
  return (
    <article
      className={`job-company-profile ${
        job.featured ? "job-company-profile--featured" : ""
      }`}
    >
      <div className="job-company-profile__header-container">
        <img
          src={`${URL}${job.logo.slice(1)}`}
          className="job-company-profile__company-logo"
          alt={`${job.company} logo`}
        />
        <div className="job-company-profile__details">
          <div className="job-company-profile__header">
            <h2 className="job-company-profile__company-name">{job.company}</h2>

            <Tag New={job.new} featured={job.featured} />
          </div>

          <h3 className="job-company-profile__position" tabIndex="0">
            {job.position}
          </h3>

          <div className="job-company-profile__post-timeline">
            <p className="job-company-profile__meta">{job.postedAt}</p>
            <p className="job-company-profile__meta">
              <strong aria-hidden="true">.</strong>
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
      <div className="job-description-container" onClick={onAddFilter}>
        <JobDescription job={job}></JobDescription>
      </div>
    </article>
  );
};

export default JobCompanyProfile;
