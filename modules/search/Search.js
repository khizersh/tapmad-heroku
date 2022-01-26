import React, { useContext, useState, useEffect, createRef } from "react";
import { MainContext } from "../../contexts/MainContext";
import { actionsRequestContent, get } from "../../services/http-service";
import ItemCard from "./ItemCard";
import { SEOFriendlySlugsForVideo } from "../../services/utils";
import Debounce from "../../services/Debounce";
import { loggingTags } from "../../services/apilinks";
import { SearchService } from "./Search.service";
import { SearchTag } from "../../services/gtm";

const Search = (props) => {
  const { setSearch, setLoader, getCountryCode } = useContext(MainContext);
  const [keyword, setKeyword] = useState("");
  const [isSearched, setisSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchedItem, setSearchedItem] = useState([]);
  const inputSearch = createRef();

  const debouncedSearchKeyWord = Debounce(keyword, 800);

  const onClickBack = () => {
    setSearch(false);
  };

  const onChange = (e) => {
    setKeyword(e.target.value.trim());
  };

  useEffect(() => {
    inputSearch?.current?.focus();
  }, [inputSearch]);

  useEffect(async () => {
    if (debouncedSearchKeyWord) {
      setisSearched(true);
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

  const onClickSearch = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (keyword) {
      const data = await SearchService.getItemByKeyrwords(
        keyword,
        props.ip
      );
      if (data != null) {
        if (data.responseCode == 1) {
          setSearchedItem(data.data.Videos);
          let allVideosName = data.data.Videos.map((e) => {
            return e.VideoName;
          });
          try {
            SearchTag({
              term: keyword,
              data: data.data.Videos.length,
              result: allVideosName.toString(),
            });
          } catch (e) {
            console.log(e);
          }
        } else {
          setSearchedItem([]);
          SearchTag({ term: keyword, data: 0, result: "" });
        }
      }
    }
    setLoader(false);
  };

  // useEffect(() => {
  //   document
  //     .getElementById("searchbox")
  //     .addEventListener("keydown", function (event) {
  //       if (event.key === "Enter" || event.key === "NumpadEnter") {
  //         event.preventDefault();
  //         onClickSearch();
  //       }
  //     });
  // }, []);

  return (
    <div className="container-fluid pos-absolute">
      <div className="row no-wrap mb-2 search-header">
        <form className="col-12 d-flex my-4 mx-auto" onSubmit={onClickSearch}>
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
            id="searchbox"
            // ref={inputSearch}
          />
        </form>
      </div>

      <div className="loop_search row">
        {searchedItem.length > 0 ? (
          searchedItem.map((item, i) => {
            let slug = SEOFriendlySlugsForVideo(item);
            return item.VideoEntityId ? (
              <ItemCard item={item} key={i} slug={slug} />
            ) : (
              <div className="m-auto">
                <h3>No Record Found</h3>
              </div>
            );
          })
        ) : isSearched ? (
          <div className="m-auto">
            <h3>Searching...</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
