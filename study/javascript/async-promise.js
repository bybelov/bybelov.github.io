function sleep(ms){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve()
    }, ms)
  })
}

var p1 = sleep(1500).then(function(){
  // console.log('1500');
  return {
    name: 'Promise 1500'
  }
})

var p2 = sleep(3000).then(function(){
  // console.log('3000');
  return {
    name: 'Promise 3000'
  }
})

// // ждет самый долгий промис
// Promise.all([p1, p2]).then(function(data){
//   // console.log('all')
//   console.log('All', data)
// })

// // когда отрабатывает первый промис
// Promise.race([p1, p2]).then(function(data){
//   console.log('race', data)
// })

async function start(){
  // когда отрабатывает первый промис
  var dataRace = await Promise.race([p1, p2])

  // ждет самый долгий промис
  var dataAll = await Promise.all([p1, p2])



  console.log(dataAll)
  console.log(dataRace)
}

start()