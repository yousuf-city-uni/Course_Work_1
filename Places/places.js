//code adapted from: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// and https://stackoverflow.com/questions/6405890/set-body-left-margin-using-javascript
function hamburger_button() {
  var x = document.getElementById('vertical_banner');
  var y = document.getElementById('hamburger_button_main');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    y.style.display = 'block';
    document.getElementsByTagName("body")[0].style.marginLeft = "10px";
  } else {
    x.style.display = 'block';
    y.style.display = 'none';
    document.getElementsByTagName("body")[0].style.marginLeft = "15%";
  }
}
