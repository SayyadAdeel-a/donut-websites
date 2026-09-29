'use client';

import React from 'react';
import Link from 'next/link';
import { WebflowHeader, WebflowFooter } from '@donutland/ui';

export default function ContactUsContactUs04Page() {
  return (
    <>
      <WebflowHeader activePath="/contact-us/contact-us-04" />
      <div className="page-wrapper"><section className="section contact-us-04-hero"><div className="w-layout-blockcontainer container contact-us-hero-04 w-container"><div className="hero-card all-services-hero"><div className="text-box center-aligned"><h1 className="h1-heading red contact-us-04">Contact us</h1></div><div className="contact-content-wrapper _100-width"><div className="contact-form-block w-form"><form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="contact-form" data-wf-page-id="658360087ace25b20351681d" data-wf-element-id="59d628cb-7892-5b69-1d45-bcede03853cb" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e"><div className="form-input-wrapper first-name-last-name"><div className="first-name"><label htmlFor="First-Name-2" className="form-label">First Name</label><input className="form-field red w-input" maxLength={256} name="First-Name-2" data-name="First Name 2" placeholder="First name" type="text" id="First-Name-2" required={true}/></div><div className="last-name"><label htmlFor="Last-Name-2" className="form-label">Last Name</label><input className="form-field red w-input" maxLength={256} name="Last-Name-2" data-name="Last Name 2" placeholder="Last name" type="text" id="Last-Name-2" required={true}/></div></div><div className="form-input-wrapper"><div className="form-email"><label htmlFor="Email-2" className="form-label">E-mail</label><input className="form-field email red w-input" maxLength={256} name="Email-2" data-name="Email 2" placeholder="Enter your email" type="email" id="Email-2" required={true}/></div></div><div className="form-input-wrapper"><div className="form-brief"><label htmlFor="Message-2" className="form-label">Message</label><textarea id="Message-2" name="Message-2" maxLength={5000} data-name="Message 2" placeholder="Enter your message" className="form-field message-input contact-us-04 w-input"></textarea></div></div><input type="submit" data-wait="Please wait..." className="general-button white-red reversed w-button" value="Submit"/></form><div className="success-message w-form-done"><div className="text-block success-message">Thank you! Your submission has been received!</div></div><div className="error-message w-form-fail"><div className="text-block">Oops! Something went wrong while submitting the form.</div></div></div></div></div></div></section></div>
      <WebflowFooter />
    </>
  );
}
