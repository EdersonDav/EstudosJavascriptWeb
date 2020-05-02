let tela = document.querySelector("#tela")

let contx = tela.getContext("2d")

// contx.moveTo(0, 0)
// contx.lineTo(250, 250)
// contx.lineTo(250, 0)
// contx.lineTo(500, 250)
// contx.stroke()

// contx.rect(100, 100, 200, 350)
// contx.fillStyle = "green"
// contx.fillRect(100, 100, 200, 350)
// contx.lineWidth = 10
// contx.strokeStyle = "blue"
// contx.strokeRect(100, 100, 200, 350)
// contx.fill()
// contx.stroke()

// contx.beginPath()
// contx.moveTo(20, 0)
// contx.lineTo(265, 200)
// contx.stroke()

// contx.beginPath()
// contx.fillStyle = "green"
// contx.moveTo(30, 0)
// contx.lineTo(365, 200)
// contx.lineTo(205, 200)
// contx.closePath()
// contx.stroke()
// contx.fill()

// let circle = {
//   x: 0,
//   y: 250,
//   inicio: 0,
//   fim: 0,
//   raio: 100,
//   antihorario: false

// }


// function draw(c) {
//   contx.beginPath()
//   contx.rect(0, 0, 5000, 500)
//   contx.fillStyle = 'bisque'
//   contx.fill()

//   contx.beginPath()
//   contx.fillStyle = 'black'
//   contx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antihorario)
//   contx.fill()
//   contx.stroke()
// }
// setInterval(() => {
//   if (circle.fim < 2 * Math.PI) {
//     circle.fim++
//     circle.x += 50
//   } else if (circle.y > 100) {
//     circle.x += 50
//     circle.y -= 50
//   } else if (circle.y == 100) {
//     while (circle.y < 250) {
//       circle.x += 10
//       circle.y += 10
//     }
//   }

//   draw(circle)
// }, 10)

// let img = new Image()
// img.src = "https://i.ytimg.com/vi/VKrv6FS2fkg/maxresdefault.jpg"

// img.onload = drawn;

// function drawn() {
//   contx.drawImage(this, 20, 20, this.naturalWidth / 3, this.naturalHeight / 3)
// }
