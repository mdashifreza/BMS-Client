import React from "react";
import { movies } from "../data/data";

const MovieName = ({handleMovieName, movieInfo}) => {
  // const [movieNameData, setmovieNameData] = useState({
  //   activeObject: null,
  //   dataName: [...movies],
  // });
  const movieNameData = [...movies];

  //toggle class to change background color of active Movie-Name
  // function ToggleName(index) {
  //   setmovieNameData({
  //     ...movieNameData,
  //     activeObject: movieNameData.dataName[index],
  //   });
  // }
  // function toggleActiveName(index) {
  //   if (movieNameData.dataName[index] === movieNameData.activeObject) {
  //     console.log(movieNameData.activeObject);
  //     return "index-active";
  //   } else {
  //     return "index-inactive";
  //   }
  // }
  

  return (
    <div>
      <div className="mx-4 p-2 border rounded-md border-slate-600">
        {/* Movie-Name Selector */}
        <p className="text-2xl  py-4 font-bold">Select a Movie</p>

        {movieNameData.map((item, index) => (
          <button
            key={index}
            style={{
              padding: "0.5rem",
              margin: "0.2rem",
              border: "2px solid black",
              borderRadius: "0.8rem",
              fontWeight: "bold",
            }}
            className={`${movieInfo.movie === item ? "bg-[#d37373] rounded-md text-white" : ""} transition-all duration-200`}
            onClick={() => {
              // ToggleName(index);
              handleMovieName(item)
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieName;
