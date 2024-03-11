document.forms['prompt'].addEventListener('submit', function(event) {
    this.style['display'] = 'none';
    event.preventDefault();
});

function doShow() {
    let a = document.getElementById("showAge");
    if(a.style.display === "none"){
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}

function findAge() {
    const date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var age = document.getElementById("dob").value;

    const bDay = new Date(age);
    var bday = bDay.getDate();
    var bmonth = bDay.getMonth() + 1;
    var byear = bDay.getFullYear();  

    let yAge = year - byear;
    if(month <= bmonth && day < bday){
        yAge--;
    }
    return yAge
}


var a = document.getElementById("years");
a.innerHTML = findAge();

