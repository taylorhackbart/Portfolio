import React, { useState } from "react";
import { FormBtn, TextArea } from "../../components/Form";
import API from "../../utils/API";
import "./home.css";
import jumbo from "../../assets/hero-bg.jpg";
import step1 from "../../assets/step-1.svg";
import step2 from "../../assets/step-2.svg";
import step3 from "../../assets/step-3.svg";
import step4 from "../../assets/step-4.svg";
import trainer1 from "../../assets/github.png";
import trainer2 from "../../assets/instagram-logo.png";
import trainer3 from "../../assets/linkedin-logo.png";
import { send } from "emailjs-com";

function HomePage() {
  const [state, setState] = useState({ example: "" });
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState();
  const userID = process.env.USERID;
  const SERVICE = process.env.SERVICEID;
  const TEMPLATE = process.env.TEMPLATE;
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
        setToSend({from_name: "",
        message: "",
        reply_to: "",
        phone_number: ""})
        setSent(true)
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
          <a href="./index.html">Taylor Hackbart </a>
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
            These terms require the use of arbitration Section 10.2 on an
            individual basis to resolve disputes and also limit the remedies
            available to you in the event of a dispute. These Terms of Use were
            created with the help of the Terms Of Use Generator and the Privacy
            Policy Template.
          </p>
        </div>
        <div className="hero-form">
          <h3>Send Taylor a Message</h3>
          <p>Fill out this form and I will get back to you ASAP.</p>
          <form onSubmit={onSubmit}>
            <label for="name">Enter full name:</label>
            <input
              type="text"
              name="from_name"
              placeholder="John Doe"
              value={toSend.from_name}
              onChange={handleChange}
              id="name"
              className="form-input"
            />

            <label for="email">Enter email address:</label>
            <input
              type="text"
              name="reply_to"
              placeholder="johndoe@gmail.com"
              value={toSend.reply_to}
              onChange={handleChange}
              id="email"
              className="form-input"
            />
            <label for="phone_number">Enter a telephone number:</label>
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
            <label for="message">Enter a message:</label>
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
          <h2 className="section-title primary-border">Snippets</h2>
        </div>
        <div className="flex-row">
          <p>
            butcher selfies chambray shabby chic gentrify readymade yr Echo Park
            XOXO Tumblr normcore Banksy direct trade Blue Bottle chillwave you
            probably haven't heard of them single-origin coffee Vice fanny pack
            fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson
            Thundercats viral bitters flannel meggings narwhal Marfa Schlitz
            sustainable Intelligentsia umami deep v craft
          </p>
        </div>
      </section>
      <section id="what-you-do" className="steps">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="step">
          <h3>Step 1.</h3>
          <div className="step-info">
            <div className="step-img">
              <img src={step1} alt="" />
            </div>
            <div className="step-text">
              <h4>Fill Out The Form Above</h4>
              <p>You're already here, so why not?</p>
            </div>
          </div>
        </div>

        <div className="step">
          <h3>Step 2.</h3>
          <div className="step-info">
            <div className="step-img">
              <img src={step2} alt="" />
            </div>
            <div className="step-text">
              <h4>Consult with One of Our Trainers.</h4>
              <p>
                Are you here to build muscle, lose weight, or just feel good?
              </p>
            </div>
          </div>
        </div>

        <div className="step">
          <h3>Step 3.</h3>
          <div className="step-info">
            <div className="step-img">
              <img src={step3} alt="" />
            </div>
            <div className="step-text">
              <h4>Get Running.</h4>
              <p>
                Hit the ground running (literally) once your trainer lays out
                your plan.
              </p>
            </div>
          </div>
        </div>

        <div className="step">
          <h3>Step 4.</h3>
          <div className="step-info">
            <div className="step-img">
              <img src={step4} alt="" />
            </div>
            <div className="step-text">
              <h3>See Results.</h3>
              <p>Bi-weekly checkins with your trainer will keep you focused</p>
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
           <a href="https://github.com/taylorhackbart" target="_blank">
           <img
              src={trainer1}
              alt="Arron Stephens in his workout clothes, ready to pump iron"
              className="github-logo"
            />
            </a>
            <div className="trainer-bio">
              <h3 className="trainer-name">GitHub</h3>
              <h4 className="trainer-role">Speed / Strength</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>
          <article className="trainer">
            <a href="https://www.instagram.com/tayhackbart/?hl=en" target="_blank">
            <img src={trainer2} alt="Joanna Gill cooling off after a workout"  className="logos"/>
            </a>
            <div className="trainer-bio">
              <h3 className="trainer-name">Instagram</h3>
              <h4 className="trainer-role">Endurance</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
              </p>
            </div>
          </article>

          {/* <!-- third trainer bio --> */}
          <article className="trainer">
           <a href="https://www.linkedin.com/in/taylorhackbart/" target="_blank">
            <img
              src={trainer3}
              alt="Harry Smith wearing a headband and lifting comically small pink weights"
              className="logos"
            />
            </a>
            <div className="trainer-bio text-left">
              <h3 className="trainer-name">LinkedIn</h3>
              <h4 className="trainer-role">Strength</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                neque animi quo cupiditate commodi saepe culpa sed itaque velit
                maiores optio dolorem excepturi aperiam dolores, voluptatibus
                suscipit amet quis repellat!
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
            <h3>Run Buddy</h3>
            <p>
              Any questions or concerns before signing up?
              <br />
              Let us know and we'll be happy to talk to you!
            </p>

            <address>
              55 Main Street <br />
              Some Town, Ca <br />
              12345 <br />
              P: <a href="tel:555.786.2839">555.RUN.BUDZ (555.786.2839)</a>
              <br />
              E: <a href="mailto://info@runbuddy.io">info@runbuddy.io</a>
            </address>
          </div>

          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <label for="contact-name">Your Name</label>
              <input type="text" id="contact-name" placeholder="Your Name" />

              <label for="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Message"></textarea>

              <button type="submit">Submit</button>
            </form>
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
        <h2>Made with love by Run Buddy</h2>
        <div>
          <a href="./privacy-policy.html">Read Our Privacy Policy</a>
          <br />
          &copy; 2019 Run Buddy, Inc.
        </div>
      </footer>
    </>
  );
}
export default HomePage;
