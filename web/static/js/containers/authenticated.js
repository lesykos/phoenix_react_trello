import React            from 'react';
import { connect }      from 'react-redux';
// import {BoardsActions}  from '../actions/boards';
// import Header           from '../layouts/header';
import { push } from 'react-router-redux';

class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currenUser } = this.props;

    if (localStorage.getItem('phoenixAuthToken')) {
      dispatch(Actions.currentUser());
    } else {
      dispatch(push('/sign_up'));
    }
    // dispatch(BoardsActions.fetchBoards());
  }

  render() {

  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
