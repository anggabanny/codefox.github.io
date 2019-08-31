document.getElementById('nameUser').innerHTML = localStorage.getItem('login');
var levels = ['BabyFox', 'KidyFox', 'WarriorFox']
var user = JSON.parse(localStorage.getItem(localStorage.getItem('login')));
document.getElementById('rankingUser').innerHTML = user[2] ;
document.getElementById('levelz').innerHTML = user[2] ;

function quit() {
    var x = confirm('yakin keluar?');
    if (x == true) {
        localStorage.removeItem('login')
        return window.location.replace('./index.html');
    }
}

function start() {
    var x = confirm('Bermain?');
    if (x == true) {
        return window.location.replace('./games.html');
    }
}
function soal() {
    
}
// hiyahiya
if (user[2] ==  levels[0]) {
    // games
    // TIMES
    var cekSoal = 'Soal1';
    document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
    startTimer();
    function startTimer() {
        var presentTime = document.getElementById('waktu3m').innerHTML;
        var timeArray = presentTime.split(/[:&s]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s >= 60) {
            m = Math.floor((s / 60)%60)
            s = s % 60
        } else if (s == 59 && m > 0) {
            m = m - 1
        }

        if(s==0 && m ==0){
            var x = confirm('ingin melanjutkan permainan??')
            if (x == true) {
                if (cekSoal == 'Soal1') {
                    cekSoal = 'Soal2'
                    if (s == 0) {s = 30}
                    loncat1();
                } else if (cekSoal == 'Soal2') {
                    cekSoal = 'Soal3'
                    if (s == 0) {s = 30}
                    loncat2();
                }  else if (cekSoal == 'Soal3') {
                    cekSoal = 'Soal4'
                    if (s == 0) {s = 30}
                    loncat3();
                }  else if (cekSoal == 'Soal4') {
                    cekSoal = 'Soal5'
                    if (s == 0) {s = 30}
                    loncat4();
                }  else if (cekSoal == 'Soal5') {
                    cekSoal = ''
                    if (s == 0) {s = 30}
                    loncat5();
                }
            } else {
                return window.location.replace('./main.html');
            }
        }
        document.getElementById('waktu3m').innerHTML = m + ":" + s + 's';
        setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec
        } else if (sec < 0) {
            sec = "59"
        };
        return sec;
    }
    // TIMES END
    // Controler
    var nilaiAsli = [0]
    function tambah (data){
        nilaiAsli[0] = Number(nilaiAsli[0]) + Number(data);
        document.getElementById('pts').innerHTML = Number(nilaiAsli) +' <strong>'+'Point'+'</strong>';
    }

    document.getElementById('pertanyaan1').style.display = 'block';
    // GAMES exercise1
    var nilai = [100]
    // 1
    function exercise1(){
        var satu = document.getElementById('exercise1ke1')
        var dua = document.getElementById('exercise1ke2')
        var tiga = document.getElementById('exercise1ke3')

        var check1 = false
        var check2 = false
        var check3 = false

        if (satu.value == 'var') {
            check1 = true
            document.getElementById('exercise1ke1').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check1 = false
            document.getElementById('exercise1ke1').style.backgroundColor = 'red';
        }

        if (dua.value == 'z' || dua.value == 'Z') {
            check2 = true
            document.getElementById('exercise1ke2').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check2 = false
            document.getElementById('exercise1ke2').style.backgroundColor = 'red';
        }

        if (tiga.value == 'alert') {
            check3 = true
            document.getElementById('exercise1ke3').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check3 = false
            document.getElementById('exercise1ke3').style.backgroundColor = 'red';
        }

        if (check1 == true && check2 == true && check3 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai[0])
                document.getElementById('btcheck1').style.display = 'none';
                document.getElementById('btnxt1').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai[0])
                document.getElementById('btcheck1').style.display = 'none';
                document.getElementById('btnxt1').style.display = 'block';
                nilai[0] = 100
            }
        }
    }

    function loncat1(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 2';

        document.getElementById('pertanyaan1').style.display = 'none';
        document.getElementById('pertanyaan2').style.display = 'block';
        document.getElementById('btcheck2').style.display = 'block';
        document.getElementById('btnxt1').style.display = 'none';
        document.getElementById('btnxt2').style.display = 'none';
    }

    // 2
    function exercise2(){
        cekSoal = 'Soal2';
        var satu = document.getElementById('exercise2ke1')
        var dua = document.getElementById('exercise2ke2')

        var check1 = false
        var check2 = false

        if (satu.value == 'carName') {
            check1 = true
            document.getElementById('exercise2ke1').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check1 = false
            document.getElementById('exercise2ke1').style.backgroundColor = 'red';
        }
        var test = dua.value.toLowerCase()
        if (test == "'volvo'" || test == "`volvo`" || test == `"volvo"`) {
            check2 = true
            document.getElementById('exercise2ke2').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check2 = false
            document.getElementById('exercise2ke2').style.backgroundColor = 'red';
        }
        if (check1 == true && check2 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai)
                document.getElementById('btcheck2').style.display = 'none';
                document.getElementById('btnxt2').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai)
                document.getElementById('btcheck2').style.display = 'none';
                document.getElementById('btnxt2').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat2(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 3';

        document.getElementById('pertanyaan2').style.display = 'none';
        document.getElementById('pertanyaan3').style.display = 'block';
        document.getElementById('btcheck3').style.display = 'block';
        document.getElementById('btnxt2').style.display = 'none';
        document.getElementById('btnxt3').style.display = 'none';
    }

    // 3
    function exercise3(){
        cekSoal = 'Soal3';
        var satu = document.getElementById('exercise3ke1')
        var dua = document.getElementById('exercise3ke2')

        var check1 = false
        var check2 = false

        if (satu.value == 'x') {
            check1 = true
            document.getElementById('exercise3ke1').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check1 = false
            document.getElementById('exercise3ke1').style.backgroundColor = 'red';
        }
        if (dua.value == Number(50)) {
            check2 = true
            document.getElementById('exercise3ke2').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check2 = false
            document.getElementById('exercise3ke2').style.backgroundColor = 'red';
        }
        if (check1 == true && check2 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai)
                document.getElementById('btcheck3').style.display = 'none';
                document.getElementById('btnxt3').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai)
                document.getElementById('btcheck3').style.display = 'none';
                document.getElementById('btnxt3').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat3(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 4';

        document.getElementById('pertanyaan3').style.display = 'none';
        document.getElementById('pertanyaan4').style.display = 'block';
        document.getElementById('btcheck4').style.display = 'block';
        document.getElementById('btnxt3').style.display = 'none';
        document.getElementById('btnxt4').style.display = 'none';
    }

    // 4
    function exercise4(){
        cekSoal = 'Soal4';
        var satu = document.getElementById('exercise4ke1')
        var dua = document.getElementById('exercise4ke2')
        var tiga = document.getElementById('exercise4ke3')


        var check1 = false
        var check2 = false
        var check3 = false

        if (satu.value == 'x') {
            check1 = true
            document.getElementById('exercise4ke1').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check1 = false
            document.getElementById('exercise4ke1').style.backgroundColor = 'red';
        }
        if (dua.value == Number(5)) {
            check2 = true
            document.getElementById('exercise4ke2').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check2 = false
            document.getElementById('exercise4ke2').style.backgroundColor = 'red';
        }

        var test = tiga.value
        var cek = ''
        for(var i = 0 ; i < test.length; i++){
            if (test[i] != ' ') {
                cek+=test[i]
            }
        }
        
        if (cek == 'x+y') {
            check3 = true
            document.getElementById('exercise4ke3').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check3 = false
            document.getElementById('exercise4ke3').style.backgroundColor = 'red';
        }

        if (check1 == true && check2 == true && check3 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai)
                document.getElementById('btcheck4').style.display = 'none';
                document.getElementById('btnxt4').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai)
                document.getElementById('btcheck4').style.display = 'none';
                document.getElementById('btnxt4').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat4(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 5';

        document.getElementById('pertanyaan4').style.display = 'none';
        document.getElementById('pertanyaan5').style.display = 'block';
        document.getElementById('btcheck5').style.display = 'block';
        document.getElementById('btnxt4').style.display = 'none';
        document.getElementById('btnxt5').style.display = 'none';
    }

    // 5
    function exercise5(){
        cekSoal = 'Soal5';
        var satu = document.getElementById('exercise5ke1')
        var dua = document.getElementById('exercise5ke2')
        var tiga = document.getElementById('exercise5ke3')
        var empat = document.getElementById('exercise5ke4')
        var lima = document.getElementById('exercise5ke5')

        var check1 = false
        var check2 = false
        var check3 = false
        var check4 = false
        var check5 = false

        if (satu.value == 'firstName') {
            check1 = true
            document.getElementById('exercise5ke1').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check1 = false
            document.getElementById('exercise5ke1').style.backgroundColor = 'red';
        }

        if (dua.value == ';') {
            check2 = true
            document.getElementById('exercise5ke2').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check2 = false
            document.getElementById('exercise5ke2').style.backgroundColor = 'red';
        }
        
        if (tiga.value == '"Doe";' || tiga.value  == "'Doe';" || tiga.value == '`Doe`;') {
            check3 = true
            document.getElementById('exercise5ke3').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check3 = false
            document.getElementById('exercise5ke3').style.backgroundColor = 'red';
        }

        if (empat.value.toLowerCase() == "age") {
            check4 = true
            document.getElementById('exercise5ke4').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check4 = false
            document.getElementById('exercise5ke4').style.backgroundColor = 'red';
        }

        if (lima.value == Number(35)) {
            check5 = true
            document.getElementById('exercise5ke5').style.backgroundColor = 'green';
        } else {
            nilai = nilai -  20
            check5 = false
            document.getElementById('exercise5ke5').style.backgroundColor = 'red';
        }

        if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai)
                document.getElementById('btcheck5').style.display = 'none';
                document.getElementById('btnxt5').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai)
                document.getElementById('btcheck5').style.display = 'none';
                document.getElementById('btnxt5').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat5(){
        document.getElementById('waktu3m').innerHTML = 9999 + ":" + 30 + 's';
        document.getElementById('waktu3m').style.display = 'none';
        document.getElementById('TCKE').innerHTML = 'JS Variable Complete!';

        document.getElementById('pertanyaan5').style.display = 'none';
        document.getElementById('btcheck5').style.display = 'none';
        document.getElementById('btnxt5').style.display = 'none';
        
        document.getElementById('hasilAkhirBaby').style.display = 'block';
    // CALCULATION
        var rata22 = nilaiAsli[0] / 5
        if (rata22 < 70) {
            document.getElementById('endingText').innerHTML = 'Maaf Kamu Gagal..:(';
            document.getElementById('nilai').innerHTML = nilaiAsli[0];
            document.getElementById('rata2').innerHTML = rata22 + '%';
            document.getElementById('rata2').style.backgroundColor= 'red';
        } else {
            document.getElementById('endingText').innerHTML = 'Selamat kamu berhasil! Level Up! :D';
            document.getElementById('nilai').innerHTML = nilaiAsli[0];
            document.getElementById('rata2').innerHTML = rata22 + '%';

            var arr = [[user[0]],[user[1]]]
            arr.push(levels[1])
            localStorage.setItem(user[0], JSON.stringify(arr));
        }
    }
} else if (user[2] ==  levels[1]) {
        // games
    // TIMES
    var cekSoal = 'Soal1';
    document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
    startTimer();
    function startTimer() {
        var presentTime = document.getElementById('waktu3m').innerHTML;
        var timeArray = presentTime.split(/[:&s]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s >= 60) {
            m = Math.floor((s / 60)%60)
            s = s % 60
        } else if (s == 59 && m > 0) {
            m = m - 1
        }

        if(s==0 && m ==0){
            var x = confirm('ingin melanjutkan permainan??')
            if (x == true) {
                if (cekSoal == 'Soal1') {
                    cekSoal = 'Soal2'
                    if (s == 0) {s = 30}
                    loncat6();
                } else if (cekSoal == 'Soal2') {
                    cekSoal = 'Soal3'
                    if (s == 0) {s = 30}
                    loncat7();
                }  else if (cekSoal == 'Soal3') {
                    cekSoal = 'Soal4'
                    if (s == 0) {s = 30}
                    loncat8();
                }  else if (cekSoal == 'Soal4') {
                    cekSoal = 'Soal5'
                    if (s == 0) {s = 30}
                    loncat9();
                }  else if (cekSoal == 'Soal5') {
                    cekSoal = ''
                    if (s == 0) {s = 30}
                    loncat10();
                }
            } else {
                return window.location.replace('./main.html');
            }
        }
        document.getElementById('waktu3m').innerHTML = m + ":" + s + 's';
        setTimeout(startTimer, 1000);
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec
        } else if (sec < 0) {
            sec = "59"
        };
        return sec;
    }
    // TIMES END
    // Controler
    var nilaiAsli = [0]
    function tambah (data){
        nilaiAsli[0] = Number(nilaiAsli[0]) + Number(data);
        document.getElementById('pts').innerHTML = Number(nilaiAsli) +' <strong>'+'Point'+'</strong>';
    }

    document.getElementById('pertanyaan6').style.display = 'block';
    // GAMES exercise1
    var nilai = [100]
    // 1
    function exercise6(){
        var satu = document.getElementById('exercise6ke1')

        var check1 = false

        if (satu.value == '*') {
            check1 = true
            document.getElementById('exercise6ke1').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check1 = false
            document.getElementById('exercise6ke1').style.backgroundColor = 'red';
        }

        if (check1 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai[0])
                document.getElementById('btcheck6').style.display = 'none';
                document.getElementById('btnxt6').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai[0])
                document.getElementById('btcheck6').style.display = 'none';
                document.getElementById('btnxt6').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat6(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 2';

        document.getElementById('pertanyaan6').style.display = 'none';
        document.getElementById('pertanyaan7').style.display = 'block';
        document.getElementById('btcheck7').style.display = 'block';
        document.getElementById('btnxt6').style.display = 'none';
        document.getElementById('btnxt7').style.display = 'none';
    }

     // 2
    function exercise7(){
        cekSoal = 'Soal2';
        var satu = document.getElementById('exercise7ke1')
        var dua = document.getElementById('exercise7ke2')
        var tiga = document.getElementById('exercise7ke3')
        var empat = document.getElementById('exercise7ke4')

        var check1 = false
        var check2 = false
        var check3 = false
        var check4 = false


        if (satu.value == 'Number') {
            check1 = true
            document.getElementById('exercise7ke1').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check1 = false
            document.getElementById('exercise7ke1').style.backgroundColor = 'red';
        }

        if (dua.value == 'String') {
            check2 = true
            document.getElementById('exercise7ke2').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check2 = false
            document.getElementById('exercise7ke2').style.backgroundColor = 'red';
        }

        if (tiga.value == 'Object') {
            check3 = true
            document.getElementById('exercise7ke3').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check3 = false
            document.getElementById('exercise7ke3').style.backgroundColor = 'red';
        }

        if (empat.value == 'Array') {
            check4 = true
            document.getElementById('exercise7ke4').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check4 = false
            document.getElementById('exercise7ke4').style.backgroundColor = 'red';
        }

        if (check1 == true && check2 == true && check3 == true && check4 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai[0])
                document.getElementById('btcheck7').style.display = 'none';
                document.getElementById('btnxt7').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai[0])
                document.getElementById('btcheck7').style.display = 'none';
                document.getElementById('btnxt7').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat7(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 3';

        document.getElementById('pertanyaan7').style.display = 'none';
        document.getElementById('pertanyaan8').style.display = 'block';
        document.getElementById('btcheck8').style.display = 'block';
        document.getElementById('btnxt7').style.display = 'none';
        document.getElementById('btnxt8').style.display = 'none';
    }

     // 3
    function exercise8(){
        cekSoal = 'Soal3';
        var satu = document.getElementById('exercise8ke1')
        var dua = document.getElementById('exercise8ke2')

        var check1 = false
        var check2 = false


        if (satu.value == 'return') {
            check1 = true
            document.getElementById('exercise8ke1').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check1 = false
            document.getElementById('exercise8ke1').style.backgroundColor = 'red';
        }

        if (dua.value.toLowerCase() == 'hello') {
            check2 = true
            document.getElementById('exercise8ke2').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  20
            check2 = false
            document.getElementById('exercise8ke2').style.backgroundColor = 'red';
        }

        if (check1 == true && check2 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai[0])
                document.getElementById('btcheck8').style.display = 'none';
                document.getElementById('btnxt8').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai[0])
                document.getElementById('btcheck8').style.display = 'none';
                document.getElementById('btnxt8').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat8(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 4';

        document.getElementById('pertanyaan8').style.display = 'none';
        document.getElementById('pertanyaan9').style.display = 'block';
        document.getElementById('btcheck9').style.display = 'block';
        document.getElementById('btnxt8').style.display = 'none';
        document.getElementById('btnxt9').style.display = 'none';
    }

     // 4
    function exercise9(){
        cekSoal = 'Soal4';
        var satu = document.getElementById('exercise9ke1')

        var check1 = false

        if (satu.value == 'person.firstName') {
            check1 = true
            document.getElementById('exercise9ke1').style.backgroundColor = 'green';
        } else {
            nilai[0] = nilai[0] -  50
            check1 = false
            document.getElementById('exercise9ke1').style.backgroundColor = 'red';
        }

        if (check1 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai[0])
                document.getElementById('btcheck9').style.display = 'none';
                document.getElementById('btnxt9').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai[0])
                document.getElementById('btcheck9').style.display = 'none';
                document.getElementById('btnxt9').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat9(){
        document.getElementById('waktu3m').innerHTML = 0 + ":" + 30 + 's';
        document.getElementById('TCKE').innerHTML = 'Exercise - 5';

        document.getElementById('pertanyaan9').style.display = 'none';
        document.getElementById('pertanyaan10').style.display = 'block';
        document.getElementById('btcheck10').style.display = 'block';
        document.getElementById('btnxt9').style.display = 'none';
        document.getElementById('btnxt10').style.display = 'none';
    }

    // 5
    function exercise10(){
        cekSoal = 'Soal5';
        var satu = document.getElementById('exercise10ke1')

        var check1 = false

        if (satu.value == 'txt.toLowerCase()') {
            check1 = true
            document.getElementById('exercise10ke1').style.backgroundColor = 'green';
        } else {
            nilai = nilai - 50
            check1 = false
            document.getElementById('exercise10ke1').style.backgroundColor = 'red';
        }

        if (check1 == true) {
            if (nilai[0] <= 0) {
                nilai[0] = 0
                tambah(nilai)
                document.getElementById('btcheck10').style.display = 'none';
                document.getElementById('btnxt10').style.display = 'block';          
                nilai[0] = 100
            } else {
                tambah(nilai)
                document.getElementById('btcheck10').style.display = 'none';
                document.getElementById('btnxt10').style.display = 'block';
                nilai[0] = 100
            }
        }
    }
    function loncat10(){
        document.getElementById('waktu3m').innerHTML = 9999 + ":" + 30 + 's';
        document.getElementById('waktu3m').style.display = 'none';
        document.getElementById('TCKE').innerHTML = 'JS.Med Complete!';

        document.getElementById('pertanyaan10').style.display = 'none';
        document.getElementById('btcheck10').style.display = 'none';
        document.getElementById('btnxt10').style.display = 'none';
        
        document.getElementById('hasilAkhirBaby').style.display = 'block';
    // CALCULATION
        var rata22 = nilaiAsli[0] / 5
        if (rata22 < 70) {
            document.getElementById('endingText').innerHTML = 'Maaf Kamu Gagal..:(';
            document.getElementById('nilai').innerHTML = nilaiAsli[0];
            document.getElementById('rata2').innerHTML = rata22 + '%';
            document.getElementById('rata2').style.backgroundColor= 'red';
        } else {
            document.getElementById('endingText').innerHTML = 'Selamat kamu berhasil! Level Up! :D';
            document.getElementById('nilai').innerHTML = nilaiAsli[0];
            document.getElementById('rata2').innerHTML = rata22 + '%';

            var arr = [[user[0]],[user[1]]]
            arr.push(levels[2])
            localStorage.setItem(user[0], JSON.stringify(arr));
        }
    }
} else if (user[2] ==  levels[2]) {
    alert('Anda telah mencapai level tertinggi')
    window.location.replace('./main.html');
}

function backMain() {
    var x = confirm('kembali?');
    if (x == true) {
        return window.location.replace('./main.html');
    }
}
function backrnk() {
        return window.location.replace('./main.html');
}
function ranklk() {
    return window.location.replace('./rank.html');
}