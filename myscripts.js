let colors = ["rgb(11, 14, 80)", "rgb(80, 124, 45)", "rgb(45, 124, 111)", "rgb(111, 80, 100)", "rgb(100, 202, 127)", "rgb(127, 33, 45)"]

let square = document.querySelectorAll(".square")

for (var i = 0; i < 6; i++) {
  square[i].style.background-color = colors[i]
  }
