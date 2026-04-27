import { useEffect, useState } from "react";

const totalBoxes = 10
const totalGap = 5
const sampleBoxes = Array(totalBoxes).fill(false)

function App() {
  const [squareBoxes, setSquareBoxes] = useState(sampleBoxes)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(totalBoxes)
  const [isEndReached, setEndReaced] = useState(false)

  useEffect(() => {
    let interval = setInterval(() => {
      setSquareBoxes(prev => {
        const boxes = [...prev]
        console.log("startIndex", startIndex)
        console.log("endIndex", endIndex)
        console.log("totalBoxes", totalBoxes)
        boxes[startIndex] = true

        if (isEndReached) {
          console.log("triggered... endIndex")
          boxes[endIndex] = false
        }
        return boxes
      })
      if (startIndex >= totalBoxes - 1) {
        setStartIndex(0)
      } else {
        setStartIndex(pr => pr + 1)
      }
      if (startIndex + 1 === totalGap) {
        setEndReaced(true)
      }
      if ((endIndex < totalBoxes - 1 && startIndex >= totalGap) || (endIndex < totalBoxes - 1 && endIndex >= totalGap)) {
        setEndIndex(pr => pr + 1)
      } else {
        setEndIndex(0)
      }
      console.log("=============================================================")
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [startIndex, endIndex])

  return (
    <div style={styles.parentDiv}>
      <div style={styles.loaderWrap}>
        {squareBoxes.map((data, index) => {
          return (
            <div key={index} style={{ ...(styles.squareBoxes), ...({ backgroundColor: data ? '#fff' : '#000' }) }} ></div>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  squareBoxes: {
    width: '26px',
    height: '26px',
  },
  loaderWrap: {
    display: 'flex',
    border: '2px solid #000000',
    width: `${30 * totalBoxes}px`,
    padding: '4px',
    gap: '4px'
  },
  parentDiv: {
    display: 'flex',
    justify: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    padding: '20px'
  }
}

export default App;