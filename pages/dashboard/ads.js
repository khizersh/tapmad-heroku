import React, { useEffect, useState, useContext } from "react";
import swal from "sweetalert";
import { MainContext } from "../../contexts/MainContext";
import { DashboardService } from "../../modules/dashboard/Dashboard.Service";
import { getAdDetails } from "../../services/apilinks";
import { post } from "../../services/http-service";
import Head from "next/head";

export default function ads() {
  const [data, setData] = useState([
    {
      type: "",
      topAdDesktop: "",
      topAdMobile: "",
      topAdMobileSize: "",
      onVideo: "",
      rightVideoAd: "",
      rightAd: "",
      bottomBannerAd: "",
      bottomBannerAdMobile: "",
      videoAdDuration: 200000,
      allow: true,
    },
    {
      type: "",
      topAdDesktop: "",
      topAdMobile: "",
      topAdMobileSize: "",
      onVideo: "",
      rightVideoAd: "",
      rightAd: "",
      bottomBannerAd: "",
      bottomBannerAdMobile: "",
      videoAdDuration: 200000,
      allow: true,
    },
  ]);
  const [local, setLocal] = useState({
    type: "",
    topAdDesktop: "",
    topAdMobile: "",
    topAdMobileSize: "",
    onVideo: "",
    rightVideoAd: "",
    rightAd: "",
    bottomBannerAd: "",
    bottomBannerAdMobile: "",
    videoAdDuration: 2000,
    allow: true,
  });
  const [international, setInternational] = useState({
    type: "",
    topAdDesktop: "",
    topAdMobile: "",
    topAdMobileSize: "",
    onVideo: "",
    rightVideoAd: "",
    rightAd: "",
    bottomBannerAd: "",
    bottomBannerAdMobile: "",
    videoAdDuration: 2000,
    allow: true,
  });
  const { setLoader } = useContext(MainContext);

  useEffect(async () => {
    const data = await DashboardService.getAdData();
    if (data.length == 2) {
      const resp = DashboardService.customizeData(data);

      setData(resp);
      setLocal({ ...local, ...resp[0] });
      setInternational({ ...international, ...resp[1] });
    }
  }, []);

  const onClick = async () => {
    setLoader(true);
    let array = [];
    array.push(local);
    array.push(international);
    const resp = await DashboardService.editAdDetails(array);
    if (resp && resp.data && resp.data.statusCode == 200) {
      swal({ title: "Update succesfully!", timer: 3000, icon: "success" });
    } else {
      swal({ title: "Something went wrong!", timer: 3000, icon: "error" });
    }

    setLoader(false);
  };

  const onChangeLocal = (e) => {
    setLocal({ ...local, [e.target.name]: e.target.value });
  };
  const onChangeLocalCheckbox = () => {
    setLocal({ ...local, allow: !local.allow });
  };

  const onChangeInternatioanl = (e) => {
    setInternational({ ...international, [e.target.name]: e.target.value });
  };
  const onChangeInternatioanlCheckbox = () => {
    setInternational({ ...international, allow: !international.allow });
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>{" "}
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
              <div className="form-group">
                <label>Top Ad Desktop</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={local.topAdDesktop}
                  onChange={onChangeLocal}
                  name="topAdDesktop"
                  placeholder="Enter Ad unit"
                />
                <small className="form-text text-muted">
                  Ad unit for top ad Desktop view
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Top Ad Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  value={local.topAdMobile}
                  onChange={onChangeLocal}
                  id="exampleInputEmail1"
                  name="topAdMobile"
                  aria-describedby="emailHelp"
                />
                <small className="form-text text-muted">
                  Ad unit for top ad Mobile view
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Top Ad Mobile Size</label>
                <input
                  type="text"
                  className="form-control"
                  value={local.topAdMobileSize}
                  onChange={onChangeLocal}
                  id="exampleInputEmail1"
                  name="topAdMobileSize"
                />
                <small className="form-text text-muted">
                  Size for mobile top Ad e.g : 320,100
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>On Video Ad</label>
                <input
                  type="text"
                  className="form-control"
                  name="onVideo"
                  aria-describedby="emailHelp"
                  value={local.onVideo}
                  onChange={onChangeLocal}
                  name="onVideo"
                  placeholder="Pre roll url"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Pre roll url on video player
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Right Ad</label>
                <input
                  type="text"
                  value={local.rightAd}
                  name="rightAd"
                  onChange={onChangeLocal}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Ad unit"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Ad unit for right ad
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Right Video Ad</label>
                <input
                  type="text"
                  className="form-control"
                  value={local.rightVideoAd}
                  name="rightVideoAd"
                  onChange={onChangeLocal}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small className="form-text text-muted">
                  Pre roll url on right video player
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Bottom Banner Ad</label>
                <input
                  type="text"
                  name="bottomBannerAd"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={local.bottomBannerAd}
                  aria-describedby="emailHelp"
                  onChange={onChangeLocal}
                  placeholder="Enter email"
                />

                <small id="emailHelp" className="form-text text-muted">
                  Ad unit for bottom banner ad
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Bottom Banner Ad Mobile</label>
                <input
                  type="text"
                  name="bottomBannerAdMobile"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={local.bottomBannerAdMobile}
                  aria-describedby="emailHelp"
                  onChange={onChangeLocal}
                  placeholder="Enter Bottom Banner Ad Mobile"
                />

                <small id="emailHelp" className="form-text text-muted">
                  Ad unit for bottom banner ad for mobile
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Video Ad Duration</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={local.videoAdDuration}
                  name="videoAdDuration"
                  aria-describedby="emailHelp"
                  onChange={onChangeLocal}
                  der="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Repeat right video ad duration in seconds
                </small>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xm-12">
              <div className="form-group">
                <label> Enable/Disable</label>
                <input
                  type="checkbox"
                  className="form-control"
                  onChange={onChangeLocalCheckbox}
                  checked={local.allow}
                />
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
                {" "}
                <h3> International</h3>
              </div>
            </div>
            <div></div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Top Ad Desktop</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={international.topAdDesktop}
                  name="topAdDesktop"
                  onChange={onChangeInternatioanl}
                  placeholder="Enter email"
                />
                <small className="form-text text-muted">
                  Ad unit for top ad Desktop view
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Top Ad Mobile</label>
                <input
                  type="email"
                  className="form-control"
                  value={international.topAdMobile}
                  id="exampleInputEmail1"
                  name="topAdMobile"
                  aria-describedby="emailHelp"
                  onChange={onChangeInternatioanl}
                  placeholder="Enter email"
                />
                <small className="form-text text-muted">
                  Ad unit for top ad Mobile view
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Top Ad Mobile Size</label>
                <input
                  type="text"
                  className="form-control"
                  value={international.topAdMobileSize}
                  onChange={onChangeInternatioanl}
                  name="topAdMobileSize"
                  aria-describedby="emailHelp"
                />
                <small className="form-text text-muted">
                  Size for mobile top Ad e.g : 320,100
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>On Video Ad</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={international.onVideo}
                  name="onVideo"
                  onChange={onChangeInternatioanl}
                  placeholder="Enter email"
                />
                <small className="form-text text-muted">
                  Pre roll url on video player
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Right Ad</label>
                <input
                  type="email"
                  value={international.rightAd}
                  className="form-control"
                  id="exampleInputEmail1"
                  name="rightAd"
                  aria-describedby="emailHelp"
                  onChange={onChangeInternatioanl}
                  placeholder="Enter email"
                />
                <small className="form-text text-muted">
                  Ad unit for right ad
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Right Video Ad</label>
                <input
                  type="email"
                  className="form-control"
                  value={international.rightVideoAd}
                  id="exampleInputEmail1"
                  name="rightVideoAd"
                  onChange={onChangeInternatioanl}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small className="form-text text-muted">
                  Pre roll url on right video player
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Bottom Banner Ad</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={international.bottomBannerAd}
                  name="bottomBannerAd"
                  onChange={onChangeInternatioanl}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />

                <small className="form-text text-muted">
                  Ad unit for bottom banner ad
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Bottom Banner Ad Mobile</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={international.bottomBannerAdMobile}
                  name="bottomBannerAdMobile"
                  onChange={onChangeInternatioanl}
                  aria-describedby="emailHelp"
                  placeholder="Enter Bottom Banner Ad Mobile"
                />

                <small className="form-text text-muted">
                  Ad unit for bottom banner ad for mobile
                </small>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Video Ad Duration</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={international.videoAdDuration}
                  aria-describedby="emailHelp"
                  name="videoAdDuration"
                  onChange={onChangeInternatioanl}
                  placeholder="Enter email"
                />
                <small className="form-text text-muted">
                  Repeat right video ad duration in seconds
                </small>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xm-12">
              <div className="form-group">
                <label>Enable/Disable</label>
                <input
                  type="checkbox"
                  className="form-control"
                  onChange={onChangeInternatioanlCheckbox}
                  checked={international.allow}
                />
              </div>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xm-12"
              style={{ marginTop: "2rem" }}
            >
              <div className="form-group text-center">
                <label></label>
                <button className="btn btn-primary" onClick={onClick}>
                  Update
                </button>
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
