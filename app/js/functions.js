


function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();



//якоря
const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const menu = document.querySelector('.header-menu'),
            menuIcon = document.querySelector('.menu-icon');

        menu.classList.remove('_active');
        menuIcon.classList.remove('_active');
        document.body.classList.remove('_lock');

        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

//TABS
// активные табы
const subMenuLink = document.querySelectorAll('a[data-tab]');

let tabNum = 0;
// localStorage.setItem('tabNum', 0);
subMenuLink.forEach(item => {
    item.addEventListener('click', function () {
        const thisData = item.getAttribute('data-tab');
        if (thisData) {
            localStorage.setItem('tabNum', thisData);

        } else {
            localStorage.setItem('tabNum', 0);
        }
    });
});

if (localStorage.getItem('tabNum') !== null) {
    tabNum = localStorage.getItem('tabNum');
} else {
    localStorage.setItem('tabNum', 0);
    tabNum = 0;
}

const tabs = (headerSelector, tabSelector, contentSelector, activeClass, startTab = tabNum) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    if (header) {
        function hideTabContent() {
            content.forEach(item => {
                item.classList.remove(activeClass);
            });

            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
        function showTabContent(i = startTab) {
            content[i].classList.add(activeClass);
            tab[i].classList.add(activeClass);
        }
        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);

                    }
                });
            }
        });
    }
};


tabs('.overview__tabs-row', '.overview__tabs-row-item', '.overview__block', 'active');
tabs('.directors__tabs-row', '.directors__tabs-row-item', '.directors__block', 'active');
tabs('.infra__tabs-row', '.infra__tabs-row-item', '.infra__block', 'active');
tabs('.invest__tabs-row', '.invest__tabs-row-item', '.invest__block', 'active');
tabs('.media-page__tabs-row', '.media-page__tabs-row-item', '.media-page__block', 'active');
tabs('.tenders .year', '.year__item', '.tenders-tab', 'active', 0);
tabs('.aplications .year', '.year__item', '.aplications-tab', 'active', 0);
tabs('.indicators__tabs-row', '.indicators__tabs-row-item', '.indicators__block', 'active');
tabs('.news-page .year', '.year__item', '.news-page__block', 'active', 0);


