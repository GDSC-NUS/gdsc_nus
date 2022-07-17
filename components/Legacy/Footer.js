import React from "react";
import { Icon } from "semantic-ui-react";
import NextLink from "next/link";

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <img
        src="/assets/Footer/dscnusfulllogo.png"
        alt="Logo"
        className="footer__logo"
      />
    </div>
    <div className="footer__content">
      <div className="footer__left">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <NextLink href="/legacy/about" className="footer__link">
                About Us
              </NextLink>
            </li>
            <li className="footer__item">
              {/* href="/legacy/team" */}
              <NextLink href="#" className="footer__link">
                Our Team
              </NextLink>
            </li>
            <li className="footer__item">
              {/* href="/legacy/internalprojects" */}
              <NextLink href="#" className="footer__link">
                Our Projects
              </NextLink>
            </li>
            <li className="footer__item">
              {/* href="/legacy/externalprojects" */}
              <NextLink href="#" className="footer__link">
                External Projects
              </NextLink>
            </li>
            <li className="footer__item">
              {/* href="/legacy/blog" */}
              <NextLink href="#" className="footer__link">
                Blog
              </NextLink>
            </li>
          </ul>
        </div>
        <p className="footer__disclaimer">
          Disclaimer: DSC is an independent group; the activities and opinions
          expressed by the group should in no way be linked to Google, the
          corporation.
        </p>
      </div>
      <div className="footer__right">
        <div className="footer__socialmedia-menu">
          <a
            href="http://www.instagram.com/dscnus"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <Icon name="instagram" link size="huge" />
          </a>
          <a
            href="http://www.linkedin.com/company/dscnus"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <Icon name="linkedin" link size="huge" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
