let slider_container = document.querySelector('.slider-container')

slider_container.innerHTML = `
        <div class="slider-content">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/P8sP6gwYWSI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="slider-options">
            <p class="left-arrow">
                ᐸ
            </p>
            <p class="right-arrow">
                ᐳ
            </p>
        </div>
`

let slid_cont = document.querySelector('.slider-content').querySelector('iframe')

console.log(slid_cont.src);

let all_img = ['P8sP6gwYWSI', 'Ydq6OOoJZIU', 'FtdgQ99Bg08', 'E9hY078iFSA', '']

function slider_img_change(i){
    for (let int = 0; int < all_img.length; int++) {
        const e = all_img[int];
        if (slid_cont.src.includes(e)) {
            if (all_img.indexOf(e)==0 && i==-1) {
                slid_cont.src = `https://www.youtube.com/embed/${all_img[all_img.length-1]}`
                break
            }
            else if (all_img.indexOf(e)==all_img.length-1 && i==1) {
                slid_cont.src = `https://www.youtube.com/embed/${all_img[0]}`
                break
            }
            else if (all_img.indexOf(e)>=0 && all_img.indexOf(e)<=all_img.length-1) {
                slid_cont.src = `https://www.youtube.com/embed/${all_img[all_img.indexOf(e)+i]}`
                break
            }
            
        }
    }
}

let left_slider_but = document.querySelector('.left-arrow')

left_slider_but.addEventListener('click', ()=>{
    animation(-1)
})

let right_slider_but = document.querySelector('.right-arrow')

right_slider_but.addEventListener('click',()=>{
    animation(1)
})

function slider_class_clear(i){
    slid_cont.classList = []
    slid_cont.className = ''
}

function animation(i){
    slider_class_clear()
    slid_cont.classList.add('show_slid_anim')
    setTimeout(()=>{
        slider_img_change(i)
        slider_class_clear()
        slid_cont.classList.add('close_slid_anim')
    }, 500)
}