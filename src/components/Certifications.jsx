const Certifications = () => {
  const certifications = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/JY1PUO7Y6ETY"
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "FreeCodeCamp",
      credentialUrl: "https://www.freecodecamp.org/certification/fcc5c5c6ca9-759b-47a3-8de4-049b600dd402/foundational-c-sharp-with-microsoft"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Certifications</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {certifications.map((cert, index) => (
            <div key={cert.title} className="bg-gray-50 p-6 rounded-lg shadow-md fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-4">by {cert.issuer}</p>
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-black hover:text-gray-700 transition-colors duration-300">
                <i className="fas fa-external-link-alt mr-2"></i>
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;