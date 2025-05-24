function calcular(){

    /*Leitura de dados:*/ 
    const vale = 500
    const valormarmita = 18
    const inss_subsidio = 195.73
    const insalubridade = 303.60
    const horaspordia = 8.8
    const horasdomingo = 7.55
    let valordahora = document.getElementById("valordahora").value;
    let diastrabalhados = document.getElementById("diastrabalhados").value;
    let domingos = document.getElementById("domingos").value;
    let marmita = document.getElementById("marmita").value;
    const valetrue = document.getElementById("vales");


    /*Processamento:*/ 
    let horastotais = (diastrabalhados * horaspordia) + (horasdomingo * domingos);
    let salariobruto = horastotais * valordahora;
    let valorfinalmarmita = marmita * valormarmita;
    let salario = salariobruto + insalubridade - valorfinalmarmita - inss_subsidio;
    let salariofinal = salario - vale;

    /*Saída de dados:*/ 
    if(valetrue.checked){
        document.getElementById("resultadomarmita").textContent= "O valor das marmitas é de R$"+ valorfinalmarmita.toFixed(2);
        document.getElementById("resultado").textContent= "O seu salário com todos os descontos será de R$" + salariofinal.toFixed(2);
    }
    else{
        document.getElementById("resultadomarmita").textContent= "O valor das marmitas é de R$"+ valorfinalmarmita.toFixed(2);
        document.getElementById("resultado").textContent= "O seu salário com todos os descontos será de R$" + salario.toFixed(2);
    }

    
}