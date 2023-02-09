// tady je místo pro náš program
// prvni bod
let vystupProgramu = document.querySelector('.vystupProgramu')
let jmeno = prompt('Jaké je tvé křestní jméno?')
let prijmeni = prompt('Jaké je tvé příjmení?')
let rok = Number(prompt('Jaký je tvůj rok narození?'))
let letos = new Date().getFullYear()
let vek = letos - rok
let vstup = jmeno + ' ' + prijmeni + ' ' + vek
vystupProgramu.innerHTML = vstup
vystupProgramu.style.fontSize = '30px'
vystupProgramu.style.fontWeight = 'bold'

// druhy bod
let barva = prompt('Jaká je tvá oblíbená barva?')
console.log(barva)
vystupProgramu.style.color = barva

let zmena = document.querySelector('.tlacitko')
function zmenBarvu() {
    let barva = prompt('Zadej barvu:')
    vystupProgramu.style.color = barva
}