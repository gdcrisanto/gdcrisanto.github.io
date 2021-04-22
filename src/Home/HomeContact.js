import "./Home.scss";
function HomeContact() {

  var linkedin = 'https://www.linkedin.com/in/gian-diego-crisanto';
  var facebook = 'https://www.facebook.com/dcrisanto/';
  var github = 'https://github.com/gdcrisanto';
  
  return (
    <div className="row home-contact" id="contact">
      <div className="row contact-container">
        <div className="row contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="row contact-subtitle">
          Interested in working together?<br/> Feel free to message me or send an email.
        </div>
        <div className="row contact-social">
          <a href={facebook}  class="fa fa-facebook"></a>
          <a href={linkedin}  class="fa fa-linkedin"></a>
          <a href={github}  class="fa fa-github"></a>
        </div>
      </div>
      <div className="row contact-copyright">
        &copy; Gian Diego Crisanto
      </div>
    </div>
  );
}

export default HomeContact;