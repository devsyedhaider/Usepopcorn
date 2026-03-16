import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import StarRating from "./StarRating";

export default function Test() {
  const [MovieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={10}
        color="blue"
        size={36}
        onSetRating={setMovieRating}
      />
      <p>This movies was {MovieRating} rated Stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      color="red"
      size={35}
      defaultRating={2}
    />
    <Test />
  </StrictMode>,
);
