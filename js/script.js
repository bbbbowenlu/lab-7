function init(){

  var text = document.getElementById("entryinput");
  button.addEventListener("click", function () {
    var button = document.getElementById("entrybutton");
    alert("Bowen Lu: " + message.value);
    console.log(message);
    document.getElementById("textoutput").innerHTML = message.value
	});
	
}
window.addEventListener('load', init);
