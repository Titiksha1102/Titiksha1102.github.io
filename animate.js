const observer1 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		
		if (entry.isIntersecting) {
		entry.target.classList.add('animate1');
		
		} else {
		entry.target.classList.remove('animate1');
		
		}
 	});
},{ threshold:1 });

const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		
		if (entry.isIntersecting) {
		entry.target.classList.add('animate2');
		
		} else {
		entry.target.classList.remove('animate2');
		
		}
 	});
},{ threshold:1 });

const observer3 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		
		if (entry.isIntersecting) {
		entry.target.classList.add('animate3');
		
		} else {
		entry.target.classList.remove('animate3');
		
		}
 	});
},{ threshold:1 });

const observer4 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		
		if (entry.isIntersecting) {
		entry.target.classList.add('animate4');
		
		} else {
		entry.target.classList.remove('animate4');
		
		}
 	});
},{ threshold:1 });

let hiddenAnim1 = document.getElementById('hidden1');
observer1.observe(hiddenAnim1)

let hiddenAnim2=document.getElementById('hidden2');
observer2.observe(hiddenAnim2)

let hiddenAnim3=document.getElementById('hidden3');
observer3.observe(hiddenAnim3)

let hiddenAnim4=document.getElementById('hidden4');
observer4.observe(hiddenAnim4)