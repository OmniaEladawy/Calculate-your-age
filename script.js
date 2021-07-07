function myFun(){
    var inp = document.getElementById("dt").value ;
    var today = new Date();
    var birthday = new Date(inp);
    var year = today.getFullYear() - birthday.getFullYear();
    if(today.getMonth() >= birthday.getMonth()){
        var month = today.getMonth() - birthday.getMonth();
    }else{
        var month = (today.getMonth() - birthday.getMonth()) + 12;
        var year = year - 1;
    }
    if(today.getDate() >= birthday.getDate()){
        var day = today.getDate() - birthday.getDate();
    }else{
        var day = (today.getDate() - birthday.getDate()) + 31;
        if(today.getMonth() === birthday.getMonth()){
            var month = 11;
            var year = year - 1;
        }else{
            var month = month - 1 ;
        }
    }
    document.getElementById("age").innerHTML = "<b> Your age is </b><br><br> " + year + " <b> years </b> " + month + " <b> months </b> " + day + "<b> days </b>"
}