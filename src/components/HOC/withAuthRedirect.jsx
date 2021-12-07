import {Redirect} from "react-router-dom";
import React from 'react';
import {connect} from "react-redux";
                                                                        //у нас теперь две контейнерные компоненты,
                                                                        //коннект оборачивает классовую,
                                                                        // из-за этого теперь мы можем не писать isAuth: state.auth.isAuth
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login" />

            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}