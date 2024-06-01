/* eslint-disable react/no-unescaped-entities */
import './about.scss'

const About = () => {
  return (
    <main className="about-page">
    <section className="about-section">
      <div className="container">
        <h1>About Us</h1>
        <p>Welcome to XYZ Real Estate, your number one source for all things real estate. We're dedicated to giving you the very best of property listings, with a focus on dependability, customer service, and uniqueness.</p>
        <h2>Our Story</h2>
        <p>Founded in 2000 by John Doe, XYZ Real Estate has come a long way from its beginnings in a small office. When John first started out, his passion for providing the best real estate options drove him to do tons of research, so that XYZ Real Estate can offer you the world's most advanced property listings. We now serve customers all over the city and are thrilled that we're able to turn our passion into our own website.</p>
        <h2>Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="https://img.freepik.com/premium-photo/business-man-arms-crossed-work-portrait-with-career-confidence-smile-studio-happy-expert-male-professional-with-corporate-job-pride-employee-with-white-background-worker_590464-219229.jpg?w=360" alt="John Doe" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2jgZ5maIjedb8NoqXs830wIRsV_N3It-Og&s" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Co-Founder & CFO</p>
          </div>
          
        </div>
      </div>
    </section>
  </main>
  )
}

export default About