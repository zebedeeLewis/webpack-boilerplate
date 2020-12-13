import './index.scss'
import * as Navbar from "component/Navbar"
import Splide from '@splidejs/splide';



const IMAGE_SLIDER_SELECTOR = '#image-slider'
const TEXT_SLIDER_SELECTOR = '#text-slider'
const LEFT_BUTTON_SELECTOR = '.slider-control__left'
const RIGHT_BUTTON_SELECTOR = '.slider-control__right'



function init_slider
  ( window
  ) {
    const document = window.document


    const rootHtmlElement = document.querySelector(IMAGE_SLIDER_SELECTOR)


    const imageSlider
      = new Splide
          ( IMAGE_SLIDER_SELECTOR
          , { autoplay   : false
            , cover      : true
            , autoWidth  : true
            , autoHeight : true
            , type       : 'loop'
            , arrows     : false
            , pagination : false
            }
          )


    const textSlider =
      new Splide
        ( TEXT_SLIDER_SELECTOR
        , { autoWidth  : true
          , autoplay   : true
          , arrows     : false
          , type       : 'loop'
          , pagination : false
          }
        )


    const leftButton = document.querySelector(LEFT_BUTTON_SELECTOR)
    leftButton.addEventListener
      ( 'click'
      , () => imageSlider.go('<')
      )



    const rightButton = document.querySelector(RIGHT_BUTTON_SELECTOR)
    rightButton.addEventListener
      ( 'click'
      , () => imageSlider.go('>')
      )


    imageSlider
      .sync(textSlider.mount())
      .mount()

    window.slider = imageSlider

  }



function init
  ( window
  ) {
    const document = window.document

    document.addEventListener
      ( 'DOMContentLoaded'
      , () => {
          Navbar.init(window, '#navbar')
          init_slider(window)
        }
      )
  }



init(window)
