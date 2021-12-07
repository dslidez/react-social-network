import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component  {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19826
        }
      this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

render() {

    return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      )
   }
}

//сделали разбите на два мапстейта

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose(  //сделали компоуз
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer)


