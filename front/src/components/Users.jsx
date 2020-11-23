import React, {useEffect} from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {fetchUsers} from '../redux/actions/admin'

const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.admin.users)

  useEffect(() => {
    //fetch all users (ONLY ADMIN)
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      {users.length > 0 ? users.map((u) => <h3 key={u.id}>{u.email}</h3>) : null}
    </div>
  )
}

export default Users;