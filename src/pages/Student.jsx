import React, { useState } from 'react';
import students from "../data/students.json";

// Reusable StudentCard component
const StudentCard = ({ student, onClick }) => (
  <div className="student-card" onClick={() => onClick(student)}>
    <img src={student.headshot} alt={student.name} className="student-headshot" />
    <div className="card-content">
      <h3 className="student-name">{student.name}</h3>
      <p className="student-major">{student.major}, {student.year}</p>
      <p className="student-major">Click to see the profile.</p>
    </div>
  </div>
);

// Student Profile Modal (or a separate page for a real app)
const StudentProfile = ({ student, onClose }) => (
  <div className="profile-modal-overlay" onClick={onClose}>
    <div className="profile-modal" onClick={e => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <img src={student.headshot} alt={student.name} className="profile-pic-large" />
      <h2 className="profile-name">{student.name}</h2>
      <p className="profile-details">{student.major}, {student.year}</p>
      
      <div className="profile-section">
        <h4 className="section-heading">Biography</h4>
        <p>{student.bio}</p>
      </div>

      <div className="profile-section">
        <h4 className="section-heading">Past Roles</h4>
        <ul>
          {student.roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Student = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.year.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="students-container">
      <h1 className="page-title">Student Directory</h1>
      <p className="page-description">
        Meet the talented students who make our productions possible!
      </p>

      {/* Search and Filter Section */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search students..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* You could add a filter dropdown here */}
        {/* <select className="filter-select">...</select> */}
      </div>

      {/* Student Gallery */}
      <div className="student-gallery">
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <StudentCard key={student.id} student={student} onClick={setSelectedStudent} />
          ))
        ) : (
          <p className="no-results">No students match your search.</p>
        )}
      </div>

      {/* Student Profile Modal */}
      {selectedStudent && (
        <StudentProfile student={selectedStudent} onClose={() => setSelectedStudent(null)} />
      )}
    </div>
  );
};

export default Student;