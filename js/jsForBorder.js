document.addEventListener('DOMContentLoaded', function (e){
    setTimeout(() => {
        document.querySelector('.work_space').style.opacity = 1
    },200)
})
let header_burger = document.querySelector('.header_burger')
let header_menu = document.querySelector('.header_menu')
let body = document.querySelector('body')

header_burger.onclick = function () {
    header_burger.classList.toggle('active')
    header_menu.classList.toggle('active')
    body.classList.toggle('lock')
}
// let left_border = document.querySelector('.left_border')
// left_border.onclick = function (e) {
//     prompt('OK')
// }
// let result = document.getElementById('result')
// left_border.onmouseover = function (e) {
//     result.style.borderLeft = "3px solid #b3b3b3"
// }
// left_border.onmouseout = function (e) {
//     result.style.borderLeft = ""
// }

let top_left_btn = document.querySelector('.slider_btn_top_left')
let top_right_btn = document.querySelector('.slider_btn_top_right')
let bottom_left_btn = document.querySelector('.slider_btn_bottom_left')
let bottom_right_btn = document.querySelector('.slider_btn_bottom_right')
let result = document.getElementById('result')


    top_left_btn.onmouseover = function () {
      top_left_btn.style.opacity = 1
    }
    top_right_btn.onmouseover = function () {
      top_right_btn.style.opacity = 1
    }
    bottom_left_btn.onmouseover = function () {
      bottom_left_btn.style.opacity = 1
    }
    bottom_right_btn.onmouseover = function () {
      bottom_right_btn.style.opacity = 1
    }

    top_left_btn.onmouseout = function () {
      top_left_btn.style.opacity = 0.3
    }
    top_right_btn.onmouseout = function () {
      top_right_btn.style.opacity = 0.3
    }
    bottom_left_btn.onmouseout = function () {
      bottom_left_btn.style.opacity = 0.3
    }
    bottom_right_btn.onmouseout = function () {
      bottom_right_btn.style.opacity = 0.3
    }

    // обработка событий зажатия мыши / пальца

    // Для верхнего левого угла

    top_left_btn.onmousedown = function (e) {
      e.preventDefault()
      let shiftX = e.clientX - top_left_btn.getBoundingClientRect().left
      let shiftY = e.clientY - top_left_btn.getBoundingClientRect().top

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)

      function onMouseMove (e) {
        let newLeft = e.clientX - shiftX - result.getBoundingClientRect().left
        let newTop = e.clientY - shiftY - result.getBoundingClientRect().top
        if (newLeft < 0) newLeft = 0
        if (newTop < 0) newTop = 0
        if (newLeft != newTop) newTop = newLeft
        if (newLeft > 75) { 
          newLeft = 75
          newTop = 75
        }
        top_left_btn.style.left = newLeft + 'px'
        top_left_btn.style.top = newTop + 'px'
        result.style.borderTopLeftRadius = newLeft + 'px'
      }

      function onMouseUp (e) {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }
    }

    top_left_btn.ontouchstart = function (e) {
        e.preventDefault()
        let shiftX = e.changedTouches[0].clientX - top_left_btn.getBoundingClientRect().left
        let shiftY = e.changedTouches[0].clientY - top_left_btn.getBoundingClientRect().top
  
        document.addEventListener('touchmove', onMouseMove)
        document.addEventListener('touchend', onMouseUp)
  
        function onMouseMove (e) {
          let newLeft = e.changedTouches[0].clientX - shiftX - result.getBoundingClientRect().left
          let newTop = e.changedTouches[0].clientY - shiftY - result.getBoundingClientRect().top
          if (newLeft < 0) newLeft = 0
          if (newTop < 0) newTop = 0
          if (newLeft != newTop) newTop = newLeft
          if (newLeft > 65) { 
            newLeft = 65
            newTop = 65
          }
          top_left_btn.style.left = newLeft + 'px'
          top_left_btn.style.top = newTop + 'px'
          result.style.borderTopLeftRadius = newLeft + 'px'
        }
  
        function onMouseUp (e) {
          document.removeEventListener('touchmove', onMouseMove)
          document.removeEventListener('touchend', onMouseUp)
        }
      }
    
    // Для верхнего правого угла
    top_right_btn.onmousedown = function (e) {
      e.preventDefault()
      let shiftX = e.clientX - top_right_btn.getBoundingClientRect().left
      let shiftY = e.clientY - top_right_btn.getBoundingClientRect().top

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)

      function onMouseMove (e) {
        let newLeft = e.clientX - shiftX - result.getBoundingClientRect().right + 20 
        let newTop = e.clientY - shiftY - result.getBoundingClientRect().top
        if (newLeft > 0) newLeft = 0
        if (newTop < 0) newTop = 0
        if (newLeft != newTop) newTop = newLeft
        if (newLeft < -75) { 
          newLeft = -75
          newTop = -75
        }
        top_right_btn.style.left = newLeft + 'px'
        top_right_btn.style.top = 0 - newTop + 'px'
        result.style.borderTopRightRadius = newLeft * (-1) + 'px'
      }

      function onMouseUp (e) {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }
    }

    top_right_btn.ontouchstart = function (e) {
        e.preventDefault()
        let shiftX = e.changedTouches[0].clientX - top_right_btn.getBoundingClientRect().left
        let shiftY = e.changedTouches[0].clientY - top_right_btn.getBoundingClientRect().top
  
        document.addEventListener('touchmove', onMouseMove)
        document.addEventListener('touchend', onMouseUp)
  
        function onMouseMove (e) {
          let newLeft = e.changedTouches[0].clientX - shiftX - result.getBoundingClientRect().right + 20 
          let newTop = e.changedTouches[0].clientY - shiftY - result.getBoundingClientRect().top
          if (newLeft > 0) newLeft = 0
          if (newTop < 0) newTop = 0
          if (newLeft != newTop) newTop = newLeft
          if (newLeft < -65) { 
            newLeft = -65
            newTop = -65
          }
          top_right_btn.style.left = newLeft + 'px'
          top_right_btn.style.top = 0 - newTop + 'px'
          result.style.borderTopRightRadius = newLeft * (-1) + 'px'
        }
  
        function onMouseUp (e) {
          document.removeEventListener('touchmove', onMouseMove)
          document.removeEventListener('touchend', onMouseUp)
        }
      }
    
    // Для нижнего левого угла
    bottom_left_btn.onmousedown = function (e) {
      e.preventDefault()
      let shiftX = e.clientX - bottom_left_btn.getBoundingClientRect().left
      let shiftY = e.clientY - bottom_left_btn.getBoundingClientRect().top

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)

      function onMouseMove (e) {
        let newLeft = e.clientX - shiftX - result.getBoundingClientRect().left 
        let newTop = e.clientY - shiftY - result.getBoundingClientRect().bottom
        if (newLeft < 0) newLeft = 0
        if (newTop < 0) newTop = 0
        if (newLeft != newTop) newTop = newLeft
        if (newLeft > 75) { 
          newLeft = 75
          newTop = 75
        }
        bottom_left_btn.style.left = newLeft + 'px'
        bottom_left_btn.style.top = 0 - newTop + 'px'
        result.style.borderBottomLeftRadius = newLeft + 'px'
      }

      function onMouseUp (e) {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }
    }

    bottom_left_btn.ontouchstart = function (e) {
        e.preventDefault()
        let shiftX = e.changedTouches[0].clientX - bottom_left_btn.getBoundingClientRect().left
        let shiftY = e.changedTouches[0].clientY - bottom_left_btn.getBoundingClientRect().top
  
        document.addEventListener('touchmove', onMouseMove)
        document.addEventListener('touchend', onMouseUp)
  
        function onMouseMove (e) {
          let newLeft = e.changedTouches[0].clientX - shiftX - result.getBoundingClientRect().left 
          let newTop = e.changedTouches[0].clientY - shiftY - result.getBoundingClientRect().bottom
          if (newLeft < 0) newLeft = 0
          if (newTop < 0) newTop = 0
          if (newLeft != newTop) newTop = newLeft
          if (newLeft > 65) { 
            newLeft = 65
            newTop = 65
          }
          bottom_left_btn.style.left = newLeft + 'px'
          bottom_left_btn.style.top = 0 - newTop + 'px'
          result.style.borderBottomLeftRadius = newLeft + 'px'
        }
  
        function onMouseUp (e) {
          document.removeEventListener('touchmove', onMouseMove)
          document.removeEventListener('touchend', onMouseUp)
        }
      }
    
    // Для нижнего правого угла
    bottom_right_btn.onmousedown = function (e) {
      e.preventDefault()
      let shiftX = e.clientX - bottom_right_btn.getBoundingClientRect().left
      let shiftY = e.clientY - bottom_right_btn.getBoundingClientRect().top

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)

      function onMouseMove (e) {
        let newLeft = e.clientX - shiftX - result.getBoundingClientRect().right + 20 
        let newTop = e.clientY - shiftY - result.getBoundingClientRect().bottom
        if (newLeft > 0) newLeft = 0
        if (newTop > 0) newTop = 0
        if (newLeft != newTop) newTop = newLeft
        if (newLeft < -75) { 
          newLeft = -75
          newTop = -75
        }
        bottom_right_btn.style.left = newLeft + 'px'
        bottom_right_btn.style.top = newTop + 'px'
        result.style.borderBottomRightRadius = newLeft * (-1) + 'px'
      }

      function onMouseUp (e) {
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
      }
    }

    bottom_right_btn.ontouchstart = function (e) {
        e.preventDefault()
        let shiftX = e.changedTouches[0].clientX - bottom_right_btn.getBoundingClientRect().left
        let shiftY = e.changedTouches[0].clientY - bottom_right_btn.getBoundingClientRect().top
  
        document.addEventListener('touchmove', onMouseMove)
        document.addEventListener('touchend', onMouseUp)
  
        function onMouseMove (e) {
          let newLeft = e.changedTouches[0].clientX - shiftX - result.getBoundingClientRect().right + 20 
          let newTop = e.changedTouches[0].clientY - shiftY - result.getBoundingClientRect().bottom
          if (newLeft > 0) newLeft = 0
          if (newTop > 0) newTop = 0
          if (newLeft != newTop) newTop = newLeft
          if (newLeft < -65) { 
            newLeft = -65
            newTop = -65
          }
          bottom_right_btn.style.left = newLeft + 'px'
          bottom_right_btn.style.top = newTop + 'px'
          result.style.borderBottomRightRadius = newLeft * (-1) + 'px'
        }
  
        function onMouseUp (e) {
          document.removeEventListener('touchmove', onMouseMove)
          document.removeEventListener('touchend', onMouseUp)
        }
      }
    
    
    // стандартный обработчик события перетаскивания элемента
    top_right_btn.ondragstart = function () {
      return false
    }
    top_left_btn.ondragstart = function () {
      return false
    }
    bottom_left_btn.ondragstart = function () {
      return false
    }
    bottom_right_btn.ondragstart = function () {
      return false
    }