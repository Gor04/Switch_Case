var myElementId = document.getElementById("name");
var a = document.getElementById("hex");
function myFunction1(){
	switch(myElementId.value){
		case "yellow": 
			document.getElementById("hex").innerHTML = "#FFFF00";
			document.getElementById('col_div').style.backgroundColor = "yellow";
			break;
		case "red":
			document.getElementById("hex").innerHTML = "#FF0000";
			document.getElementById('col_div').style.backgroundColor = "red";
			break;
		case "black":
			document.getElementById("hex").innerHTML = "#FFFFFF";
			document.getElementById('col_div').style.backgroundColor = "black";
			break;
		default :
			document.getElementById("hex").innerHTML = "No Color";
			break;

	}
}
// style="height: 20px;width: 20px;color: yellow;"