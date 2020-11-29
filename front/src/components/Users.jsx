import React, {useEffect} from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {fetchUsers} from '../redux/actions/admin';
import Navbar from './NavbarComponent';

// Bootstrap
import {Table} from 'react-bootstrap'
 
const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.admin.users)

  useEffect(() => {
    //fetch all users (ONLY ADMIN)
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <Navbar />
      <Table striped bordered hover variant="dark" style={{marginTop: '20px'}}>
  <thead>
    <tr>
      <th>ID</th>
      <th>Email</th>
      <th>Admin</th>
    </tr>
  </thead>
  <tbody>

  {users.length > 0 ? users.map((u) =>   <tr key={u.id}>
      <td>{u.id}</td>
      <td>{u.email}</td>
      <td>{u.admin ? 'true' : 'false'}</td>
    </tr>) : null }

  </tbody>
</Table>
     
    </div>
  )
}

export default Users;