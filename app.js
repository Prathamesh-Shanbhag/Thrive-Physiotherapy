// testing file
// console.log("Hello World");

// set date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())

// nav toggling
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')

// console.log(navBtn);
// console.log(links);

// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
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
