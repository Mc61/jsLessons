function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = [
				'html',
				'css3',
				'WordPress'
			];

		document.writeln("Я владею: " + "</br>");

		for (let i = 0; i < skills.length; i++) {
			document.writeln(skills[i] + "</br>")
		}
	}
	showSkills();

	function checkAge() {
		if (age > 18) {
			alert ("Ты уже большой и можешь стать Вэб-разработчиком!");
		} else {
			alert ("Хоть ты и не такой большой, но ты всеравно можешь стать Вэб-разработчиком!");
		}
	}
	checkAge();

	function calcPow(num) {
		let res = num * num;
		document.write("Квадрат числа " + num + " = " + res);
	}
	calcPow(4);

}
myFirstApp('Тарас', '26');