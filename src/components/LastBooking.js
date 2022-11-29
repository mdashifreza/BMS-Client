import React from "react";

const LastBooking = ({ lastBookingData }) => {
  return (
    <div className="border border-black rounded-md w-72 p-4">
      <h2 className="font-bold text-xl">Last Booking Details :</h2>
      {lastBookingData.length !== 0 ? (
        <div>
          <div>
            <h3 className="font-bold">Seats : </h3>
            <p className="font-bold">
              A1 :{" "}
              <span className="font-normal">{lastBookingData[0].seats.A1}</span>
            </p>
            <p className="font-bold">
              A2 :{" "}
              <span className="font-normal">{lastBookingData[0].seats.A2}</span>
            </p>
            <p className="font-bold">
              A3 :{" "}
              <span className="font-normal">{lastBookingData[0].seats.A3}</span>
            </p>
            <p className="font-bold">
              A4 :{" "}
              <span className="font-normal">{lastBookingData[0].seats.A4}</span>
            </p>
            <p className="font-bold">
              D1 :{" "}
              <span className="font-normal">{lastBookingData[0].seats.D1}</span>
            </p>
            <p className="font-bold">
              D2 :{" "}
              <span className="font-normal">{lastBookingData[0].seats.D2}</span>
            </p>
          </div>
          <div>
            <p className="font-bold">
              Slot :{" "}
              <span className="font-normal">{lastBookingData[0].slot}</span>
            </p>
          </div>
          <div>
            <p className="font-bold">
              Movie :{" "}
              <span className="font-normal">{lastBookingData[0].movie}</span>
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm my-2">No Previous Booking Found</p>
      )}
    </div>
  );
};

export default LastBooking;
