function currentTime() {
  let p1 = document.getElementById("p1");
  let date = new Date();
  let hr = date.getHours();
  let mn = date.getMinutes();
  let ss = date.getSeconds();
  let current_time = hr + ":" + mn + ":" + ss;
  p1.innerHTML = current_time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
