var items = document.querySelectorAll('.circle a');

for(var i = 0, l = items.length; i < l; i++) {

  items[i].style.left = (50 - 60*Math.cos(-2.095 * Math.PI - (1/l)*i*Math.PI)).toFixed(4) + "%";
  
  items[i].style.top = (50 + 60*Math.sin(-2.095 * Math.PI - (1/l)*i*Math.PI)).toFixed(4) + "%";
}

document.querySelector('.menu-button').onclick = function(e) {
   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
}
