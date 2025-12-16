import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-underline"></div>

      <p className="contact-note">
        Feel free to reach out for academic inquiries, project discussions,
        or collaboration opportunities.
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="https://mail.google.com/">
            yannyagdoro@gmail.com
          </a>
        </p>

        <p>
          <strong>Student Profile:</strong>{" "}
          <a
            href="https://pf2arianswebsitedashboard.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            MyProfile
          </a>
        </p>
         <p>
          <strong>Facebook:</strong>{" "}
          <a href="https://facebook.com">
            Arian Jane Agdoro
          </a>
        </p>
      </div>
    </section>
  );
}
