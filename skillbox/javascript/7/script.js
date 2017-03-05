(function (){
    'use strict';

	// Базовая функция конструктор
    function Vehicle(distance,speed){
        this.distance = distance; // Расстояние, которое нужно преодолеть
		this.speed = speed; // Средняя скорость
		var self = this;
		this.getTimeWay = function(){ // Время в пути
            if(isNaN(self.distance) || self.distance === null || self.distance == ''){
                return 'Расстояние не задано';
            }
            if(isNaN(self.speed) || self.speed === null || self.speed == ''){
                return 'Скорость не задана';
            }
            var result = Math.round((self.distance / self.speed) * 100) / 100;
			return 'Время в пути = ' + result + ' ч.';
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

    function Plane(distance){
        Vehicle.apply(this, arguments);
        // Устанавливаем своё свойство для конструктора Plane
        this.speed = 850; // Средняя скорость пассажирского самолета
        this.getSpeed = function(){
            alert('Средняя скорость нашего самолета ' + this.speed + ' км в час');
        }
    }

    function Ship(distance,speed){
		Vehicle.apply(this, arguments);
        this.speed = 20; // Средняя скорость пассажирского речного судна
        this.getSpeed = function(){
            alert('Средняя скорость нашего корабля ' + this.speed + ' км в час');
        }
        this.changeDistance = function(distance){
            this.distance = distance;
            return this.getTimeWay();
        }
    }

	return window.start = function(id, vehicle){

		var distance = +prompt('Введите расстояние в км до цели');
        switch (id){
            case 'car':
                var speed = +prompt( vehicle + '. Введите среднюю скорость.');
                var car = new Car(distance, speed);
                alert(car.getTimeWay());
                if(distance != false){ // Если расстояние задано
                    var changeSpeedCar = confirm('Хотите изменить скорость и пересчитать время?');
                    if(changeSpeedCar){
                        var speed = +prompt(vehicle + '. Укажите новую среднюю скорость. Расстояние = ' + distance + ' км');
                        alert(car.changeSpeed(speed));
                    }
                }
                break;
            case 'plane':
                var plane = new Plane(distance);
                plane.getSpeed();
                alert(plane.getTimeWay());
                break;
            case 'ship':
                var ship = new Ship(distance, speed);
                ship.getSpeed();
                alert(ship.getTimeWay());
                if(distance != false){ // Если расстояние задано
                    var changeDistance = confirm('Хотите изменить расстояние и пересчитать время?');
                    if(changeDistance){
                        var distance = +prompt(vehicle + '. Укажите новое расстояние.');
                        alert(ship.changeDistance(distance));
                    }
                }
                break;
        }

	}

})();
