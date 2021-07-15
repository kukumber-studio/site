let load_div = document.querySelector('.load_div')
setTimeout(()=>{
    load_div.className = 'none'
}, 2000)

let mobile_menu_but = document.querySelector('.mobile_but').querySelector('h2')
let mobile_nav_bar = document.querySelector('.mobile_nav_bar')

mobile_nav_bar.className = 'none'

function menu_class_clear(){
    mobile_menu_but.classList = []
    mobile_menu_but.className = 'mobile_but'
    mobile_nav_bar.classList = []
    mobile_nav_bar.className = 'mobile_nav_bar'
}

function animation_menu(text){
    if (text=='=') {
        menu_class_clear()
        mobile_menu_but.classList.add('show_menu_but')
        mobile_nav_bar.classList.add('mobile_menu_show')
        setTimeout(()=>{
            menu_class_clear()
            text = mobile_menu_but.innerHTML = '×'
            mobile_menu_but.classList.add('close_menu_but')
        }, 500)
    }
    else if (text=='×') {
        menu_class_clear()
        mobile_menu_but.classList.add('show_menu_but')
        mobile_nav_bar.classList.add('mobile_menu_close')
        setTimeout(()=>{
            menu_class_clear()
            mobile_menu_but.innerHTML = '='
            mobile_menu_but.classList.add('close_menu_but')
            mobile_nav_bar.className = 'none'
        }, 500)
    }
} 

mobile_menu_but.addEventListener('click', ()=>{
    animation_menu(mobile_menu_but.innerHTML)
})

let opt_mobile_but = mobile_nav_bar.querySelectorAll('a')

opt_mobile_but.forEach(el => {
    el.addEventListener('click', ()=>{
        animation_menu(mobile_menu_but.innerHTML)
    })
});