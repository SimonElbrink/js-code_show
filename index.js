console.log("Hello form My first Javascript file!");

document.getElementById("changeMe").innerHTML = "Hello World Wide Web!"
document.getElementById("changeMe").style.color = "blue";

var myH1 = document.getElementById("changeMe");

myH1.style.color = "Pink";

//-------------------------------------------------------------------------
/*
 multi-line comment
 */

var myULElements = document.getElementsByTagName("ul");

console.log(myULElements);

console.log("This unordered list have The following className: " + myULElements[0].className);

//-------------------------------------------------------------------------

var dontBtn = document.getElementById("dontBtn");

dontBtn.innerHTML = "Click Me!";

dontBtn.addEventListener("click", changeToAnimal);

function changeToAnimal(){

    myULElements[0].innerHTML = "<li>Dog</li> <li>Cat</li>";

    for (var index = 0; index < myULElements.length; index++){

        var element = myULElements[index];

        if (index % 2 == 0){
            element.classList.add("evenUl");
        }else{
            element.classList = "oddUl";
        }
    }
}

//-------------------------------------------------------------------------

document.getElementById("secret").addEventListener("mouseover",
    function () {
    document.getElementsByTagName("h2")[0].innerHTML = "This reacts to a eventListener!";
})


document.getElementById("secret").addEventListener("mouseleave",
    function () {
        document.getElementsByTagName("h2")[0].innerHTML = "Secret under this text ;)"
});


//-------------------------------------------------------------------------


var ticTacBoard = document.getElementById("ticTacBoard");

ticTacBoard.style.width = "300px";
ticTacBoard.style.height = "300px";
ticTacBoard.style.backgroundColor = "grey";

for (var index = 0; index < ticTacBoard.children.length; index++){

    var element = ticTacBoard.children[index];

    element.style.height = "100px";
    element.style.width = "100px";

    element.style.float = "left";

    if ( index % 2 == 0){
        element.style.backgroundColor = "white";
    }else{
        element.style.backgroundColor = "black";
    }
};


































