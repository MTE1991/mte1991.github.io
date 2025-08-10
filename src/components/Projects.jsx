const Projects = () => {
  const projects = [
    {
      title: "Pong2D",
      description: "A 2D Pong game developed using the Godot Engine, inspired by the classic arcade game. Demonstrates foundational gameplay mechanics such as collision detection, scoring, and AI-controlled paddle.",
      tags: ["Godot", "GDScript", "Game Development"],
      github: "https://github.com/MTE1991/pong2d"
    },
    {
      title: "WFAlarmClock",
      description: "A desktop alarm clock application developed using C# and Windows Forms. Allows users to set and manage alarms with a customizable user interface.",
      tags: ["C#", "Windows Forms", "Desktop App"],
      github: "https://github.com/MTE1991/WFAlarmClock"
    },
    {
      title: "Employee Management System",
      description: "Web-based system to manage employee attendance and payroll for small to medium-sized organizations. Built using LAMP stack (Linux, Apache, MySQL, PHP).",
      tags: ["PHP", "MySQL", "Web Development"],
      github: "https://github.com/MTE1991/Employee-Management-System"
    },
    {
      title: "TkWeatherApp",
      description: "Desktop weather application built using Python and Tkinter. Retrieves real-time weather data via an API and displays temperature, humidity, and conditions.",
      tags: ["Python", "Tkinter", "API"],
      github: "https://github.com/MTE1991/TkWeatherApp"
    },
    {
      title: "ToDoAppJava",
      description: "A simple and interactive To-Do List application built using Java and Swing for desktop platforms. Allows users to add, delete, and mark tasks as completed.",
      tags: ["Java", "Swing", "Desktop App"],
      github: "https://github.com/MTE1991/ToDoAppJava"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="card-hover bg-white rounded-lg shadow-lg p-6 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition-colors duration-300">
                  <i className="fab fa-github mr-2"></i>Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;