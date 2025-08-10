const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">MT Ekleel</h3>
          <div className="flex justify-center space-x-6 mb-6">
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
          <p className="text-gray-300">
            <a href="mailto:mtahsinekleel02@gmail.com" className="hover:text-white transition-colors duration-300">
              <i className="fas fa-envelope mr-2"></i>mtahsinekleel02@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;