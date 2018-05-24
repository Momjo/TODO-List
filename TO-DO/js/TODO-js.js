function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
	  alert("You must write something!");
	} else {
	  document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
	li.appendChild(span);
	
	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var list = document.querySelector('ul');
var done = document.getElementById("doneTask").children;
list.addEventListener('click', function(event) {
	if (event.target.tagName === "LI") {
		var cln = event.target.cloneNode(true);
		document.getElementById("doneTask").appendChild(cln);
		event.target.style.display = 'none';
		cln.classList.toggle('checked');
	}
	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}, false);

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}