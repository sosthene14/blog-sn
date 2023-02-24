import TopSection from "../../components/topSection";
import NavBar from "../../components/navBarSection";
import Footer from "../../components/footer";
function Contact() {
  return (
    <div >
        <NavBar/>
    <div className="my-form">
      <div>

        <h2>Me Contacter</h2>
      </div>
      <div>
        <form>
          <div className="div-for-spacing-inputs">
          <div className="name-email-divs">
            <div>
              <div className="form-inputs">
                <input type="text" placeholder="Your Name" />
              </div>
            </div>
            <div>
              <div className="form-inputs">
                <input type="email" id="email" placeholder="Your Email" />
              </div>
            </div>
            </div>
            <div>
              <div className="form-inputs">
                <input type="text" id="subject" placeholder="Subject" />
              </div>
            </div>
            <div>
              <div className="form-inputs">
                <textarea
                  placeholder="Leave a message here"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="form-inputs">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
export default Contact;
