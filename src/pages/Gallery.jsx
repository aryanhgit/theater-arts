// Gallery.jsx
import React from 'react';
import gallery from "../data/gallery.json";

const Gallery = () => {
  return (
    <div className="font-sans px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Past Productions Showcase
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
        Relive some of our club's most memorable moments and see the hard work of our talented cast and crew.
      </p>

      {/* Main Photo Showcase Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.slice(0, 3).map(show => (
          <div key={show.id} className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-2">{show.title} ({show.year})</h2>
            <p className="text-gray-500 italic text-center mb-6">{show.highlight}</p>
            
            <div className="grid gap-4 mb-6">
              {show.photos.map((photo, index) => (
                <img 
                  key={index} 
                  src={photo} 
                  alt={`${show.title} photo ${index + 1}`} 
                  className="w-full h-36 object-cover rounded-md transition-transform duration-300 hover:scale-105" 
                />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 border-l-4 border-[#0b5394] pl-4">
              <b>Director's Note:</b> {show.directorNote}
            </p>
            
            <a 
              href={show.driveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-auto self-center bg-[#0b5394] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 hover:bg-[#073865]"
            >
              View Full Photo Album
            </a>
          </div>
        ))}
      </section>

      <hr className="border-0 h-px bg-gray-300 my-12" />

      {/* Archived Shows List */}
      <section className="pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Archived Shows</h2>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          A full list of all our past productions, sorted by year.
        </p>
        <ul className="list-none p-0 max-w-3xl mx-auto">
          {gallery.map(show => (
            <li key={show.id} className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="font-bold text-gray-600">{show.year}</span>
              <span className="flex-grow mx-4 text-gray-800">{show.title}</span>
              <a 
                href={show.driveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold text-[#0b5394] transition-colors duration-300 hover:text-[#073865]"
              >
                View Photos
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Gallery;