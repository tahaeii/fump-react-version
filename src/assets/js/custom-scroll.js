document.addEventListener('DOMContentLoaded', function () {
  const teamWrapper = document.querySelector('.team-wrapper')
  const dots = document.querySelectorAll('.dot')
  const upButton = document.getElementById('scroll-up')
  const downButton = document.getElementById('scroll-down')

  let currentIndex = 0
  const sections = document.querySelectorAll('.team-grid').length
  const sectionHeight = 180

  function updateScroll () {
    teamWrapper.style.transform = `translateY(-${
      currentIndex * sectionHeight
    }px)`
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex)
    })
  }

  upButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--
      updateScroll()
    }
  })

  downButton.addEventListener('click', function () {
    if (currentIndex < sections - 1) {
      currentIndex++
      updateScroll()
    }
  })
})
