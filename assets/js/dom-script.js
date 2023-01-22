// step: 1
document.getElementById('btn-submit').addEventListener('click', function () {
  //step: 4 get email
  const emailField = document.getElementById('user-email')
  const email = emailField.value
  //step: get password
  const passwordField = document.getElementById('user-password')
  const password = passwordField.value

  //step: 4 verify email and password
  if ((email === 'rakibul9bd@gmail.com') && (password === 'secret')) {
    console.log('valid user');
    window.location.href = 'index.html'
  }
  else {
    alert('invalid user')
  }
})

