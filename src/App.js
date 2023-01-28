import React, { useState, useEffect } from 'react'

import data from './data'
import Title from './components/Title'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  return <Title people={people} index={index} setIndex={setIndex} />
}

export default App
