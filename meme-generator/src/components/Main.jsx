import { useState, useEffect } from "react"
export default function Main() {
    // the goal here is that with every keystroke, the meme changes
    const [meme, setMeme] = useState({
        topText:'One does not simply',
        bottomText:'Walk into Mordor',
        imageURL:'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event){
        const {value} = event.target
        console.log(value)
        let newValues = {...meme, topText:value}
        setMeme(newValues)
        
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageURL}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}