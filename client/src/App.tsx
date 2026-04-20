import React, { useEffect, useState } from "react";

const SquareGrid = () => {
  const totalSquares = 60;

  // false = black, true = white
  const [squares, setSquares] = useState(Array(totalSquares).fill(false));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prev) => {
        const newSquares = [...prev];

        // If all squares are white → reset
        if (index >= totalSquares) {
          setIndex(0);
          return Array(totalSquares).fill(false);
        }

        // Turn next square white
        newSquares[index] = true;
        return newSquares;
      });

      setIndex((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div style={gridStyle}>
      {squares.map((isWhite, i) => (
        <div
          key={i}
          style={{
            ...squareStyle,
            backgroundColor: isWhite ? "white" : "black",
          }}
        />
      ))}
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(10, 40px)",
  gap: "5px",
};

const squareStyle = {
  width: "40px",
  height: "40px",
  border: "1px solid #ccc",
};

export default SquareGrid;