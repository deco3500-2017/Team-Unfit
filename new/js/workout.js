// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "going";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
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
  var span2 = document.createElement("SPAN");
  var span3 = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var txt2 = document.createTextNode("\u2713");
  var txt3 = document.createTextNode("\u002B")


  span.className = "close";
  span2.className = "going";
  span3.className = "add"
  span.appendChild(txt);
  span2.appendChild(txt2);
  span3.appendChild(txt3);
  li.appendChild(span);
  li.appendChild(span2);
  li.appendChild(span3);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

var going = document.getElementsByClassName("going");
    for (i = 0; i < going.length; i++) {
      going[i].onclick = function() {
        $(this).toggleClass('goingChecked');
      }
  }

  var add = document.getElementsByClassName("add");
  for (i = 0; i < add.length; i++) {
    add[i].onclick = function() {
      window.location.href="ownfriend.html";
    }
}

  var workoutlist = document.getElementsByTagName("LI");
  for (i = 0; i < workoutlist.length; i++) {
    workoutlist[i].onclick = function() {
      window.location.href="exampleWorkout.html";
    }
  }

}
