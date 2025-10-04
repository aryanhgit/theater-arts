import React, { useState } from 'react';
import alumni from "../data/alumni.json";

// Reusable AlumniCard component
const AlumniCard = ({ alum }) => (
  <div className="alumni-card">
    <img src={alum.headshot} alt={alum.name} className="alumni-headshot" />
    <div className="alumni-card-content">
      <h3 className="alumni-name">{alum.name}</h3>
      <p className="alumni-years">{alum.years}</p>
      {alum.profession && <p className="alumni-profession">{alum.profession}</p>}
    </div>
  </div>
);

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter alumni based on search term
  const filteredAlumni = alumni.filter(alum =>
    alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (alum.profession && alum.profession.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const spotlightAlumni = alumni.filter(alum => alum.spotlight);

  return (
    <div className="alumni-container">
      <h1 className="page-title">Alumni</h1>
      <p className="page-description">
        Our alumni network is a testament to the enduring impact of our club.
      </p>

      {/* Alumni Spotlight Section */}
      <section className="alumni-spotlight">
        <h2 className="section-title">Alumni Spotlight</h2>
        <div className="spotlight-grid">
          {spotlightAlumni.map(alum => (
            <div key={alum.id} className="spotlight-card">
              <img src={alum.headshot} alt={alum.name} className="spotlight-photo" />
              <div className="spotlight-content">
                <h3 className="spotlight-name">{alum.name}</h3>
                <p className="spotlight-years">{alum.years}</p>
                <p className="spotlight-profession">{alum.profession}</p>
                <p className="spotlight-bio">{alum.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* Alumni Database Section */}
      <section className="alumni-database">
        <h2 className="section-title">Alumni Directory</h2>
        <p className="section-description">
          Find former members and see where their passion for theater has taken them.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or profession..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="alumni-grid">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map(alum => (
              <AlumniCard key={alum.id} alum={alum} />
            ))
          ) : (
            <p className="no-results">No alumni match your search.</p>
          )}
        </div>
      </section>

      <hr className="section-divider" />

      {/* Call-to-Action Section */}
      <section className="alumni-cta">
        <h2 className="section-title">Stay Connected</h2>
        <p className="cta-description">
          Are you a former member? We would love to hear from you and include your story on our page.
        </p>
        {/* include google form  */}
        <a href="#" className="cta-button">Update Your Information</a>
      </section>
    </div>
  );
};

export default Alumni;