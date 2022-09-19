function calcular(){

    var n = document.getElementById("num")
    var num = Number(n.value)

    var tab = document.getElementById("tabela")

    for(var x = 1; x <= 10; x++){

        var i = num * x

        document.getElementById("tabela").innerHTML += ` <li>${num} * ${x} = ${i}</li> `

    }

}