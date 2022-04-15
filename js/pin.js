
function gerarPin(){
    var body = document.body;
    var divPin = document.getElementById('pin'); 
    body.addEventListener('click', function(e){
        var x = e.pageX; 
        var y = e.pageY;
        divPin.style.visibility = "visible"; 
        divPin.style.left = x + "px"; 
        divPin.style.top = y + "px";
        console.log(x,y);
        pin(x,y);
    }); 
}

function pin(x,y){
    alert("x"+ x + "y" + y);
}