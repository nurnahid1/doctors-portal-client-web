import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';


const Users = () => {
    const {
        data: users,
        isLoading,
        refetch,
      } = useQuery("users", () =>
        fetch("https://doctors-portal-server-ten-murex.vercel.app/user", {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );

    // const {data: users, isLoading} = useQuery('users', ()=> fetch('https://doctors-portal-server-ten-murex.vercel.app/users', {
    //     method: 'GET',
    //     headers:{
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //       }
    // }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='text-2xl text-green-500'>All users: {users.length}</h4>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {/* {
            users.map((user, index) => <UserRow
            key={user._id}
            user={user}
            index={index}
            ></UserRow>)
        } */}

            {
            users.map((user, index) => (
              <UserRow key={user._id} user={user} index={index} 
              refetch={refetch}
              ></UserRow>
            ))
            }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;