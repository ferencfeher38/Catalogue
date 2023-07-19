import "../../styles/home/Home.scss";
import { Banner } from "./Banner";
import { News } from "./News";

export const Home = function () {
  return (
    <div className="home-container">
      <Banner></Banner>
      <News></News>
    </div>
  );
};
