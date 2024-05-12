import { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./home.scss";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);


  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wraper">
          <h1 className="title">Find Real Estate & Get Dream Place </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            alias non quia sint id ab accusamus quis molestiae nesciunt
            sapiente, modi aliquid, totam debitis excepturi nihil laboriosam,
            commodi aspernatur dolorum.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gaind</h2>
            </div>
            <div className="box">
              <h1>1500+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
