type heroi = {
    name: string;
    vulgo: string;
}

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}

printaObjeto({
    name: "Tony Stark",
    vulgo: "Homem de Ferro"
});