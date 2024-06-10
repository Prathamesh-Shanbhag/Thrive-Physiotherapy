const svg = document.querySelector('svg.squiggle')
const path = svg.querySelector('path')
const container = document.getElementById('about')
const headerArea = document.getElementById('header')

const scroll = () => {
  // Height of the header
  const headerHeight = headerArea.offsetHeight - 1000

  // Height of the viewport
  const windowHeight = window.innerHeight

  // Height of the container itself
  const containerHeight = container.offsetHeight

  // Calculate how far the user has scrolled from the top of the container
  const containerTop = container.getBoundingClientRect().top + window.scrollY
  const distanceScrolled =
    window.scrollY + windowHeight - (containerTop + headerHeight)

  // Calculate the total scrollable distance within the container
  const totalScrollableDistance = containerHeight
  // Ensure the percentage is between 0 and 1
  const percentage = Math.min(
    Math.max(distanceScrolled / totalScrollableDistance, 0),
    1
  )

  const pathLength = path.getTotalLength()

  // Set the strokeDasharray and strokeDashoffset to draw the SVG line
  path.style.strokeDasharray = `${pathLength}`
  path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`
}

// Initial call to set the SVG line state
scroll()

// Add the scroll event listener
if (screen.width > 768) {
  window.addEventListener('scroll', scroll)
} else {
  svg.classList.add('hidden')
}
