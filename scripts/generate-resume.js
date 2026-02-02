
import { jsPDF } from "jspdf";
import fs from "fs";

// --- DATA ---

const SUMMARY = "Software Engineer with 4 years of experience building scalable, high-performance web applications, microservices, REST APIs, and cloud-native architectures. Proficient in Java, Spring Boot, React.js, TypeScript, SQL/NoSQL, Docker, Kubernetes, Git, AWS, and CI/CD pipelines. Currently expanding skills in Generative AI to automate workflows and improve application performance.";

const SKILLS = {
    "Programming Languages": "Java, JavaScript, TypeScript, Python, C/C++",
    "Backend": "Spring Boot, Spring MVC, Microservices, Hibernate, RESTful APIs, Express",
    "Frontend": "React.js, Redux, Next.js, Angular, TailwindCSS",
    "Cloud and DevOps": "AWS (Lambda, EC2, S3, DynamoDB), Azure, Docker, Kubernetes, Jenkins, Terraform, CI/CD Pipelines",
    "AI/ML Tools": "Generative AI (LLMs), LangChain, Hugging Face, Prompt Engineering, OpenAI API, Vector Databases",
    "Database Systems": "MySQL, PostgreSQL, MongoDB, NoSQL, Cassandra",
    "Tools and Methodologies": "Git, Jira, JUnit, Maven, Nginx, Postman, Agile/Scrum"
};

const EDUCATION = [
    {
        degree: "Master's, Computer Science",
        institution: "Sacred Heart University",
        location: "Fairfield, CT, USA",
        gpa: "(3.70 GPA)",
        period: "Jan 2024 – May 2025"
    },
    {
        degree: "Bachelor's, Computer Science",
        institution: "Visvesvaraya Technological University",
        location: "Karnataka, INDIA",
        gpa: "(7.79 CGPA)",
        period: "Aug 2016 – Aug 2020"
    }
];

const EXPERIENCE = [
    {
        company: "DXC Technology, CT",
        period: "Nov 2024 – Current",
        title: "Software Engineer",
        bullets: [
            "Developed and enhanced backend modules using Java, Spring Boot, and Hibernate, improving system stability and reducing recurring production issues by 25% across core workflows.",
            "Built a high-availability Spring Boot + React application with MySQL, automating manual transaction processes and improving operational efficiency for 5+ internal teams.",
            "Containerized microservices with Docker and deployed them on Kubernetes, integrating CI/CD through Jenkins to reduce deployment failures by 30% and cut release time by 40%.",
            "Created Python and OpenAI-powered automation scripts for log analysis and deployment summarization, reducing manual review time by 35–45% and accelerating issue resolution.",
            "Optimized database performance using Hibernate caching and query tuning, improving API response times by 50%, and supported AWS deployments using Terraform for scalable infrastructure."
        ]
    },
    {
        company: "Infinite Infolab, India",
        period: "Aug 2020 – Dec 2023",
        title: "Software Engineer",
        bullets: [
            "Developed data-processing pipelines and analytics components using Python (Pandas/NumPy) for a Customer Intelligence Platform, improving data accuracy and delivering more reliable insights to business teams.",
            "Contributed to the migration of monolithic legacy applications to cloud-native microservices on AWS EKS while designing and implementing a Python-based Customer Intelligence & Analytics Platform (Pandas/NumPy, Power BI) with AI/ML-driven predictive insights, improving scalability, reducing downtime by 25%, and increasing customer retention by 18%.",
            "Built distributed microservices with FastAPI and Node.js backed by MongoDB and Redis, enabling high-volume data ingestion and reducing processing time for downstream analytics by 25–30%.",
            "Created interactive dashboards in React.js and implemented REST and GraphQL APIs, helping stakeholders monitor KPIs, forecasting metrics, and customer behavior trends in real time.",
            "Automated ETL workflows using Azure Data Factory and GCP pipelines, adding validation and error-handling logic that reduced manual reporting effort by 40%."
        ]
    }
];

const PROJECTS = [
    {
        title: "AI-Powered Document Query – Assistant RAG + LangChain + LLMs",
        bullets: [
            "Built an AI-driven Document Query Assistant using LangChain, FAISS vector store, Hugging Face embeddings & OpenAI GPT models.",
            "Implemented RAG-based retrieval to answer queries from uploaded PDFs, achieving 85–90% relevance in tests.",
            "Designed custom prompt templates to reduce hallucinations and optimize responses. Built a simple Streamlit frontend for real-time interaction and document QA."
        ]
    },
    {
        title: "Sales Forecast Dashboard – MERN",
        bullets: [
            "Designed a full-stack web application built with MERN technologies that use ML algorithms to predict sales for pharmaceutical distribution companies and for users to predict disease based on symptoms.",
            "Co-authored the research paper \"Web-Based Sales Forecasting using Holt-Winters\", published on the IJESC website.",
            "Integrated AI automation using LLM-based scripts for ticket classification and text summarization with OpenAI APIs."
        ]
    },
    {
        title: "Movie Hunger – ReactJS, PHP/MySQL",
        bullets: [
            "Built a dynamic web application using PHP and MySQL to manage movie data, user sessions, and page-based dynamic rendering.",
            "Implemented client/server-side validation and modular components that simulated real production-like functionality."
        ]
    }
];

const CERTIFICATIONS = [
    { name: "Generative AI Mastermind – Outskill", date: "Oct 2025" },
    { name: "AWS and React: creating full stack apps – LinkedIn", date: "July 2025" },
    { name: "Java: data structures – LinkedIn", date: "July 2025" },
    { name: "Microsoft Azure Fundamentals (AZ104) – Microsoft", date: "Jan 2021" }
];

// --- PDF GENERATION ---

const doc = new jsPDF({
    unit: "pt",
    format: "letter"
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 40;
let y = 40;

const checkPageBreak = (neededHeight) => {
    if (y + neededHeight > pageHeight - margin) {
        doc.addPage();
        y = 40;
    }
};

// 1. Header
doc.setFont("times", "bold");
doc.setFontSize(20);
doc.text("Kiran Kumar Chinnakkagari", pageWidth / 2, y, { align: "center" });
y += 18;

doc.setFontSize(14);
doc.text("Software Engineer", pageWidth / 2, y, { align: "center" });
y += 16;

doc.setFontSize(11);
doc.setFont("times", "normal");
doc.text("New Haven, CT | 203-290-8063 | kirankumarc477@gmail.com | LinkedIn", pageWidth / 2, y, { align: "center" });
doc.link(350, y - 10, 35, 12, { url: "mailto:kirankumarc477@gmail.com" });
// Note: Link coords are approximate, would need fine-tuning usually, but text display is key.
y += 6;

// Line Separator
doc.setLineWidth(1.5);
doc.line(margin, y, pageWidth - margin, y);
y += 18;

// 2. Summary
doc.setFont("times", "bold");
doc.setFontSize(12);
doc.text("SUMMARY", margin, y);
y += 14;

doc.setFont("times", "normal");
doc.setFontSize(11);
const summaryLines = doc.splitTextToSize(SUMMARY, pageWidth - (margin * 2));
doc.text(summaryLines, margin, y);
y += (summaryLines.length * 12) + 6;

// 3. Skills
checkPageBreak(100);
doc.setLineWidth(0.5);
doc.line(margin, y, pageWidth - margin, y); // Separator
y += 14;
doc.setFont("times", "bold");
doc.setFontSize(12);
doc.text("SKILLS", margin, y);
y += 14;

doc.setFontSize(10);
Object.entries(SKILLS).forEach(([category, skills]) => {
    checkPageBreak(14);
    doc.setFont("times", "bold");
    doc.text(`${category}: `, margin, y);
    const techWidth = doc.getTextWidth(`${category}: `);
    doc.setFont("times", "normal");
    const skillLines = doc.splitTextToSize(skills, pageWidth - (margin * 2) - techWidth);
    doc.text(skillLines, margin + techWidth, y);
    y += (skillLines.length * 11);
});
y += 6;

// 4. Education
checkPageBreak(50);
doc.line(margin, y, pageWidth - margin, y);
y += 14;
doc.setFont("times", "bold");
doc.setFontSize(12);
doc.text("EDUCATION", margin, y);
y += 14;

EDUCATION.forEach(edu => {
    checkPageBreak(14);
    doc.setFont("times", "bold");
    doc.setFontSize(10);
    // Left side: Degree, Institution, Loc, GPA
    const line1 = `${edu.degree}, ${edu.institution}, ${edu.location} ${edu.gpa}`;
    doc.text(line1, margin, y);

    // Right side: Date
    doc.text(edu.period, pageWidth - margin, y, { align: "right" });
    y += 14;
});
y += 6;

// 5. Experience
checkPageBreak(100);
doc.line(margin, y, pageWidth - margin, y); // Separator
y += 14;
doc.setFont("times", "bold");
doc.setFontSize(12);
doc.text("EXPERIENCE", margin, y);
y += 14;

EXPERIENCE.forEach(exp => {
    checkPageBreak(40);
    // Title Line
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    const titleLine = `${exp.company} | ${exp.period} | ${exp.title}`;
    doc.text(titleLine, margin, y);
    y += 14;

    // Bullets
    doc.setFont("times", "normal");
    doc.setFontSize(10);
    exp.bullets.forEach(bullet => {
        const bulletText = `•  ${bullet}`;
        const lines = doc.splitTextToSize(bulletText, pageWidth - (margin * 2));
        checkPageBreak(lines.length * 11);
        doc.text(lines, margin + 5, y);
        y += (lines.length * 11);
    });
    y += 8;
});

// 6. Projects
checkPageBreak(100);
doc.line(margin, y, pageWidth - margin, y);
y += 14;
doc.setFont("times", "bold");
doc.setFontSize(12);
doc.text("PROJECTS", margin, y);
y += 14;

PROJECTS.forEach(proj => {
    checkPageBreak(40);
    doc.setFont("times", "bold");
    doc.setFontSize(11);
    doc.text(proj.title, margin, y);
    y += 14;

    doc.setFont("times", "normal");
    doc.setFontSize(10);
    proj.bullets.forEach(bullet => {
        const bulletText = `•  ${bullet}`;
        const lines = doc.splitTextToSize(bulletText, pageWidth - (margin * 2));
        checkPageBreak(lines.length * 11);
        doc.text(lines, margin + 5, y);
        y += (lines.length * 11);
    });
    y += 8;
});

// 7. Certifications
checkPageBreak(80);
doc.line(margin, y, pageWidth - margin, y);
y += 14;
doc.setFont("times", "bold");
doc.setFontSize(12);
doc.text("CERTIFICATIONS", margin, y);
y += 14;

CERTIFICATIONS.forEach(cert => {
    checkPageBreak(14);
    doc.setFont("times", "bold");
    doc.setFontSize(10);
    doc.text(cert.name, margin, y);
    doc.text(cert.date, pageWidth - margin, y, { align: "right" });
    y += 14;
});

// Save
const buffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync("public/resume.pdf", buffer);
console.log("Resume generated at public/resume.pdf");
