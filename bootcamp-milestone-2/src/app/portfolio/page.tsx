import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main>
      <h1 className="page-title">Theodore's Portfolio</h1>

      <div className="portfolio">
        <p>Hello World! This is my portfolio.</p>

        <div className="h4i-website-image">
          <a href="/">
            <Image
              src="/images/h4i_website_pic.jpg"
              alt="A pic of my h4i website homepage"
              width={300}
              height={200}
            />
          </a>
        </div>

        <div className="project-details">
          <p className="project-name">H4I Starter Pack Website</p>
          <p className="project-description">
            This was the website I had to build for the H4I Start Pack :D
          </p>
          <a href="/">Learn More!</a>
        </div>
      </div>

      <footer className="footer">
        © 2025 Theodore's Website | All Rights Reserved
      </footer>
    </main>
  );
}
