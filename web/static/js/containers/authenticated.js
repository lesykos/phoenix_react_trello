import React            from 'react';
import { connect }      from 'react-redux';
// import {BoardsActions}  from '../actions/boards';
import Header           from '../layouts/header';
import { push } from 'react-router-redux';
import Actions from '../actions/sessions';

class AuthenticatedContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currenUser } = this.props;
    const phoenixAuthToken = localStorage.getItem('phoenixAuthToken');

    if (phoenixAuthToken && !currentUser) {
      dispatch(Actions.currentUser());
    } else if (!phoenixAuthToken){
      dispatch(push('/sign_up'));
    }
    // dispatch(BoardsActions.fetchBoards());
  }

  render() {
    const { currentUser, dispatch } = this.props;

    if (!currenUser) return false;

    return (
      <div className="application-container">
        <Header
          currentUser={currentUser}
          dispatch={dispatch} />
        <div className="main-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps)(AuthenticatedContainer);
