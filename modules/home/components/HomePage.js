import React from "react";
import HomepageSlider from "./HomepageSlider";

export default function HomePage({ movies, banner }) {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <div>
              <img
                src={banner.Video[0].bannerPoster}
                style={{ width: "100%" }}
              />
            </div>
            <HomepageSlider movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
}
