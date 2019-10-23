function enviar() {
    alert("Vai listar os valores a qualquer momento")
    var pacote = {
        "nCdEmpresa": document.getElementById("nCdEmpresa").val(),
        //"sDsSenha": "",
        //"sCepOrigem": "",
        //"sCepDestino": "",
        //"nVlPeso": "",
        //"nCdFormato": "",
        //"nVlComprimento": "",
        //"nVlAltura": "",
        //"nVlLargura": "",
        //"sCdMaoPropria": "",
        //"nVlValorDeclarado": "",
        //"sCdAvisoRecebimento": "",
        //"nCdServico": "",
        //"nVlDiametro": "",
    }
    pacote.nCdEmpresa = "teste";
    alert(pacote.nCdEmpresa);
}