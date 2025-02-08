import React from "react";

const JobDescription = ({ job }) => {
  return (
    <>
      <button
        className="job-description-label"
        tabIndex="0"
        aria-label={`Filter by role: ${job.role}`}
      >
        {job.role}
      </button>
      {/* Level */}
      <button
        className="job-description-label"
        tabIndex="0"
        aria-label={`Filter by level: ${job.level}`}
      >
        {job.level}
      </button>

      {/* Languages */}
      <div className="job-description-languages-list">
        {job.languages?.map((language, index) => (
          <button
            key={`lang-${index}`}
            className="job-description-label"
            tabIndex="0"
            aria-label={`Filter by language: ${language}`}
          >
            {language}
          </button>
        ))}
      </div>

      {/* Tools */}
      {job.tools.length > 0 && (
        <div className="job-description-tools-list">
          {job.tools.map((tool, index) => (
            <button
              key={`tool-${index}`}
              className="job-description-label"
              tabIndex="0"
              aria-label={`Filter by tool: ${tool}`}
            >
              {tool}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default JobDescription;
