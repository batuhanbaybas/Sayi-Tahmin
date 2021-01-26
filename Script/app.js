var cons1 = "Vaaayy Nerden Bildin!!!"
var cons2 = "Olmadı Canım Azcık Daha Düşük Söleyecektin"
var cons3 = "Anlaşılan Yüseklerde Gözün Yok Senin"
var Health= 5
function calistir() {

    let number =Math.floor(Math.random() * 20)+ 1
    random = document.getElementById("random").innerText ="Çıkan Sayı:" +  number

    let userNumber =document.getElementById("userNumber").value
        if (Health==0){
            document.getElementById("health").innerText="Hiç Canın Kalmadı"
            document.getElementById("button").style.display="none"

        }

        if (number==userNumber) {
            document.getElementById("result").innerText = cons1 + "Hemde"+" "+Health+"Hakkın Kala"
            Health = Health-1


        } else if (userNumber < number) {
            document.getElementById("result").innerText = cons3
            Health = Health-1

        } else {
            document.getElementById("result").innerText = cons2
            Health = Health-1

        }






}
