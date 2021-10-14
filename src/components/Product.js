import React, { useEffect, useState } from "react";
import Pagination from "./Paginations";
import PostList from "./PostList";

const Product = () => {
  const [postList, setPostList] = useState([]);
  const [paginnation, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filter, setfilter] = useState({
    _limit: 10,
    _page: 1,
  });
  // useEffect này chạy đúng 1 lần duy nhất
  useEffect(() => {
    async function fetchPostList() {
      //..
      try {
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch post list", error.message);
      }
    }
    fetchPostList();
  }, [filter]);

  useEffect(() => {
    console.log("POST list effect");
  }, []);

  useEffect(() => {
    console.log("Todo list effect");
  });

  function handlePageChange(newPage) {
    console.log("New page: ", newPage);
  }

  return (
    <div>
      <h1>React-Hook-post-list</h1>
      <PostList posts={postList} />
      <Pagination paginnation={paginnation} onpageChange={handlePageChange} />
    </div>
  );
};

export default Product;
