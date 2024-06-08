// console.log("Hello World");

// set date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())
// Conditions Carousel
$('.owl-carousel').owlCarousel({
  autoplay: true,
  center: true,
  loop: true,
  nav: false,
})

// nav toggling
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')
const heroBanner = document.getElementsByClassName('hero-banner')
const showLinks = document.getElementsByClassName('hidelinks_cta')
const teamHero = document.getElementsByClassName('team-hero')
// const wholeBody = document.body

console.log(teamHero)
// console.log(links)
console.log(heroBanner)
// console.log(showLinks)

// add event listener
navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('nav-toggled')
  // wholeBody.classList.toggle('stop-scrolling')
  links.classList.toggle('show-links')
  showLinks[0].classList.toggle('showlinks_cta')
  // showLinks[1].classList.toggle('showlinks_cta')
  teamHero[0].classList.toggle('hide-hero')
})

// // fixed navbar
// const navbar = document.querySelector('.navbar')

// // add event listener
// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > 62) {
//     navbar.classList.add('fixed')
//   } else {
//     navbar.classList.remove('fixed')
//   }
// })

// smooth-scroll
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    // links.classList.remove('show-links')
    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    console.log(element.offsetTop)
    // let position var
    // let position
    // if (navbar.classList.contains('fixed')) {
    //   position = element.offsetTop - 40
    // } else {
    //   position = element.offsetTop - 98
    // }
    // if (window.innerWidth < 992) {
    //   if (navbar.classList.contains('fixed')) {
    //     position = element.offsetTop - 40
    //   } else {
    //     position = element.offsetTop - 396 - 12
    //   }
    // }
    // window scroll to
    window.scrollTo({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth',
    })
  })
})
// const btn = document.querySelectorAll('.scroll-link')

// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   window.scrollTo({
//     top: 400,
//     behavior: 'smooth',
//   })
// })

// BACK to TOP Button

// Get the button:
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// // TEAM SLIDER
// var swiper = new Swiper('.team-swiper', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     200: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     750: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 2.5,
//       spaceBetween: 30,
//     },
//     1100: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
// })
