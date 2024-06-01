import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../components/lib/apiRequest";
import List from "../../components/list/List";
import "./profilePage.scss";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const data = useLoaderData();

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wraper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
              </div>
            <React.Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading!</p>}
              >
                {(postResponse) => <List posts={postResponse.data.userPosts} />}
              </Await>
            </React.Suspense>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </React.Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wraper">
        <React.Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.chatResponse}
                errorElement={<p>Error loading chats!</p>}
              >
                {(chatResponse) => 
                <Chat chats={chatResponse.data} />
                }
              </Await>
            </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
