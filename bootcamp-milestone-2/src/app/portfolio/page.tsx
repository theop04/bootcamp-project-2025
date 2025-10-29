import ProjectCard from "../projectCard";

export default function PortfolioPage() {
  return (
    <main>
      <h1 className="page-title">Theodore's Portfolio</h1>

      <div className="portfolio">
        <ProjectCard
          title="H4I Starter Pack Website"
          description="A responsive web project built for the Hack4Impact Starter Pack."
          image="/images/h4i_website_pic.jpg"
          imageAlt="Screenshot of H4I website homepage"
          link="/"
        />

        <ProjectCard
          title="STAT 331 Portfolio"
          description="Portfolio to show profieciency in all the learning targets for my Statistical Computing with R class!"
          image="/images/R_logo.png"
          imageAlt="R Logo for class"
          link="https://github.com/theop04/STAT331_portfolio_TWV"
        />
      </div>

      <footer className="footer">
        © 2025 Theodore&apos;s Website | All Rights Reserved
      </footer>
    </main>
  );
}
