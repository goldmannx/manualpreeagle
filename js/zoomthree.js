var modal = document.getElementById("closebuttontwo");
var img = document.getElementById("obraztwo");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption03");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("closetwo")[0];
span.onclick = function() { 
  modal.style.display = "none";
}