const home = document.getElementById('home')
const qrResult = document.getElementById('qr-result')
const input = document.getElementById('input')
const qrSubmitBtn = document.getElementById('submit-qr')
const qrImage = document.getElementById('qr-result__image')
const downloadBtn = document.getElementById('download')
const shareBtn = document.getElementById('share')

/**
 * Hides the QR code result section and clears the input field when the page is loaded.
 * @listens load
 */
window.addEventListener('load', e => {
  qrResult.style.visibility = 'collapse'
  input.value = ''
})

/**
 * Handles the event when the submit button is clicked.
 * If the input field is not empty, it creates a QR code and displays it.
 * @listens click
 */
qrSubmitBtn.addEventListener('click', () => {
  if (input.value) {
    createQR(input.value)
    home.style.visibility = 'collapse'
    qrResult.style.visibility = 'visible'
  }
})

/**
 * Downloads the QR code image.
 * @listens click
 */
downloadBtn.addEventListener('click', () => {
  const qrImageSrc = qrImage.childNodes[2].src
  downloadQR(qrImageSrc)
})

/**
 * Generates a QR code and appends it to the specified container.
 * @param {string} value - The text or URL to encode in the QR code.
 */
function createQR (value) {
  new QRCode(qrImage, {
    text: value,
    width: 250,
    height: 250,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  })
}

/**
 * Downloads the QR code image.
 * @param {string} imageSrc - The URL of the QR code image.
 */
async function downloadQR (imageSrc) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)
  const link = document.createElement('a')
  link.href = imageURL
  link.download = 'image file name here'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
