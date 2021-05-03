import React from "react";
import { androidApp, appleApp } from "../services/imagesLink";

export default function Footer() {
  return (
    <div>
      <footer className="pt-5 pb-5">
        <div className="container-fluid pr-4 pl-4">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <ul className="list-group list-group-horizontal footer_links">
                <li className="list-group-item pt-0">
                  <a href="/copyright" target="_blank">
                    Copyright
                  </a>
                </li>
                <li className="list-group-item pt-0">
                  <a href="/terms" target="_blank">
                    Terms of use
                  </a>
                </li>
                <li className="list-group-item pt-0">
                  <a href="/about" target="_blank">
                    About
                  </a>
                </li>
                <li className="list-group-item pt-0">
                  <a href="/contact" target="_blank">
                    Contact
                  </a>
                </li>
                <li className="list-group-item pt-0">
                  <a href="/privacyPolicy" target="_blank">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-group-item pt-0">
                  <a href="/faqs" target="_blank">
                    FAQs
                  </a>
                </li>
              </ul>

              <p className="pt-1">
                © Pi Pakistan (pvt) Ltd, is a wholly owned subsidiary of tapmad
                holdings PTE LTD is a fully licenced Public Internet Television
                Service (ITS) provider. Tapmad.com is Pi Pakistan's own B2C
                brand. All rights reserved.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 ">
              <h5>Connect with us</h5>
              <ul className="list-group list-group-horizontal tm_socl_lnks">
                <li className="list-group-item">
                  <a href="https://twitter.com/tapmadtv" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="https://www.facebook.com/TapmadTV/" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="https://www.instagram.com/tapmadtv/" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <h5>Tapmad App</h5>
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                  <a
                    href="https://apps.apple.com/pk/app/tapmad/id1317253610"
                    target="_blank"
                  >
                    <img src={appleApp} className="img-fluid" alt="" />
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tapmad.tapmadtv&amp;hl=en"
                    target="_blank"
                  >
                    <img src={androidApp} className="img-fluid" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
