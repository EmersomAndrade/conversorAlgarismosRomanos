const vo = document.querySelector('#vo');
const vc = document.querySelector('#vc');
const botao = document.querySelector('#botao');

const converter = () =>
{
    const romanos = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C':100, 'D': 500, 'M': 1000 };
    const valorDigitado = document.querySelector('#vo').value;
    const qtd = valorDigitado.length;
    const valorConvertido = [];
    let total = 0;

    for(i=0; i<qtd; i++)
    {
        valorConvertido[i]= romanos[`${valorDigitado.charAt(i)}`];
    }

    if(qtd < 2 || qtd> 2)
    {
        for(i=0; i<qtd; i++){
        total += romanos[`${valorDigitado.charAt(i)}`];
        console.log(total);
        console.log(3);
        }
    }  
    
    else if(qtd == 2 && romanos[`${valorDigitado.charAt(0)}`] < romanos[`${valorDigitado.charAt(1)}`])
    {
            total = romanos[`${valorDigitado.charAt(1)}`] - romanos[`${valorDigitado.charAt(0)}`];
            console.log(total);
            console.log(2);
    }
    else if(qtd == 2 && romanos[`${valorDigitado.charAt(0)}`] >= romanos[`${valorDigitado.charAt(1)}`])
    {
            total = romanos[`${valorDigitado.charAt(0)}`] + romanos[`${valorDigitado.charAt(1)}`];
            console.log(total);
            console.log(2);
    }
    
    document.querySelector('#vc').value = total;

           // console.log(valorConvertido);
           // console.log(total);
           // document.querySelector('#vc').value = total;
            //document.querySelector('#vc').value = 2* romanos.M;
            
}