import React, { useState } from "react";
import "./home.css";
import giftr from "../../assets/giftr.png";
import auth from "../../assets/auth.png";
import brightland from "../../assets/brightland.png";
import trainer1 from "../../assets/github.png";
import trainer2 from "../../assets/instagram-logo.png";
import trainer3 from "../../assets/linkedin-logo.png";
import { send } from "emailjs-com";

function HomePage() {
  const [sent, setSent] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
    phone_number: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    send(
      "service_0gr8dfv",
      "template_6k7ulyn",
      toSend,
      "user_NUCuRnOLPnhmO18OrQEZK"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          from_name: "",
          message: "",
          reply_to: "",
          phone_number: "",
        });
        setSent(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <header>
        <h1>
          <a href="/Portfolio">Taylor Hackbart </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#what-we-do">About Me</a>
            </li>
            <li>
              <a href="#what-you-do">Projects</a>
            </li>
            <li>
              <a href="#your-trainers">Connect</a>
            </li>
            <li>
              <a href="#reach-out">Reach Out</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-cta">
          <h2>Who Is She?</h2>
          <p>
            Taylor is a motivated self-starter who enjoys collaborating on
            projects with a team. She has her BS from The University of Oregon
            in General Science with an emphasis in Marine Biology and a minor in
            Biology. Taylor lived in Quintana Roo, Mexico after graduating from
            college in 2016 to help a research team collect data from coral
            reefs. While she still has a passion for oceanography, her interest
            piqued when she entered the coding world. Eventually, Taylor would
            like to combine her two passions and raise conservation awareness
            through the touch of a button.
          </p>
        </div>
        <div className="hero-form">
          <h3>Send Taylor a Message</h3>
          <p>Fill out this form and I will get back to you ASAP.</p>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Enter full name:</label>
            <input
              type="text"
              name="from_name"
              placeholder="John Doe"
              value={toSend.from_name}
              onChange={handleChange}
              id="name"
              className="form-input"
            />

            <label htmlFor="email">Enter email address:</label>
            <input
              type="text"
              name="reply_to"
              placeholder="johndoe@gmail.com"
              value={toSend.reply_to}
              onChange={handleChange}
              id="email"
              className="form-input"
            />
            <label htmlFor="phone_number">Enter a telephone number:</label>
            <input
              pattern="[0-9]*"
              type="text"
              name="phone_number"
              placeholder="xxx-xxx-xxxx"
              value={toSend.phone_number}
              onChange={handleChange}
              id="phone"
              className="form-input"
            />
            <label htmlFor="message">Enter a message:</label>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              value={toSend.message}
              onChange={handleChange}
              id="message"
              className="form-input"
            />
            <button type="submit">Send!</button>
            {sent === true && (
              <>
                <p> Thank you for your message :) </p>
              </>
            )}
          </form>
        </div>
      </section>

      <section id="what-we-do" className="intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">Why Coding?</h2>
        </div>
        <div className="flex-row">
          <p>
            During the initial lock down in March 2020, Taylor needed something
            to consume her time. After working full time at a fine dining
            restaurant in Del Mar and volunteering at two oceanography sites, it
            was hard to sit still. As she explored remote job positions, she
            found various websites that allowed her to learn basic coding for
            free. Once she completed multiple programs and felt comfortable
            creating algorithms, she decided to take it to the next level and
            sign up for a Boot Camp through Denver University and received her
            Full Stack Web Developer certification in December 2020.
          </p>
          <p>
            Since Taylor completed the Boot Camp, she has taken on a tutoring
            role through 2U Education and is holding the position of a Senior
            Tutor. She also works on various freelance projects in her down time
            and enjoys making her clients visions come to life.
          </p>
        </div>
      </section>
      <section id="what-we-do" className="intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">What is Taylor doing now?</h2>
        </div>
        <div className="flex-row">
          <p>
            Along with being promoted to a Senior Tutor, she is currently developing an application using React Native, a language she took upon herself to learn in her free time, that will hit the App store soon being compatible with IOS and Android devices. On top of that, Taylor is looking to fill a role as a Full Stack, Front End, or Back End Developer. She prides herself on being a quick learner, ready to take on a new role with dedication and a go-getter attitude. 
          </p>
          <p>
            Taylor welcomes you to fill out the message block above with any job inquiries and welcomes any questions you may have about her current or past projects. She is hungry to learn and build upon her current skill set and is sure to impress you with her drive and work ethic.
          </p>
        </div>
      </section>
      <section id="what-you-do" className="steps">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="step">
          <div className="step-info">
            <div className="brightland-img">
              <a href="https://www.brightlandproperties.com/" target="__blank">
                <img src={brightland} alt="" className="bright-land" />{" "} 
              </a>
            </div>
            <div className="step-text">
              <h4>Brightland Properties</h4>
              <p>
              This property management system was designed to display all the properties that one owner, or group, has available for rent. Each property has a link to the Airbnb website that will allow booking a stay at one of these properties. The site has a portal for Employees, using an authentication method I created using the Mongo Atlas database system. Administrators are the only ones that are able to add employees and manage the property rentals, while the employees are able to login and log a clean and upload photos for the admin to view and approve of. When a property needs to be updated, added or deleted, the manager or admin has the ability to do this on the client site, adding all of the information directly into the browser.
                <a href="https://github.com/taylorhackbart/BrightLand-Properties" target="__blank"> here</a>!
              </p>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-info">
            <div className="step-img">
              <a href="https://giftr-registry.herokuapp.com/" target="__blank">
                <img src={giftr} alt="" />{" "}
              </a>
            </div>
            <div className="step-text">
              <h4>GIFTR</h4>
              <p>
                This application allows users to create registries for every
                occasion! Click on the image to test it out, or view my
                repository{" "}
                <a href="https://github.com/taylorhackbart/registry" target="__blank"> here</a>!
              </p>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-info">
            <div className="step-img">
              <a href="https://auth-template.herokuapp.com/" target="__blank">
                {" "}
                <img src={auth} alt="" />
              </a>
            </div>
            <div className="step-text">
              <h4>MERN Authentication</h4>
              <p>
                This application is a bare bones template for user
                authentication. This authentication template pushes users info
                directly into a DB collection created by the site owner rather
                than using a third party authentication DB portal (Auth0,
                Firebase, etc.). This allows easy access to all data for the
                site owner. Click{" "}
                <a href="https://github.com/taylorhackbart/MERN-AUTH" target="__blank">here</a>{" "}
                for access to my repository, or click on the image to test it
                out!
              </p>
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-info">
            <div className="step-img">
              <a href="https://image-upload-template.herokuapp.com/" target="__blank">
                {" "}
                <img src={auth} alt="" />
              </a>
            </div>
            <div className="step-text">
              <h4>MERN Image Upload</h4>
              <p>
                This application is a bare bones template for a drap n' drop image uploader that allows multiple image uploads from a desktop, tablet or mobile device. This allows a user to delete photos upon upload, as well as rearrange the order in which images will be displayed. The first image on the list will always be the image displayed on the "View Uploads" page.  Click{" "}
                <a href="https://github.com/taylorhackbart/IMAGE-UPLOAD" target="__blank">here</a>{" "}
                for access to my repository, or click on the image to test it
                out!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="your-trainers">
        <div className="flex-row">
          <h2 className="section-title primary-border">Connect With Me!</h2>
        </div>
        <div className="trainers">
          <article className="trainer text-left">
            <a href="https://github.com/taylorhackbart" target="__blank">
              <img
                src={trainer1}
                alt=""
              />
            </a>
            <div className="trainer-bio">
              <h3 className="trainer-name">GitHub</h3>

              <p>
                Check out my GitHub for a full list of the projects I have created, collaborated on, and are currently being developed!
              </p>
            </div>
          </article>
          <article className="trainer">
            <a
              href="https://www.instagram.com/tayhackbart/?hl=en"
              target="__blank"
            >
              <img
                src={trainer2}
                alt=""
                className="logos"
              />
            </a>
            <div className="trainer-bio">
              <h3 className="trainer-name">Instagram</h3>

              <p>
                To see what my life is like outside of work, visit my Instagram!
              </p>
            </div>
          </article>

          {/* <!-- third trainer bio --> */}
          <article className="trainer">
            <a
              href="https://www.linkedin.com/in/taylorhackbart/"
              target="_blank"
            >
              <img
                src={trainer3}
                alt="Harry Smith wearing a headband and lifting comically small pink weights"
                className="logos"
              />
            </a>
            <div className="trainer-bio text-left">
              <h3 className="trainer-name">LinkedIn</h3>

              <p>
               For more background information, including my schooling, degrees, certifications and my work history, check out my LinkedIn!
              </p>
            </div>
          </article>
        </div>
      </section>
      <section id="reach-out" className="contact">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Reach Out</h2>
        </div>
        <div className="contact-info">
          <div>
            <h3>Taylor Hackbart</h3>
            <p>
              Any questions?
              <br />
              Let me know and I'll be happy to talk to you!
            </p>

            <address>
              P: <a href="tel:858.353.7027">(858)353-7027</a>
              <br />
              E: <a href="mailto://taylor.hackbart@gmail.com">taylor.hackbart@gmail.com</a>
              <br />
              Currently: Del Mar, CA 92014
            </address>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.588498756007!2d-117.2702135847947!3d32.96187218091665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0f354bc35bd7%3A0x56f2f1f0b4deff5!2s1660%20Coast%20Blvd%2C%20Del%20Mar%2C%20CA%2092014!5e0!3m2!1sen!2sus!4v1641330446674!5m2!1sen!2sus"
            // width="400"
            // height="400"
            // style="border: 0"
            // allowFullScreen=""
            // loading="lazy"
          ></iframe>
        </div>
      </section>
      <footer>
        <div>
        <p> Taylor Hackbart  &copy; 2022</p>
        </div>
      </footer>
    </>
  );
}
export default HomePage;
