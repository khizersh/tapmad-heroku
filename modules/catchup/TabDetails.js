import React, { useContext, useState, useEffect } from "react";
import { CatchupContext } from "../../contexts/CatchupContext";
import Slider from "react-slick";
import Link from "next/link";
import {
  basicSliderConfig,
  SEOFriendlySlugsForCatchupVideo,
} from "../../services/utils";
import { UserEngagemnent } from "../../services/gtm";

const TabDetails = () => {
  const [details, setDetails] = useState(null);
  const { catchupState, updateRelatedContent } = useContext(CatchupContext);
  const settings = basicSliderConfig(6, 3);

  const onClick = (data) => {
    let array = [];
    catchupState.selectedTab.sections.map((m) => {
      m.Videos.map((n) => {
        if (n.VideoEntityId == data.VideoEntityId) {
          array.push(m);
        }
      });
    });
    if (array.length) {
      updateRelatedContent(array[0].Videos);
    }
  };

  useEffect(() => {
    setDetails(catchupState.selectedTab);
  }, [catchupState.selectedTab]);

  return (
    <div>
      {details && details.sections.length
        ? details.sections.map((m, i) => (
          <div key={i} className="row my-1">
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
                  m.Videos.map((n, i) => {
                    let slug = SEOFriendlySlugsForCatchupVideo(n);
                    return (
                      <Link key={i} href={slug} shallow passHref>
                        <a onClick={() => (onClick(n), UserEngagemnent("Catchup", m.SectionName.split(" ")[0], i + 1, n.VideoName))}>
                          <div className="pos-rel">
                            <img
                              className="cont-image"
                              src={n.VideoImageThumbnail}
                              width="100%"
                              alt={n.VideoName}
                            />
                            {n.IsVideoFree ? null : (
                              // <div className="live_side">{n.PackageName}</div>
                              <div className="row">
                              <img
                                className="live_side2 crown-img-only"
                                src={n.PackageImage}
                                width={40}
                              />
                            </div>
                            )}
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
