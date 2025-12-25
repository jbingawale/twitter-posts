import { useState } from "react";
import PostList from "../components/PostList";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
