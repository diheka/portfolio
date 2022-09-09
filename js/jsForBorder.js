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


// Объявление переменных для range'й
let result = document.getElementById('result')
cssCode.value = `border-radius: 0px 0px 0px 0px`

    // Обработка события изменения Input.range
    for (let item of document.querySelectorAll('.btns input')) {
      item.addEventListener('input', function (e) {
        let top_left_range = document.getElementById('top_left_range').value
        let top_right_range = document.getElementById('top_right_range').value
        let bottom_left_range = document.getElementById('bottom_left_range').value
        let bottom_right_range = document.getElementById('bottom_right_range').value

        let str = ` ${top_left_range}px ${top_right_range}px ${bottom_right_range}px ${bottom_left_range}px`
        result.style.borderRadius = str

        cssCode.value = 'border-radius:' + str
      })
  }