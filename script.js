let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let total = document.querySelector('#total');

btn.addEventListener('click', (e) => {
	if(input.value === '') return
	createElements(input.value)
	input.value = ''

});

function createElements(value) {
	console.log(value);

	let li = document.createElement('li');
	let btn = document.createElement('button');
	let check = document.createElement("input");

	li.className = 'li';
	li.textContent = value;

	check.type = "checkbox";
  	check.className = 'check';
  	li.appendChild(check);

  	check.addEventListener("click", (e) => {

  });
	
	btn.className = 'btn';
	btn.textContent = 'delete';
	li.appendChild(btn);

	btn.addEventListener('click', (e) => {
		console.log(li);
		list.removeChild(li);
	})
	

	list.appendChild(li);

	

}