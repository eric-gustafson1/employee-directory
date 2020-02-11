import React, { useState, useEffect } from 'react';
import API from '../../utils/API'


const Table = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        API.getUsers().then(results => {
            setUsers(results.data.results)
        })
    }, []);
    console.log(users)



    return (
        <>
            {users.map(({ login, name, picture, phone, email }) => {
                return (


                    <tr key={login.uuid}>
                        <td> <img src={picture.thumbnail} alt={name} /></td>
                        <td>{name.first}</td>
                        <td>{name.last}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                    </tr>

                )

            })}

        </>
    )

}

export default Table;