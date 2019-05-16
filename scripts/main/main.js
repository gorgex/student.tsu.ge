function _(element) {
	return document.querySelector(element);
}

// function scrollToTop() {
// 	var timer = setInterval(function() {
// 		if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
// 			window.scrollBy(0,-30);
// 		} else {
// 			clearInterval(timer);
// 		}
// 	}, 10);
// }

// window.addEventListener('scroll', function() {
// 	if(document.documentElement.scrollTop > 30) {
// 		document.querySelector('nav').classList.add('sticky');
// 	} else {
// 		document.querySelector('nav').classList.remove('sticky');
// 	}
// });

// document.querySelector('.courses')
// 	.addEventListener('mouseover', function() {
// 		this.classList.add('active');
// 	});

// document.querySelector('.courses')
// 	.addEventListener('mouseout', function() {
// 		this.classList.remove('active');
// 	});

// document.querySelector('.language')
// 	.addEventListener('click', function(e) {
// 		if(e.target.name == 'geo') {
// 			document.images[e.target.name].src = 'media/images/united-kingdom.svg';
// 			document.images[e.target.name].name = 'eng';
// 			document.images[e.target.name].title = 'English';
// 		} else if(e.target.name == 'eng') {
// 			document.images[e.target.name].src = 'media/images/georgia.svg';
// 			document.images[e.target.name].name = 'geo';
// 			document.images[e.target.name].title = 'ქართული';
// 		}
// 	});

// document.querySelector('.to-top')
// 	.addEventListener('click', function() {
// 		scrollToTop();
// 	});

// var expandables = document.getElementsByClassName('expandable');

// for(var i = 0; i < expandables.length; i++) {
// 	expandables[i].addEventListener('mouseover', function() {
// 		this.getElementsByTagName('ul')[0].classList.add('active');
// 	});

	// expandables[i].addEventListener('mouseout', function() {
	// 	this.getElementsByTagName('ul')[0].classList.remove('active');
	// });
// }