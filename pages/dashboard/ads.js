import React, { useEffect, useState } from "react";
import { DashboardService } from "../../modules/dashboard/Dashboard.Service";
import { getAdDetails } from "../../services/apilinks";
import { post } from "../../services/http-service";

export default function ads() {
  const [data, setData] = useState([
    {
      type: "",
      topAdDesktop: "",
      topAdMobile: "",
      onVideo: "",
      rightVideoAd: "",
      rightAd: "",
      bottomBannerAd: "",
      videoAdDuration: 200000,
      allow: true,
    },
    {
      type: "",
      topAdDesktop: "",
      topAdMobile: "",
      onVideo: "",
      rightVideoAd: "",
      rightAd: "",
      bottomBannerAd: "",
      videoAdDuration: 200000,
      allow: true,
    },
  ]);
  const [local, setLocal] = useState({});
  const [international, setInternational] = useState({});
  useEffect(async () => {
    const data = await DashboardService.getAdData();
    if (data.length == 2) {
      let local = data.filter((m) => m.type.toLower() == "local")[0];
      let international = data.filter(
        (m) => m.type.toLower() == "international"
      )[0];
      setData({ ...local }, { ...international });
      setLocal({ ...local });
      setInternational({ ...international });
    }
  }, []);

  const onClick = () => {
    const data = [
      {
        type: "local",
        topAd: "Bluekai_Leaderboard_Player$Testing_Dev_MW_320x100_Player",
        onVideo:
          "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/28379801/Testing_Dev_Desktop_MREC_Video&description_url=[placeholder]&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator=[placeholder]&vpmute=1&vpa=auto&url=https%3A%2F%2Fwww.tapmad.com%2F&vpos=preroll",
        rightVideoAd: "safasgfasg",
        rightAd: "BlueKai_MREC_Banner",
        bottomBannerAd: "Testing_Dev_Player_Superleaderboard",
        videoAdDuration: 200000,
        allow: true,
      },
      {
        type: "international",
        topAd: "Bluekai_Leaderboard_Player$Testing_Dev_MW_320x100_Player",
        onVideo:
          "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/28379801/Testing_Dev_Desktop_MREC_Video&description_url=[placeholder]&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&correlator=[placeholder]&vpmute=1&vpa=auto&url=https%3A%2F%2Fwww.tapmad.com%2F&vpos=preroll",
        rightVideoAd: "safasgfasg",
        rightAd: "BlueKai_MREC_Banner",
        bottomBannerAd: "Testing_Dev_Player_Superleaderboard",
        videoAdDuration: 200000,
        allow: true,
      },
    ];
    DashboardService.editAdDetails(data);
  };

  const onChangeHandler = () => {};
  return (
    <>
      <div className="row">
        <div className="col-12 bord pt-2">
          <div className="row">
            <div className="col-12">
              <div className="title mb-5">
                {" "}
                <h3> Local</h3>
              </div>
            </div>
            <div></div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Top Ad Desktop</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={local.topAdDesktop}
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Top Ad Mobile</label>
                <input
                  type="email"
                  class="form-control"
                  value={local.topAdMobile}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">On Video Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={local.onVideo}
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Right Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Right Video Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Bottom Banner Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <button className="btn btn-primary" onClick={onClick}>
                  ADd
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 bord pt-2">
          <div className="row">
            <div className="col-12">
              <div className="title mb-5">
                <h3> International</h3>
              </div>
            </div>
            <div></div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Top Ad Desktop</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Top Ad Mobile</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">On Video Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Right Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Right Video Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Bottom Banner Ad</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}
