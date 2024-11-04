/**
 * Разработать типизированную систему управления автомобилем: главный интерфейс Car и вспомогательные интерфейсы для различных подсистем.
 * Реализовать функции для вывода основной информации об авто, о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.
 */
var langMap = {
    mileage: 'Пробег, л',
    year: 'Год',
    exteriorColor: 'Цвет',
    interiorColor: 'Цвет салона',
    volume: 'Объём бака, л',
};
var CarInfo = /** @class */ (function () {
    function CarInfo(car) {
        this.car = car;
        this.engine = {};
        this.tank = 0;
    }
    CarInfo.prototype.getInfo = function () {
        var _this = this;
        return Object.keys(this.car)
            .map(function (el) {
            return "".concat(langMap[el], ": ").concat(_this.car[el]);
        })
            .join('\n');
    };
    CarInfo.prototype.getEngineInfo = function () {
        return "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C: ".concat(this.engine.on ? 'Включен' : 'Выключен');
    };
    CarInfo.prototype.startEngine = function () {
        this.engine.on = true;
    };
    CarInfo.prototype.stopEngine = function () {
        this.engine.on = false;
    };
    CarInfo.prototype.fillTank = function (val) {
        // Узнаем не слишком ли много мы заливаем топлива
        var fuel = this.car.volume - this.tank - val;
        if (fuel < 0) {
            console.log("\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u0442\u043E\u043F\u043B\u0438\u0432\u0430, \u043F\u0435\u0440\u0435\u0431\u043E\u0440 \u043D\u0430 ".concat(Math.abs(fuel), " \u043B"));
        }
        else {
            this.tank = this.tank + val;
            console.log("\u041C\u0430\u0448\u0438\u043D\u0430 \u0437\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430, \u0435\u0449\u0435 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u043B\u0438\u0442\u044C ".concat(this.car.volume - this.tank));
        }
    };
    CarInfo.prototype.getTankInfo = function () {
        return "\u0412 \u0431\u0430\u043A\u0435 ".concat(this.tank, " \u043B, \u0438\u0437 ").concat(this.car.volume);
    };
    return CarInfo;
}());
// Объект с параметрами машины
var car = {
    mileage: 10000,
    year: 2022,
    exteriorColor: 'red',
    interiorColor: 'white',
    volume: 90,
};
var car1 = new CarInfo(car);
var infoCar1 = car1.getInfo();
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
console.log(car1.getTankInfo());
console.log('Заправим машину на 30 л');
car1.fillTank(30);
console.log(car1.getTankInfo());
console.log('Заправим машину еще на 100 л');
car1.fillTank(100);
console.log(car1.getTankInfo());
console.log('Заправим машину, тогда на 42 л');
car1.fillTank(42);
console.log(car1.getTankInfo());
