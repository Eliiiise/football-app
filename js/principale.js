


$('svg').click(function() {
  $('svg').find("path").removeClass('active');
  $('svg').find(".cls-1").removeClass('active');
  $(this).find("path").addClass('active');
  $(this).find(".cls-1").addClass('active');
  if (this.getAttribute('class') == "one"){
  	$('nav').find("span").css('left','0%');
  }
    if (this.getAttribute('class') == "two"){
  	$('nav').find("span").css('left','15%');
  }
    if (this.getAttribute('class') == "three"){
  	$('nav').find("span").css('left','30%');
  }
    if (this.getAttribute('class') == "four"){
  	$('nav').find("span").css('left','45%');
  }
    if (this.getAttribute('class') == "five"){
   	$('nav').find("span").css('left','60.2%');
  }
});


function openClub(){
	$('.parent').find("div").click(function() {
	  $('.gtab').css('transform','translateY(70vh)');
	  $('header').css('opacity','0');
	  setTimeout(function(){ $('section:nth-of-type(2)').toggleClass('open');
	  	$('.white').toggleClass('open');
	   $('section:nth-of-type(2)').css('background-position','bottom 180px right -1200px');
	   $('section:nth-of-type(2)').css('opacity','0.9'); }, 800);

	  setTimeout(function(){
	   $('.wrap2').css('display','none');
	   $('section:nth-of-type(2) > img').css('display','block'); }, 1000);
	   setTimeout(function(){
	   $('section:nth-of-type(2) > img').css('opacity','1'); }, 1100);
	});
}

	$('section:nth-of-type(2) > img').click(function() {
		setTimeout(function(){
	  $('.gtab').css('transform','translateY(0vh)');
	  $('header').css('opacity','1');},1000
	  );

	  setTimeout(function(){ $('section:nth-of-type(2)').toggleClass('open');
	  	$('.white').toggleClass('open');
	   $('section:nth-of-type(2)').css('background-position','bottom 180px right -900px');
	   $('section:nth-of-type(2)').css('opacity','1'); }, 200);

	  setTimeout(function(){
	   $('.wrap2').css('display','block');
	   $('section:nth-of-type(2) > img').css('opacity','0'); }, 100);

	   $('section:nth-of-type(2) > img').css('display,none');
	});



function changeLeague() {
	$('.parent').css('transform','translateY(70vh)');
	$('.parent').css('opacity','0');
	setTimeout(function(){ $('.parent').css('transform','translateY(0vh)');$('.parent').css('opacity','1'); }, 1000);

	setTimeout(function(){ $('.gtab').css('transform','translateY(70vh)');$('.gtab').css('opacity','0'); }, 300);
	setTimeout(function(){ $('header svg path').css('opacity','0'); }, 300);
	setTimeout(function(){ $('header svg .cls-1').css('opacity','0'); }, 300);
	setTimeout(function(){ $('.gtab').css('transform','translateY(0vh)');$('.gtab').css('opacity','1'); }, 1300);
	

}



