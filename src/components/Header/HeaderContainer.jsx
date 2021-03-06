import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {getAuth} from "../../api/api";



class HeaderContainer extends React.Component {

    componentDidMount() {

//getAuth - this is our axios request
        this.props.getAuthUserData()

    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);