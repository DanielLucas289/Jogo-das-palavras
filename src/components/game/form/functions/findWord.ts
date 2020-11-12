import { palavras } from '../../../../data/words';

export function findWord(letrasDigitadas: string) {
  var letrasRestantes = "";
  var palavraEncontrada = "";

  for (var pl = 0; pl < palavras.length; pl++) {
    var letras = letrasDigitadas;

    for (var i = 0; i < palavras[pl].length; i++) {
      for (var j = 0; j < letras.length; j++) {
        if (palavras[pl][i] === letras[j]) {
          palavraEncontrada += letras[j];
          letras = letras.replace(letras[j], "");
          j = letras.length;
        }
      }

      if (palavraEncontrada === palavras[pl]) {
        i = palavras[pl].length;
        break;
      }
    }

    if (palavraEncontrada === palavras[pl]) {
      letrasRestantes = letras;
      pl = palavras.length;
    } else {
      palavraEncontrada = "";
    }
  }

  return {
    palavraEncontrada,
    letrasRestantes
  }
}