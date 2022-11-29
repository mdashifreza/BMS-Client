import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";

function SeatButton({ item, index, handleSeatSlot,movieInfo,ToggleSeats }) {
 
  const activeObject = useSelector((state) => state.activeObject);

  const [seatNumber, setSeatNumber] = useState(item.seats);
  const handleDecrement = () => {
    if (seatNumber > 0) {
      setSeatNumber((seatNumber) => seatNumber - 1);
      // console.log(activeObject, seatNumber - 1);
    }
  };
  const handleIncrement = () => {
    if (seatNumber < 9) setSeatNumber((seatNumber) => seatNumber + 1);
    // console.log(activeObject, seatNumber + 1);
  };

  useEffect(() => {
    handleSeatSlot({ seatType: item.seatType, seats: seatNumber });
    localStorage.setItem("activeObject",JSON.stringify(activeObject))
    console.log(activeObject)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seatNumber]);

  return (
    <div
      style={{
        padding: "0.4rem",
        margin: "0.6rem",
        border: "2px solid black",
        borderRadius: "0.8rem",
        fontWeight: "bold",
      }}
      className={`${activeObject === item.seatType ? "bg-[#d37373] rounded-md text-white" : ""} transition-all duration-200`}
      onClick={() => {
        ToggleSeats(index);
      }}
    >
      <span className="mx-7">Type {item.seatType}</span>
      <div>
        <button
          className={`px-2.5 border-2  bg-slate-300  rounded-lg border-black ${activeObject === item.seatType ? "text-black" : ""}`}
          onClick={() => handleDecrement()}
        >
          -
        </button>

        <span className="px-6">{item.seats}</span>

        <button
          className={`px-2 border-2 bg-slate-300 rounded-lg border-black ${activeObject === item.seatType ? "text-black" : ""}`}
          onClick={() => handleIncrement()}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SeatButton;
