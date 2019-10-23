function teste(msg) {
    alert(msg);
}

function enviar() {
    var pacote = {}
    pacote.nCdEmpresa = "";
    pacote.sDsSenha = "";
    pacote.sCepOrigem = $('input[id="sCepOrigem"]').val();
    pacote.sCepDestino = $('input[id="sCepDestino"]').val();
    pacote.nVlPeso = $('input[id="nVlPeso"]').val();
    pacote.nCdFormato = 1;
    pacote.nVlComprimento = $('input[id="nVlComprimento"]').val();
    pacote.nVlAltura = $('input[id="nVlAltura"]').val();
    pacote.nVlLargura = $('input[id="nVlLargura"]').val();
    pacote.nVlDiametro = 0;
    //pacote.sCdMaoPropria = $('input[id="sCdMaoPropria"]').val();


    var temp;
    temp = $('select[id="sCdMaoPropria"]').selectedIndex.text;
    teste(temp);


    //pacote.sCdAvisoRecebimento = $('input[id="sCdAvisoRecebimento"]').val();
    //pacote.nCdServico = $('input[id="nCdServico"]').val();
    

    var url = "http://usysweb.com.br/api/correiosambev.php?";

    $.each(pacote, function (key, value) {
        url += key + "=" + value + "&";
    });
    url += "StrRetorno=xml&nIndicaCalculo=3";
    //aqui a url ta pronta bonitinha, aí eu vou estragar ela pra conseguir testar usando exemplo = true 
    url = "http://usysweb.com.br/api/correiosambev.php?exemplo=true";

    // aqui vem o get

    $.get(url, function (data) {
        var content = "";
        $.each(JSON.parse(data).cServico, function (key, value) {
            //document.getElementById(key).textContent = value;
            content += key + ": " + value + "\n";
        });
        alert(content);
    });
}
