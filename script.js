function getValue() {
    const val = document.getElementById('price').value
    const interest = parseInt(document.getElementById("interest").value) / 100
    const totalInterest = val * interest + parseInt(val)
    document.getElementById("price-post-interest").innerHTML = totalInterest
    console.log(totalInterest)
}