;(function () {
  ;('use strict')

  // ==== Preloader
  window.onload = function () {
    window.setTimeout(fadeout, 500)
  }

  function fadeout() {
    document.querySelector('.preloader').style.opacity = '0'
    document.querySelector('.preloader').style.display = 'none'
  }

  // ======= Sticky
  window.addEventListener('scroll', handleScroll)

  function handleScroll() {
    const header_navbar = document.querySelector('.navbar-area')
    const logo = document.querySelector('.navbar-brand img')

    if (!header_navbar || !logo) return

    const sticky = header_navbar.offsetTop

    if (
      window.scrollY > sticky &&
      !header_navbar.classList.contains('sticky')
    ) {
      header_navbar.classList.add('sticky')
      logo.src = 'assets/images/logo/logo-2.svg'
    } else if (
      window.scrollY <= sticky &&
      header_navbar.classList.contains('sticky')
    ) {
      header_navbar.classList.remove('sticky')
      logo.src = 'assets/images/logo/logo.svg'
    }
  }

  window.onscroll = function () {
    // const header_navbar = document.querySelector('.navbar-area')
    // const sticky = header_navbar.offsetTop
    // const logo = document.querySelector('.navbar-brand img')

    // if (window.scrollY > sticky) {
    //   header_navbar.classList.add('sticky')
    //   logo.src = 'assets/images/logo/logo-2.svg'
    // } else {
    //   header_navbar.classList.remove('sticky')
    //   logo.src = 'assets/images/logo/logo.svg'
    // }

    // show or hide the back-top-top button
    const backToTop = document.querySelector('.back-to-top')
    const callNow = document.querySelector('.call_now')
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = 'flex'
      callNow.style.display = 'flex'
    } else {
      backToTop.style.display = 'none'
      callNow.style.display = 'none'
    }
  }

  // ==== for menu scroll
  const pageLink = document.querySelectorAll('.page-scroll')

  pageLink.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector(elem.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 1 - 60,
      })
    })
  })

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll('.page-scroll')
    const scrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i]
      const val = currLink.getAttribute('href')
      const refElement = document.querySelector(val)
      const scrollTopMinus = scrollPos + 73
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector('.page-scroll').classList.remove('active')
        currLink.classList.add('active')
      } else {
        currLink.classList.remove('active')
      }
    }
  }

  window.document.addEventListener('scroll', onScroll)

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector('.navbar-toggler')
  const navbarCollapse = document.querySelector('.navbar-collapse')

  document.querySelectorAll('.page-scroll').forEach((e) =>
    e.addEventListener('click', () => {
      navbarToggler.classList.remove('active')
      navbarCollapse.classList.remove('show')
    })
  )
  navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle('active')
  })

  // ========= glightbox
  const myGallery = GLightbox({
    href: 'https://youtu.be/QFPXroybyvs',
    type: 'video',
    autoplayVideos: true,
    source: 'youtube', //vimeo, youtube or local
    width: 900,
  })

  //====== counter up
  // const cu = new counterUp({
  //   start: 0,
  //   duration: 2000,
  //   intvalues: true,
  //   interval: 100,
  //   append: 'k',
  // })
  // cu.start()

  // ========= Back to top toggle based on device resolution
  if (screen.width < 768) {
    document
      .getElementById('backtoTop')
      .setAttribute(
        'href',
        'https://thrivephysiotherapycp.clinicmaster.com/book-online/booking-reasons?clinicId=3278&lang=en-CA'
      )
  }

  // ========= Maps Size toggle based on device resolution
  // const mapsMobile = document.getElementsByClassName('maps_mobile')
  // const mapsDesktop = document.getElementsByClassName('maps_desktop')
  // // const marqueeMobile = document.getElementsByClassName('custom-marquee')

  // console.log(marqueeMobile[0].classList)
  // if (screen.width < 768) {
  //   // marqueeMobile[0].classList.remove('hidden')
  //   mapsMobile[0].classList.remove('hidden')
  //   mapsDesktop[0].classList.add('hidden')
  // }

  //=====  WOW active
  new WOW().init()

  //=====  particles
  if (document.getElementById('particles-1'))
    particlesJS('particles-1', {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#fff',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: 'top',
          random: !0,
          straight: !1,
          out_mode: 'out',
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: !1,
            mode: 'bubble',
          },
          onclick: {
            enable: !1,
            mode: 'repulse',
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    })

  if (document.getElementById('particles-2'))
    particlesJS('particles-2', {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#fff',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: 'top',
          random: !0,
          straight: !1,
          out_mode: 'out',
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: !1,
            mode: 'bubble',
          },
          onclick: {
            enable: !1,
            mode: 'repulse',
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    })
})()

// // Added JS

const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear())
//  Change Background every 5 seconds

// Array of image URLs
const images = [
  'assets/images/header/header-hero-1.webp',
  'assets/images/header/header-hero-2.webp',
  'assets/images/header/header-hero-3.webp',
  'assets/images/header/header-hero-4.webp',
  'assets/images/header/header-hero-5.webp',
  'assets/images/header/header-hero-6.webp',
  'assets/images/header/header-hero-7.webp',
]

// Get the element
const headerHero = document.getElementById('home')

// Initialize the index
let currentIndex = 0

// Function to change the background image
const changeBackgroundImage = () => {
  // Fade out the current background image
  headerHero.classList.remove('fade-in')
  headerHero.classList.add('fade-out')

  // Wait for the fade-out effect to complete
  setTimeout(() => {
    // Change the background image
    headerHero.style.backgroundImage = `url(${images[currentIndex]})`

    // Fade in the new background image
    headerHero.classList.remove('fade-out')
    headerHero.classList.add('fade-in')

    // Update the index to the next image
    currentIndex = (currentIndex + 1) % images.length
  }, 2000) // Match the transition duration in CSS
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 7000)

// Initial call to set the first image
changeBackgroundImage()
