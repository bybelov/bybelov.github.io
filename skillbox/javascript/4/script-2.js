var users = [];
users = [
    {
        name: 'Игорь',
        login: 'belov',
        password: '123456'
    },
    {
        name: 'Максим',
        login: 'max',
        password: '123'
    },
    {
        name: 'Евгения',
        login: 'nea',
        password: '123'
    },
    {
        name: 'Александр',
        login: 'alex',
        password: 'qwerty'
    },
    {
        name: 'Admin',
        login: 'admin',
        password: 'admin'
    }
]
while(true){
    var auth, password, login;
    if(typeof(auth) == 'undefined'){
        login = prompt('Введите свой Логин');
    }
    if(login === null){
        break;
    }
    else{
        for(var i = 0; i < users.length; i++){
            switch (login){
                case users[i].login :
                    password = prompt('Введите свой Пароль');
                    if(password == users[i].password){
                        alert('Привет, ' + users[i].name + '!');
                        auth = true;
                        break;
                    }
                    else{
                        alert('Пароль не верен. Повторите попытку.');
                        auth = false;
                        break;
                    }
                default:
                    break;
            }
        }
        if(auth === true){
            break;
        }
        else if (auth === false){
            login = prompt('Введите свой Логин');
        }
    }
}
