// wait till the entire HTML Document is fully loaded
// before runnng the script

document.addEventListener("DOMContentLoaded", function () {
  // function body, the code to execute when this function is called

  // select the html element with the #viewport-width
  const viewportWidthElement = document.getElementById("viewport-width");

  // function to update the dimension of the display viewport width
  function updateViewWidth() {
    // function body, the code to execute when this function is called

    // get the window dimension from the current browser
    const width = window.innerWidth;

    // update the text of the selected element to display the width
    viewportWidthElement.textContent = `Width: ${width}px`;
  }

  // add event listener to call updateViewWidth whenever the window is resize
  window.addEventListener("resize", updateViewWidth);

  // call the function once when the page is loaded  to get the current width
  updateViewWidth();
});
