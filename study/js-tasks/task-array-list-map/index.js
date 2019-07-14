const obj = [
  {
    name: 'Igor',
    year: 1985
  },
  {
    name: 'Anna',
    year: 1990
  },
  {
    name: 'Anton',
    year: 1985
  }
]

const app = document.getElementById('app');
const list = document.createElement('ul');

app.appendChild(list);

let array = obj.map((item)=>{
  const name = item.name;
  const year = item.year;

  const listItem = document.createElement('li');
  const bold = document.createElement('b');

  listItem.innerHTML = name + ': ';
  bold.innerHTML = year + ' (year of birth)';

  listItem.appendChild(bold);
  list.appendChild(listItem);

});