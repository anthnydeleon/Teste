const json = require('./dados.json');

function minValue() {
    let value = json[0].valor;
    let day = "";

    for (i of json) {
        if(i.valor == 0) continue
        if(i.valor < value) {
            value = i.valor
            day = i.dia
        }
    }
    console.log(`O dia ${day} e teve o menor faturamento, que foi de ${value}.`)
}

function maxValue() {
    let value = json[0].valor;
    let day = "";

    for (i of json) {
        if(i.valor == 0) continue
        if(i.valor > value) {
            value = i.valor
            day = i.dia
        }
    }
    console.log(`O dia ${day} e teve o maior faturamento, que foi de ${value}.`)
}

function avgValue() {
    let value = 0
    let days = 0;
    let avg;
    let numOfDays = 0;

    for (i of json) {
        if(i.valor == 0) continue
        days++
        value += i.valor; 
    }

    avg = Number(value)/Number(days)
    console.log(`A média de faturamento diário é de ${avg}`)

    for (i of json) {
        if (i.valor > avg) numOfDays++
    }

    console.log(`O número de dias com faturamento maior que a média é de ${numOfDays}`)
}

minValue();
maxValue()
avgValue()