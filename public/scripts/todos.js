(function () {
  const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000
  })

  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('email')
  } else {
    location.href = 'auth.html'
  }

  document.getElementById('logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })

  document.getElementById('whoami').addEventListener('click', () => {
    api.get('whoami', { headers: { token: localStorage.getItem('token') } }).then(response => {
      alert(response.data)
    })
  })
})()
