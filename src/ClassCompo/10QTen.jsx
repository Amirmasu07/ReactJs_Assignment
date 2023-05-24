import React, { Component } from 'react';


function QTen() {
    const Users = [
        {
            id: '01',
            name: 'Amir',
            email: 'amasu411@gmail.com',
            phone: '0123654789'
        },
        {
            id: '02',
            name: 'masu',
            email: 'masu411@gmail.com',
            phone: '9876543210'
        },
    ];
    return (
        <ul>
            {Users.map((data) => (
                <li key={data.id}>
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                </li>
            ))}
        </ul>
    );
}



export default QTen;