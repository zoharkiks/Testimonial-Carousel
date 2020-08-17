// DATA ARRAY

const reviews = [{
        name: 'Audrey Williams',
        place: 'Melbourne, Australia',
        img: "./img/img-1.png",
        text: 'Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence.',
    },

    {
        name: 'Mike Lawrence',
        place: 'New York, USA',
        img: "./img/img-2.png",
        text: 'Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an. Change wholly say why eldest period. Are projection put celebrated particular unreserved joy unsatiable its. In then dare good am rose bred or. On am in nearer square wanted.',
    },
    {
        name: 'Shelly Ryan',
        place: 'Toronto, Canada',
        img: "./img/img-3.png",
        text: 'Mr oh winding it enjoyed by between. The servants securing material goodness her. Saw principles themselves ten are possession. So endeavor to continue cheerful doubtful we to. Turned advice the set vanity why mutual.',
    },
    {
        name: 'Ching Wu',
        place: 'Beijing, China',
        img: "./img/img-4.png",
        text: 'Reasonably if conviction on be unsatiable discretion apartments delightful. Are melancholy appearance stimulated occasional entreaties end. Shy ham had esteem happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.',
    },

    {
        name: 'Jimmy Brady',
        place: 'Washington, USA',
        img: "./img/img-5.png",
        text: 'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.',
    },

    {
        name: 'Benjamin Flynn',
        place: 'Ontario, Canada',
        img: "./img/img-6.png",
        text: 'On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. ',
    },
];

// BUTTON SELECTORS

const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

// ELEMENT SELECTORS

const text = document.querySelector('.text');
const name = document.querySelector('.name');
const area = document.querySelector('.location');
const img = document.querySelector('.img');

const nav1 = document.querySelector('.nav-1');
const nav2 = document.querySelector('.nav-2');
const nav3 = document.querySelector('.nav-3');
const nav4 = document.querySelector('.nav-4');
const nav5 = document.querySelector('.nav-5');
const nav6 = document.querySelector('.nav-6');

const navAll = document.querySelectorAll('.nav');




// Initial Value

let currentItem = 0;
let slide;

// Load initial item

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});


// Next button

btnRight.addEventListener('click', function () {

    currentItem++;
    slide = currentItem;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
        slide = 0;
    }

    showPerson(currentItem);
    setActiveClassNxtButton();
    textAnimation();


});


// Previous Button

btnLeft.addEventListener('click', function () {
    currentItem--;
    slide = currentItem;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;

    }

    showPerson(currentItem);
    setActiveClassPrevButton();
    textAnimation();
})



// Func - Set Active Class Next Button
function setActiveClassNxtButton() {

    slide = currentItem;
    if (slide == 0) {

        nav1.classList.add('active');
        nav6.classList.remove('active');
    }

    if (slide == 1) {
        nav1.classList.remove('active');
        nav2.classList.add('active');
    }

    if (slide == 2) {
        nav2.classList.remove('active');
        nav3.classList.add('active');
    }

    if (slide == 3) {
        nav3.classList.remove('active');
        nav4.classList.add('active');
    }

    if (slide == 4) {
        nav4.classList.remove('active');
        nav5.classList.add('active');
    }

    if (slide == 5) {
        nav5.classList.remove('active');
        nav6.classList.add('active');
    }

    TweenLite.from(".active", .5, {opacity:.5, scale:2.5});


}

// Func - Set Active Class Prev Button

function setActiveClassPrevButton() {

    if (slide == 0) {

        nav1.classList.add('active');
        nav2.classList.remove('active');
    }
    if (slide == 1) {
        nav3.classList.remove('active');
        nav2.classList.add('active');
    }
    if (slide == 2) {
        nav4.classList.remove('active');
        nav3.classList.add('active');
    }

    if (slide == 3) {
        nav5.classList.remove('active');
        nav4.classList.add('active');
    }

    if (slide == 4) {
        nav6.classList.remove('active');
        nav5.classList.add('active');
    }

    if (slide == -1) {

        nav1.classList.remove('active');
        nav6.classList.add('active');
    }

    TweenLite.from(".active", .5, {opacity:.5, scale:2.5});
}


// Func - Show person based on item

function showPerson(person) {
    const item = reviews[person];
    text.textContent = item.text;
    name.textContent = item.name;
    area.textContent = item.place;
    img.src = item.img;
}




// Func - Nav Click

navAll.forEach(function (navSelect) {
    navSelect.addEventListener('click', function (e) {
        const classCheck = e.currentTarget.classList;
        slide = currentItem;

        if (classCheck.contains('nav-1')) {
            showPerson(0);
            nav1.classList.add('active');
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav4.classList.remove('active');
            nav5.classList.remove('active');
            nav6.classList.remove('active');


        }
        if (classCheck.contains('nav-2')) {

            showPerson(1);
            nav2.classList.add('active');
            nav1.classList.remove('active');
            nav3.classList.remove('active');
            nav4.classList.remove('active');
            nav5.classList.remove('active');
            nav6.classList.remove('active');

        }

        if (classCheck.contains('nav-3')) {
            showPerson(2);
            nav3.classList.add('active');
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav4.classList.remove('active');
            nav5.classList.remove('active');
            nav6.classList.remove('active');

        }

        if (classCheck.contains('nav-4')) {
            showPerson(3);
            nav4.classList.add('active');
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav5.classList.remove('active');
            nav6.classList.remove('active');

        }

        if (classCheck.contains('nav-5')) {
            showPerson(4);
            nav5.classList.add('active');
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav4.classList.remove('active');
            nav6.classList.remove('active');

        }

        if (classCheck.contains('nav-6')) {
            showPerson(5);
            nav6.classList.add('active');
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav4.classList.remove('active');
            nav5.classList.remove('active');

        }
 TweenLite.from(".active", .5, {opacity:.5, scale:2.5});
    });

});

// Func - Animation

function textAnimation() {
    TweenLite.from(".text-container", 1, {
        opacity: .1,
    });
    TweenLite.from(".image-container", 1, {
        opacity: .1,
    });
}