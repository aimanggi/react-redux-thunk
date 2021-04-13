import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions/postActions";

const AppHooks = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  console.log(post);

  return (
    <div>
      {/* <input type="text" ref={inputRef} placeholder="Field.." /> */}
      <button onClick={() => dispatch(fetchPosts())}>Click Mee </button>
      {post.loading && <div>Loading dulu yaa</div>}
      {post.posts.map((data, index) => (
        <div key={data.id}>{data.title}</div>
      ))}
    </div>
  );
};

export default AppHooks;
