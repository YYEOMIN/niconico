import { useEffect, useState } from "react";
import Posts from "./CigarCard/Posts";
import "./cigarList.css";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "./LoadingSpinner";

export default function CigarList() {
  const [cigarposts, setCigarPosts] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(1);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        //`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
        // For json server use url below
        `http://localhost:3001/cigarposts?_page=1&_limit=18`
      );
      const data = await res.json();
      setCigarPosts(data);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      //`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
      // For json server use url below
      `http://localhost:3001/cigarposts?_page=${page}&_limit=18`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setCigarPosts([...cigarposts, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 18) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  return (
    <div className="cigarCarouselWrapper">
      <div className="cardlist">
        <InfiniteScroll
          dataLength={cigarposts.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<LoadingSpinner />}
        >
          {cigarposts.map((cigarpost) => {
            return (
              <div className="cardpost">
                <Posts
                  key={cigarpost.views}
                  cigartitle={cigarpost.cigartitle}
                  category={cigarpost.category}
                  thumbnail={cigarpost.thumbnail}
                />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
