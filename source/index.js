var page=document.getElementById("container");
var x = 0;
var y = 0; 
page.addEventListener('mousemove', function(event) { 
  x = event.clientX;
  y = event.clientY; 
  page.style.backgroundColor = 'rgba(' + x + ', ' + y + ', 100,0.3)';  
});
$('body').bind('copy paste',function(e) {
    e.preventDefault(); return false; 
});
 

