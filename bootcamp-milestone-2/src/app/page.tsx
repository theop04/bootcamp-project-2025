import Image from "next/image";


export default function Home() {
  return (
    <main>
      <h1 className="page-title">Introduction to me!</h1>

      <div className="about">
        <div className="about-image">
          <img
            src="/images/bali_pic.JPG"
            alt="A pic of me from the back in Nusa Penida near Bali"
            width="300"
            height="auto"
          />
        </div>
        <div className="about-text">
          <p>Hi, my name is Theodore Weicker!</p>
          <p>
            I'm from <em>Copenhagen, Denmark</em> but I moved to The Bay during
            covid.
          </p>
          <p>
            I'm a 3rd year Computer Engineering major and Data Science minor.
          </p>
          <p>
            A fun fact about me is that I am Theodore Weicker <strong>the fifth (V)</strong>, which is on my American passport but
            not my Danish one.
          </p>
          <p>
            I love working out, playing pickleball, and recently I learned to
            ride the motorcycle :D
          </p>
        </div>
      </div>

      <footer className="footer">
        © 2025 Theodore's Website | All Rights Reserved
      </footer>
    </main>
  );
}
