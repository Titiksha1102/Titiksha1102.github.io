const observer1 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
		entry.target.classList.add('animate1');
		console.log('added animate class');
		} else {
		entry.target.classList.remove('animate1');
		console.log('removed animate class');
		}
 	});
});

const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
		entry.target.classList.add('animate2');
		console.log('added animate class');
		} else {
		entry.target.classList.remove('animate2');
		console.log('removed animate class');
		}
 	});
});

const observer3 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
		entry.target.classList.add('animate3');
		console.log('added animate class');
		} else {
		entry.target.classList.remove('animate3');
		console.log('removed animate class');
		}
 	});
});

const observer4 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
		entry.target.classList.add('animate4');
		console.log('added animate class');
		} else {
		entry.target.classList.remove('animate4');
		console.log('removed animate class');
		}
 	});
});

let hiddenAnim1 = document.getElementById('hidden1');
observer1.observe(hiddenAnim1)

let hiddenAnim2=document.getElementById('hidden2');
observer2.observe(hiddenAnim2)

let hiddenAnim3=document.getElementById('hidden3');
observer3.observe(hiddenAnim3)

let hiddenAnim4=document.getElementById('hidden4');
observer4.observe(hiddenAnim4)