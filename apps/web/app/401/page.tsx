'use client';

import React from 'react';
import Link from 'next/link';


export default function Page401Page() {
  return (
    <>
      
      <div className="utility-page-wrap"><div className="utility-page-content w-password-page w-form"><form action="/.wf_auth" method="post" id="email-form" name="email-form" data-name="Email Form" className="utility-page-form w-password-page" data-wf-page-id="658482c023c662b48b760ad4" data-wf-element-id="658482c023c662b48b760ad700000000000c"><div className="image-wrapper password-image"><img src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6581e3ee48eaac1b0d8166fd_pink-shadow-donut.webp" alt="" sizes="(max-width: 479px) 90vw, (max-width: 767px) 85vw, (max-width: 991px) 72vw, (max-width: 1439px) 49vw, (max-width: 1919px) 40vw, 27vw" srcSet="https://cdn.prod.website-files.com/6569d73055568668783bf587/6581e3ee48eaac1b0d8166fd_pink-shadow-donut-p-500.webp 500w, https://cdn.prod.website-files.com/6569d73055568668783bf587/6581e3ee48eaac1b0d8166fd_pink-shadow-donut-p-800.webp 800w, https://cdn.prod.website-files.com/6569d73055568668783bf587/6581e3ee48eaac1b0d8166fd_pink-shadow-donut-p-1080.webp 1080w, https://cdn.prod.website-files.com/6569d73055568668783bf587/6581e3ee48eaac1b0d8166fd_pink-shadow-donut.webp 1302w" className="content-image"/></div><h2 className="h1-heading hot-pink">Protected Page</h2><div className="password-content-wrapper"><label htmlFor="pass" className="password-label w-password-page">Password</label><input className="form-field w-password-page w-input" autoFocus={true} maxLength={256} name="pass" data-name="field" placeholder="Enter your password" type="password" id="pass"/><input type="submit" data-wait="Please wait..." className="general-button white-pink password w-password-page w-button" value="Submit"/></div><div className="w-password-page w-form-fail"><div>Incorrect password. Please try again.</div></div><div style={{"display":"none"}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="" /><input type="hidden" name="page" defaultValue="" /></div><div style={{"display":"none"}} className="w-password-page w-embed w-script"></div></form></div></div>
      
    </>
  );
}
