var name =""
var array = []
function add() {
    array = [];
     name = document.querySelector(".name").value;
    // console.log(name);
    array.push({task:name})
    console.log(array);

    showData();
}

var str = ""
function showData() {
    array.map(
        (i) => { 
            str += "<div class='row'>" + "<div class= 'col-md-10'>" + i.task + "</div>" + "<div class='col-md-2'>" + 
            "<button class = 'btn btn-info'>Delete</button>" + "</div>" + "</div>"

            document.querySelector(".row1").innerHTML = str;

        }
        
    )
}