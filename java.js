function mobilecheck() {
    var x = document.getElementById("menu");
    var menu = document.getElementById("mobile");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        x.style.display = "none";
        menu.style.display = "block"
      } else {
        x.style.display = "block";
        menu.style.display = "none"
      }
  };