// Tabs
let tabcontent = document.querySelectorAll(".tabcontent"),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabcontainer = document.querySelector('.tabheader__items');

function hidetabs() {
    tabcontent.forEach(item => {
        item.classList.add("hide")
        item.classList.remove('show', "fade")
    });
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}
function showtabs(i) {
    tabcontent[i].classList.add("show", "fade")
    tabcontent[i].classList.remove("hide")
    tabs[i].classList.add("tabheader__item_active")
}
hidetabs()
showtabs(1)

tabcontainer.addEventListener("click", (e) => {
    let target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
        tabs.forEach((item, index) => {
            if (target === item) {
                hidetabs();
                showtabs(index);
            }
        })
    }
})

// Timer 

const deadline = '2023-10-10'

