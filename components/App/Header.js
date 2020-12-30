import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="logo w-100">
          <div className="row d-flex align-items-center">
            <div className="col-4">
              <a href="/">
                <img
                  src="https://www.tapmad.com/images/tm-logo.png"
                  width={"130px"}
                  className="ml-3"
                />
              </a>
            </div>
            <div className="col-4">
              <div className="d-flex tp-menu justify-content-center">
                <Link href="/live">Live</Link>
                <Link href="/movies">Movies</Link>
                <Link href="/shows">Shows</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
