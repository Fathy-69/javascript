const canvasElement = document.getElementById('graph');
const ctx = canvasElement.getContext('2d');
//affichage vertical
function fillTextVertically1(text, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 0, 0);
    ctx.restore();
}
const fillTextVertically2 = (text, x, y) => {
    const lineHeight = 10;
    y = y - lineHeight * text.length / 2;
    ctx.textAlign = "center";
    for (var i = 0; i < text.length; i += 1) {
        ctx.fillText(text[i], x, y + i * lineHeight);
    }
}

const createAxeX = (marks,scale,unit,label) => {
    const distance = ctx.canvas.width/marks;
    ctx.beginPath();
    ctx.moveTo(50,ctx.canvas.height-50);
    ctx.lineTo(ctx.canvas.width-50,ctx.canvas.height-50);
    ctx.stroke(); 
    //label 
    if(label){
        ctx.textAlign ="center"
        ctx.fillText(label,ctx.canvas.width/2,ctx.canvas.height-10) 
    }
    //marks
    for(let i=0;i<marks;i++){
        ctx.beginPath();
        ctx.moveTo(50+i*distance,ctx.canvas.height-50);
        ctx.lineTo(50+i*distance,ctx.canvas.height-45);
        ctx.stroke();   
      //afficher les valeurs
    ctx.textAlign = "center";
        if (unit) ctx.fillText(i*scale+unit,50+i*distance,ctx.canvas.height-30);
        else ctx.fillText(i*scale,50+i*distance,ctx.canvas.height-30)
   }
};
const createAxeY = (marks,scale,unit,label) => {
    const distance = (ctx.canvas.height-100)/marks;
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(50,ctx.canvas.height-50);
    ctx.stroke(); 
    //label 
    if(label){
        ctx.textAlign ="center"
        //ctx.fillText(label,ctx.canvas.width/2,ctx.canvas.height-10) 
        fillTextVertically2(label,10,ctx.canvas.height/2);
    }
    //marks
    for(let i=0;i<=marks;i++){
        ctx.beginPath();
        ctx.moveTo(50,ctx.canvas.height-50-i*distance);
        ctx.lineTo(45,ctx.canvas.height-50-i*distance);
        ctx.stroke();   
      //afficher les valeurs
    ctx.textAlign = "center";
        if (unit) ctx.fillText(i*scale+unit,35,ctx.canvas.height-50-i*distance);
        else ctx.fillText(i*scale,35,ctx.canvas.height-50-i*distance)
   }
};
//GENERATION DE POINTS
const generatePoints = (size, x_min, x_max, y_min, y_max, color) => {
    const points = []
    for (let i = 0; i < size; i++) {
        points.push({
            x: Math.random() * (x_max - x_min) + x_min,
            y: Math.random() * (y_max - y_min) + y_min,
            color: color 
    });
    }
    return points;  
}
//Disposition des points
const placePoints = (points, marks_x, scale_x, marks_y, scale_y) => {
    const transform_x = marks_x * scale_x / (ctx.canvas.width - 100);
    const transform_y = marks_y * scale_y / (ctx.canvas.height - 100);
    points.forEach(point => {
    const x = 50 + point.x / transform_x;  //50 MARGE DU CANVAS
    const y = ctx.canvas.height - 50 - point.y / transform_y;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = point.color;
    ctx.fill(); // cercle plein
    ctx.closePath();
    });
}


createAxeX(10,100,"$","Incomes");
createAxeY(10,10,"%","Expenses"); 

const points =generatePoints(50, 0, 1000, 50, 100, "red");
console.log(points);
placePoints(points, 10, 100, 10, 10);

