export async function getImages(){
  try{
    const url = await fetch("https://rickandmortyapi.com/api/character");
    const urlResult = await url.json()
    const result = urlResult.results
    return result.slice(0,20)
  }catch{
    return new Error("No characters found")
  }
  
}
