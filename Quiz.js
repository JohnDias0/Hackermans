function valide() {
    var points
    points = parseInt(0)
    let selected1 = document.querySelector("input[name='radio1']:checked").value
    if (selected1 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected1 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected2 = document.querySelector("input[name='radio2']:checked").value
    if (selected2 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected2 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected3 = document.querySelector("input[name='radio3']:checked").value
    if (selected3 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected3 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected4 = document.querySelector("input[name='radio4']:checked").value
    if (selected4 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected4 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected5 = document.querySelector("input[name='radio5']:checked").value
    if (selected5 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected5 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected6 = document.querySelector("input[name='radio6']:checked").value
    if (selected6 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected6 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected7 = document.querySelector("input[name='radio7']:checked").value
    if (selected7 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected7 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected8 = document.querySelector("input[name='radio8']:checked").value
    if (selected8 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected8 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected9 = document.querySelector("input[name='radio9']:checked").value
    if (selected9 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected9 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }

    let selected10 = document.querySelector("input[name='radio10']:checked").value
    if (selected10 === 'a') {
        points += 1
        // alert("alternativa  correta")
    }
    if (selected10 !== 'a') {
        points += 0
        // alert("alternativa incorreta")
    }
    document.write("Você acertou " + points +  " de 10 questões")
    var next = document.createElement("button")
    // next.onclick = next()
    next.innerText = "Próximo"
    document.body.appendChild(next)
    
   

}

function next(){
    window.location.assign(url)   
}