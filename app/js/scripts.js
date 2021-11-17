
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const swiper = new Swiper('.main', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.main .swiper-pagination'
    },
    navigation: {
        nextEl: '.main .swiper-button-next',
        prevEl: '.main .swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    // },
});
if (screen.width > 576) {
    const newsSlider = new Swiper('.news-slider', {

        pagination: {
            el: '.news .swiper-pagination',
            thousandSeparator: '',
            decimalPoint: '.'
        },
        navigation: {
            nextEl: '.news .swiper-button-next',
            prevEl: '.news .swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            1258: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,

            },
            // when window width is >= 640px
            576: {
                slidesPerView: 1,

            },
            // 375: {
            //     newsSlider.destroy(true, true),
            // }
        }
    });
}

const showInfoSlider = new Swiper('.show-info__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.show-info .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.show-info .swiper-button-next',
        prevEl: '.show-info .swiper-button-prev',
    },
});

const tendersFirstSlider = new Swiper('.tenders__first-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    effect: 'fade',
    calculateHeight: true,
    fadeEffect: {
        crossFade: true
    },
    observer: true,
    observeParents: true,
    pagination: {
        el: '.for-first .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.for-first .swiper-button-next',
        prevEl: '.for-first .swiper-button-prev',
    },
});


document.querySelectorAll('.swiper-wrapper .show-btn').forEach(item => {
    item.addEventListener('click', function () {
        let count = 0;
        let thisHeight = parseInt(this.closest('.swiper-wrapper').style.height),
            thisTextHeight = this.closest('.tenders-block').querySelector('.tenders-block__hide').scrollHeight;

        if (!this.classList.contains('active')) {
            this.closest('.swiper-wrapper').style.height = thisHeight + thisTextHeight + 'px';
            count = 1;
        } else {
            this.closest('.swiper-wrapper').style.height = thisHeight - thisTextHeight + 'px';
            count = 0;
        }

    });
});


const tendersSecondSlider = new Swiper('.tenders__second-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    observer: true,
    observeParents: true,
    pagination: {
        el: '.for-second .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.for-second .swiper-button-next',
        prevEl: '.for-second .swiper-button-prev',
    },
});

const aplicationFirstSlider = new Swiper('.aplications__first-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    observer: true,
    observeParents: true,
    allowTouchMove: false,
    pagination: {
        el: '.aplications .for-first .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.aplications .for-first .swiper-button-next',
        prevEl: '.aplications .for-first .swiper-button-prev',
    },
});

const aplicationSecondSlider = new Swiper('.aplications__second-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    observer: true,
    observeParents: true,
    pagination: {
        el: '.aplications .for-second .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.aplications .for-second .swiper-button-next',
        prevEl: '.aplications .for-second .swiper-button-prev',
    },
});



const allSliderBtn = document.querySelectorAll('.slider-nav');


document.querySelectorAll('.year__item').forEach((item, i) => {
    item.addEventListener('click', () => {
        allSliderBtn.forEach(item => {
            item.classList.remove('active');
        });
        allSliderBtn[i].classList.add('active');
    });
});

const allSliderButton = document.querySelectorAll('.slider-nav a');

allSliderButton.forEach(item => {

    item.addEventListener('click', () => {
        document.querySelectorAll('.swiper-wrapper').forEach(item => {
            item.classList.remove('auto-height');
        });

    });
});



//MEDIA-SLIDERS
var mediaLitSlider = new Swiper('.media-page__lit-slider', {
    spaceBetween: 24,
    freeMode: true,
    loopedSlides: 2, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesPerView: 3,
    loop: true,
    direction: 'vertical',
    pagination: {
        el: '.media-page .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.media-page .swiper-button-next',
        prevEl: '.media-page .swiper-button-prev',
    },

});

var mediaBigSlider = new Swiper('.media-page__big-slider', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 2, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: mediaLitSlider,
    },
});



// ПЕРЕКЛЮЧЕНИЕ МЕЖДУ СЛАЙДЕРОМ И ГАЛЕРЕЙ
document.querySelectorAll('.media-page__button').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.media-page__sliders').classList.toggle('active');
        document.querySelector('.media-page__gallery-wrap').classList.toggle('active');
    });
});


const mainInfo = document.querySelectorAll('.main__info');

if (mainInfo) {

    swiper.on('slideChange', function () {
        mainInfo.forEach((item, index) => {
            if (index === swiper.realIndex) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
        document.querySelectorAll('.main .numscroller').forEach(item => {
            item.classList.remove('isShown');
        });
    });
}


//MENU

let dropLinks = document.querySelectorAll('.sub-menu__link._drop'),
    headerMenu = document.querySelector('.header-menu'),
    dropMenuTitle = document.querySelectorAll('.drop-menu__title'),
    dropMenu = document.querySelector('.drop-menu');


if (screen.width < 768) {
    dropLinks.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            headerMenu.classList.add('transformation');
            this.nextElementSibling.classList.add('_active');
        });
    });
    dropMenuTitle.forEach(item => {
        item.addEventListener('click', function (e) {
            headerMenu.classList.remove('transformation');
            this.parentElement.classList.remove('_active');

        });
    });
}

//burger
function burger(burgerclass, menuClass) {
    const icon = document.querySelector(burgerclass),
        menu = document.querySelector(menuClass),
        logoIcon = document.querySelector('.logo-icon'),
        lok = document.querySelector('.lok'),
        langs = document.querySelector('.header__langs.mob');

    icon.addEventListener('click', function () {
        this.classList.toggle('_active');
        menu.classList.toggle('_active');
        langs.classList.toggle('_active');
        logoIcon.classList.toggle('_change-col');
        document.body.classList.toggle('_lock');
        lok.classList.toggle('hide');
        headerMenu.classList.remove('transformation');

    });
}

burger('.menu-icon', '.header-menu');


//Карта на слайдах

const showMapBtn = document.querySelector('.lok');


if (showMapBtn) {
    const showMapBtnText = showMapBtn.querySelector('.lok__text'),
        sliderMap = document.querySelector('.page-map'),
        mapAdress = document.querySelector('.page-map__adress');


    showMapBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        sliderMap.classList.toggle('active');
        mapAdress.classList.toggle('active');

        if (this.classList.contains('active')) {
            showMapBtnText.textContent = "Свернуть";

        } else {
            showMapBtnText.textContent = "Расположение";

        }

    });

}


//FIXED PHOTO
const fixPhoto = document.querySelector('.history__photo');

if (fixPhoto) {
    const historyContent = document.querySelector('.history__content'),
        footer = document.querySelector('footer'),
        list = document.querySelector('.history__list'),
        contentOffsetTop = historyContent.offsetTop;

    window.addEventListener('scroll', function () {
        let scrollDistance = window.scrollY;

        if (scrollDistance > contentOffsetTop &&
            (scrollDistance + screen.height) < (footer.offsetTop)) {
            fixPhoto.classList.add('fixed');
            list.classList.add('marg');
            fixPhoto.classList.remove('bottom');
        } else if ((scrollDistance + screen.height) > (footer.offsetTop)) {
            fixPhoto.classList.remove('fixed');
            // list.classList.remove('marg');
            fixPhoto.classList.add('bottom');
        } else {
            fixPhoto.classList.remove('fixed');
            list.classList.remove('marg');
            fixPhoto.classList.remove('bottom');
        }

    });
}

//show info

const showBtn = document.querySelectorAll('.work-card');

showBtn.forEach(btn => {
    btn.addEventListener('click', function () {

        const wrap = this.querySelector('.work-card__wrap'),
            showText = this.querySelector('.work-card__show-info'),
            btn = this.querySelector('.show-btn');
        function del(hide) {
            const all = document.querySelectorAll(hide);

            all.forEach(item => {
                item.classList.remove('active');
                item.closest('.work-card').querySelector('.show-btn__text').textContent = "Раскрыть";
            });
        }
        function show(el) {
            const all = document.querySelectorAll(el);
            all.forEach(item => {
                item.classList.add('active');
            });
        }
        if (wrap.classList.contains('active')) {
            del('.work-card__show-info');
            del('.show-btn');
            show('.work-card__wrap');
            wrap.classList.remove('active');
            showText.classList.add('active');
            btn.classList.add('active');
            btn.querySelector('.show-btn__text').textContent = 'Скрыть';
        } else {
            wrap.classList.add('active');
            showText.classList.remove('active');
            btn.classList.remove('active');
            btn.querySelector('.show-btn__text').textContent = 'Раскрыть';
        }
    });
});

//show map
let investBtn = document.querySelectorAll('.invest .show-btn');
function delClass(elem) {
    const allBtn = document.querySelectorAll(elem);
    allBtn.forEach((item) => {
        item.classList.remove('active');
        item.closest('.invest-item').querySelectorAll('.show-btn__text').forEach(elem => {
            elem.textContent = "Раскрыть";
        });
        item.closest('.invest-item').querySelectorAll('.invest-item__info').forEach(elem => {
            elem.classList.remove('active');
        });
        item.closest('.invest-item').querySelectorAll('.invest-item__info').forEach(elem => {
            elem.style.height = '0px';
        });
        item.closest('.invest-item').querySelectorAll('.invest-item__map').forEach(elem => {
            elem.classList.remove('active');
        });
    });
}


investBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        const thisInvestItem = this.closest('.invest-item'),
            info = thisInvestItem.querySelector('.invest-item__info'),
            map = thisInvestItem.querySelectorAll('.invest-item__map');

        if (!this.classList.contains('active')) {
            delClass('.invest .show-btn');
            this.classList.add('active');
            this.querySelector('.show-btn__text').textContent = "Свернуть";
            info.classList.add('active');

            map.forEach(map => {
                map.classList.add('active');
            });
            info.style.height = info.scrollHeight + 'px';

        } else {
            this.classList.remove('active');
            this.querySelector('.show-btn__text').textContent = "Раскрыть";
            info.classList.remove('active');
            map.forEach(map => {
                map.classList.remove('active');
            });
            info.style.height = '0px';
        }

    });
});

//selects

const allInp = document.querySelectorAll('.tenders-search__input');
allInp.forEach((item, i) => {
    item.addEventListener('click', function (e) {
        const index = i;
        allInp.forEach((item, i) => {
            if (i != index) {
                item.classList.remove('active');
            }
        });
        if (e.target.classList.contains('tenders-search__arrow')) {
            this.classList.toggle('active');

        }
        else if (e.target.classList.contains('tenders-search__list-item')) {
            this.querySelector('input').value = e.target.textContent;
            this.querySelector('input').classList.add('active');
            this.classList.remove('active');
        }
    });

});


const tendersListTitle = document.querySelectorAll('.tenders-search__list-title');

tendersListTitle.forEach(item => {
    item.addEventListener('click', function () {
        item.closest('.tenders-search__input').classList.remove('.active');
    });
});
//Accordeon
const spollerTitle = document.querySelectorAll('.tenders-block__wrap .show-btn');

const spollers = function (elem, bool = true) {
    let accordeon = bool;

    elem.forEach(item => {
        item.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.parentElement.querySelector('.tenders-block__info').classList.remove('active');
                this.closest('.tenders-block').querySelector('.tenders-block__hide').classList.remove('active');
                this.closest('.tenders-block').querySelector('.tenders-block__hide').style.height = '0px';

            } else {
                if (bool) {
                    elem.forEach(item => {
                        item.classList.remove('active');
                        item.parentElement.querySelector('.tenders-block__info').classList.remove('active');
                        item.closest('.tenders-block').querySelector('.tenders-block__hide').style.height = '0px';
                        item.closest('.tenders-block').querySelector('.tenders-block__hide').classList.remove('active');
                    });
                }

                this.classList.add('active');
                this.parentElement.querySelector('.tenders-block__info').classList.add('active');
                this.closest('.tenders-block').querySelector('.tenders-block__hide').classList.add('active');
                this.closest('.tenders-block').querySelector('.tenders-block__hide').style.height = this.closest('.tenders-block').querySelector('.tenders-block__hide').scrollHeight + 'px';
            }
        });
    });
};

spollers(spollerTitle);


// NEWS-SPOLLERS
function newsSpoller() {
    const allShowBtn = document.querySelectorAll('.news-page .show-btn');

    allShowBtn.forEach(item => {
        item.addEventListener('click', function () {
            const thisHideText = this.closest('.news-page__item').querySelector('.news-page__hide-text');
            if (this.classList.contains('active')) {
                thisHideText.style.height = "0px";
                this.classList.remove('active');
                thisHideText.classList.remove('active');
                this.querySelector('.show-btn__text').textContent = "Раскрыть";
            } else {
                document.querySelectorAll('.show-btn').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.show-btn__text').textContent = "Раскрыть";
                });
                document.querySelectorAll('.news-page__hide-text').forEach(item => {
                    item.style.height = "0px";
                });
                thisHideText.style.height = thisHideText.scrollHeight + 'px';
                thisHideText.classList.add('active');
                this.classList.add('active');
                this.querySelector('.show-btn__text').textContent = "Свернуть";
            }
        });
    });
}

newsSpoller();
//NEWS OPEN

const allNewsButton = document.querySelectorAll('.news__card-btn'),
    allNewsCard = document.querySelectorAll('.news-page__item');


allNewsButton.forEach(item => {
    item.addEventListener('click', function (e) {
        localStorage.setItem('news', this.getAttribute('data-news'));
    });
});

allNewsCard.forEach(card => {
    let attr = card.getAttribute('data-news');
    if (attr == localStorage.getItem('news') && attr) {
        card.querySelector('.news-page__hide-text').classList.add('active');
        card.querySelector('.news-page__hide-text').style.height = card.querySelector('.news-page__hide-text').scrollHeight + 'px';
        card.querySelector('.news-page .show-btn').classList.add('active');
        card.querySelector('.show-btn__text').textContent = "Свернуть";
        localStorage.clear();
    }
});


//АКТИВНЫЕ КЛАССЫ ДЛЯ ГРАФИКОВ
const allgraphs =
    document.querySelectorAll('.donut-segment');

allgraphs.forEach(item => {
    item.classList.add('active');
});


document.querySelectorAll('.indicators__tabs-row-item').forEach(item => {
    item.addEventListener('click', () => {

        allgraphs.forEach(item => {
            item.classList.remove('active');
        });
        setTimeout(function () {
            allgraphs.forEach(item => {
                item.classList.add('active');
            });
        }, 100);
    });
});

// ПОКАЗАТЬ ИКОНКИ СОЦ-СЕТЕЙ
const shareBtn = document.querySelectorAll('.share-btn');

shareBtn.forEach(item => {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.nextElementSibling.style.width = '0px';
            this.querySelector('.share-btn__text').textContent = "Поделиться";
            this.querySelector('.share-btn__icon').style.width = "48px";
            this.classList.remove('active');
        } else {
            this.nextElementSibling.style.width = '240px';
            this.querySelector('.share-btn__text').textContent = "Скрыть";
            this.querySelector('.share-btn__icon').style.width = "0px";
            this.classList.add('active');
        }


    });
});

//ФОРМА ПОДПИСКИ

const newsMessBtn = document.querySelector('.news-page__mess'),
    newsForm = document.querySelector('.news-form'),
    newsFormClose = document.querySelector('.news-form__close');

if (newsMessBtn) {
    newsMessBtn.addEventListener('click', () => {
        newsForm.classList.add('active');
    });
    newsFormClose.addEventListener('click', (e) => {
        e.preventDefault();
        newsForm.classList.remove('active');
    });
}


const mobTab = document.querySelectorAll('.tabs__row-item');

if (window.screen.width < 576) {
    mobTab.forEach(item => {
        item.addEventListener('click', function () {
            mobTab.forEach(tab => {
                tab.style.display = 'block';

            });
            this.style.display = 'none';
        });
    });
}

// fixed headder and tabs-title

const header = document.querySelector('.header'),
    mobTitle = document.querySelector('.tabs__content');
const mapTitle = document.querySelector('.map .tabs__mob-title-wrap');
if (mobTitle) {
    window.addEventListener('scroll', function (e) {
        let scrollTop = window.scrollY;
        if (scrollTop > 1) {
            if (window.screen.width < 576) {
                header.classList.add('fix');
            }
        } else {
            header.classList.remove('fix');
        }
        if (scrollTop > (mobTitle.offsetTop + 50)) {
            mobTitle.querySelector('.tabs__content-block.active .tabs__mob-title-wrap').classList.add('fix-title');
            header.classList.add('trans');
        } else {
            mobTitle.querySelector('.tabs__content-block.active .tabs__mob-title-wrap').classList.remove('fix-title');
            header.classList.remove('trans');
        }

    });
} else if (mapTitle) {
    window.addEventListener('scroll', function (e) {
        let scrollTop = window.scrollY;
        if (scrollTop > (mapTitle.parentElement.offsetTop + 50)) {
            mapTitle.classList.add('fix-title');
        } else {
            mapTitle.classList.remove('fix-title');
        }
    });
}

//fix title for map


// tenders settings
const tendSet = document.querySelector('.tenders__settings'),
    tendMobSearchBack = document.querySelector('.mob-search__back'),
    tendContWrap = document.querySelector('.tenders__content-wrap'),
    tendMobSearch = document.querySelector('.mob-search');
if (tendSet) {
    tendSet.addEventListener('click', function () {
        tendContWrap.classList.toggle('active');
        tendMobSearch.classList.toggle('active');
    });
    tendMobSearchBack.addEventListener('click', function () {
        tendContWrap.classList.toggle('active');
        tendMobSearch.classList.toggle('active');
    });
}
// ПОКАЗАТЬ БОЛЬШЕ ФОТО

const morePhotoBtn = document.querySelector('.media-page__gallery-more');
if (morePhotoBtn) {
    morePhotoBtn.addEventListener('click', function () {
        const all = document.querySelectorAll('.media-page__gallery-photo'),
            allActive = document.querySelectorAll('.media-page__gallery-photo.active');
        all.forEach((item, i) => {

            if (i <= allActive.length + 8) {
                item.classList.add('active');
            }
        });
    });
}

//КАРТА
if (document.querySelector('.map')) {
    $('img[usemap]').rwdImageMaps();
    $('#mp1').click(function () {
        $('.nutep_map_block').addClass('opened');
    });
    $('.nutep_loc_blocks').hover(function () {
        $(this).addClass('opened');
    }, function () {
        $(this).removeClass('opened');
    });
    $('.nutep_map_block .button_back').click(function () {
        $('.nutep_map_block').removeClass('opened');
    });
    setTimeout(function () {
        var array = $('#mp2').find('area').attr('coords').split(',');
        $('.nutep_map_text').css('width', parseInt(array[0]));
        $('.nutep_map_text').css('top', parseInt(array[1]) - 70);
    }, 500);

    $('.nutep_main_map_mobile').click(function () {
        $('.nutep_map_block_mobile').addClass('opened');
    });
    $('.nutep_map_block_mobile .button_back').click(function () {
        $('.nutep_map_block_mobile').removeClass('opened');
    });
    setTimeout(function () {
        var array1 = $('#mp3').find('area').attr('coords').split(',');
        $('.map_text_block_mobile').css('margin-left', parseInt(array1[0]));
        $('.map_text_block_mobile').css('top', parseInt(array1[1]));
        $('.map_text_block_mobile').css('width', ($(window).width() - parseInt(array1[0]) + 150));
    }, 500);
}

