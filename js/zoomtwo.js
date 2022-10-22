var modal = document.getElementById("closebuttonone");
var img = document.getElementById("obrazone");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("closeone")[0];
span.onclick = function() { 
  modal.style.display = "none";
}