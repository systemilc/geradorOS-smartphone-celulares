function limparCampos() {
  document.getElementById("osReparo").value = "";
  document.getElementById("modeloReparo").value = "";
  document.getElementById("clienteReparo").value = "";
  document.getElementById("dataReparo").value = "";
  document.getElementById("horaReparo").value = "";
  document.getElementById("tecReparo").value = "";
  document.getElementById("servicoReparo").value = "";
  document.getElementById("resultado").value = "";

  document.getElementById("osOrcamento").value = "";
  document.getElementById("modeloOrcamento").value = "";
  document.getElementById("clienteOrcamento").value = "";
  document.getElementById("dataOrcamento").value = "";
  document.getElementById("horaOrcamento").value = "";
  document.getElementById("tecOrcamento").value = "";
  document.getElementById("orcamentoOrcamento").value = "";
  document.getElementById("resultado").value = "";

  document.getElementById("modeloDevolucao").value = "";
  document.getElementById("clienteDevolucao").value = "";
  document.getElementById("dataDevolucao").value = "";
  document.getElementById("horaDevolucao").value = "";
  document.getElementById("tecDevolucao").value = "";
  document.getElementById("servicosDevolucao").value = "";
  document.getElementById("resultado").value = "";

  document.getElementById("osAprovada").value = "";
  document.getElementById("modeloAprovada").value = "";
  document.getElementById("clienteAprovada").value = "";
  document.getElementById("dataAprovada").value = "";
  document.getElementById("horaAprovada").value = "";
  document.getElementById("resultado").value = "";

  const tipoOs = document.getElementById("tipoOs").value;
  mostrarCampos(tipoOs);
}

function mostrarCampos() {
  const tipoOs = document.getElementById("tipoOs").value;
  document.getElementById("camposReparoFeito").style.display = "none";
  document.getElementById("camposOrcamentoFeito").style.display = "none";
  document.getElementById("camposDevolucao").style.display = "none";
  document.getElementById("camposAprovada").style.display = "none";

  if (tipoOs === "reparoFeito") {
    document.getElementById("camposReparoFeito").style.display = "block";
  } else if (tipoOs === "orcamentoFeito") {
    document.getElementById("camposOrcamentoFeito").style.display = "block";
  } else if (tipoOs === "devolucao") {
    document.getElementById("camposDevolucao").style.display = "block";
  } else if (tipoOs === "aprovada") {
    document.getElementById("camposAprovada").style.display = "block";
  }
}

function gerarTexto() {
  const tipoOs =
    document.getElementById("tipoOs").options[
      document.getElementById("tipoOs").selectedIndex
    ].text;
  let texto = "";

  if (tipoOs === "OS REPARO FEITO") {
    const os = document.getElementById("osReparo").value;
    const modelo = document.getElementById("modeloReparo").value;
    const cliente = document.getElementById("clienteReparo").value;
    const dataReparo = document.getElementById("dataReparo").value;
    const hora = document.getElementById("horaReparo").value;
    const tec = document.getElementById("tecReparo").value;
    const servico = document.getElementById("servicoReparo").value;

    texto = `OS REPARO FEITO\nOS: ${os}\nMODELO: ${modelo}\nCLIENTE: ${cliente}\nDATA REPARO: ${dataReparo}\nHORA: ${hora}\nTEC: ${tec}\n\nSERVIÇO: ${servico}`;
  } else if (tipoOs === "OS ORÇAMENTO FEITO") {
    const os = document.getElementById("osOrcamento").value;
    const modelo = document.getElementById("modeloOrcamento").value;
    const cliente = document.getElementById("clienteOrcamento").value;
    const dataOrcamento = document.getElementById("dataOrcamento").value;
    const hora = document.getElementById("horaOrcamento").value;
    const tec = document.getElementById("tecOrcamento").value;
    const orcamento = document.getElementById("orcamentoOrcamento").value;

    texto = `OS ORÇAMENTO FEITO\nOS: ${os}\nMODELO: ${modelo}\nCLIENTE: ${cliente}\nDATA ORÇAMENTO: ${dataOrcamento}\nHORA: ${hora}\nTEC: ${tec}\n\nORÇAMENTO: ${orcamento}`;
  } else if (tipoOs === "OS DEVOLUÇÃO") {
    const modelo = document.getElementById("modeloDevolucao").value;
    const cliente = document.getElementById("clienteDevolucao").value;
    const dataDevolucao = document.getElementById("dataDevolucao").value;
    const hora = document.getElementById("horaDevolucao").value;
    const tec = document.getElementById("tecDevolucao").value;
    const servicos = document.getElementById("servicosDevolucao").value;

    texto = `OS DEVOLUÇÃO\nMODELO: ${modelo}\nCLIENTE: ${cliente}\nDATA DA DEVOLUÇÃO: ${dataDevolucao}\nHORA: ${hora}\nTEC: ${tec}\n\nSERVIÇOS: ${servicos}`;
  } else if (tipoOs === "OS APROVADA") {
    const os = document.getElementById("osAprovada").value;
    const modelo = document.getElementById("modeloAprovada").value;
    const cliente = document.getElementById("clienteAprovada").value;
    const dataAprovada = document.getElementById("dataAprovada").value;
    const hora = document.getElementById("horaAprovada").value;

    texto = `OS APROVADA\nOS: ${os}\nMODELO: ${modelo}\nCLIENTE: ${cliente}\nDATA DA APROVAÇÃO: ${dataAprovada}\nHORA: ${hora}`;
  }

  document.getElementById("resultado").value = texto;
}
