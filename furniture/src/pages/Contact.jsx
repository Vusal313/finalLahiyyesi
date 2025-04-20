import React, { useState } from "react";
import "./Contact.scss";
import banner from "../assets/tables-category-hero-image.webp";

const faqData = [
  {
    question: "Can I order by telephone?",
    answer1:
      "Et adipiscing mattis egestas mi placerat duis congue id. Scelerisque integer pulvinar justo sed egetpretium ipsum id faucibus euismod empor sagittis facilisis tristique. Egestas massa purus vel at consectetur convallis cras imperdiet.",
    answer2:
      "Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Arcu non odio euismod lacinia at quis risus.",
  },
  {
    question: "Do you sell gift cards?",
    answer1:
      "Quisque egestas diam in arcu. Pretium vulputate sapien nec sagittis aliquam. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.",
  },
  {
    question: "Can I order catalog products online?",
    answer1:
      "Tempus iaculis urna id volutpat. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Sem fringilla ut morbi tincidunt.",
    answer2:
      "Tincidunt dui ut ornare lectus sit. Ut sem viverra aliquet eget sit amet tellus cras.",
  },
  {
    question: "Who can answer my warranty questions?",
    answer1:
      "Urna cursus eget nunc scelerisque viverra mauris. Ut pharetra sit amet aliquam id. Et odio pellentesque diam volutpat commodo.",
    answer2:
      "Maecenas pharetra convallis posuere morbi leo urna. Arcu non odio euismod lacinia at quis risus. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.",
  },
  {
    question: "Arcu non odio euismod lacinia at quis?",
    answer1:
      "Et malesuada fames ac turpis egestas. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Nulla facilisi etiam dignissim diam quis enim.",
    answer2:
      "Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ultricies tristique nulla aliquet enim tortor at auctor.",
  },
  {
    question: "Magna ac placerat vestibulum?",
    answer1:
      "Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Nulla facilisi etiam dignissim diam quis enim. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.",
    answer2:
      "Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ultricies tristique nulla aliquet enim tortor at auctor.",
  },
];

export default function Contact() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="contactContainer">
      <div
        className="contact__banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="contact__overlay">
          <h1>Contact Us</h1>
          <p>HOME {">"} Contact Us</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contactContent">
        <div className="contactLeft">
          <h2>Get in touch</h2>
          <p>
            Blandit at maecenas dui sed amet sit enim vitae. Amet purus dictum
            urna sagittis dignissim. At fermentum nisl ullamcorper orci.
          </p>
          <form className="contactForm">
            <div className="formRow">
              <input type="text" placeholder="Your Name *" />
              <input type="email" placeholder="Your Email *" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message *"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contactRight">
          <h2>Furniture store & showrooms</h2>
          <p>
            Et adipiscing mattis egestas mi placerat duis congue id. Scelerisque
            integer pulvinar justo sed eget pretium ipsum id faucibus euismod.
          </p>
          <div className="mapWrapper">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.660%2C45.035%2C7.705%2C45.077&layer=mapnik"
              style={{
                width: "100%",
                height: "300px",
                border: 0,
                borderRadius: "10px",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contactInfo">
            <div>
              <h3>Address</h3>
              <p>
                7914 Lees Creek
                <br />
                St. Dayton, OH 45420
              </p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>
                (437) 402-2459
                <br />
                (928) 630-9272
              </p>
            </div>
            <div>
              <h3>Email</h3>
              <p>
                info@company.com
                <br />
                sales@company.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faqSection">
        <div className="faqHeader">
          <h2>Frequently Asked Questions</h2>
          <p>
            Donec et odio pellentesque diam volutpat commodo. Amet consectetur
            adipiscing elit ut aliquam purus vitae et leo duis.
          </p>
          <img src={require("../assets/contact-us-faq-image.webp")} alt="#" />
        </div>
        <div className="faqItems">
          {faqData.map((item, index) => (
            <div
              className={`faqItem ${
                activeIndices.includes(index) ? "active" : ""
              }`}
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faqQuestion">
                <h3>{item.question}</h3>
                <span>{activeIndices.includes(index) ? "−" : "+"}</span>
              </div>
              {activeIndices.includes(index) && (
                <div className="faqAnswer">
                  <p>{item.answer1}</p>
                  <p>{item.answer2}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
