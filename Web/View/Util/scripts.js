function formfiller() {
    $('input#sCepOrigem').val("89045450");
    $('input#sCepDestino').val("04547000");
    $('input#nVlAltura').val("20");
    $('input#nVlLargura').val("20");
    $('input#nVlComprimento').val("20");
    $('input#nVlPeso').val("1");
    $('input#nVlValorDeclarado').val("0");
}

function enviar() {
    formfiller();//SE DESCOMENTAR ISSO ELE PREENCHE BOA PARTE DOS CAMPOS SOZINHO
    var pacote = {}
    pacote.nCdEmpresa = "";
    pacote.sDsSenha = "";
    pacote.sCepOrigem = $('input#sCepOrigem').val();
    pacote.sCepDestino = $('input#sCepDestino').val();
    pacote.nVlPeso = $('input#nVlPeso').val();
    pacote.nCdFormato = 1; // SEMPRE CAIXA
    pacote.nVlComprimento = $('input#nVlComprimento').val();
    pacote.nVlAltura = $('input#nVlAltura').val();
    pacote.nVlLargura = $('input#nVlLargura').val();
    pacote.sCdMaoPropria = $('select#sCdMaoPropria').val().toLowerCase();
    pacote.nVlValorDeclarado = $('input#nVlValorDeclarado').val();
    pacote.sCdAvisoRecebimento = $('select#sCdAvisoRecebimento').val().toLowerCase();
    pacote.nCdServico = $('select#nCdServico').val();
    pacote.nVlDiametro = 0; //NUNCA É CILINDRO
    

    var url = "http://usysweb.com.br/api/correiosambev.php?";

    $.each(pacote, function (key, value) {
        url += key + "=" + value + "&";
    });
    url += "StrRetorno=xml&nIndicaCalculo=3";

    $.get(url, function (data) {
        var content = "";
        $.each(JSON.parse(data).cServico, function (key, value) {
            document.getElementById(key).textContent = value;
            content += key + ": " + value + "\n";
        });
        alert(content);
    });
}
