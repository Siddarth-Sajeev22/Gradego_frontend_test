import React from 'react';
import FeatureCard from './cards';

function App() {
  const features = [
    {
      title: 'Student Management',
      description: 'Enables tracking and management of student-related information such as academic performance and personal details.'
    },
    {
      title: 'Faculty Management',
      description: 'Enables management of faculty-related activities such as faculty profile and performance evaluation.'
    },
    {
      title: 'Course Management',
      description: 'Provides the ability to manage courses offered, add new courses, edit existing ones and assign faculties to courses.'
    },
    {
      title: 'Examination Management',
      description: 'Allows the faculty the entire examination process including question paper setting, evaluation, and course outcome calculations.'
    },
    {
      title: 'Attendance Management',
      description: 'Enables tracking and management of attendance records for students and faculty.'
    },
    {
      title: 'Feedback Management',
      description: 'Enables students to provide feedback about the course and faculty and also allows faculty to view and respond to the feedback.'
    },
  ];

  return (
    <div className="App">
      <div className="card-container">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
