const get = document.getElementById('get');
const post = document.getElementById('post');
const put = document.getElementById('put');
const deleteBtn = document.getElementById('delete');
const requestBtn = document.getElementById('btn');
const getP = document.getElementById('getP');
const postP = document.getElementById('postP');
const putP = document.getElementById('putP');
const deleteP = document.getElementById('deleteP');

requestBtn.addEventListener('click', async (e) => {
  const dataGet = get.value.split(',')
  const dataPost = post.value.split(',')
  const getResult = await getFunction(dataGet)  
  const postResult = await postFunction(dataPost)  
  getP.textContent = JSON.stringify(getResult['args'])
  postP.textContent = JSON.stringify(postResult['args'])
})


async function getFunction(data) {
  if (!get.value) {
    throw new Error('No value has been passed for an HTTP GET request. Please input a value')
  }
  try{
    const url = await fetch(`https://httpbin.org/get?name=${data[0]}&age=${data[1]}&class=${data[2]||Math.floor(1000 + Math.random() * 9000)}`,
      { mode: 'cors'})
    return url.json()
  }catch{
    throw new Error('HTTP Get error, please check your input')
  }
}

async function postFunction(data) {
  if (!post.value) {
    throw new Error('No value has been passed for an HTTP POST request. Please input a value')
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  try{
    const url = await fetch(`https://httpbin.org/post?name=${data[0]}&age=${data[2]||Math.floor(1000 + Math.random() * 9000)}`,
      options)
    return url.json()
  }catch{
    throw new Error('HTTP Post error, please check your input')
  }
}
