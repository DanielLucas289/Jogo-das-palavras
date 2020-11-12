import { Button, Grid, makeStyles, Paper, TextField, Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import React, { useEffect, useState } from 'react';
import { findWord } from './functions/findWord';
import { valorLetras } from '../../../data/wordsPoint';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  }
}));


const Form: React.FC = () => {
  const [palavraEncontrada, setPalavraEncontrada] = useState<string>("")
  const [letrasDigitadas, setletrasDigitadas] = useState<string>("")
  const [letrasRestantes, setLetrasRestantes] = useState<string>("")
  const [messageError, setMessageError] = useState<string>("")
  const [pontos, setPontos] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [showResult, setShowResult] = useState<boolean>(false)

  useEffect(() => {
    if (palavraEncontrada !== "") {
      var valorDaPalavra = 0;
      for (var i = 0; i < palavraEncontrada.length; i++) {
        valorLetras.forEach(v => {
          if (palavraEncontrada[i].toLowerCase() === v.letra.id || palavraEncontrada[i].toUpperCase() === v.letra.id) {
            valorDaPalavra += v.letra.value;
          }
        });
      }
      const valorTotal = total + valorDaPalavra;
      setPontos(valorDaPalavra);
      setTotal(valorTotal);
      setShowResult(true);
      cleanField();
    }
  }, [palavraEncontrada])

  const find = () => {
    const result = findWord(letrasDigitadas);
    if (result.palavraEncontrada !== "") {
      setPalavraEncontrada(result.palavraEncontrada);
      setLetrasRestantes(result.letrasRestantes);
    } else {
      setShowResult(false);
      setMessageError("Palavra não encontrada tente novamente");
    }
  }

  useEffect(() => {
    if (letrasDigitadas !== "") {
      setShowResult(false);
      setPalavraEncontrada("")
      setLetrasRestantes("")
    }
  }, [letrasDigitadas])

  const cleanField = () => {
    setletrasDigitadas("")
    setMessageError("")
  }

  return (
    <Grid container justify="center" alignItems="center" style={{ marginTop: 200 }} direction="column" spacing={5}>
      <Grid item xs={10} md={6}>
        <Paper elevation={3} style={{ padding: 20, height: 300}} className="paper">
          <Grid container justify="center" alignItems="center">
            <h2 className="title">Digite as letras disponíveis nesta jogada</h2>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center" direction="row">
                <TextField id="outlined-basic" label="Digite a palavra" variant="outlined" value={letrasDigitadas} style={{ width: 300 }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setletrasDigitadas(e.target.value)}
                />
                <Button variant="contained" color="secondary" style={{ height: 60 }} onClick={find}>Ok</Button>
              </Grid>
            </Grid>
          </Grid>
          <Tooltip title={`${total} pontos`} aria-label="add" style={{ height: 40, width: 40 }}>
            <Fab color="secondary" className="toolTip">
              {total}
            </Fab>
          </Tooltip>
        </Paper>
      </Grid>
      {
        showResult && (
          <Grid item xs={10} md={6}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Grid container justify="center" alignItems="center" direction="column">
                    <h4 className="findWord">Palavra de {pontos} pontos</h4>
                    <h4 className="findedWord">{palavraEncontrada}</h4>
                  </Grid>
                  <Grid container justify="center" alignItems="center" direction="column">
                    <h4 className="rest">{letrasRestantes ? `Sobraram: ${letrasRestantes}` : 'Não sobrou nenhuma letra'}</h4>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        )
      }
      {messageError && <h4 className="messageError">{messageError}</h4>}
    </Grid>
  );
}

export default Form;