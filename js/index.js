
$(window).scroll(function(){
  let wScroll =  $(this).scrollTop();
let home = $('#home').offset().top;
let menu = $('#lastmenu').offset().top;
let about = $('#menu').offset().top;
let location = $('#about').offset().top;
let contact = $('#location').offset().top;
console.log('scroll' + wScroll);
console.log('menu'+menu)
if(wScroll > home && wScroll < menu){
$('div').removeClass('beda');
$('.bul1').addClass("beda");
}

else if(wScroll > menu && wScroll< about){
$('div').removeClass('beda');
$('.bul2').addClass("beda");
}

else if(wScroll > about && wScroll< location){
$('div').removeClass('beda');
$('.bul3').addClass("beda");
}

else if(wScroll > location && wScroll< contact){
$('div').removeClass('beda');
$('.bul4').addClass("beda");
}

else if(wScroll > contact){
$('div').removeClass('beda');
$('.bul5').addClass("beda");
}
});


window.onload = size;
window.onresize =size;

function size(){
  let heightWindow = window.innerHeight;
  let widthWindow = window.innerWidth;
  console.log(heightWindow, widthWindow);
if(widthWindow >= 1300 ){
  $('.game').attr('class','col-2 game');
  $('#game1').addClass('offset-3');

}
else if(widthWindow < 1300 ){
  $('.game').attr('class','col-4 game');
$('.loc2').attr('class','col-10 offset-1 loc2');
}
}
