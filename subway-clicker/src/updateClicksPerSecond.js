export function updateClicksPerSecond (rate, startTime, totalClicks) {
  const elapsedTime = (Date.now() - startTime) / 1000 // time in seconds
  const clicksPerSecond = (totalClicks / elapsedTime).toFixed(2)

  rate.textContent = clicksPerSecond
}
