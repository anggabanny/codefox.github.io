// TestcaseOn
function checkTestCase(){
    var testcase1 = document.getElementById('testcase1');
    var testcase2 = document.getElementById('testcase2');
    var testcase3 = document.getElementById('testcase3');
    var testcase1fix = testcase1.value.toLowerCase()
    var count1 = false
    if (testcase1fix != 'var fox') {
        document.getElementById('testcase1').style.backgroundColor = 'red';
    } else if (testcase1fix == 'var fox'){
        count1 = true
        document.getElementById('testcase1').style.backgroundColor = 'white';
    }

    var count2 = false
    var testcase2fix = testcase2.value.toLowerCase()
    if (testcase2fix == '"helloworld!"' || testcase2fix == "'helloworld!'" || testcase2fix == '`helloworld!`') {
        count2 = true        
        document.getElementById('testcase2').style.backgroundColor = 'white';
    } else {
        document.getElementById('testcase2').style.backgroundColor = 'red';
    }

    var count3 = false
    var testcase3fix = testcase3.value.toLowerCase()
    if (testcase3fix == 'console.log(fox)') {
        count3 = true   
        document.getElementById('testcase3').style.backgroundColor = 'white';
    } else {
        document.getElementById('testcase3').style.backgroundColor = 'red';
    }
    
    if (count3 == true && count2 == true && count1 == true) {
        document.getElementById('registOn').style.display = 'block'; //RegistOn
        document.getElementById('testcaseHelloWorld').style.display = 'none'; //testcaseoff
        return alert('complete!')
    } else if (count3 == false || count2 == false || count1 == false) {
        return alert('hayoo masih ada yang salah')
    }
}

// registerON
var usernameNew = document.getElementById('usernameNew');
var passwordNew = document.getElementById('passwordNew');
var account ={
    admin : {username: 'admin', password:'admin', rank:'babyfox'}
}
var levels = ['BabyFox', 'KidyFox', 'WarriorFox']

function submit(account){
    check(usernameNew.value, passwordNew.value);
}

function check(username,password){
    if (username == ''){
        document.getElementById('passwordNew').value = '';
        return alert('harap masukkan username')
    }
    var countUsername = 0
    var countPassword = 0
    for(var i = 0 ; i < username.length; i++){
        switch (username[i]) {
            case ' ':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spasi') ;break;}
            case '!':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '@':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '#':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '$':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '%':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '^':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '&':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '*':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '(':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ')':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '_':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '-':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '+':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '=':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '~':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '`':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '{':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '}':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '[':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ']':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '|':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case "'":{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ':':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ';':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case "'":{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '<':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ',':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '>':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '.':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '?':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '/':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            default: countUsername++
        }
    }
    if (countUsername < 5) {
        document.getElementById('passwordNew').value = '';
        return alert('username minimal 8 digit!')
    } else if (password == ''){
        document.getElementById('passwordNew').value = '';
        return alert('harap masukkan password')
    }

    for(var i = 0 ; i < password.length; i++){
        switch (password[i]) {
            case ' ':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spasi') ;break;}
            case '!':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '@':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '#':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '$':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '%':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '^':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '&':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '*':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '(':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ')':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '_':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '-':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '+':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '=':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '~':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '`':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '{':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '}':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '[':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ']':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '|':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case "'":{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ':':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ';':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case "'":{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '<':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case ',':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '>':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '.':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '?':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            case '/':{ document.getElementById('passwordNew').value = ''; return alert('jangan menggunakan spesial karakter') ;break;}
            default: countPassword++
        }
    }
    if (countPassword < 8){
        document.getElementById('passwordNew').value = '';
        return alert('password minimal 8 digit!')
    } else if (password == username) {
        document.getElementById('passwordNew').value = '';
        return alert('password dan username jangan sama')
    }

    check1(account,usernameNew.value, passwordNew.value)
}

function check1(data,usernamethis, passwordthis){
    username1 = usernamethis.toLowerCase()
    var temp = true
    var arr = []
    for(var i in account){
        i = i.toLowerCase()
        if (i == username1) {
            temp = false
            return alert('username sudah digunakan!')
        }
    }
    if (temp == true) {
        data[usernamethis] =  {
            username : usernamethis,
            password : passwordthis
        }
        arr.push(data[usernamethis].username);
        arr.push(data[usernamethis].password)
        arr.push(levels[0])
    }
    localStorage.setItem(usernamethis, JSON.stringify(arr));
    alert('create account succes! thank u');
    return window.location.replace('./index.html');
}

function back(){
    var x = confirm('anda yakin akan kembali?');
    if (x == true) {
        return window.location.replace('./index.html');
    }
}
// Rank
var table = document.getElementById("table1");
var lista = []
var rankList = []
var text = 'login'
List()
function List(){
    var user = JSON.parse(localStorage.getItem(localStorage.getItem(text)));
    var nama = user[0][0]
    var user = user[2]
    if (user == 'BabyFox') {
        rankList.push([nama,3,'BabyFox'])
    } else if (user == 'KidyFox') {
        rankList.push([nama,2,'KidyFox'])
    } else if (user == 'WarriorFox') {
        rankList.push([nama,1,'WarriorFox'])
    }
    sort(rankList)
}

function sort(rankList){
    for(i = 0 ; i < rankList.length; i++){
        for(j = 0 ; j < rankList.length-1; j++){
            if (rankList[j][1] > rankList[j+1][1]) {
                var temp = rankList[j]
                rankList[j] = rankList[j+1]
                rankList[j+1] = temp
            }
        }
    }
    return rankList
}
addTableRow()
function addTableRow(){
    for(var i = 0 ; i < rankList.length; i++){
        var newRow = table.insertRow(table.length)
        // cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(0);
        cell3 = newRow.insertCell(1);

        // cell1.innerHTML = i+1;
        cell2.innerHTML = rankList[i][0];
        cell3.innerHTML = rankList[i][2];
    }
}
var searcha = document.getElementById("inputRank").value;

function search(){
    var user = JSON.parse(localStorage.getItem(localStorage.getItem('login')));
    var searcha = document.getElementById("inputRank").value;
    var usera = JSON.parse(localStorage.getItem(searcha));
    
    if (usera === null){
        console.clear();
        return alert('akun tidak di temukan!')
    }

    if (searcha == '') {
        return alert('tidak boleh kosong')
    } else if (usera[0] == user[0][0]) {
        return alert('ini akun anda')        
    } else {
        return alert('nickname = ' +usera[0]+', Rank = '+usera[2])
    }
}