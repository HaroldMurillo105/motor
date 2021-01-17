var harold = ['#0000FF','#808080','#00FF00','#FFFF00','#add8e6','#000000'];
    var haroldIndex = 0;
    function changeColor(){
        var mix = Math.floor(Math.random() * 6);
        var i = document.getElementById("motorbike");
        i.style.backgroundColor = harold[mix];
}
function colorchange(){
    var select = document.getElementById("dropdown").value;
    if (select == "0")
    {
        document.getElementById("motorbike").style.backgroundColor = "blue";
    }
    else if (select == "1")
    {
        document.getElementById("motorbike").style.backgroundColor = "grey";
    }
    else if (select == "2")
    {
        document.getElementById("motorbike").style.backgroundColor = "green";
    }
    else if (select == "3")
    {
        document.getElementById("motorbike").style.backgroundColor = "yellow";
    }
    else if (select == "4")
    {
        document.getElementById("motorbike").style.backgroundColor = "lightblue";
    }
    else if (select == "5")
    {
        document.getElementById("motorbike").style.backgroundColor = "black";
    }
   
}

function remove(){
    document.getElementById("motorbike").style.backgroundColor = "white";
}