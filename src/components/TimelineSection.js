import React, { useState } from "react";
import { Timeline } from "react-beautiful-horizontal-timeline";
import "../../node_modules/react-beautiful-horizontal-timeline/card.css";

function TimelineSection() {
  const myList = [
    {
      date: "concept ",
      t: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maiores. k",
    },
    {
      date: "concept",
      t: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maiores.",
    },
    {
      date: "lorem ip ",
      t: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maiores.",
    },
    {
      date: "concepto",
      t: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maiores.",
    },
    {
      date: "Extreme ",
      t: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maiores. tt",
    },
  ];
  const [labelWidth, setlabelWidth] = useState(140);
  const [amountMove, setamountMove] = useState(1000);
  const [lineColor, setlineColor] = useState("#61dafb");
  const [darkMode, setdarkMode] = useState(false);
  const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
  const [showSlider, setshowSlider] = useState(true);
  const [arrowsSize, setarrowsSize] = useState(false);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col p-5 justify-center items-center space-y-20 ">
        <p>Quisque tellus risus, adipisci</p>
        <h1>Our Work Process</h1>
        <Timeline
          myList={myList}
          labelWidth={labelWidth}
          amountMove={amountMove}
          lineColor={lineColor}
          darkMode={darkMode}
          eventTextAlignCenter={eventTextAlignCenter}
          showSlider={showSlider}
          arrowsSize={arrowsSize}
        />
      </div>
    </div>
  );
}

export default TimelineSection;
