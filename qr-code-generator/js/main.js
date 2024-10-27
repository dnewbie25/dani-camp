const home = document.getElementById('home')
const qrResult = document.getElementById('qr-result')
const input = document.getElementById('input')
const qrSubmitBtn = document.getElementById('submit-qr')
const qrImage = document.getElementById('qr-result__image')
const downloadBtn = document.getElementById('download')
const shareBtn = document.getElementById('share')

window.addEventListener("load",e=>{
  qrResult.style.visibility = 'collapse'
  input.value = ''
})

qrSubmitBtn.addEventListener('click',()=>{
  if(input.value){
    createQR(input.value)
    home.style.visibility = 'collapse'
    qrResult.style.visibility = 'visible'
  }
})

function createQR(value){
  const qr = new QRCode(qrImage, {
    text: value,
    width: 250,
    height: 250,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

}