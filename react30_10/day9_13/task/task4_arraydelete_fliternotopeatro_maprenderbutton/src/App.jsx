
import { useState } from 'react'

const App = () => {

  const [colour, SetColour] = useState(["Pink","blue","orange","green","yellow"])

  const handleDelete = (deletecolour) => {
    SetColour(colour.filter((e, i) => i !== deletecolour))
  }

  return (
    <>
      <div>
        {colour.map((e, i) => (
          <div key={i}>
            <h2>{e}</h2>
            <button onClick={() => handleDelete(i)}>
              Click to delete colour
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
