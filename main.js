console.log('Задание 1');
var age = 18;
if (age <= 17) console.log('Учеба');
else if (age > 17 && age < 65) console.log('Работа');
else console.log('Пенсия');

console.log('Задание 2');
var workersNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < 9; i++) 
{
	switch(workersNumber[i])
	{
		/* Выдавало в консоль 1 "разработчик" (разница в типах данных), 
		пришлось изменить i+1 на String(i+1), чтобы убрать кавычки и получить 
		полное совпадение с тербованием в задании. */
		case 1: console.log('•', String(i+1), 'разработчик'); break;
		case 2: console.log('•', String(i+1), 'разработчика'); break;
		case 3: console.log('•', String(i+1), 'разработчика'); break;
		case 4: console.log('•', String(i+1), 'разработчика'); break;
		case 5: console.log('•', String(i+1), 'разработчиков'); break;
		case 6: console.log('•', String(i+1), 'разработчиков'); break;
		case 7: console.log('•', String(i+1), 'разработчиков'); break;
		case 8: console.log('•', String(i+1), 'разработчиков'); break;
		case 9: console.log('•', String(i+1), 'разработчиков'); break;
		default: console.log('error');
	}
}