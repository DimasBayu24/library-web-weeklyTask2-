 // Get the modal
 let deleteModal = document.getElementById("deleteModal");

 // Get the button that opens the modal
 let deleteBtn = document.getElementById("delete");
 
 // Get the <span> element that closes the modal
 let deleteSpan = document.getElementsByClassName("delete-close")[1];
 
 // When the user clicks the button, open the modal 
 deleteBtn.onclick = function () {
     deleteModal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 deleteModal.onclick = function () {
   deleteModal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == deleteModal) {
         deleteModal.style.display = "none";
     }
 }