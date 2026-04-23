import { useEffect, useState } from "react";

const totalBoxes = 10
const sampleBoxes = Array(totalBoxes).fill(false)

function App() {
  const [squareBoxes, setSquareBoxes] = useState(sampleBoxes)
  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    let interval = setInterval(() => {
      setSquareBoxes(prev => {
        if (totalBoxes === currentIndex) {
          setCurrentIndex(0)
          return sampleBoxes
        }

        const boxes = [...prev]

        boxes[currentIndex] = true
        return boxes
      })
      setCurrentIndex(pr => pr + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [currentIndex])

  return (
    <div style={styles.parentDiv}>
      {squareBoxes.map((data, index) => {
        return (
          <div key={index} style={{ ...(styles.squareBoxes), ...({ backgroundColor: data ? '#fff' : '#000' }) }} ></div>
        )
      })}
    </div>
  )
}

const styles = {
  squareBoxes: {
    width: '26px',
    height: '26px',
    border: '1px solid #000'
  },
  parentDiv: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 40px)',
    gap: '4px',
    padding: '20px'
  }
}

export default App;