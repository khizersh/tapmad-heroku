import React from "react";
import HomepageSlider from "./HomepageSlider";

export default function HomePage({ movies }) {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <img
              src="https://i.pinimg.com/originals/8b/35/20/8b3520b6e690c2e362c68aba1a3aef1b.jpg"
              style={{ width: "100%" }}
            />
            <HomepageSlider movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
}
