function onload() {}
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')

function listen() {
  const hexInput = document.getElementById('hex')
  const colorPicker = document.getElementById("colour-picker")

  this.red.addEventListener("input", event => {
    if (this.red.value > 255) {
      this.red.value = 255
    }

    const value = parseInt(event.target.value)
    updateHexField(value, "red")
  })
  
  this.green.addEventListener("input", event => {
    if (this.green.value > 255) {
      this.green.value = 255
    }

    const value = parseInt(event.target.value)
    updateHexField(value, "green")
  })

  this.blue.addEventListener("input", event => {
    if (this.blue.value > 255) {
      this.blue.value = 255
    }

    const value = parseInt(event.target.value)
    updateHexField(value, "blue")
  })

  hexInput.addEventListener("input", event => {
    if (event.target.value.length == 6) {
      this.red.value = hexToBase(event.target.value.substring(0, 2))
      this.green.value = hexToBase(event.target.value.substring(2, 4))
      this.blue.value = hexToBase(event.target.value.substring(4, 6))
      updateColourPicker(event.target.value)
    }
  })

  colorPicker.addEventListener("input", event => {
    hexInput.value = event.target.value.substr(1).toUpperCase()
    this.red.value = hexToBase(event.target.value.substr(1).substring(0, 2))
    this.green.value = hexToBase(event.target.value.substr(1).substring(2, 4))
    this.blue.value = hexToBase(event.target.value.substr(1).substring(4, 6))
  })
}

function hexToBase(value) {
  return parseInt(value, 16)
}

function baseToHex(value) {
  if (value < 10) {
    return "0" + value
  } else if (value >= 10 && value < 16) {
    return "0" + value.toString(16).toUpperCase()
  } else {
    return value.toString(16).toUpperCase()
  }
}

// 

function updateColourPicker(value) {
  const colourPicker = document.getElementById("colour-picker")
  colourPicker.setAttribute("value", "#" + value)
  colourPicker.value = "#" + value
}

function updateHexField(value, colour) {
  const hexInput = document.getElementById("hex")

  colourToPos = {
    "red": [0, 1],
    "green": [2, 3],
    "blue": [4, 5]
  }

  if (typeof(value) == "number" && value <= 255) {
    const hex = baseToHex(value)
    hexInput.value = replaceAt(hexInput.value, colourToPos[colour][0], hex[0])
    hexInput.setAttribute("value", replaceAt(hexInput.value, colourToPos[colour][0], hex[0]))

    hexInput.value = replaceAt(hexInput.value, colourToPos[colour][1], hex[1])
    hexInput.setAttribute("value", replaceAt(hexInput.value, colourToPos[colour][1], hex[1]))

    updateColourPicker(hexInput.value)
  }
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}