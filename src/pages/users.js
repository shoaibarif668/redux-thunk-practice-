import React, {Fragment, useEffect} from "react"
import {useSelector,useDispatch} from "react-redux";
import {nanoid} from "nanoid"
import axios from "axios"
import {fetchUsers, fetchUsersError, fetchUsersSuccess} from "../redux";
import {fetchThunkUsers} from "../redux/users/users-action";

const Users = () =>{
    const users = useSelector(state => state?.fetchUsers)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchThunkUsers())
    },[])
    return(
        <>
            <ul>
                {users?.userData && users?.userData.map((user)=>{
                    return(
                        <Fragment key={nanoid()}>
                            <li>{user.name}</li>
                        </Fragment>
                    )
                })}
                {users?.isLoading && <p>Loading...</p>}
                {users?.error && <p>{users.error}</p>}
            </ul>
        </>
    )
}
export default Users