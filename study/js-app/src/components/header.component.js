import {Component} from '../core/component'

export class HeaderComponent extends Component{
  constructor(id){
    super(id)
  }

  init(){
    // console.log(this.$el)
    if(localStorage.getItem('visited')){
      this.hide()
    }
    const btn = this.$el.querySelector('.js-header-start')
    btn.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler(){
  // console.log(this.$el)
  localStorage.setItem('visited', JSON.stringify(true))
  this.hide()
}