document.addEventListener('mousemove', e => {
  document.documentElement.style.setProperty('--mouse-x', e.clientX / window.innerWidth)
})
