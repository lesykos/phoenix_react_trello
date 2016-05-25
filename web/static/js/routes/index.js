import React                  from 'react'
import { IndexRoute, Route }  from 'react-router';
import MainLayout             from '../layouts/main';
import AuthenticatedContainer from '../containers/authenticated';
import HomeIndexView          from '../views/home';
import RegistrationsNew       from '../views/registrations/new';
import SessionsNew            from '../views/sessions/new';
import BoardShowView          from '../views/boards/show';

export default function configureRoutes(store) {
  return (
    <Route component={MainLayout}>
      <Route path="/" component={AuthenticatedContainer}>
        <IndexRoute component={HomeIndexView} />
        <Route path="/boards/:id" component={BoardsShowView} />
      </Route>

      <Route path="/sign_up" component={RegistrationsNew} />
      <Route path="/sign_in" component={SessionsNew} />
    </Route>
  );
}
