let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal-close');



modal.addEventListener(
    "click",
    function(event) {
      if (
        event.target.matches('.modal-close') ||
        !event.target.closest(".modal-content")
      ) {
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
    document.querySelector(".modal").style.display = "none"
  }


document.addEventListener('click', function (event) { 
  if (event.target.className.indexOf('modal-target') !== -1) {
      var img = event.target;
      var modalImg = document.querySelector(".modal-content");
      var captionText = document.querySelector(".modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});