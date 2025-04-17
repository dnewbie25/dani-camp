import { useState, useEffect } from 'react'
import './App.css'
import { getImages } from './utils'
import Image from './Image'
function App() {
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)
  const [images, setImages] = useState([])

  useEffect( () => {
    const fetchImages = async () => {
      const imagesResult = await getImages()
      setImages(imagesResult)
    }
    fetchImages()
  }, [])

  const imagesInfo = images.map(img=>(
    <Image url={img.image} name={img.name} key={img.id}/>
  ))

  return (
    <main>
      <header>
        <h1>Memory Card Game</h1>
        <p>Score: {score}</p>
        <p>Highest Score: {highestScore}</p>
      </header>
      <section id="game-area">
        {imagesInfo}
      </section>
    </main>
  )
}

export default App
