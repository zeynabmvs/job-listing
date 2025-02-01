import React from "react";

const Tag = ({ New, featured }) => {
  const featureObj = { new: New, featured };

  return (
    <div>
      {Object.entries(featureObj)
        .filter(([_, value]) => value)
        .map(([item]) => (
          <span
            className={`job-company-profile__status job-company-profile__status--${item}`}
            key={item}
          >
            {item}
            {item === "new" ? "!" : ""}
          </span>
        ))}
    </div>
  );
};

export default Tag;

// function Tag({ New, featured }) {
//   const featureObj = { new: New, featured };

//   const tagElements = [];

//   for (const item in featureObj) {
//     const value = featureObj[item];

//     if (value) {
//       tagElements.push(
//         <span
//           className={`job-company-profile__status job-company-profile__status--${item}`}
//           key={item}
//         >
//           {item}
//           {item === "new" ? "!" : ""}
//         </span>
//       );
//     }
//   }

//   return tagElements;
// }
