import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import React from 'react';
import './styles.css';

const Presentation: React.FC = () => {
  const history = useHistory();
  const playGame = () =>{
    history.push('/playgame')
  }
  return (
    <div className="presentation">
      <h2 className="word-title">Go<span className="words">Words</span><span className="exclamation">!</span></h2>
      <Button variant="contained" color="secondary" style={{ height: 60 }} onClick={playGame} className="word-button">Play Game!</Button>
    </div>
  );
}

export default Presentation;