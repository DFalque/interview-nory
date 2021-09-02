import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import DataBox from "../../components/DataBox";
import Calendar from "../../components/Calendar/Calendar";

import "./Home.scss";

//DATA
import data from "../../data/databox";

const Home = () => {
  const [dataBox, setDataBox] = useState([]);
  const [loading, setLoading] = useState(false);
  const stateBanner = useSelector((state) => state.banner);
  console.log(stateBanner);

  useEffect(() => {
    //Simulation of getting data from database
    setLoading(true);
    setDataBox(data);
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="Home">
      {stateBanner ? <Banner /> : null}
      <Header />
      <div className="databox-container">
        {dataBox.map((box) => {
          return <DataBox {...box} />;
        })}
      </div>
      <Calendar />
    </div>
  );
};

export default Home;
