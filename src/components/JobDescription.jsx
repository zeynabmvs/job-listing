import React from 'react'

const JobDescription = ({ job }) => {

  return (
    <>
      <span className='job-description-label'>{job.role}</span>
      <span className='job-description-label'>{job.level}</span>

      {/* Languages */}
      <div className="job-description-languages-list">
        {job.languages.map((language, index) => (
          <span key={`lang-${index}`} className='job-description-label'>{language}</span>
        ))}
      </div>
    </>
  )
}

export default JobDescription