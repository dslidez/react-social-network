import React from 'react';
import {
    follow,
    setcurrentPage,
    unfollow, togglefollowingProgress, getUsersThunkCreator,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";



class UsersContainer extends React.Component {

    //теперь наш getUsers - это САНК-ЭКШН, а здесь мы отдаем ему каррент пейдж и педжсайз

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    //колбэк функция
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {                               //делается ререндер этого нового объекта
                                             //отдаем юзеру данные которые ему нужны
        return <>
            {this.props.isFetching ? <Preloader /> : Users}
            <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         togglefollowingProgress={this.props.togglefollowingProgress}
                         followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {              //забираем нужные нам данные из стейта
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage. followingInProgress,

    }
}
//теперь мы перенаправляем незалогиненых юзеров на логин с помощью withAuthRedirect
/*let withRedirect = withAuthRedirect(UsersContainer)*/

 //в мап диспатче - экшн креэйторы которые
//коннект делает еще один контейнер вокруг юзерконтейнера

/*export default connect(mapStateToProps, {follow, unfollow, setcurrentPage,
                                    togglefollowingProgress, getUsers: getUsersThunkCreator})  (withRedirect)*/

export default (
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setcurrentPage,
        togglefollowingProgress, getUsers: getUsersThunkCreator})
)(UsersContainer)