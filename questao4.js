const states = [
  { state: 'SP', value: 67836.43 },
  { state: 'RJ', value: 36678.66 },
  { state: 'MG', value: 29229.88 },
  { state: 'ES', value: 27165.48 },
  { state: 'Outros', value: 19849.53 },
];

function percent() {
    let total = 0
    for (i of states) total += i.value;
    
    for (i of states) {
        console.log(`${i.state} representa ${(i.value/total*100).toFixed(2)}% do faturamento mensal`);
    }
}

percent();