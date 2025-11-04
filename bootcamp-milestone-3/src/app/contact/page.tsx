export default function ContactPage() {
  return (
    <main>
      <h1 className="page-title">Theodore's Contact Info</h1>
      <p>Hello World! This is my contact info.</p>

      <div className="contact-info">
        <p>Personal Email: tweickerv@gmail.com</p>
        <p>School Email: tweicker@calpoly.edu</p>
      </div>

      <p>Form</p>
      <form id="contact-form">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="email" id="email" name="email" placeholder="Email" />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>

      <footer className="footer">
        © 2025 Theodore's Website | All Rights Reserved
      </footer>
    </main>
  );
}
