function valide() {
    var points
    points = parseInt(0)
    const radio = ["radio1", "radio2", "radio3", "radio4", "radio5", "radio6", "radio7", "radio8", "radio9", "radio10"]
    for (let i = 0; i < radio.length; i++) { 
        let question = radio[i]
        let selected = document.querySelector("input[name='" + question + "']:checked").value
        if (selected === 'a') {
            points += 1
            // alert("alternativa  correta")
        }
        if (selected !== 'a') {
            points += 0
            // alert("alternativa incorreta")
        }
        selected = " "

        document.getElementById('result').innerHTML = "Você acertou " + points + " questões de 10!!!"
    }
        if (points<=5){
            setTimeout( window.location.href = "congrats.html" ), 50000
            
        }
        else {
            setTimeout( window.location.href = "defeat.html"), 50000
        }

}
