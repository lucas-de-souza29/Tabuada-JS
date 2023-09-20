let geraTab = document.querySelector('#geraTabuada').addEventListener('click', () =>{
    let numero = document.querySelector('#numero');
    let selectTabuada = document.querySelector('#selectTabuada');
    
    if(numero.value.length == 0) {
        selectTabuada.innerHTML = `<option> Número inválido! \u{274C} <br> Por favor, informe um número </option>`
    }else {
        selectTabuada.innerHTML = '';
        for(let i = 0; i <= 10; i++){
            let num = Number(numero.value);
            const item = document.createElement('option');
            
            item.value = `tab${i}`
            item.text = `${num} x ${i} = ${num * i}`;
            selectTabuada.appendChild(item)
        }  
    }
});