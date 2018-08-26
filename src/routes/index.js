import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/structures/homePage/Home';
import Dynamics from '../components/structures/dynamicsComponents/navbarLinks';
import Reference from '../components/contents/extras/reference';
import Argumentacoes from '../components/contents/dinamica01/argumentacoes';
import Richpictures from '../components/contents/dinamica01/richpictures';

export default () => (
  <BrowserRouter basename="/wiki">
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/dinamica" exact component={Dynamics} />
      <Route path="/referencia" exact component={Reference} />
      <Route path="/argumentacoes" exact component={Argumentacoes} />
      <Route path="/richpictures" exact component={Richpictures} />
    </Switch>
  </BrowserRouter>
);
