'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HarmonyForHopeHomepage: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projectsData = [
    {
      title: "Mount Hope Historic Walking Trail",
      url: "https://mhhwt.harmonyforhopewv.org/",
      description: "Step back in time through 'The Little Town With A Big Welcome' - an interactive heritage trail celebrating Mount Hope's rich history from Native American settlements to the Phoenix City that rose from the Great Fire of 1910.",
      image: "/images/h4h/mhhwt-featured.jpg",
      category: "Heritage Tourism"
    },
    {
      title: "Cultural Heritage Center",
      url: "https://culture.harmonyforhopewv.org/",
      description: "Preserving and celebrating Appalachian culture through community-driven arts programming, cultural education, and heritage preservation initiatives.",
      image: "/images/h4h/culture-featured.jpg",
      category: "Cultural Preservation"
    },
    {
      title: "Oakvale Area Outreach Team",
      url: "https://oaot.harmonyforhopewv.org/",
      description: "Night Owl Community emergency response and community services, featuring magical blessing boxes and comprehensive community support programs.",
      image: "/images/h4h/oaot-featured.jpg",
      category: "Community Services"
    },
    {
      title: "Fayette County Community Arts Center",
      url: "https://fccac.harmonyforhopewv.org/",
      description: "Community art gallery featuring local artists and expanding creative opportunities through professional arts education and cultural programming.",
      image: "/images/h4h/fccac-featured.jpg",
      category: "Arts Center"
    },
    {
      title: "MountainShares Resource Platform",
      url: "https://ms.harmonyforhopewv.org/",
      description: "Community resource sharing platform connecting neighbors and fostering mutual support across West Virginia communities.",
      image: "/images/h4h/ms-featured.jpg",
      category: "Resource Sharing"
    },
    {
      title: "Mount Hope Regional Band",
      url: "https://mhrb.harmonyforhopewv.org/",
      description: "Reviving community band performances and preserving musical heritage across Southern West Virginia through education and performance.",
      image: "/images/h4h/band-featured.jpg",
      category: "Musical Heritage"
    }
  ];

  useEffect(() => {
    // Auto-rotate featured project every 5 seconds
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projectsData.length]); // Fixed: Added projectsData.length to dependencies

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #e8e8e8;
          background: 
            radial-gradient(circle at 15% 30%, rgba(207, 181, 59, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 85% 70%, rgba(30, 58, 138, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(207, 181, 59, 0.05) 0%, transparent 80%),
            linear-gradient(135deg, #0f1419 0%, #1a1f2e 25%, #0f172a 50%, #1a1f2e 75%, #0f1419 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFB53B' fill-opacity='0.03'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          pointer-events: none;
          z-index: -1;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        :root {
          --old-gold: #CFB53B;
          --royal-navy: #1e3a8a;
          --dark-navy: #0f172a;
          --light-navy: #1e40af;
          --gold-accent: #ffd700;
          --dark-bg: #0f1419;
          --card-bg: rgba(30, 58, 138, 0.08);
          --text-light: #e8e8e8;
          --text-gold: #CFB53B;
        }

        /* Header */
        header {
          background: linear-gradient(135deg, var(--dark-navy) 0%, var(--royal-navy) 60%, var(--dark-navy) 100%);
          color: white;
          padding: 2rem 0;
          position: relative;
          overflow: hidden;
          border-bottom: 3px solid var(--old-gold);
        }

        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(207, 181, 59, 0.1) 0%, transparent 70%);
          z-index: 1;
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .logo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid var(--old-gold);
          box-shadow: 0 0 20px rgba(207, 181, 59, 0.3);
        }

        .org-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, var(--old-gold), var(--gold-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .org-tagline {
          font-size: 1.1rem;
          color: var(--text-light);
          font-style: italic;
          margin-top: 0.5rem;
        }

        .hero-section {
          text-align: center;
          padding: 3rem 0;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--old-gold);
          text-shadow: 2px 2px 4px rgba(30, 58, 138, 0.6);
          letter-spacing: 2px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: var(--text-light);
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .mission-statement {
          background: 
            linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(207, 181, 59, 0.08) 100%);
          padding: 2.5rem;
          border-radius: 20px;
          margin: 3rem 0;
          border: 2px solid rgba(207, 181, 59, 0.3);
          backdrop-filter: blur(15px);
        }

        .mission-statement h3 {
          font-family: 'Playfair Display', serif;
          color: var(--old-gold);
          font-size: 1.8rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .mission-statement p {
          font-size: 1.2rem;
          text-align: center;
          line-height: 1.8;
          color: var(--text-light);
        }

        /* Projects Section */
        .projects-section {
          padding: 6rem 0;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          text-align: center;
          margin-bottom: 4rem;
          color: var(--old-gold);
          font-weight: 600;
          letter-spacing: 2px;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 150px;
          height: 4px;
          background: linear-gradient(45deg, var(--old-gold), var(--royal-navy), var(--old-gold));
          margin: 2rem auto;
          border-radius: 2px;
        }

        .featured-project {
          margin-bottom: 5rem;
          background: 
            linear-gradient(135deg, rgba(30, 58, 138, 0.12) 0%, rgba(207, 181, 59, 0.06) 100%);
          border-radius: 30px;
          padding: 3rem;
          border: 2px solid rgba(207, 181, 59, 0.3);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
        }

        .featured-project:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 60px rgba(207, 181, 59, 0.2);
        }

        .featured-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .featured-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: var(--old-gold);
          margin-bottom: 1rem;
        }

        .featured-text .category {
          background: var(--royal-navy);
          color: var(--old-gold);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .featured-text p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: var(--text-light);
        }

        .project-link {
          display: inline-block;
          background: linear-gradient(45deg, var(--old-gold), var(--gold-accent));
          color: var(--dark-navy);
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(207, 181, 59, 0.4);
        }

        .featured-image {
          position: relative;
        }

        .featured-image img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 20px;
          border: 3px solid var(--old-gold);
          box-shadow: 0 15px 40px rgba(207, 181, 59, 0.2);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .project-card {
          background: 
            linear-gradient(135deg, rgba(30, 58, 138, 0.10) 0%, rgba(207, 181, 59, 0.05) 100%);
          border-radius: 25px;
          padding: 2.5rem;
          border: 2px solid rgba(207, 181, 59, 0.2);
          backdrop-filter: blur(15px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(207, 181, 59, 0.08), transparent);
          transition: left 0.6s ease;
        }

        .project-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: var(--old-gold);
          box-shadow: 
            0 25px 50px rgba(207, 181, 59, 0.25),
            0 0 30px rgba(207, 181, 59, 0.15);
        }

        .project-card h4 {
          font-family: 'Playfair Display', serif;
          color: var(--old-gold);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .project-card .category {
          background: var(--royal-navy);
          color: var(--old-gold);
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .project-card p {
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .project-card a {
          color: var(--old-gold);
          text-decoration: none;
          font-weight: 600;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .project-card a:hover {
          border-bottom-color: var(--old-gold);
        }

        /* About Section */
        .about-section {
          padding: 6rem 0;
          background: 
            linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 58, 138, 0.1) 100%);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: var(--old-gold);
          margin-bottom: 2rem;
        }

        .about-text p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .value-item {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 20px;
          border: 2px solid rgba(207, 181, 59, 0.2);
          backdrop-filter: blur(10px);
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-item:hover {
          transform: translateY(-5px);
          border-color: var(--old-gold);
        }

        .value-item h4 {
          color: var(--old-gold);
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .value-item p {
          color: var(--text-light);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Footer */
        footer {
          background: var(--dark-navy);
          color: var(--text-light);
          padding: 4rem 0 2rem;
          border-top: 3px solid var(--old-gold);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-section h4 {
          color: var(--old-gold);
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
          font-weight: 600;
        }

        .footer-section p, .footer-section li {
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .footer-section a {
          color: var(--text-light);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: var(--old-gold);
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-bottom {
          border-top: 1px solid rgba(207, 181, 59, 0.3);
          padding-top: 2rem;
          text-align: center;
          color: var(--text-light);
          opacity: 0.8;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .org-title {
            font-size: 1.8rem;
          }
          
          .header-top {
            flex-direction: column;
            gap: 1rem;
          }
          
          .featured-content,
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>

      <div>
        <header>
          <div className="header-bg"></div>
          <div className="container">
            <div className="header-content">
              <div className="header-top">
                <div className="logo-section">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/h4h/Untitled (Logo).png" 
                    alt="Harmony for Hope, Inc. Logo"
                    className="logo"
                  />
                  <div>
                    <h1 className="org-title">Harmony for Hope, Inc.</h1>
                    <p className="org-tagline">Uniting West Virginia With Music, Art, & Appalachian Heritage Through Technology</p>
                  </div>
                </div>
              </div>
              
              <div className="hero-section">
                <h2 className="hero-title">Preserving Appalachian Heritage</h2>
                <p className="hero-subtitle">
                  Through ethical, community-driven projects, we foster creativity, preserve cultural heritage, 
                  and revitalize communities with commitment to community ownership and open access.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="mission-statement container">
            <h3>Our Mission</h3>
            <p>
              &ldquo;Where Appalachia&apos;s past and future meet—uncompromised and unowned.&rdquo; We believe in uplifting 
              Appalachian stories through ethical projects that put communities first, ensuring our cultural 
              heritage remains accessible to all while fostering creativity and revitalization across the region.
            </p>
          </section>

          <section className="projects-section container">
            <h2 className="section-title">Our Projects</h2>
            
            {/* Featured Project Rotator */}
            <div className="featured-project">
              <div className="featured-content">
                <div className="featured-text">
                  <span className="category">{projectsData[currentProject].category}</span>
                  <h3>{projectsData[currentProject].title}</h3>
                  <p>{projectsData[currentProject].description}</p>
                  <Link href={projectsData[currentProject].url} className="project-link" target="_blank" rel="noopener noreferrer">
                    Explore Project →
                  </Link>
                </div>
                <div className="featured-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={projectsData[currentProject].image} 
                    alt={projectsData[currentProject].title}
                  />
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
              {projectsData.map((project, index) => (
                <div key={index} className="project-card">
                  <span className="category">{project.category}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Project Site →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="about-section">
            <div className="container">
              <h2 className="section-title">About Harmony for Hope</h2>
              <div className="about-content">
                <div className="about-text">
                  <h3>Community-Driven Heritage Preservation</h3>
                  <p>
                    Founded with a commitment to ethical cultural preservation, Harmony for Hope, Inc. 
                    champions community ownership and open access in all our initiatives. We rejected 
                    corporate monopolization of cultural data, choosing instead to put communities first.
                  </p>
                  <p>
                    Our work spans heritage tourism, arts education, cultural preservation, and community 
                    storytelling—all designed to uplift Appalachian voices and ensure our rich cultural 
                    heritage remains accessible to future generations.
                  </p>
                  <p>
                    From the Phoenix City of Mount Hope to regional music programs, every project reflects 
                    our core belief: Appalachian stories aren&apos;t algorithms to be mined—they&apos;re the heartbeat 
                    of our people, and they belong to us.
                  </p>
                </div>
                <div className="values-grid">
                  <div className="value-item">
                    <h4>🎯 Community First</h4>
                    <p>Every project prioritizes community ownership and local voices over corporate interests.</p>
                  </div>
                  <div className="value-item">
                    <h4>🔓 Open Access</h4>
                    <p>Cultural heritage and educational resources remain freely accessible to all communities.</p>
                  </div>
                  <div className="value-item">
                    <h4>🎨 Creative Commons</h4>
                    <p>Artists and historians maintain control over their work through ethical licensing.</p>
                  </div>
                  <div className="value-item">
                    <h4>🏛️ Heritage Preservation</h4>
                    <p>Protecting and celebrating Appalachian culture through innovative, respectful approaches.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Harmony for Hope, Inc.</h4>
                <p>704 Main St.<br />Mount Hope, WV 25880</p>
                <p>Phone: (304) 640-4809</p>
                <p>Email: samanthayeargo@gmail.com</p>
                <p>EIN: 81-1907024</p>
              </div>
              <div className="footer-section">
                <h4>Our Projects</h4>
                <ul>
                  <li><Link href="https://mhhwt.harmonyforhopewv.org/" target="_blank">Mount Hope Historic Walking Trail</Link></li>
                  <li><Link href="https://culture.harmonyforhopewv.org/" target="_blank">Cultural Heritage Center</Link></li>
                  <li><Link href="https://oaot.harmonyforhopewv.org/" target="_blank">Oakvale Area Outreach Team</Link></li>
                  <li><Link href="https://fccac.harmonyforhopewv.org/" target="_blank">Fayette County Community Arts Center</Link></li>
                  <li><Link href="https://ms.harmonyforhopewv.org/" target="_blank">MountainShares</Link></li>
                  <li><Link href="https://mhrb.harmonyforhopewv.org/" target="_blank">Mount Hope Regional Band</Link></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Transparency & Governance</h4>
                <p>As a 501(c)(3) nonprofit organization, we are committed to transparency and accountability.</p>
                <ul>
                  <li><Link href="/governance">Board & Governance</Link></li>
                  <li><Link href="/financials">Financial Reports</Link></li>
                  <li><Link href="/impact">Community Impact</Link></li>
                  <li><Link href="/partnerships">Community Partnerships</Link></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Connect With Us</h4>
                <p>Join our community-driven mission to preserve and celebrate Appalachian heritage.</p>
                <ul>
                  <li><Link href="https://www.facebook.com/groups/238388528986076" target="_blank">Facebook Community</Link></li>
                  <li><Link href="https://github.com/H4HWV2011/H4H" target="_blank">GitHub Projects</Link></li>
                  <li><Link href="/volunteer">Volunteer Opportunities</Link></li>
                  <li><Link href="/donate">Support Our Mission</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Harmony for Hope, Inc. &ldquo;Uniting West Virginia With Music, Art, & Appalachian Heritage Through Technology.&rdquo;</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HarmonyForHopeHomepage;
