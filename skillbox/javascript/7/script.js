'use strict';

// Создайте иерархию сущностей (конструкторов, из которых можно создать экземпляры объектов):
//
// • базовый конструктор «Транспортное средство» с общими для всех транспортных средств свойствами и методами (на ваше усмотрение)
// • дочерние конструкторы: автомобиль, самолёт, корабль, которые наследуют общие свойства и методы от родительского
// • продемонстрируйте, как дочерние сущности могут переопределять родительские свойства и методы в соответствии со своим собственным поведением

//(function (){
	
	// Базовая функция конструктор
    function Vehicle(distance,speed){
        this._distance = distance; // Расстояние, которое нужно преодолеть
		this._speed = speed; // Средняя скорость
		var self = this;
		this.getTimeWay = function(){ // Время в пути
			return 'Время в пути = ' + self._distance / self._speed + ' ч.';
		}
    }
    function Car(distance,speed,body){
		// Обращаемся к базовой функции для наследования свойств и методов
		Vehicle.apply(this, arguments);
		// Добавляем свой метод, который позволяет изменить значение свойства из метода базовой
		// функции, и вызываем метод базовой функции повторно с учетом внесенных изменений
		this.changeSpeed = function(speed){
			this._speed = speed;
			return this.getTimeWay();
		}
    }
    function Plane(wingspan,business){
		Vehicle.apply(this, arguments);
        this.wingspan = wingspan; // Размах крыльев
        this.business = business; // Наличие бизнес класса
    }
    function Ship(displacement,team){
		Vehicle.apply(this, arguments);
        this.displacement = displacement; // водоизмещение
        this.team = team; // Экипаж корабля
    }
	
	
	var car = new Car(150, 600);
	var plane = new Plane(850, 600);
	var ship = new Ship(60, 600);
	car.changeSpeed(80);	

//})();
