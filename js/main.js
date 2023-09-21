const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide')
        item.classList.remove('show', 'fade')
    })

    tabs.forEach(item => {
        item.classList.remove("tabheader__item_active")
    })
}

// soni i = 0 / function es6
function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

// function for show tab onclick 
tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, index) => {
            if (target == item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
})


// Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add("show")
        modal.classList.remove("hide")
        // after 
        document.body.style.overflow = "hidden"
        // modal.classList.toggle("show")
    })
})

modalCloseBtn.addEventListener('click', () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    // after 
    document.body.style.overflow = ""
    // modal.classList.toggle("show")
})

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.add("hide")
        modal.classList.remove("show")
        document.body.style.overflow = ""
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
        modal.classList.add("hide")
        modal.classList.remove("show")
        document.body.style.overflow = ""
    }
})