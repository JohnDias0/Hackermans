const div = ["d2", "d3","d4", "d5", "d6", "d7", "d8", "d9", "d10"]
for (let i = 0; i< div.length; i++){
    let d = div[i]
    document.addEventListener("DOMContentLoaded", function() {
        var texto = document.getElementById(d);
      
        window.addEventListener("scroll", function() {
          var posicao = texto.getBoundingClientRect().top;
          var alturaJanela = window.innerHeight;
      
          if (posicao < alturaJanela) {
            texto.style.opacity = "1"; // Torna o texto visível
          }
        });
      });
}
function valide() {
    var points
    points = parseInt(0)
    const radio = ["radio1", "radio2", "radio3", "radio4", "radio5", "radio6", "radio7", "radio8", "radio9", "radio10"]
    const answer = ["b", "d", "d", "c", "a", "b", "b", "d", "b", "a"]
    for (let i = 0; i < radio.length; i++) { 
        let question = radio[i]
        let a = answer[i]
        let selected = document.querySelector("input[name='" + question + "']:checked").value
        if (selected === a) {
            points += 1
            // alert("alternativa  correta")
        }
        if (selected !== a) {
            points += 0
            // alert("alternativa incorreta")
        }
        selected = " "

        document.getElementById('result').innerHTML = "Você acertou " + points + " questões de 10!!!"
    }
        if (points>=5){
            setTimeout( window.location.href = "congrats.html" ), 1000000
        }
        else {
            setTimeout( window.location.href = "defeat.html"), 1000000
        }

}
