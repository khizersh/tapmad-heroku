import React, { useEffect, useRef, useState } from "react";

export default function ScrollComponent({ loadMore }) {
  const loader = useRef(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      console.log( observer.observe,'Observer');
      observer.observe(loader.current);
    }
    console.log(loader,'Loader');
  }, []);

  useEffect(() => {
    if (page != 1) {
      loadMore();
    }
  }, [page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    <div className="loading" ref={loader}>
      <br />
      <br />
      <br />
      <div className="loader-5 center">
        <span></span>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
