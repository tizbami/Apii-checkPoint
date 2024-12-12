import StaffId from "./StaffId";
import { useState, useEffect } from "react";

const StaffList = () => {
  const [posts, setPosts] = useState([]);

  // https://jsonplaceholder.typicode.com/posts
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem",
    },
    h1: {
      textAlign: "center",
    },
  };

  return (
    <div>
      <h1 style={styles.h1}>Blog List</h1>
      <div className="container" style={styles.grid}>
        {posts.map((post) => (
          <StaffId key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default StaffList;
