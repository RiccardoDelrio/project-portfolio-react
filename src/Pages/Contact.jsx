import '../components/Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "riccardo.delrio@email.com",
      link: "mailto:riccardo.delrio@email.com"
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn", 
      value: "linkedin.com/in/riccardo-delrio",
      link: "https://linkedin.com/in/riccardo-delrio"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "github.com/RiccardoDelrio",
      link: "https://github.com/RiccardoDelrio"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Italia",
      link: null
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="section-title">Contattami</h2>
            <p className="lead">
              Interessato a collaborare? Sono sempre aperto a nuove opportunità e progetti interessanti. 
              Non esitare a contattarmi!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-info">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">{item.label}</div>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 mx-auto text-center">
            <div className="cta-card">
              <h3 className="cta-title">Parliamo del tuo progetto</h3>
              <p className="cta-text">
                Hai un'idea che vuoi realizzare? Sono qui per aiutarti a trasformarla in realtà 
                con le tecnologie più moderne e innovative.
              </p>
              <div className="cta-buttons">
                <a href="mailto:riccardo.delrio@email.com" className="btn btn-primary btn-lg">
                  <i className="fas fa-envelope me-2"></i>
                  Invia Email
                </a>
                <a href="https://linkedin.com/in/riccardo-delrio" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg">
                  <i className="fab fa-linkedin me-2"></i>
                  Connettiti su LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;