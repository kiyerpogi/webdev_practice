import { prisma } from "@/lib/prisma";

async function main() {}
  const kiyer = await prisma.profiles.create({
    data: {
      email: "binayugkiel7@gmail.com",
      full_name: "Kiervin Geda Binayug",
      update_year: 2026,
      profession: "IT Student • Aspiring Developer",
      location: "Cavite, Philippines",
      contact_number: "+63 991 926 3048",
      initials: "KB",
      social_links: [
        {
          "github" : "github.com" 
        },
        {
          "linkedin" : "linkedin.com"
        },
        {
          "email" : "binayugkiel7@gmail.com"
        }
      ],
      achievements: {
        create: [
          { name: "Dean's List — 1st Year, 2nd Semester" },
          { name: "Participant — Intra-departmental Programming Contest (Java)" },
          { name: "Participant — ICPEP.SE Tech Summit 2024" }
        ]
      },
      educations: {
        create: [
            {
              degree: "BS Information Technology",
              school: "Cavite State University - Silang Campus",
              year: "2025 – Present",
              note: "1st Year, 2nd Semester — Dean's List"
            }, 
            {
              degree: "Senior High School — STEM Track",
              school: "Philippine Christian University - Cavite",
              year: "2023 – 2025",
              note: "Graduated with Honors"
            }
        ]
      },
      objectives: {
        create: {
          objective_desc: "Aspiring software developer with a strong foundation in programming and a passion for creating innovative solutions. Seeking opportunities to apply my skills, contribute to impactful projects, and grow as a professional in the tech industry."
        }
      },
      projects: {
        create: [
          {
            title: "Student Grade Calculator",
            lang: "C++",
            project_desc: "Console app that computes final grades by averaging quiz, midterm, and exam scores, then maps them to letter grades.",
          },
          {
            title: "Simple Banking System",
            lang: "Java",
            project_desc: "Simulates basic banking — deposit, withdraw, balance inquiry — using classes and object-oriented design.",
          },
          {
            title: "Personal Portfolio Website",
            lang: "HTML / CSS / JS",
            project_desc: "Static personal site built from scratch with a light/dark mode toggle in vanilla JavaScript.",
          }
        ]
      },
      skills: {
        create: [
          {
            skill_name: "C++",
            level: 30
          },
          {
            skill_name: "Java",
            level: 30
          },
          {
            skill_name: "HTML5",
            level: 45
          },
          {
            skill_name: "CSS3",
            level: 40
          },
          {
            skill_name: "JavaScript",
            level: 35
          }
        ]
      },
      softskills: {
        create: [
          { soft_skill: "Problem-solving" },
          { soft_skill: "Adaptability" },
          { soft_skill: "Teamwork" },
          { soft_skill: "Time management" },
          { soft_skill: "Communication" }
        ]
      },
      strips: {
        create: {
          my_strip: "Passionate about technology and building things with code. Currently learning the fundamentals of software development through coursework and personal projects. Open to internships and collaborative opportunities."
        }
      },
      tools: {
        create: [
          { name: "Visual Studio Code" },
          { name: "Git" },
          { name: "GitHub" },
          { name: "Figma" },
          { name: "Chrome DevTools" }     
        ]
      }
    },
  });
  console.log({ kiyer});
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });