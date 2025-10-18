export default function Contact() {
  return (
    <div>
      <main>
        <h1 className="page-title">Contact</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          You can reach me at: rthennar@calpoly.edu
        </p>
        <form id="contact-form" action="mailto:rthennar@calpoly.edu" method="post" encType="text/plain">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message here..." required></textarea>

          <input type="submit" value="Submit" />
        </form>
      </main>
      <footer className="footer">© 2025 Rahul Thennarasu's Personal Website | All Rights Reserved | Made with love ♥</footer>
    </div>
  );
}