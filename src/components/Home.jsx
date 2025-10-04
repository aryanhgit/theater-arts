// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import upcomingEvents from "../data/upcomingEvents.json";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover the Magic of Student Theatre</h1>
          <p>Join us for captivating performances and exciting opportunities to get involved!</p>
          <a href="/#upcoming-event-section" className="hero-cta-btn">See Our Upcoming Shows</a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="text-center bg-white py-12 px-6 rounded-lg mb-12">
        <h2 className="text-4xl font-bold text-[#0b5394] mb-4">A Journey Through Our History</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-4">
          <p className='m-5 p-5'>
            Kalakaar is the official dramatics club of NIT Jalandhar that strives to provide a platform to young, budding artists to showcase their talent and nurture their creativity. The club takes in talent in acting, music, writing, and video editing and has various performances like nukkad nataks, skits, stageplays, mono acts, and mimes. With the tagline "We don't take actors, we make actors", Kalakaar aims to not just produce performers but also to develop their overall personality, communication skills, and teamwork abilities.
          </p>
          <p className='m-5 p-5'>
            Kalakaar's main objectives are to promote and provide a creative outlet for students to express themselves, to cultivate an appreciation of theatre in the college community, and to foster a sense of belonging and camaraderie among its members. Notable achievements include first prize in stageplay at NIT Jalandhar's cultural fest 'Utkansh 2019', first runner-ups in street play at MNIT Jaipur's Cultural fest 'Blitzschlag 2020', and first and second prizes in mono acts in 'Utkansh 2018'.
          </p>
          <h2 className="text-4xl font-bold text-[#0b5394] mb-4">Archives</h2>
          <p className='m-5 p-5'>
            Welcome to the official archives of our theatre club! This page is a celebration of the countless hours of dedication, creativity, and passion that have illuminated our stage over the years. It's a digital curtain call for the talented actors, diligent crew members, and visionary directors who have brought stories to life.
          </p>
          <p>
            Here, we cherish the memories forged in the heat of stage lights and the quiet hum of backstage anticipation. Whether you were in the audience, part of the cast, or behind the scenes, we invite you to browse through our gallery, relive the magic of these past productions, and celebrate the enduring spirit of our community.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Upcoming Events Section */}
      <section className="upcoming-event-section" id='upcoming-event-section'>
        <h2 className="section-title">Upcoming Events</h2>
        <div className="carousel-container">
          <Slider {...settings}>
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA to gallery */}
      <section className="explore-section">
        <div className="explore-content">
          <h2>Explore Our Legacy</h2>
          <p>
            From the opening act to the final curtain call, our history is filled with unforgettable moments. Step into our archives and browse the complete gallery of past productions.
          </p>
          <Link to="/gallery" className="explore-cta-btn">
            View Past Productions
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* How to Prepare Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl text-[#0b5394] font-bold text-center mb-6">Want to Join!</h2>
        <span className='text-1xl italic text-gray-700 m-6'>Here How to Prepare</span>
        <div className="bg-gray-50 rounded-2xl shadow-md p-6">
          <ul className="list-disc list-inside space-y-3 text-black leading-relaxed">
            <li>
              <span className="font-semibold">Monologue:</span> Prepare a 1 to 2 minute memorized monologue from a play. Choose a piece that showcases your strengths and suits your age.
            </li>
            <li>
              <span className="font-semibold">Cold Reading:</span> Be ready to perform a cold reading from a script provided at the audition. This helps us assess how you interpret new material.
            </li>
            <li>
              <span className="font-semibold">Headshot & Resume:</span> Bring a recent headshot and a theatrical resume. If you don’t have one, just list your relevant skills and experience.
            </li>
            <li>
              <span className="font-semibold">Questions:</span> Be prepared to answer questions about your experience, why you want to join, and what you hope to contribute.
            </li>
            <li>
              <span className="font-semibold">Dress Comfortably:</span> Wear clothes you can move in, especially if auditioning for a physically demanding role.
            </li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Audition Form Section */}
      <section className="max-w-3xl mx-auto text-center px-6 py-10">
        <h2 className="text-3xl font-extrabold mb-4 text-[#0b5394]">Audition Form</h2>
        <p className="text-gray-600 mb-6">
          Ready to take the first step? Click below to fill out our official audition sign-up form. Please ensure all information is accurate.
        </p>
        <a
          href="https://forms.google.com/your-audition-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0b5394] text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:bg-[#073865] hover:scale-105"
        >
          Go to Audition Form
        </a>
      </section>
    </div>
  );
};

export default Home;