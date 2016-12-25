// Алгоритм определения високосного года
function IsLeapYear(year) {
    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                return true;
            }
            else
                return false;
        }
        else
            return true;
    }
    return false;
}

var x, y;
var startYear = +prompt('Введите начальный год'); // Запрашиваем год и преобразуем в число
var endYear = +prompt('Введите конечный год');

//Определяем, из двух введенных годов максимальный
if(startYear > endYear){
    x = endYear;
    y = startYear;
}
else{
    x = startYear;
    y = endYear;
}

for(x; x <= y; x++){
    if(IsLeapYear(x)){
        console.log(x + '\n');
    }
}


/*
// Вариант программы для определения високосного года с 1900 по 2016
for(x = 1900; x <= 2016; x++){
    if(IsLeapYear(x)){
        console.log(x + '\n');
    }
}
*/
