document.addEventListener("DOMContentLoaded", (e) => {
    changeText()
});
  
  
  function changeText() {
    document.querySelector('#text')
      .textContent = "This is really cool!";
}