Canvas = document.getElementById("Pong");
ctx = Canvas.getContext("2d");


function clear() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, height - 40, width, 40);
}

