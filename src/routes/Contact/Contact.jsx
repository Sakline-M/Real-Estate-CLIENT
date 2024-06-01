import './contact.scss'

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>If you have any questions or need more information, please feel free to contact us. We are here to help you.</p>
          <div className="contact-info">
            <div className="contact-item">
              <h2>Our Office</h2>
              <p>123 Main Street, Anytown, USA</p>
            </div>
            <div className="contact-item">
              <h2>Email Us</h2>
              <p>info@xyzrealestate.com</p>
            </div>
            <div className="contact-item">
              <h2>Call Us</h2>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact