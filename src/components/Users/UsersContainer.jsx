import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/userReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => { 
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  } 
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer
