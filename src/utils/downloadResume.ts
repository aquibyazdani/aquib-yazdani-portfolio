import { 
  personalInfo, 
  skills, 
  workExperience, 
  education, 
  notableProjects,
  personalProjects,
  achievements,
  references 
} from "../config/portfolio";

// Calculate years and months of experience dynamically
const calculateExperience = () => {
  const startDate = new Date(personalInfo.careerStartDate);
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return { years, months };
};

const { years, months } = calculateExperience();
const experienceText = months > 0 
  ? `${years} years and ${months} months` 
  : `${years} years`;

const allSkills = [
  { title: "Frontend Development", items: skills.frontend },
  { title: "State Management", items: skills.stateManagement },
  { title: "Testing & QA", items: skills.testing },
  { title: "Performance Optimization", items: skills.performance },
  { title: "API Integration", items: skills.api },
  { title: "Version Control & Collaboration", items: skills.tools }
];

export const downloadResumeAsPDF = () => {
  // Create a complete HTML document with all styles
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${personalInfo.name} - Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Manrope', sans-serif; 
      background: #0a0a0a;
      color: #c7c7c7;
      padding: 40px 20px;
    }
    .resume-container {
      max-width: 1000px;
      margin: 0 auto;
      background: #1a1a1a;
      border-radius: 20px;
      padding: 60px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .header { 
      display: flex; 
      justify-content: space-between; 
      align-items: start;
      padding-bottom: 24px;
      border-bottom: 2px solid #d3e97a;
      margin-bottom: 32px;
    }
    .name { 
      font-family: 'Bebas Neue', sans-serif;
      font-size: 48px; 
      color: #ffffff;
      line-height: 0.9;
      letter-spacing: 2px;
    }
    .title { 
      font-size: 18px; 
      color: #d3e97a;
      font-weight: 500;
      margin-top: 8px;
    }
    .contact-info { 
      text-align: right;
      font-size: 12px;
      line-height: 1.8;
    }
    .contact-info a {
      color: #c7c7c7;
      text-decoration: none;
    }
    .contact-info a:hover {
      color: #d3e97a;
    }
    .section { 
      margin-bottom: 28px;
    }
    .section-title { 
      font-size: 16px; 
      font-weight: 700;
      color: #d3e97a;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(211, 233, 122, 0.3);
      padding-bottom: 8px;
      margin-bottom: 16px;
    }
    .section-content {
      font-size: 13px;
      line-height: 1.6;
    }
    .skill-category {
      margin-bottom: 12px;
    }
    .skill-category-title {
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }
    .skill-tag {
      background: #d3e97a;
      color: #2a4a4a;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 500;
    }
    .experience-item {
      background: rgba(26, 26, 26, 0.5);
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 20px;
      position: relative;
      padding-left: 40px;
    }
    .experience-item::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 20px;
      width: 12px;
      height: 12px;
      background: #d3e97a;
      border-radius: 50%;
      border: 3px solid #1a1a1a;
    }
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 12px;
    }
    .job-title {
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
    }
    .company-info {
      font-size: 12px;
      color: #c7c7c7;
      margin-top: 4px;
    }
    .period {
      font-size: 11px;
      color: #d3e97a;
      background: rgba(211, 233, 122, 0.1);
      padding: 4px 10px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .responsibilities {
      list-style: none;
      font-size: 12px;
      line-height: 1.6;
    }
    .responsibilities li {
      padding-left: 16px;
      margin-bottom: 6px;
      position: relative;
    }
    .responsibilities li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #d3e97a;
    }
    .project-item {
      background: rgba(26, 26, 26, 0.5);
      padding: 16px;
      border-radius: 12px;
      margin-bottom: 16px;
    }
    .project-title {
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .project-role {
      font-size: 11px;
      color: #d3e97a;
      margin-bottom: 12px;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
    }
    .tech-tag {
      background: #d3e97a;
      color: #2a4a4a;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 500;
    }
    .education-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .education-item {
      font-size: 12px;
    }
    .institution {
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .degree {
      color: #c7c7c7;
      margin-bottom: 4px;
    }
    .edu-period {
      font-size: 11px;
      color: #d3e97a;
    }
    .achievement-item {
      display: flex;
      gap: 12px;
      background: rgba(26, 26, 26, 0.5);
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 8px;
    }
    .achievement-bullet {
      width: 8px;
      height: 8px;
      background: #d3e97a;
      border-radius: 50%;
      margin-top: 6px;
      flex-shrink: 0;
    }
    .achievement-text {
      font-size: 12px;
      line-height: 1.6;
    }
    .references-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .reference-item {
      background: rgba(26, 26, 26, 0.5);
      padding: 16px;
      border-radius: 12px;
    }
    .reference-name {
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .reference-position {
      font-size: 11px;
      color: #d3e97a;
      margin-bottom: 12px;
    }
    .reference-contact {
      font-size: 10px;
      line-height: 1.8;
    }
    .personal-projects {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .project-link {
      font-size: 12px;
      color: #ffffff;
      background: rgba(26, 26, 26, 0.5);
      padding: 8px 16px;
      border-radius: 8px;
      border: 1px solid rgba(211, 233, 122, 0.2);
      text-decoration: none;
    }
    .project-link:hover {
      background: rgba(211, 233, 122, 0.1);
      border-color: #d3e97a;
    }
    
    @media print {
      body { background: #ffffff; padding: 0; }
      .resume-container { 
        background: #ffffff; 
        box-shadow: none;
        padding: 40px;
      }
      * { color: #000000 !important; }
      .name, .job-title, .skill-category-title, .institution, .reference-name { color: #000000 !important; }
      .title, .section-title, .period, .project-role, .edu-period, .reference-position { color: #2a4a4a !important; }
      .skill-tag, .tech-tag { background: #d3e97a !important; color: #000000 !important; }
      .header { border-bottom-color: #d3e97a !important; }
      .section-title { border-bottom-color: #d3e97a !important; }
      .experience-item::before { background: #d3e97a !important; border-color: #ffffff !important; }
      .achievement-bullet { background: #d3e97a !important; }
    }
    
    @media (max-width: 768px) {
      body { padding: 20px 10px; }
      .resume-container { padding: 30px 20px; }
      .header { flex-direction: column; gap: 16px; }
      .contact-info { text-align: left; }
      .education-grid, .references-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="resume-container">
    <div class="header">
      <div>
        <div class="name">${personalInfo.name.toUpperCase()}</div>
        <div class="title">${personalInfo.title}</div>
      </div>
      <div class="contact-info">
        <div><a href="mailto:${personalInfo.email}">${personalInfo.email}</a></div>
        <div>${personalInfo.phone}</div>
        <div>${personalInfo.location}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Profile</div>
      <div class="section-content">
        Front End Engineer with ${experienceText} of experience building high-performance web and mobile applications. Proficient in React, JavaScript (ES6+), HTML, and CSS, with a strong focus on optimizing user experience and front-end performance. Adept at developing scalable, responsive interfaces using modern frameworks like Next.js, Redux Toolkit, and React Native. Proven track record of improving application speed, accessibility, and maintainability. Collaborative team player experienced in Agile environments, consistently delivering user-centric solutions that drive business impact in fast-paced product teams.
      </div>
    </div>

    <div class="section">
      <div class="section-title">Skills</div>
      ${allSkills.map(category => `
        <div class="skill-category">
          <div class="skill-category-title">${category.title}</div>
          <div class="skills-list">
            ${category.items.map(skill => `<span class="skill-tag">${skill.name}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <div class="section-title">Education</div>
      <div class="education-grid">
        ${education.map(edu => `
          <div class="education-item">
            <div class="institution">${edu.institution}</div>
            <div class="degree">${edu.degree}</div>
            <div class="edu-period">${edu.period}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Notable Projects</div>
      ${notableProjects.map(project => `
        <div class="project-item">
          <div class="project-title">${project.title}</div>
          <div class="project-role">${project.role}</div>
          <div class="tech-stack">
            ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <ul class="responsibilities">
            ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <div class="section-title">Personal Projects</div>
      <div class="personal-projects">
        ${personalProjects.map(project => `
          <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">${project.title}</a>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Work Experience</div>
      ${workExperience.map(exp => `
        <div class="experience-item">
          <div class="experience-header">
            <div>
              <div class="job-title">${exp.title}</div>
              <div class="company-info">${exp.company} | ${exp.location}</div>
            </div>
            <div class="period">${exp.period}</div>
          </div>
          <ul class="responsibilities">
            ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <div class="section-title">Achievements</div>
      ${achievements.map(achievement => `
        <div class="achievement-item">
          <div class="achievement-bullet"></div>
          <div class="achievement-text">${achievement}</div>
        </div>
      `).join('')}
    </div>

    <div class="section">
      <div class="section-title">References</div>
      <div class="references-grid">
        ${references.map(ref => `
          <div class="reference-item">
            <div class="reference-name">${ref.name}</div>
            <div class="reference-position">${ref.company} / ${ref.position}</div>
            <div class="reference-contact">
              <div>${ref.phone}</div>
              <div>${ref.email}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
</body>
</html>`;

  // Create blob and download
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
