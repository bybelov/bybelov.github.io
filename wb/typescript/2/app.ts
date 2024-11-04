/**
 * Разработать типизированную систему управления автомобилем: главный интерфейс Car и вспомогательные интерфейсы для различных подсистем.
 * Реализовать функции для вывода основной информации об авто, о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.
 */

interface Car {
	mileage: number; // пробег в км
	year: number; // год выпуска
	exteriorColor: string; // цвет
	interiorColor: string; // цвет салона
	volume: number; // объем бака
}

interface Engine extends Car {
	on: boolean; // Двигатель заведен или нет
}

const langMap: Record<string, string> = {
	mileage: 'Пробег, л',
	year: 'Год',
	exteriorColor: 'Цвет',
	interiorColor: 'Цвет салона',
	volume: 'Объём бака, л',
};

class CarInfo {
	private car: Car;
	private engine: Engine;
    tank: number;

	constructor(car: Car) {
		this.car = car;
        this.engine = {} as Engine;
        this.tank = 0;
	}

	getInfo() {
		return Object.keys(this.car)
			.map((el) => {
                return `${langMap[el]}: ${this.car[el as keyof Car]}`;
			})
			.join('\n');
	}

    getEngineInfo() {
        return `Двигатель: ${this.engine.on ? 'Включен' : 'Выключен'}`;
    }

	startEngine() {
		this.engine.on = true;
	}

	stopEngine() {
		this.engine.on = false;
	}

	fillTank(val: number) {
        // Узнаем не слишком ли много мы заливаем топлива
        const fuel = this.car.volume - this.tank - val;
        if (fuel < 0) {
            console.log(`Слишком много топлива, перебор на ${Math.abs(fuel)} л`)
        } else {
            this.tank = this.tank + val;
            console.log(`Машина заправлена, еще можно долить ${this.car.volume - this.tank} л`);
        }
    }

    getTankInfo() {
        return `В баке ${this.tank} л, из ${this.car.volume}`;
    }
}

// Объект с параметрами машины
const car: Car = {
	mileage: 10000,
	year: 2022,
	exteriorColor: 'red',
	interiorColor: 'white',
	volume: 90,
};

const car1 = new CarInfo(car);
const infoCar1 = car1.getInfo();

console.log('Вывод информации о машине');
console.log(infoCar1);

console.log('Состояние двигателя:');
console.log(car1.getEngineInfo());

console.log('Включаем двигатель');
car1.startEngine();
console.log(car1.getEngineInfo());

console.log('Выключаем двигатель');
car1.stopEngine();
console.log(car1.getEngineInfo());

console.log('Узнаем заправлена ли машина:');
console.log(car1.getTankInfo())

console.log('Заправим машину на 30 л');
car1.fillTank(30);
console.log(car1.getTankInfo());

console.log('Заправим машину еще на 100 л');
car1.fillTank(100);
console.log(car1.getTankInfo());

console.log('Заправим машину, тогда на 42 л');
car1.fillTank(42);
console.log(car1.getTankInfo());