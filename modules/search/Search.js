import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "../../contexts/MainContext";
import { actionsRequestContent, get } from "../../services/http-service";
import ItemCard from "./ItemCard";
import { SEOFriendlySlugsForVideo } from "../../services/utils";
import Debounce from "../../services/Debounce";
import { loggingTags } from "../../services/apilinks";
import { SearchService } from "./Search.service";
import { SearchTag } from "../../services/gtm";

const Search = () => {
  const { setSearch, setLoader, getCountryCode } = useContext(MainContext);
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
      // setisSearched(true);
      // setLoader(true);
      // const data = await searchHandler(debouncedSearchKeyWord);
      // setSearchedItem(data);
      // setLoader(false);
      onClickSearch();
    }
    // else {
    //   setSearchedItem([]);
    //   setLoader(false);
    // }
  }, [debouncedSearchKeyWord]);

  const searchHandler = async (keyword) => {
    const data = await SearchService.getItemByKeyrwords(keyword);

    let body = {
      event: loggingTags.search,
      searchString: keyword,
    };
    actionsRequestContent(body);
    if (data != null) {
      if (data.responseCode == 1) {
        return data.data.Videos;
      } else {
        return [];
      }
    }
  };

  const onClickSearch = async () => {
    setLoader(true);
    const data = await SearchService.getItemByKeyrwords(keyword);
    if (data != null) {
      if (data.responseCode == 1) {
        setSearchedItem(data.data.Videos);
        let allVideosName = data.data.Videos.map((e) => {
          return e.VideoName;
        })
        try {
          SearchTag({ term: keyword, data: data.data.Videos.length, result: allVideosName.toString() });
        } catch (e) { console.log(e) }
      } else {
        setSearchedItem([]);
        SearchTag({ term: keyword, data: 0, result: "" });
      }
    }
    setLoader(false);
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
