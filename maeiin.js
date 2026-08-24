document.addEventListener('DOMContentLoaded', () => {
  let tamanhoFonteAtual = 1.0; // Valor inicial em rem

  const btnAumentar = document.getElementById('btn-aumentar');
  const btnDiminuir = document.getElementById('btn-diminuir');
  const btnContraste = document.getElementById('btn-contraste');

  // Controle de Fonte
  btnAumentar.addEventListener('click', () => {
    if (tamanhoFonteAtual < 1.4) { // Limite máximo de aumento
      tamanhoFonteAtual += 0.1;
      document.documentElement.style.setProperty('--font-scale', `${tamanhoFonteAtual}rem`);
    }
  });

  btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonteAtual > 0.8) { // Limite mínimo de redução
      tamanhoFonteAtual -= 0.1;
      document.documentElement.style.setProperty('--font-scale', `${tamanhoFonteAtual}rem`);
    }
  });

  // Controle de Alto Contraste
  btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
});