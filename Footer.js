import React from "react";
import "./styles/Hero.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>SynSkill</h3>
          <p>
            A skill-first hiring platform connecting talent with opportunity.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Find Jobs</li>
            <li>Post a Job</li>
            <li>Skill Tests</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <h4>For Recruiters</h4>
          <ul>
            <li>Hire Talent</li>
            <li>Company Dashboard</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email: support@synskill.com</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 SynSkill. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
