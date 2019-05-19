// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++){
//   p[i].addEventListener('click', function(event){
//     event.target.style.color = 'blue'
//   })
// }

var wrapper = document.getElementById('wrapper')

wrapper.addEventListener('click', function(event){
  var tagName = event.target.tagName.toLowerCase()
  if(tagName === 'p'){
    event.target.style.color = 'blue'
  }
})