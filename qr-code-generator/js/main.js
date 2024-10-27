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
  qrResult.style.display = 'none'
  input.value = ''
})

/**
 * Handles the event when the submit button or Enter is clicked.
 * If the input field is not empty, it creates a QR code and displays it.
 * @listens click
 * @listens keydown
 */
qrSubmitBtn.addEventListener('click', () => {
  if (input.value) {
    createQR(input.value)
    home.style.display = 'none'
    qrResult.style.display = 'flex'
  }
})

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value) {
    createQR(input.value)
    home.style.display = 'none'
    qrResult.style.display = 'flex'
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
 * Shares the QR code image.
 * @listens click
 * @param {string} qrImageSrc - The URL of the QR code image.
 */
shareBtn.addEventListener('click', () => {
  const qrImageSrc = qrImage.childNodes[2].src
  shareQR(qrImageSrc)
  alert('QR Code copied to cliboard successfully!')
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

/**
 * Copies the QR code image to the clipboard.
 * @param {string} imageSrc - The URL of the QR code image.
 * @returns {Promise<void>} A promise that resolves when the image is copied to the clipboard.
 * @throws Will log an error message if the image cannot be fetched or copied.
 */
async function shareQR (imageSrc) {
  try {
    const data = await fetch(imageSrc)
    const blob = await data.blob()
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ])
    console.log('Image copied.')
  } catch (err) {
    console.error(err.name, err.message)
  }
}
