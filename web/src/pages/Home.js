import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import "./Home.css";

// IMAGES (JPG PREVIEW)
import ResumeEnglishImg from "../assets/images/resumes/jpegs/Diego's Resume JPEG.jpg";
import ResumeSpanishImg from "../assets/images/resumes/jpegs/Diego_De_Los_Santos_CV_Español_JPEG.jpg";
import ResumeGeneralImg from "../assets/images/resumes/jpegs/Diego De Los Santos CV_English_JPEG.jpg";

// PDFs
import ResumeEnglishPDF from "../assets/images/resumes/pdfs/Diego De Los Santos CV_English.pdf";
import ResumeSpanishPDF from "../assets/images/resumes/pdfs/Diego_De_Los_Santos_CV_Español.pdf";
import ResumeGeneralPDF from "../assets/images/resumes/pdfs/Diego's Resume.pdf";

function Home() {
  const location = useLocation();

  const heroRef = useRef(null);
  const resumeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionMap = {
        top: heroRef,
        resume: resumeRef,
        experience: experienceRef,
        projects: projectsRef,
      };

      const targetRef = sectionMap[location.state.scrollTo];
      if (targetRef?.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // =============================
  // RESUMES
  // =============================
  const resumes = [
    { name: "Resume", img: ResumeEnglishImg, pdf: ResumeEnglishPDF },
    { name: "English CV", img: ResumeGeneralImg, pdf: ResumeGeneralPDF },
    { name: "Currículum en español", img: ResumeSpanishImg, pdf: ResumeSpanishPDF },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // =============================
  // EXPERIENCE
  // =============================
  const experience = [
    {
      job: ".Net",
      details: `• Built internal applications using C# and .NET.
• Integrated SQL queries into production APIs.
• Designed reusable UI components using React.`,
    },
    {
      job: "SQL",
      details: `• Supported backend API development.
• Maintained SQL databases and optimized slow queries.
• Worked with stakeholders to improve product features.`,
    },
    {
      job: "React",
      details: `• Provided hardware and software support.
• Automated tasks using PowerShell and Python.
• Created documentation for internal processes.`,
    },
  ];

  const [openJob, setOpenJob] = useState(null);

  return (
    <div className="home">
      {/* HERO */}
      <section ref={heroRef} className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m Diego — a C#/.NET developer expanding into full-stack and
          React. Below you can find my resumes, experience, and featured
          projects.
        </p>
      </section>

      {/* RESUMES */}
      <section ref={resumeRef} className="resume-section">
        <h2>My Resumes</h2>
         {/* Controls */}
        <div className="resume-controls">
          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? resumes.length - 1 : currentIndex - 1
              )
            }
          >
            ◀ Prev
          </button>

          <button
            onClick={() =>
              setCurrentIndex(
                currentIndex === resumes.length - 1 ? 0 : currentIndex + 1
              )
            }
          >
            Next ▶
          </button>
        </div>
        <h3 className="resume-title">{resumes[currentIndex].name}</h3>

        <div className="resume-container">
          {resumes.map((res, i) => (
            <div
              key={i}
              className={`resume-slide ${i === currentIndex ? "active" : ""}`}
            >
              <img
                src={res.img}
                alt={res.name}
                className="resume-preview-img"
              />

              <a href={res.pdf} download>
                <button className="download-btn">Download PDF</button>
              </a>
            </div>
          ))}
        </div>

       
      </section>

      {/* EXPERIENCE */}
      <section ref={experienceRef} className="experience-section">
        <h2>My Experience</h2>

        {experience.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            onClick={() => setOpenJob(openJob === index ? null : index)}
          >
            <h3>{exp.job}</h3>
            {openJob === index && (
              <p className="experience-details">{exp.details}</p>
            )}
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <div ref={projectsRef}>
        <ProjectList />
      </div>
    </div>
  );
}

export default Home;
