(function () {
  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('email')
  } else {
    location.href = 'auth.html'
  }

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })
})()
