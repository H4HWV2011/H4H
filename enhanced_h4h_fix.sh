#!/bin/bash
# Enhanced Automated H4H Image Fix + Graphical Enhancements Script
# Maintains your production code while adding advanced visual features

cd ~/h4h-main

echo "🎨 Starting enhanced H4H production upgrade with image fixes..."

# Create backup
cp src/app/page.tsx src/app/page.tsx.backup
echo "✅ Created backup: src/app/page.tsx.backup"

# Create enhanced production version with image fixes + advanced graphics
cat > src/app/page.tsx << 'EOF'
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
            radial-gradient(circle at 15% 30%, rgba(207, 181, 59, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 85% 70%, rgba(30, 58, 138, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(207, 181, 59, 0.08) 0%, transparent 80%),
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
            url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFB53B' fill-opacity='0.04'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat,
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
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
          --card-bg: rgba(30, 58, 138, 0.12);
          --text-light: #e8e8e8;
          --text-gold: #CFB53B;
          --shadow-gold: rgba(207, 181, 59, 0.3);
          --shadow-navy: rgba(30, 58, 138, 0.3);
        }

        /* Enhanced Header with Parallax Effect */
        header {
          background: 
            linear-gradient(135deg, var(--dark-navy) 0%, var(--royal-navy) 40%, var(--light-navy) 60%, var(--dark-navy) 100%);
          color: white;
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
          border-bottom: 4px solid var(--old-gold);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(207, 181, 59, 0.15) 0%, transparent 70%),
            radial-gradient(circle at 70% 80%, rgba(30, 58, 138, 0.15) 0%, transparent 70%);
          z-index: 1;
          animation: subtle-float 20s ease-in-out infinite;
        }

        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          animation: fade-in-up 1s ease-out;
        }

        .logo {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 4px solid var(--old-gold);
          box-shadow: 
            0 0 30px var(--shadow-gold),
            0 0 60px rgba(207, 181, 59, 0.2),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 
            0 0 40px var(--shadow-gold),
            0 0 80px rgba(207, 181, 59, 0.3);
        }

        .org-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 900;
          background: linear-gradient(45deg, var(--old-gold) 0%, var(--gold-accent) 50%, var(--old-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
          text-shadow: 0 0 30px rgba(207, 181, 59, 0.5);
          animation: title-glow 3s ease-in-out infinite alternate;
        }

        @keyframes title-glow {
          from { filter: drop-shadow(0 0 10px rgba(207, 181, 59, 0.3)); }
          to { filter: drop-shadow(0 0 20px rgba(207, 181, 59, 0.6)); }
        }

        .org-tagline {
          font-size: 1.2rem;
          color: var(--text-light);
          font-style: italic;
          margin-top: 0.5rem;
          font-weight: 300;
          opacity: 0.9;
        }

        .hero-section {
          text-align: center;
          padding: 4rem 0;
          animation: fade-in-up 1.2s ease-out 0.3s both;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          font-weight: 900;
          margin-bottom: 2rem;
          color: var(--old-gold);
          text-shadow: 
            2px 2px 4px rgba(30, 58, 138, 0.8),
            0 0 30px rgba(207, 181, 59, 0.4);
          letter-spacing: 3px;
          animation: hero-pulse 4s ease-in-out infinite;
        }

        @keyframes hero-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-light);
          max-width: 900px;
          margin: 0 auto 2rem;
          line-height: 1.8;
          font-weight: 300;
        }

        /* Enhanced Mission Statement */
        .mission-statement {
          background: 
            linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(207, 181, 59, 0.15) 100%);
          padding: 3rem;
          border-radius: 25px;
          margin: 4rem 0;
          border: 3px solid rgba(207, 181, 59, 0.4);
          backdrop-filter: blur(20px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .mission-statement::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(207, 181, 59, 0.05), transparent);
          animation: mission-shine 6s linear infinite;
        }

        @keyframes mission-shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .mission-statement h3 {
          font-family: 'Playfair Display', serif;
          color: var(--old-gold);
          font-size: 2rem;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 700;
          position: relative;
          z-index: 1;
        }

        .mission-statement p {
          font-size: 1.3rem;
          text-align: center;
          line-height: 1.9;
          color: var(--text-light);
          position: relative;
          z-index: 1;
          font-weight: 400;
        }

        /* Enhanced Projects Section */
        .projects-section {
          padding: 8rem 0;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          text-align: center;
          margin-bottom: 5rem;
          color: var(--old-gold);
          font-weight: 700;
          letter-spacing: 3px;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 200px;
          height: 6px;
          background: linear-gradient(45deg, var(--old-gold), var(--royal-navy), var(--old-gold));
          margin: 3rem auto;
          border-radius: 3px;
          box-shadow: 0 0 20px rgba(207, 181, 59, 0.5);
        }

        /* Enhanced Featured Project with Advanced Graphics */
        .featured-project {
          margin-bottom: 6rem;
          background: 
            linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(207, 181, 59, 0.1) 100%);
          border-radius: 35px;
          padding: 4rem;
          border: 3px solid rgba(207, 181, 59, 0.4);
          backdrop-filter: blur(25px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 30px 80px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .featured-project::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(207, 181, 59, 0.1), transparent);
          transition: left 1s ease;
        }

        .featured-project:hover::before {
          left: 100%;
        }

        .featured-project:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 40px 100px rgba(207, 181, 59, 0.3),
            0 0 60px rgba(207, 181, 59, 0.2);
          border-color: var(--old-gold);
        }

        .featured-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .featured-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          color: var(--old-gold);
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(207, 181, 59, 0.3);
        }

        .featured-text .category {
          background: linear-gradient(45deg, var(--royal-navy), var(--light-navy));
          color: var(--old-gold);
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(30, 58, 138, 0.4);
          border: 2px solid rgba(207, 181, 59, 0.3);
        }

        .featured-text p {
          font-size: 1.3rem;
          line-height: 1.9;
          margin-bottom: 2.5rem;
          color: var(--text-light);
          font-weight: 400;
        }

        .project-link {
          display: inline-block;
          background: linear-gradient(45deg, var(--old-gold), var(--gold-accent), var(--old-gold));
          color: var(--dark-navy);
          padding: 1.2rem 2.5rem;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.4s ease;
          box-shadow: 
            0 10px 30px rgba(207, 181, 59, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .project-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .project-link:hover::before {
          left: 100%;
        }

        .project-link:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(207, 181, 59, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        /* Enhanced Featured Image with Advanced Effects */
        .featured-image {
          position: relative;
          border-radius: 25px;
          overflow: hidden;
        }

        .featured-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(207, 181, 59, 0.1), rgba(30, 58, 138, 0.1));
          z-index: 2;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .featured-image:hover::before {
          opacity: 1;
        }

        .featured-image img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 25px;
          border: 4px solid var(--old-gold);
          box-shadow: 
            0 20px 50px rgba(207, 181, 59, 0.3),
            0 0 40px rgba(207, 181, 59, 0.2);
          transition: all 0.4s ease;
          position: relative;
        }

        .featured-image:hover img {
          transform: scale(1.05);
          box-shadow: 
            0 25px 60px rgba(207, 181, 59, 0.4),
            0 0 50px rgba(207, 181, 59, 0.3);
        }

        /* Enhanced Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 3rem;
          margin-top: 5rem;
        }

        .project-card {
          background: 
            linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(207, 181, 59, 0.08) 100%);
          border-radius: 30px;
          padding: 3rem;
          border: 3px solid rgba(207, 181, 59, 0.3);
          backdrop-filter: blur(20px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(207, 181, 59, 0.1), transparent);
          transition: left 0.8s ease;
        }

        .project-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.03);
          border-color: var(--old-gold);
          box-shadow: 
            0 30px 60px rgba(207, 181, 59, 0.3),
            0 0 40px rgba(207, 181, 59, 0.2);
        }

        .project-card h4 {
          font-family: 'Playfair Display', serif;
          color: var(--old-gold);
          font-size: 1.7rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-shadow: 0 0 15px rgba(207, 181, 59, 0.3);
        }

        .project-card .category {
          background: linear-gradient(45deg, var(--royal-navy), var(--light-navy));
          color: var(--old-gold);
          padding: 0.6rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(30, 58, 138, 0.3);
        }

        .project-card p {
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .project-card a {
          color: var(--old-gold);
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          text-shadow: 0 0 10px rgba(207, 181, 59, 0.3);
        }

        .project-card a:hover {
          border-bottom-color: var(--old-gold);
          transform: translateX(5px);
        }

        /* Enhanced About Section */
        .about-section {
          padding: 8rem 0;
          background: 
            linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 58, 138, 0.2) 100%);
          position: relative;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CFB53B' fill-opacity='0.02'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E") repeat;
          z-index: 1;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .about-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          color: var(--old-gold);
          margin-bottom: 2.5rem;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(207, 181, 59, 0.4);
        }

        .about-text p {
          font-size: 1.3rem;
          line-height: 1.9;
          margin-bottom: 2rem;
          color: var(--text-light);
          font-weight: 400;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .value-item {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 25px;
          border: 3px solid rgba(207, 181, 59, 0.3);
          backdrop-filter: blur(15px);
          text-align: center;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
          background: linear-gradient(45deg, transparent, rgba(207, 181, 59, 0.05), transparent);
          transition: transform 0.5s ease;
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
        }

        .value-item:hover::before {
          transform: translateX(0%) translateY(0%) rotate(45deg);
        }

        .value-item:hover {
          transform: translateY(-8px) scale(1.05);
          border-color: var(--old-gold);
          box-shadow: 0 20px 50px rgba(207, 181, 59, 0.3);
        }

        .value-item h4 {
          color: var(--old-gold);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-shadow: 0 0 15px rgba(207, 181, 59, 0.3);
          position: relative;
          z-index: 1;
        }

        .value-item p {
          color: var(--text-light);
          font-size: 1.1rem;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        /* Enhanced Footer */
        footer {
          background: linear-gradient(135deg, var(--dark-navy) 0%, var(--dark-bg) 100%);
          color: var(--text-light);
          padding: 5rem 0 3rem;
          border-top: 4px solid var(--old-gold);
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-section h4 {
          color: var(--old-gold);
          margin-bottom: 2rem;
          font-size: 1.5rem;
          font-weight: 700;
          text-shadow: 0 0 15px rgba(207, 181, 59, 0.3);
        }

        .footer-section p, .footer-section li {
          line-height: 1.8;
          margin-bottom: 0.8rem;
          font-size: 1.1rem;
        }

        .footer-section a {
          color: var(--text-light);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-section a:hover {
          color: var(--old-gold);
          text-shadow: 0 0 10px rgba(207, 181, 59, 0.5);
          transform: translateX(5px);
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-bottom {
          border-top: 2px solid rgba(207, 181, 59, 0.3);
          padding-top: 2.5rem;
          text-align: center;
          color: var(--text-light);
          opacity: 0.9;
          font-size: 1.1rem;
        }

        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .org-title {
            font-size: 2rem;
          }
          
          .header-top {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .featured-content,
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .logo {
            width: 70px;
            height: 70px;
          }

          .section-title {
            font-size: 3rem;
          }

          .featured-project, .project-card {
            padding: 2rem;
          }
        }

        /* Advanced Animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-animation {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .fade-in {
          animation: fade-in-up 1s ease-out;
        }

        .float {
          animation: float-animation 6s ease-in-out infinite;
        }

        /* Loading Animation */
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
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }

        .loading-overlay.hidden {
          opacity: 0;
          visibility: hidden;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(207, 181, 59, 0.3);
          border-top: 4px solid var(--old-gold);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {!isLoaded && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}

      <div className={isLoaded ? 'fade-in' : ''}>
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
                    className="logo float"
                    onError={(e) => {
                      console.error('Failed to load H4H logo');
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90"%3E%3Ccircle cx="45" cy="45" r="40" fill="%23CFB53B"/%3E%3Ctext x="45" y="55" text-anchor="middle" fill="%23fff" font-size="20" font-weight="bold"%3EH4H%3C/text%3E%3C/svg%3E';
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

            {/* Enhanced Featured Project Rotator */}
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
EOF

echo "✅ Enhanced H4H production code with advanced graphics created"

# Test build
echo "🧪 Testing enhanced build..."
npm run build

if [ $? -eq 0 ]; then
    echo "🎉 Enhanced build successful!"
    
    # Deploy automatically
    echo "🚀 Deploying enhanced H4H with advanced graphics..."
    git add .
    git commit -m "Enhanced H4H: Fixed image paths + advanced graphics, animations, and visual effects"
    git push origin main
    
    echo "🌟 Enhanced H4H deployment complete!"
    echo "Your auto-rotating project showcase now includes:"
    echo "• Fixed image paths for all 6 projects"
    echo "• Advanced animations and hover effects" 
    echo "• Enhanced typography with better font weights"
    echo "• Improved color gradients and shadows"
    echo "• Loading animations and visual transitions"
    echo "• Better responsive design"
    echo "• More robust error handling"
    echo ""
    echo "Check harmonyforhopewv.org in 2-3 minutes for the enhanced deployment."
else
    echo "❌ Enhanced build failed. Restoring backup..."
    cp src/app/page.tsx.backup src/app/page.tsx
    echo "✅ Backup restored."
fi
