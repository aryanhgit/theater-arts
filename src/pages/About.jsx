import React from 'react';
import aboutData from '../data/about.json';

const About = () => {
  const { ourStory, leadership } = aboutData;

  return (
    <div className="about-container">
      {/* Our Story Section */}
      <section className="our-story-section">
        <h2 className="section-title">{ourStory.title}</h2>
        {ourStory.paragraphs.map((paragraph, index) => (
          <p key={index} className="story-paragraph">
            {paragraph}
          </p>
        ))}
      </section>

      <hr className="section-divider" />

      {/* Meet the Team Section */}
      <section className="team-section">
        <h2 className="section-title">{leadership.title}</h2>
        <div className="team-grid">
          {leadership.members.map(member => (
            <div key={member.id} className="team-member-card">
              <img src={member.photo} alt={member.name} className="member-photo" />
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;