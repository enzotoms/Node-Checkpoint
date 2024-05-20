// NUMBER FOUR

var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);




var generate = require('generate-password');

var passwords = generate.generateMultiple(3, {
	length: 10,
	uppercase: false
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);