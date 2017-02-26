'use strict';

// Создайте иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов):
//
// • базовый конструктор «Транспортное средство» с общими для всех транспортных средств свойствами и методами (на ваше усмотрение)
// • дочерние конструкторы: автомобиль, самолёт, корабль, которые наследуют общие свойства и методы от родительского
// • продемонстрируйте, как дочерние сущности могут переопределять родительские свойства и методы в соответствии со своим собственным поведением

(function (){

	// Базовая функция конструктор
    function Vehicle(distance,speed){
        this.distance = distance; // Расстояние, которое нужно преодолеть
		this.speed = speed; // Средняя скорость
		var self = this;
		this.getTimeWay = function(){ // Время в пути
			return 'Время в пути = ' + self.distance / self.speed + ' ч.';
		}
    }
    function Car(distance,speed){
		// Обращаемся к базовой функции для наследования свойств и методов
		Vehicle.apply(this, arguments);
		// Добавляем собственный метод для Car(), который позволяет изменить значение свойства из метода базовой функции
		// и вызываем метод базовой функции повторно с учетом внесенных изменений
		this.changeSpeed = function(speed){
			this.speed = speed;
			return this.getTimeWay();
		}
    }
    // function Plane(distance,speed){
	// 	Vehicle.apply(this, arguments);
    // }
    // function Ship(distance,speed){
	// 	Vehicle.apply(this, arguments);
    // }

	// var button = document.getElementsByClassName('vehicle');
    // button.onclick = function(){
	// 	for (var i = 0; i < this.length; i++){
    //         var attr = this.getAttribute('id');
    //         start(this.attr);
    //     }
	// 	return false;
    // };

	return window.start = function(vehicle){

		if(vehicle == 'Машина'){
			console.log(vehicle);
		}else if(vehicle == 'Самолет'){
			console.log(vehicle);
		}else if(vehicle == 'Корабль'){
			console.log(vehicle);
		}

		var distance = prompt('Введите расстояние в км до цели');
		var speed = prompt('Введите среднюю скорость для ' + vehicle + '.');
		var car = new Car(distance, speed);
		alert(car.getTimeWay());
		var changeSpeedCar = confirm('Хотите изменить скорость и пересчитать время?');
		if(changeSpeedCar){
			var speed = prompt('Введите среднюю скорость для ' + vehicle + '.');
			alert(car.changeSpeed(speed));
		}
	}


})();
