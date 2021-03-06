import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/authAx';
import {fetchData} from '../utils/FetchData';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(e => {
    fetchData().then(res => {
      setColorList(res.data);
    })
    .catch(er => {
      console.log('color error', er);
    })
  },[update]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} data-testid='cl' update={update} setUpdate={setUpdate}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
