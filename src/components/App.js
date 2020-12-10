import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Loader from '../components/Loader/Loader';
import * as router from '../router';

const App = () => (
  <div>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        {router.routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Suspense>
  </div>
);

export default App;
