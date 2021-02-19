import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../contexts/MainContext";
import { APILinks } from "../../services/apilinks";
import { get } from "../../services/http-service";
import "./search.module.css";
import ItemCard from "./ItemCard";
import { SEOFriendlySlugsForVideo } from "../../services/utils";
import Debounce from "../../services/Debounce";

const Search = () => {
  const { setSearch, setLoader } = useContext(MainContext);
  const [keyword, setKeyword] = useState("");
  const [isSearched, setisSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchedItem, setSearchedItem] = useState([]);

  const debouncedSearchKeyWord = Debounce(keyword, 800);

  const onClickBack = () => {
    setSearch(false);
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(async () => {
    if (debouncedSearchKeyWord) {
      setisSearched(true);
      setLoader(true);
      const data = await searchHandler(debouncedSearchKeyWord);
      setSearchedItem(data);
      setLoader(false);
    } else {
      setSearchedItem([]);
      setLoader(false);
    }
  }, [debouncedSearchKeyWord]);

  const searchHandler = async (keyword) => {
    const res = await get(APILinks.getItemsByKeyword + keyword + "/1");
    if (res.data && res.data.Response) {
      return res.data.Videos;
    } else {
      return [];
    }
  };

  const onClickSearch = async () => {
    const res = await get(APILinks.getItemsByKeyword + keyword + "/1");
    if (res.data && res.data.Response) {
      setSearchedItem(res.data.Videos);
    } else {
      setSearchedItem([]);
    }
  };

  return (
    <div className="container-fluid pos-absolute">
      <div className="row no-wrap mb-2 search-header">
        <div className="col-12 d-flex my-4 mx-auto">
          <div className="mt-2 width-mbl">
            <span className="back-icon" onClick={onClickBack}>
              <i className="fa fa-arrow-left  float-left pt-1 "></i>
            </span>
            <span className="search-icon" onClick={onClickSearch}>
              <i className="fa fa-search float-right pt-1"></i>
            </span>
          </div>
          <input
            type="text"
            onChange={onChange}
            className="form-control float-right ml-2 width search-input"
            placeholder="Start Searching..."
          />
        </div>
      </div>

      <div className="loop_search row">
        {searchedItem.length > 0 ? (
          searchedItem.map((item, i) => {
            let slug = SEOFriendlySlugsForVideo(item);

            return <ItemCard item={item} key={i} slug={slug} />;
          })
        ) : isSearched ? (
          <div className="m-auto">
            <h3>No Data Found</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
