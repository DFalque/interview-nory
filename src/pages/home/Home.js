import { useState, useEffect } from "react";

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

  useEffect(() => {
    setLoading(true);
    //Simulation of getting data
    setDataBox(data);
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="Home">
      <Banner />
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
