let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function updateClock() {
  let now = new Date()
  let hour = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(
    seconds
  )}`

  let sDeg = (360 / 60) * seconds - 90
  sElement.style.transform = `rotate(${sDeg}deg)`
  let mDeg = (360 / 60) * minutes - 90
  mElement.style.transform = `rotate(${mDeg}deg)`
  let hDeg = (360 / 12) * hour + (30 / 60) * minutes - 90
  hElement.style.transform = `rotate(${hDeg}deg)`
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time
}
setInterval(updateClock, 1000)
updateClock()
