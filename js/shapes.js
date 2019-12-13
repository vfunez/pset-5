window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  const ctx = document.getElementById('student-canvas-1').getContext('2d');

  let person = prompt("Message:");
  while (person !== null && person.length >= 50) {
    alert("Your message is too long. Keep it under 50 characters.");
    person = prompt("Message:");
  }

  if (person == null) {
    ctx.clearRect(0, 0, 1024, 128);
  } else {
    ctx.font = "48px sans-serif";
    ctx.clearRect(0, 0, 1024, 128);
    ctx.strokeText(person, 30, 70, 994);
  }
};

/*
 * Exercise 2.
 */

 const drawRectangle = function() {
   const ctx = document.getElementById('student-canvas-2').getContext('2d');
   ctx.clearRect(0, 0, 1024, 512);

do {
   let width = prompt("Width:");
   let height = prompt("Height:");
   let x = prompt("X:");
   let y = prompt("Y:");
   if (width == null || height == null || x == null || y == null) {
    break;
       }
       if (width < 1 && width > 1024) {
         alert("Your width must be between 1 and 1024.");
       }
       else if (height < 1 && height > 512) {
         alert("Your height must be between 1 and 512.");
       }
       else if (x < 1 && x > 1024) {
         alert("Your x-coordinate must be between 1 and 1024.");
       }
       else if (y < 1 && y > 512) {
         alert("Your y-coordinate must be between 1 and 512.");
       }
       else if (Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y)) {
         alert("One of your values is not a number.");
       }
       else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
         alert("Your rectangle won't fit on the canvas.");
      }
    } while (width < 1 || width > 1024 || height < 1 || height > 512 || x < 1 || x > 1024 || y < 1 || y > 512 || Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

       if (width !== null && height !== null && x !== null && y !== null) {
       ctx.beginPath();
       ctx.rect(x, y, width, height);
       ctx.closePath();
       ctx.stroke();
     }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const ctx = document.getElementById('student-canvas-3').getContext('2d');
  ctx.clearRect(0, 0, 1024, 128);

  do {
      let color = prompt("Color:");
      if (color == null) {
        break;
      }
      color = String(color)
      let caseInsensitive = color.toLowerCase()
      if (caseInsensitive != "black" && caseInsensitive != "blue" && caseInsensitive != "green" && caseInsensitive != "orange" && caseInsensitive != "purple" && caseInsensitive != "red" && caseInsensitive != "yellow") {
        alert(color + " is not a supported color.")
      }
    }
    while (caseInsensitive != "black" && caseInsensitive != "blue" && caseInsensitive != "green" && caseInsensitive != "orange" && caseInsensitive != "purple" && caseInsensitive != "red" && caseInsensitive != "yellow")

    if (color != null) {
      ctx.fillStyle = caseInsensitive;
      ctx.fillRect(10, 10, 100, 50);
    }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  const ctx = document.getElementById('student-canvas-4').getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

do {
    let sideOne = prompt("Side 1:");
    let sideTwo = prompt("Side 2:");
    let sideThree = prompt("Side 3:");
    let height = Math.min(sideOne, sideTwo, sideThree);
    let hypotenuse = Math.max(sideOne, sideTwo, sideThree);
    let base = Math.sqrt((hypotenuse * hypotenuse) - (height * height));

    if (height == 0 && hypotenuse == 0 && base == 0) {
      break;
    }
    sideOne = Number(SideOne)
    sideTwo = Number(SideTwo)
    sideThree = Number(SideThree)

    if (height * height + base * base != hypotenuse * hypotenuse || height == 0 || hypotenuse == 0 || base == 0  || sideOne + sideTwo + sideThree - hypotenuse - height != base) {
       alert("That's not a valid right triangle.")
     }
     if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
       alert("One of your sides is not a number.")
     }
     if (height > 512 || hypotenuse > 1310720 || base > 1024) {
       alert("Your triangle won't fit on the canvas.")
     }
   }  while ((Math.floor(base) * Math.floor(base) + height * height != hypotenuse * hypotenuse) || isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree) || height > 512 || hypotenuse > 1310720 || base > 1024 || height == 0 || hypotenuse == 0 || base == 0)

   if ((base * base + height * height == hypotenuse * hypotenuse) && (height < 512 && hypotenuse < 1145 && base < 1024) && (height != 0 && hypotenuse != 0 && base != 0) && (height != null && hypotenuse != null && base != null)) {
     height = height + 25
     base = base + 25
     ctx.beginPath();
     ctx.moveTo(25, 25);
     ctx.lineTo(25, height);
     ctx.lineTo(base, height)
     ctx.lineTo(25, 25)
     ctx.stroke();
 }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  const ctx = document.getElementById('student-canvas-5').getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  do {
      let radius = prompt("Radius:");
      if (radius == null) {
        break;
      }
      if (radius < 32) {
       alert("Your radius must be at least 32.")
      }
      if (radius > 256) {
       alert("Your smiley face won't fit on the canvas.")
      }
      if (isNaN(radius)) {
       alert("Your radius is not a number.")
      }
    } while (radius < 32 || isNaN(radius) || radius > 256)

      let eyes = 0.15 * radius
      let mouth = 0.7 * radius

  ctx.beginPath();
  ctx.arc(512, 256, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512, 256, mouth, 0, Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 + 0.4 * radius, 256 - 0.4 * radius, eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  const ctx = document.getElementById('student-canvas-6').getContext('2d');
  ctx.clearRect(0, 0, 1024, 512);

  let counter = 5;
  let distance = 0;
  let heightOne = 0;
  let distanceModify = 0;
  let heightModify = 0;

  do {
      let side = prompt("Side:");
      if (side == null) {
        break;
      }
      if (side < 1) {
        alert("Your block size must be at least 1.")
      }
      if (side >= 101) {
        alert("Your pyramid won't fit on the canvas")
      }
      if (isNaN(side)) {
        alert("Your block size is not a number.")
      }
    } while (side < 1 || side >= 101 || isNaN(side))

  for (i = 5; i > 0; i--) {
    counter = i
    while(counter >= 1) {
      ctx.beginPath();
      ctx.rect(10 + Number(distance), (502 - side) - Number(heightOne), Number(side), Number(side));
      ctx.stroke();
      ctx.closePath();
      distance = Number(distance) + Number(side)
      counter--
    }
    distanceModify++
    distance = distanceModify * (1/2 * side)
    heightModify++
    heightOne = heightModify * side
  }
};
