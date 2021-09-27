import React from "react";

const UserList = (props) => {
    <div className="card">
        return (
        <ul>
            {props.user.map((user) => (
                <li>
                    {user.firstname} {user.lastname} {user.email} {user.enterpriseId} {user.birthdate}
                </li>
            ))}
        </ul>
     



    </div>
    return (
        <ul>
            {props.user.map((user) => (
                <li>
                    {user.firstname} {user.lastname} {user.email} {user.enterpriseid} {user.birthdate}
                </li>
            ))}
        </ul>
    );        
};

export default UserList;
