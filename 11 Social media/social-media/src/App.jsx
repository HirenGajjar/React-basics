import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import Post from "./Components/Post";
import "./App.css";
import PostListProvider from "./Store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <>
      <PostListProvider>
        <div className="appContainer">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="content">
            <Header />

            {selectedTab === "Home" ? <PostList /> : <CreatePost />}

            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
