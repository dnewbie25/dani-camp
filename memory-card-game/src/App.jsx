import { useState, useEffect } from 'react'
import './App.css'
import { getImages } from './utils'
import Image from './Image'
function App() {
  const [score, setScore] = useState(0)
  const [selectedCard, setSelectedCard] = useState([])
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
    <Image url={img.image} name={img.name} key={img.id} click={()=>handleClick(img.id)}/>
  ))

  function render10Images(){
    return imagesInfo.sort(() => Math.random() - 0.5).slice(0, 10);
  }

  function handleClick(elementId){
    if(selectedCard.includes(elementId)){
      setScore(0)
      setSelectedCard([])
    }else{
      setSelectedCard(prev=>([...prev, elementId]))
      if(score > highestScore){
        setHighestScore(score)
      }
      setScore(score+1)
    }
  }

  return (
    <main>
      <header> 
        <h1>Memory Card Game</h1>
        <p>Score: {score}</p>
        <p>Highest Score: {highestScore}</p>
      </header>
      <section id="game-area">
        {render10Images()}
      </section>
    </main>
  )
}

export default App
