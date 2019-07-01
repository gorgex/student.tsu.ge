const get = (element) => {
	return document.querySelector(element);
}

const getAll = (elements) => {
	return document.querySelectorAll(elements);
}

const show = (element, delay = 0) => {
	window.setTimeout(() => {
		get(element).style.display = 'flex';
    }, delay);
}

const hide = (element, delay = 0) => {
	window.setTimeout(() => {
		get(element).style.display = 'none';
    }, delay);
}

document.body.onload = () => {
	setTimeout(() => {
		const preloader = get('.preloader');
		if(!preloader.classList.contains('done'))
		{
			preloader.classList.add('done');
		}
	}, 700);
}

window.addEventListener('resize', () => {
	if(window.innerWidth > 768) {
		get('.circular').style.top = 0;
		get('.circular').style.left = '100%';
		get('.circular').classList.remove('show');
		get('.burger-menu').classList.remove('open');
		get('header .container nav').classList.remove('show');
	}
});

// function scrollToTop() {
// 	var timer = setInterval(function() {
// 		if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
// 			window.scrollBy(0,-30);
// 		} else {
// 			clearInterval(timer);
// 		}
// 	}, 10);
// }

get('.languagepicker')
	.addEventListener('click', () => {
		let lang = get('.languagepicker');
		if(lang.innerHTML == "Eng") {
			lang.innerHTML = "Geo";
		} else {
			lang.innerHTML = "Eng";
		}
	});

get('.burger-menu')
	.addEventListener('click', (event) => {
		get('.circular').style.top = event.clientY + "px";
		get('.circular').style.left = event.clientX + "px";
		get('.circular').classList.toggle('show');
		get('.burger-menu').classList.toggle('open');
		get('header .container nav').classList.toggle('show');
		get('.list-of-courses').classList.toggle('show');
	});

get('.courses')
	.addEventListener('mouseover', () => {
		get('.list-of-courses').classList.add('show');
		get('.courses').classList.add('active');
	});

get('.courses')
	.addEventListener('mouseout', () => {
		if(window.innerWidth > 768) {
			get('.list-of-courses').classList.remove('show');
		}
		get('.courses').classList.remove('active');
	});

// document.querySelector('.to-top')
// 	.addEventListener('click', function() {
// 		scrollToTop();
// 	});

// const listItems = getAll('.list-of-courses span');

// for(let item of listItems) {
// 	item.addEventListener('mouseover', () => {
// 		item.classList.add('active');
// 	});
// 	item.addEventListener('mouseout', () => {
// 		item.classList.remove('active');
// 	});
// }