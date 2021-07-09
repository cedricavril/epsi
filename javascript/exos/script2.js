var x = '*';
for (var i = 0; i < 7; i++) {
	//console.log(x);
	x += '*';
}

var x = '*';
while (x.length < 8) {
	//console.log(x);
	x += '*';
}

var para = document.querySelector('p');

console.log(para.textContent);
//para.textContent = 'Changement de contenu';
console.log(para.innerHTML);

//replacePara();

function replacePara() {

	para.innerHTML = 'Changement de <b>HTML</b> dans mon paragraphe';

	var headings = document.querySelectorAll('span');
    // console.log(headings);
    for (var i = 0; i < headings.length; i++) {

        headings[i].innerHTML = 'Changement du span ' + (i + 1);
    }
}

// tapper dans l'input invisible
function getLama(value) {

	if (value == 'lama') {

		console.log('Client de merde !');
	}
	
}



