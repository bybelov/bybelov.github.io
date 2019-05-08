const form = document.querySelector('form')
form.addEventListener('submit', event => {


  event.preventDefault()

  const title = form.title.value
  const text = form.text.value
  const description = form.description.value

  // console.log(title, text);
  
  // saveForm({
  //   title: title, 
  //   text: text
  // })
  saveForm({title, text, description})

})

function saveForm(data){

  // деструктуризация
  // const {title, text, description} = data

  const formData = {
    date: new Date().toLocaleDateString(),
    ...data
  }

  console.log('Ford data', formData)
}

// Rest сбор всех параметров
// Spread разворачивать объекты