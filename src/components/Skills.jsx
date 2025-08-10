import { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C/C++", "C#", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "PHP"]
    },
    {
      title: "Database Management",
      skills: ["MySQL", "SQLite"]
    },
    {
      title: "Data Visualization",
      skills: ["Manim", "Matplotlib"]
    },
    {
      title: "Game Development",
      skills: ["OpenGL", "Unity", "Godot"]
    },
    {
      title: "Operating Systems",
      skills: ["Linux (Fedora, Ubuntu)", "Windows"]
    },
    {
      title: "Version Control",
      skills: ["Git & GitHub"]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-semibold mb-3 text-black">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skill} className="flex items-center">
                    <i className="fas fa-check text-black mr-2"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;