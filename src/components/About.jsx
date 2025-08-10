const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img src="../assets/img/source_code.jpg" alt="About" className="rounded-lg shadow-xl" />
          </div>
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Versatile Developer</h3>
            <p className="text-gray-600 mb-4">
              I'm a multi-platform developer with experience in game development, web applications, 
              and desktop software. I enjoy solving complex problems across different domains.
            </p>
            <p className="text-gray-600 mb-6">
              My passion lies in creating efficient, well-structured code and exploring new technologies 
              that push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-black">5+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-black">10+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;