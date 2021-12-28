import Link from "next/link";
import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import { SEOFriendlySlugsForWatch, verifyURL } from "../../../services/utils";
import { ContentViewed } from "../../../services/gtm";
import { useRouter } from "next/router";
import { get } from "https";

export default function CategoryDetail({
  video,
  videoList,
  syno,
  page,
  searchResults,
}) {
  const [slug, setSlug] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const router = useRouter();

  const [dropdown, toggleDropdown] = useState("");
  const [filterDropdownData, toggleFilterDropdownData] = useState(null);

  useEffect(() => {
    verifyURL(router, videoList[0].SectionName, video.VideoName);
    if (
      videoList.length > 0 &&
      videoList[0].Videos &&
      videoList[0].Videos.length > 0
    ) {
      setFilteredList(videoList[0].Videos);
      let vid;
      if (syno) {
        vid = video;
      } else {
        vid = videoList[0].Videos[videoList[0].Videos.length - 1];
      }
      let slugPlay = SEOFriendlySlugsForWatch(vid);
      setSlug(slugPlay);
      ContentViewed(video);
    }
  }, [video, router]);

  // Old ChangeSearch Handler
  // const onChangeSearch = (event) => {
  //   let searchText = event.target.value?.toLowerCase();
  //   let filterArray = videoList[0].Videos.filter((vid) =>
  //     vid.VideoName.toLowerCase().includes(searchText)
  //   );
  //   if (!searchText) {
  //     setFilteredList(videoList[0].Videos);
  //   } else if (filterArray.length && searchText) {
  //     setFilteredList(filterArray);
  //   } else {
  //     setFilteredList([]);
  //   }
  // };

  useEffect(async () => {
    if (dropdown) {
      const data = searchResults;
      const filter = data.filter(
        (d) => d.VideoName.toLowerCase().indexOf(dropdown.toLowerCase()) > -1
      );
      toggleFilterDropdownData(filter);
    }
  }, [dropdown]);

  const onChangeSearch = (event) => {
    toggleDropdown(event.target.value);
    if (dropdown.length) {
      console.log(videoList);
    }
  };

  return (
    <>
      <style jsx>
        {`
          .schrst {
            background-color: white;
            border-radius: 5px;
            padding: 15px;
            position: absolute;
            right: 15px;
            top: 100%;
            z-index: 1;
            color: black;
            max-height: 200px;
            overflow-y: auto;
            max-width: calc(100% - 30px);
            width: 100%;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
          }
          .schrst a {
            color: black;
            display: block;
            font-size: 0.9em;
          }
          .schrst a + a {
            border-top: solid 1px #dadada;
            margin-top: 5px;
            padding-top: 5px;
          }
          @media (min-width: 576px) {
            .schrst {
              width: 302px;
            }
          }
        `}
      </style>
      <div className="row">
        <div className="col-12 mt-2">
          <div className="row mr-0">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              {/* <div className="bg-color"></div> */}
              <div className="video-syno-text">
                <div className="row m-0 mar-5">
                  <div className="col-lg-6 col-md-6 col-12 pad-mbl">
                    <h1 className="font-20 h2">{video && video.VideoName}</h1>
                    <div className="font-20">
                      {video && video.VideoCategoryName}
                    </div>
                    <div className="text-dark line-height line-clamp">
                      {video
                        ? video.VideoDescription &&
                          video.VideoDescription.length > 200
                          ? video.VideoDescription.slice(0, 220) + "..."
                          : video.VideoDescription
                        : null}
                    </div>
                    <br />
                    {/* <div>
                      {slug && (
                        <Link
                          href={slug}
                          passHref
                          shallow
                          className="z-index-play"
                        >
                          <a className="btn tm_wishlst_btn">
                            <i className="fa fa-play rounded-circle pr-2"></i>
                            Play
                          </a>
                        </Link>
                      )}
                    </div> */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 d-none d-sm-block pr-0 ">
                    {video && video["VideoImagePathLarge"] ? (
                      <div
                        className="category-bg-img"
                        style={{
                          background: `url('${video["VideoImagePathLarge"]}')`,
                        }}
                      ></div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* search box */}
      <div className="row my-3 ">
        <div className="col-12 w-100">
          <input
            type="text"
            className="border-curve form-control width-20p float-right"
            placeholder="Search..."
            value={dropdown}
            onChange={onChangeSearch}
          />
          {dropdown ? (
            <div className="schrst">
              {filterDropdownData ? (
                filterDropdownData === "empty" ? (
                  <p>No search result found!</p>
                ) : (
                  filterDropdownData.map((d, k) => (
                    <Link href={"/"} key={k}>
                      <a>{d.VideoName}</a>
                    </Link>
                  ))
                )
              ) : (
                <div className="text-center">
                  <span className="fa fa-spinner fa-spin text-base" />
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="row mt-3">
        {filteredList && filteredList.length > 0 ? (
          filteredList.map((vid, i) => {
            let type = "";
            if (!vid.IsVideoFree) {
              type = vid.PackageName ? vid.PackageName : "";
            }
            return <Card key={i} video={vid} type={type} />;
          })
        ) : (
          <p className="text-center">No record found!</p>
        )}
      </div>
    </>
  );
}
