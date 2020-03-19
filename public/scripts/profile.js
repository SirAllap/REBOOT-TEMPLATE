(function () {
  const api = axios.create({
    baseURL: 'api/',
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

  api
    .get('me', { headers: { token: localStorage.getItem('token') } })
    .then(response => {
      document.getElementById('name').value = response.data.name
      document.getElementById('email').value = response.data.email
      document.getElementById('photo').setAttribute('src', response.data.photoUrl || 'images/user.png')
    })

  var myWidget = cloudinary.createUploadWidget({
    cloudName: '<<<CLOUD NAME FROM CLOUDINARY>>>',
    uploadPreset: '<<<UPLOAD PRESET FROM CLOUDINARY>>>'
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info)
      document.getElementById('photo').setAttribute('src', result.info.url)
      api
        .put('me',
          { photoUrl: result.info.url },
          { headers: { token: localStorage.getItem('token') } }
        ).then(response => {

        })
    }
  }
  )

  document.getElementById('upload_widget').addEventListener('click', function () {
    myWidget.open()
  }, false)
})()
