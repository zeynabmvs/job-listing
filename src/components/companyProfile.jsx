import React from "react";
import data from "../services/data.json";
import { URL } from "../config/config";
import Tag from "./tag";

const JobCompanyProfile = () => {
  return (
    <div className="job-company-profile">
      <img
        src={`${URL}${data[0].logo.slice(1)}`}
        className="job-company-profile__company-logo"
        alt="company logo"
      />

      <div className="job-company-profile__details">
        <div className="job-company-profile__header">
          <h1 className="job-company-profile__company-name">
            {data[0].company}
          </h1>

          <Tag New={data[0].new} featured={data[0].featured} />
        </div>

        <h2 className="job-company-profile__position">{data[0].position}</h2>

        <div className="job-company-profile__post-timeline">
          <p className="job-company-profile__meta">{data[0].postedAt}</p>
          <p className="job-company-profile__meta">. {data[0].contract}</p>

          <p className="job-company-profile__meta">
            .{" "}
            {data[0].location
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
