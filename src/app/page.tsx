'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HarmonyForHopeHomepage: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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
      image: "/images/h4h/Oakvale Area Outreach Team.jpg",
      category: "Community Services"
    },
    {
      title: "Fayette County Community Arts Center",
      url: "https://fccac.harmonyforhopewv.org/",
      description: "Community art gallery featuring local artists and expanding creative opportunities through professional arts education and cultural programming.",
      image: "/images/h4h/Fayette County Community Arts Center.jpg",
      category: "Arts Center"
    },
    {
      title: "MountainShares Resource Platform",
      url: "https://ms.harmonyforhopewv.org/",
      description: "Community resource sharing platform connecting neighbors and fostering mutual support across West Virginia communities.",
      image: "/images/h4h/MountainShares Resource Platform.jpg",
      category: "Resource Sharing"
    },
    {
      title: "Mount Hope Regional Band",
      url: "https://mhrb.harmonyforhopewv.org/",
      description: "Reviving community band performances and preserving musical heritage across Southern West Virginia through education and performance.",
      image: "/images/h4h/Mount Hope Regional Band.jpg",
      category: "Musical Heritage"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 5000);

    setIsLoaded(true);
    return () => clearInterval(interval);
  }, [projectsData.length]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700;800&display=swap');

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
            radial-gradient(circle at 15% 30%, rgba(207, 181, 59, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 85% 70%, rgba(30, 58, 138, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(207, 181, 59, 0.10) 0%, transparent 80%),
            linear-gradient(135deg, #0a0f16 0%, #1a1f2e 25%, #0f172a 50%, #1a1f2e 75%, #0a0f16 100%);
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
          background:
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFB53B' fill-opacity='0.05'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat,
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
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
          --dark-bg: #0a0f16;
          --card-bg: rgba(30, 58, 138, 0.15);
          --text-light: #e8e8e8;
          --text-gold: #CFB53B;
          --shadow-gold: rgba(207, 181, 59, 0.4);
          --shadow-navy: rgba(30, 58, 138, 0.4);
        }

        /* Enhanced Header with Premium Effects */
        header {
          background:
            linear-gradient(135deg, var(--dark-navy) 0%, var(--royal-navy) 30%, var(--light-navy) 70%, var(--dark-navy) 100%);
          color: white;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
          border-bottom: 5px solid var(--old-gold);
          box-shadow:
            0 15px 50px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 25% 25%, rgba(207, 181, 59, 0.2) 0%, transparent 70%),
            radial-gradient(circle at 75% 75%, rgba(30, 58, 138, 0.2) 0%, transparent 70%);
          z-index: 1;
          animation: header-float 25s ease-in-out infinite;
        }

        @keyframes header-float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-5px) rotate(0.5deg) scale(1.01); }
          50% { transform: translateY(-10px) rotate(0deg) scale(1); }
          75% { transform: translateY(-5px) rotate(-0.5deg) scale(1.01); }
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4rem;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          animation: logo-entrance 1.5s ease-out;
        }

        @keyframes logo-entrance {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .logo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 5px solid var(--old-gold);
          box-shadow:
            0 0 40px var(--shadow-gold),
            0 0 80px rgba(207, 181, 59, 0.3),
            inset 0 0 30px rgba(255, 255, 255, 0.15);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .logo::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: linear-gradient(45deg, var(--old-gold), transparent, var(--old-gold));
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: -1;
        }

        .logo:hover::before {
          opacity: 0.3;
          animation: logo-pulse 2s ease-in-out infinite;
        }

        .logo:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow:
            0 0 60px var(--shadow-gold),
            0 0 120px rgba(207, 181, 59, 0.4);
        }

        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        .org-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 900;
          background: linear-gradient(45deg, var(--old-gold) 0%, var(--gold-accent) 30%, var(--old-gold) 70%, var(--gold-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 3px;
          text-shadow: 0 0 40px rgba(207, 181, 59, 0.6);
          animation: title-shimmer 4s ease-in-out infinite alternate;
          position: relative;
        }

        @keyframes title-shimmer {
          from {
            filter: drop-shadow(0 0 15px rgba(207, 181, 59, 0.4));
            transform: translateY(0);
          }
          to {
            filter: drop-shadow(0 0 25px rgba(207, 181, 59, 0.7));
            transform: translateY(-2px);
          }
        }

        .org-tagline {
          font-size: 1.3rem;
          color: var(--text-light);
          font-style: italic;
          margin-top: 0.8rem;
          font-weight: 300;
          opacity: 0.95;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .hero-section {
          text-align: center;
          padding: 5rem 0;
          animation: hero-entrance 1.8s ease-out 0.5s both;
        }

        @keyframes hero-entrance {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 900;
          margin-bottom: 2.5rem;
          color: var(--old-gold);
          text-shadow:
            3px 3px 6px rgba(30, 58, 138, 0.8),
            0 0 40px rgba(207, 181, 59, 0.5);
          letter-spacing: 4px;
          animation: hero-breathe 5s ease-in-out infinite;
          position: relative;
        }

        @keyframes hero-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        .hero-subtitle {
          font-size: 1.6rem;
          color: var(--text-light);
          max-width: 1000px;
          margin: 0 auto 3rem;
          line-height: 1.9;
          font-weight: 300;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
        }

        /* Premium Mission Statement */
        .mission-statement {
          background:
            linear-gradient(135deg, rgba(30, 58, 138, 0.25) 0%, rgba(207, 181, 59, 0.18) 100%);
          padding: 4rem;
          border-radius: 30px;
          margin: 5rem auto;
          max-width: 1200px;
          border: 4px solid rgba(207, 181, 59, 0.5);
          backdrop-filter: blur(25px);
          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .mission-statement::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(207, 181, 59, 0.08), transparent);
          animation: mission-aurora 8s linear infinite;
        }

        @keyframes mission-aurora {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .mission-statement h3 {
          font-family: 'Playfair Display', serif;
          color: var(--old-gold);
          font-size: 2.4rem;
          margin-bottom: 2rem;
          text-align: center;
          font-weight: 700;
          position: relative;
          z-index: 1;
          text-shadow: 0 0 25px rgba(207, 181, 59, 0.5);
        }

        .mission-statement p {
          font-size: 1.4rem;
          text-align: center;
          line-height: 2;
          color: var(--text-light);
          position: relative;
          z-index: 1;
          font-weight: 400;
          max-width: 900px;
          margin: 0 auto;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        /* Enhanced Projects Section */
        .projects-section {
          padding: 10rem 0;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          text-align: center;
          margin-bottom: 6rem;
          color: var(--old-gold);
          font-weight: 700;
          letter-spacing: 4px;
          position: relative;
          text-shadow: 0 0 30px rgba(207, 181, 59, 0.6);
        }

        .section-title::after {
          content: '';
          display: block;
          width: 250px;
          height: 8px;
          background: linear-gradient(45deg, var(--old-gold), var(--royal-navy), var(--old-gold));
          margin: 4rem auto;
          border-radius: 4px;
          box-shadow: 0 0 30px rgba(207, 181, 59, 0.6);
          animation: title-underline-glow 3s ease-in-out infinite alternate;
        }

        @keyframes title-underline-glow {
          from { box-shadow: 0 0 30px rgba(207, 181, 59, 0.6); }
          to { box-shadow: 0 0 50px rgba(207, 181, 59, 0.8); }
        }

        /* Premium Featured Project */
        .featured-project {
          margin-bottom: 8rem;
          background:
            linear-gradient(135deg, rgba(30, 58, 138, 0.18) 0%, rgba(207, 181, 59, 0.12) 100%);
          border-radius: 40px;
          padding: 5rem;
          border: 4px solid rgba(207, 181, 59, 0.5);
          backdrop-filter: blur(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .featured-project::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(207, 181, 59, 0.15), transparent);
          transition: left 1.2s ease;
        }

        .featured-project:hover::before {
          left: 100%;
        }

        .featured-project:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow:
            0 50px 120px rgba(207, 181, 59, 0.4),
            0 0 80px rgba(207, 181, 59, 0.3);
          border-color: var(--old-gold);
        }

        .featured-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .featured-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          color: var(--old-gold);
          margin-bottom: 2rem;
          font-weight: 700;
          text-shadow: 0 0 25px rgba(207, 181, 59, 0.4);
          line-height: 1.2;
        }

        .featured-text .category {
          background: linear-gradient(45deg, var(--royal-navy), var(--light-navy));
          color: var(--old-gold);
          padding: 1rem 2rem;
          border-radius: 30px;
          font-size: 1.1rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 2rem;
          box-shadow: 0 8px 20px rgba(30, 58, 138, 0.5);
          border: 3px solid rgba(207, 181, 59, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .featured-text p {
          font-size: 1.4rem;
          line-height: 2;
          margin-bottom: 3rem;
          color: var(--text-light);
          font-weight: 400;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .project-link {
          display: inline-block;
          background: linear-gradient(45deg, var(--old-gold), var(--gold-accent), var(--old-gold));
          color: var(--dark-navy);
          padding: 1.5rem 3rem;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.2rem;
          transition: all 0.5s ease;
          box-shadow:
            0 15px 40px rgba(207, 181, 59, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .project-link:hover::before {
          left: 100%;
        }

        .project-link:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow:
            0 20px 50px rgba(207, 181, 59, 0.7),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        /* Premium Featured Image */
        .featured-image {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
        }

        .featured-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(207, 181, 59, 0.15), rgba(30, 58, 138, 0.15));
          z-index: 2;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .featured-image:hover::before {
          opacity: 1;
        }

        .featured-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 30px;
          border: 5px solid var(--old-gold);
          box-shadow:
            0 25px 60px rgba(207, 181, 59, 0.4),
            0 0 50px rgba(207, 181, 59, 0.3);
          transition: all 0.6s ease;
          position: relative;
        }

        .featured-image:hover img {
          transform: scale(1.08);
          box-shadow:
            0 30px 80px rgba(207, 181, 59, 0.5),
            0 0 70px rgba(207, 181, 59, 0.4);
        }

        /* Enhanced Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          margin-top: 6rem;
        }

        .project-card {
          background:
            linear-gradient(135deg, rgba(30, 58, 138, 0.18) 0%, rgba(207, 181, 59, 0.10) 100%);
          border-radius: 35px;
          padding: 3.5rem;
          border: 4px solid rgba(207, 181, 59, 0.4);
          backdrop-filter: blur(25px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(207, 181, 59, 0.12), transparent);
          transition: left 1s ease;
        }

        .project-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.04);
          border-color: var(--old-gold);
          box-shadow:
            0 35px 80px rgba(207, 181, 59, 0.4),
            0 0 50px rgba(207, 181, 59, 0.3);
        }

        .project-card h4 {
          font-family: 'Playfair Display', serif;
          color: var(--old-gold);
          font-size: 1.9rem;
          margin-bottom: 1.8rem;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(207, 181, 59, 0.4);
          line-height: 1.3;
        }

        .project-card .category {
          background: linear-gradient(45deg, var(--royal-navy), var(--light-navy));
          color: var(--old-gold);
          padding: 0.8rem 1.3rem;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1.8rem;
          box-shadow: 0 8px 20px rgba(30, 58, 138, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-card p {
          color: var(--text-light);
          line-height: 1.9;
          margin-bottom: 2.5rem;
          font-size: 1.2rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .project-card a {
          color: var(--old-gold);
          text-decoration: none;
          font-weight: 700;
          font-size: 1.2rem;
          border-bottom: 3px solid transparent;
          transition: all 0.4s ease;
          text-shadow: 0 0 15px rgba(207, 181, 59, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .project-card a:hover {
          border-bottom-color: var(--old-gold);
          transform: translateX(8px);
          text-shadow: 0 0 20px rgba(207, 181, 59, 0.6);
        }

        /* Enhanced About Section */
        .about-section {
          padding: 10rem 0;
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.3) 100%);
          position: relative;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CFB53B' fill-opacity='0.03'%3E%3Cpolygon points='60 0 72 48 120 60 72 72 60 120 48 72 0 60 48 48'/%3E%3C/g%3E%3C/svg%3E") repeat;
          z-index: 1;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .about-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          color: var(--old-gold);
          margin-bottom: 3rem;
          font-weight: 700;
          text-shadow: 0 0 25px rgba(207, 181, 59, 0.5);
          line-height: 1.2;
        }

        .about-text p {
          font-size: 1.4rem;
          line-height: 2;
          margin-bottom: 2.5rem;
          color: var(--text-light);
          font-weight: 400;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 5rem;
        }

        .value-item {
          background: var(--card-bg);
          padding: 3rem;
          border-radius: 30px;
          border: 4px solid rgba(207, 181, 59, 0.4);
          backdrop-filter: blur(20px);
          text-align: center;
          transition: all 0.6s ease;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .value-item::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(207, 181, 59, 0.08), transparent);
          transition: transform 0.8s ease;
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }

        .value-item:hover::before {
          transform: translateX(0%) translateY(0%) rotate(45deg);
        }

        .value-item:hover {
          transform: translateY(-12px) scale(1.05);
          border-color: var(--old-gold);
          box-shadow: 0 25px 60px rgba(207, 181, 59, 0.4);
        }

        .value-item h4 {
          color: var(--old-gold);
          font-size: 1.7rem;
          margin-bottom: 2rem;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(207, 181, 59, 0.4);
          position: relative;
          z-index: 1;
        }

        .value-item p {
          color: var(--text-light);
          font-size: 1.2rem;
          line-height: 1.8;
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        /* Premium Footer */
        footer {
          background: linear-gradient(135deg, var(--dark-navy) 0%, var(--dark-bg) 100%);
          color: var(--text-light);
          padding: 6rem 0 4rem;
          border-top: 5px solid var(--old-gold);
          box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.6);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 5rem;
          margin-bottom: 5rem;
        }

        .footer-section h4 {
          color: var(--old-gold);
          margin-bottom: 2.5rem;
          font-size: 1.7rem;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(207, 181, 59, 0.4);
        }

        .footer-section p, .footer-section li {
          line-height: 1.9;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .footer-section a {
          color: var(--text-light);
          text-decoration: none;
          transition: all 0.4s ease;
          position: relative;
        }

        .footer-section a:hover {
          color: var(--old-gold);
          text-shadow: 0 0 15px rgba(207, 181, 59, 0.6);
          transform: translateX(8px);
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-bottom {
          border-top: 3px solid rgba(207, 181, 59, 0.4);
          padding-top: 3rem;
          text-align: center;
          color: var(--text-light);
          opacity: 0.95;
          font-size: 1.2rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        /* Enhanced Mobile Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .org-title {
            font-size: 2.2rem;
          }

          .header-top {
            flex-direction: column;
            gap: 2rem;
          }

          .featured-content,
          .about-content {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .logo {
            width: 80px;
            height: 80px;
          }

          .section-title {
            font-size: 3.5rem;
          }

          .featured-project, .project-card {
            padding: 2.5rem;
          }

          .mission-statement {
            padding: 2.5rem;
            margin: 3rem auto;
          }
        }

        /* Premium Loading Animation */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--dark-navy), var(--dark-bg));
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }

        .loading-overlay.hidden {
          opacity: 0;
          visibility: hidden;
        }

        .loading-spinner {
          width: 80px;
          height: 80px;
          border: 6px solid rgba(207, 181, 59, 0.3);
          border-top: 6px solid var(--old-gold);
          border-radius: 50%;
          animation: premium-spin 1.5s linear infinite;
          box-shadow: 0 0 40px rgba(207, 181, 59, 0.5);
        }

        @keyframes premium-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Advanced Entrance Animations */
        .fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {!isLoaded && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}

      <div className={isLoaded ? 'fade-in-up' : ''}>
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
                    onError={(e) => {
                      console.error('Failed to load H4H logo');
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%23CFB53B"/%3E%3Ctext x="50" y="60" text-anchor="middle" fill="%23fff" font-size="24" font-weight="bold"%3EH4H%3C/text%3E%3C/svg%3E';
                    }}
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

            {/* Enhanced Featured Project Rotator with Updated Image Paths */}
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
                    onError={(e) => {
                      console.error('Failed to load project image:', projectsData[currentProject].image);
                      // Fallback to H4H logo for any failed image
                      e.currentTarget.src = '/images/h4h/Untitled (Logo).png';
                    }}
                    onLoad={() => {
                      console.log('Successfully loaded:', projectsData[currentProject].image);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Projects Grid */}
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

