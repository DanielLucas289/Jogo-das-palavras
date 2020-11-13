import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Playgame from './components/game/playgame';
import Presentation from './components/game/presentation';

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route component={Presentation} exact path="/" />
        <Route component={Playgame}  path="/playgame" />              
      </Switch>
  );
};

export default Routes;