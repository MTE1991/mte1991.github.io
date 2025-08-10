const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-white">MT Ekleel</span>
            </h1>
            <div className="text-2xl md:text-3xl mb-6 h-10">
              <span className="typing-animation">Software Developer</span>
            </div>
            <p className="mb-8 text-lg text-gray-300">
              I create functional software solutions across multiple platforms. 
              Passionate about game development, web applications, and data visualization.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300 inline-block">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-block">
                Get In Touch
              </a>
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="https://github.com/MTE1991" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/mtekleel/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://facebook.com/mtekleel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://youtube.com/@mtekleel" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src="../assets/img/mtekleel.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black rounded-full p-4 shadow-lg">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;