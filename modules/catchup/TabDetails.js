import React, { useContext, useState, useEffect } from "react";
import { CatchupContext } from "../../contexts/CatchupContext";
import Slider from "react-slick";
import Link from "next/link";
import {
  basicSliderConfig,
  SEOFriendlySlugsForCatchupVideo,
} from "../../services/utils";

const TabDetails = () => {
  const [details, setDetails] = useState(null);
  const { catchupState } = useContext(CatchupContext);
  const settings = basicSliderConfig(6, 3);

  useEffect(() => {
    setDetails(catchupState.selectedTab);
  }, [catchupState.selectedTab]);
  return (
    <div>
      {details && details.sections.length
        ? details.sections.map((m) => (
            <div className="row my-1">
              <div className=" col-md-2 col-sm-3 pr-0">
                <div className="dys">
                  <h4>{m.SectionName.split(" ")[0]}</h4>
                  <p className="text-muted">
                    {m.SectionName.split(" ")[1]}
                  </p>{" "}
                </div>
              </div>
              <div></div>

              <div className="col-md-10 col-sm-9">
                <Slider {...settings}>
                  {m.Videos &&
                    m.Videos.length &&
                    m.Videos.map((n) => {
                      let slug = SEOFriendlySlugsForCatchupVideo(n);
                      return (
                        <Link href={slug} shallow passHref>
                          <a>
                            <img
                              className="cont-image"
                              src={n.VideoImageThumbnail}
                              width="100%"
                            />
                            <div className="live_side" style={{ left: "2px" }}>
                              {n.PackageName}
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                </Slider>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default TabDetails;
