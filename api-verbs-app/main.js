const get = document.getElementById('get');
const post = document.getElementById('post');
const put = document.getElementById('put');
const deleteField = document.getElementById('delete');
const requestBtn = document.getElementById('btn');
const getP = document.getElementById('getP');
const postP = document.getElementById('postP');
const putP = document.getElementById('putP');
const deleteP = document.getElementById('deleteP');

/**
 * Handles the click event of the request button
 * @param {Event} e - The event object
 * @return {void}
 */
requestBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  if(get.value){
    const getResult = await getFunction(get.value)  
    getP.textContent = JSON.stringify(getResult)
  }
  if(post.value){
    await postFunction(post.value)  
  }
  if(put.value){
    const putResult = await putFunction(put.value)  
    console.log(putResult);
  }
  if(deleteField.value){
    const deleteResult = await deleteFunction(deleteField.value)
    console.log(deleteResult);
  }
  get.value = ''
  post.value = ''
  put.value = ''
  deleteField.value = ''
})


/**
 * Sends an HTTP GET request to the specified URL and returns the response data in JSON format.
 *
 * @param {string} data - The data to be appended to the URL for the GET request (id or 'all')
 * @return {object} The response data from the server in JSON format
 */
async function getFunction(data) {
  if (!get.value) {
    throw new Error('No value has been passed for an HTTP GET request. Please input a value')
  }
  try{
    const url = await fetch(`http://127.0.0.1:8000/get/${data}`,
      {
        mode:'cors'
      })
    return url.json()
    
  }catch{
    throw new Error('HTTP Get error, please check your input')
  }
}

/**
 * Sends an HTTP POST request to the specified URL with the given data.
 *
 * @param {string} data - The data to be sent in the request body.
 * @throws {Error} If no value has been passed for the POST request.
 * @throws {Error} If there is an error with the HTTP POST request.
 */
async function postFunction(data) {
  if (!post.value) {
    throw new Error('No value has been passed for an HTTP POST request. Please input a value')
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try{
    await fetch(`http://127.0.0.1:8000/post/${data}`,
      options)    
  }catch{
    throw new Error('HTTP Post error, please check your input')
  }
}

/**
 * Sends an HTTP PUT request to the specified URL with the given data.
 *
 * @param {string} data - The data to be sent in the request body.
 * @throws {Error} If no value has been passed for the PUT request.
 * @throws {Error} If there is an error with the HTTP PUT request.
 */
async function putFunction(data) {
  if (!put.value) {
    throw new Error('No value has been passed for an HTTP PUT request. Please input a value')
  }
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  try{
    const url = await fetch(`http://127.0.0.1:8000/put/${data}`,
      options)
    console.log(url);
    
  }catch{
    throw new Error('HTTP Put error, please check your input')
  }
}

/**
 * Sends an HTTP DELETE request to the specified URL with the given data.
 *
 * @param {string} data - The data to be sent in the request body.
 * @throws {Error} If no value has been passed for the DELETE request.
 * @throws {Error} If there is an error with the HTTP DELETE request.
 */
async function deleteFunction(data) {
  if(!deleteField.value){
    throw new Error('No value has been passed for an HTTP DELETE request. Please input a value')
  }
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try{
    await fetch(`http://127.0.0.1:8000/delete/?books=${data}`,
      options)
  }catch{
    throw new Error('HTTP Delete error, please check your input')
  }
}