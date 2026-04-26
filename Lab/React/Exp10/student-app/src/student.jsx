import React from "react";

function Student({ name, age, course }) {
  const handleClick = () => {
    alert(`Student: ${name}\nAge: ${age}\nCourse: ${course}`);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>

      {/* Button instead of full card click */}
      <button onClick={handleClick}>
        View Details
      </button>
    </div>
  );
}

export default Student;