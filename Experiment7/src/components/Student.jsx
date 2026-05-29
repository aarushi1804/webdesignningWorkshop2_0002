import React from 'react'

const Student = ({ name, course, marks }) => {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  )
}

export default Student