//console.log('salut les gars');
var maVariable = 2;
//console.log(maVariable);
maVariable += 3;
//console.log(maVariable);

//Mon commentaire de ligne

/*
	Commentaire de bloc
*/

var maPremiereVariable = 'string';
var resultat = '';
if (maPremiereVariable == true) {

	resultat ='c\'est bon';

} else if (maPremiereVariable == false) {

	resultat ='c\'est pas bon';

} else {

	resultat ='gros rattage';
}

switch (resultat) {

	case 'c\'est bon': console.log('good'); break;
	case 'c\'est pas bon': console.log('bad'); break;
	case 'gros rattage': console.log('dumb'); break;
	default: console.log('défaut'); break;
}

var array = ['test', 'toto', 'tata', 'titi'];
//console.log(array[1]);

for (var i = 0; i < array.length; i++) {

	//console.log(array[i]);
}

var cnt = 0;
while (array.length > cnt) {

	console.log(cnt);
	cnt++;
}

