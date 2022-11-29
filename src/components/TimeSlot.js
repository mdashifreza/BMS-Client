import React from "react";
import { slots } from "../data/data";

const TimeSlot = ({handleTimeSlot, movieInfo}) => {
  const movieSlotData = [...slots]
  // const [movieSlotData, setmovieSlotData] = useState({
  //   activeObject: null,
  //   dataSlot: [...slots],
  // });

  // //toggle class to change background color of active Movie-Slot
  // function ToggleSlot(index) {
  //   setmovieSlotData({
  //     ...movieSlotData,
  //     activeObject: movieSlotData.dataSlot[index],
  //   });
  // }
  // function toggleActiveSlot(index) {
  //   if (movieSlotData.dataSlot[index] === movieSlotData.activeObject) {
  //     console.log(movieSlotData.activeObject);
  //     return "index-active";
  //   } else {
  //     return "index-inactive";
  //   }
  // }

  return (
    <div>
      <div className="mx-4 p-2 border rounded-md border-slate-600">
        {/* Movie-Name Selector */}
        <p className="text-2xl py-4 font-bold">Select a Time</p>

        {movieSlotData.map((item, index) => (
          <button
            key={index}
            style={{
              padding: "0.5rem",
              margin: "0.2rem",
              border: "2px solid black",
              borderRadius: "0.8rem",
              fontWeight: "bold",
            }}
            className={`${movieInfo.time === item ? "bg-[#d37373] rounded-md text-white" : ""} transition-all duration-200`}
            onClick={() => {
              // ToggleSlot(index);
              handleTimeSlot(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
