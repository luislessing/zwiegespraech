
document.addEventListener('DOMContentLoaded', function() {
	var headerHeight = document.querySelector('.wrapper_empty').offsetHeight;
	document.addEventListener('scroll', function() {
	  headerHeight = document.querySelector('.wrapper_empty').offsetHeight;
	  if(headerHeight <= window.scrollY) {
		  document.body.classList.add('fixed');
	  } else {
		  document.body.classList.remove('fixed');
	  }
	});
});