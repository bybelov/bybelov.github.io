import { Component } from "../core/component";
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transoform.service'
import { renderPost } from '../templates/post.template'

export class PostComponent extends Component{
  constructor(id, {loader}){
    super(id)
    this.loader = loader
  }

  init(){
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }
  
  async onShow(){

    this.loader.show()

    const fbData = await apiService.fetchPosts()
    // console.log('fbData ', fbData);
    const posts = TransformService.fbObjectToArray(fbData)
    // console.log('posts ', posts);
    const html = posts.map(post => renderPost(post, {withButton: true}))

    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
  }

  onHide(){
    this.$el.innerHTML = ''
  }
}

function buttonHandler(event){
  // console.log(event)
  const $el = event.target
  const id = $el.dataset.id
  // const title = $el.closest('.panel').querySelector('.panel-title').textContent.trim()
  // console.log(title);

  if(id){
    // console.log(id)
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    // console.log(favorites);
    if(favorites.includes(id)){
      // удалить элменет
      $el.textContent = 'Сохранить'
      $el.classList.add('button-primary')
      $el.classList.remove('button-danger')
      favorites = favorites.filter(fId => fId !== id)
      // favorites = favorites.filter(fTitle => fTitle !== title)
    } else{
      // добавить
      $el.classList.remove('button-primary')
      $el.classList.add('button-danger')
      $el.textContent = 'Удалить'
      favorites.push(id)
      // favorites.push(title)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
  
}