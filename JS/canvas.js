var canvas=document.getElementById("canva");

function draw() {
  if (canvas.getContext) {
    const context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = '#00ff40ff';
    context.lineWidth = 2;

    context.arc(40, 40, 30, 0, 2 * Math.PI, false);
    context.stroke();
    
    context.beginPath();
    context.moveTo(85, 70);
    context.strokeStyle = '#7a7a7aff';
    context.lineTo(105, 10);
    context.stroke();

    context.beginPath();
    context.moveTo(120, 70);
    context.strokeStyle = '#db0000ff';
    context.lineTo(120, 10);
    context.lineTo(175, 70);
    context.lineTo(175, 10);
    context.stroke();

    context.font = "12px Arial";
    context.fillStyle = "blue"; 
    context.textAlign = "center"; 
    context.textBaseline = "middle"; 
    context.fillText("Sa construction est simple :", 95, 100);
    context.font = "10px Arial";
    context.fillText("Un ovale vert pour le O de Ok,", 95, 115);
    context.fillText("Un otrait oblique pour séparer,", 95, 130);
    context.fillText("Et un N composé de 3 traits pour le Not(e).", 95, 145);
    
  }
}
draw();
