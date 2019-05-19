document.querySelector('#load').addEventListener('click', load)

async function load(){
  const url = 'https://jsonplaceholder.typicode.com/users'

  // console.log('Loading started');
  // fetch(url)
  //   .then(function(response){
  //     // console.log(response)
  //     return response.json()
  //   })
  //   .then(function(data){
  //     const ul = document.querySelector('#list')
  //     const html = data.map(function(item){
  //       return `<li>${item.id}. ${item.name} (${item.email})</li>`
  //     })
  //     // html
  //     ul.insertAdjacentHTML('afterbegin', html.join(' '))
  //     // console.log(data)
  //   })

  const response = await fetch(url)
  const data = await response.json()

  const ul = document.querySelector('#list')
  const html = data.map(function(item){
    return `<li>${item.id}. ${item.name} (${item.email})</li>`
  })
  ul.insertAdjacentHTML('afterbegin', html.join(' '))

}