function signup(){
    return window.location.replace('./signup.html');
}

function login(){
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    check(username.value,password.value)
}

function check(username,password) {
    var user = JSON.parse(localStorage.getItem(username));
    if (username == '') {
        return  alert('silahkan isi username!')
    } else if (user == null) {
        return  alert('username tidak ditemukan!')
    } else if (password == ''){
        return  alert('silahkan isi password!')
    } else if (password != user[1] ){
        document.getElementById('password').value = '';
        return  alert('password salah!')
    } else if (password == user[1]){
        alert('hallo '+ user[0] + ' :D')
        localStorage.setItem('login', user[0]);
        return  window.location.replace('./main.html');
    }
}