// src/Home.jsx
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Home = () => {
    const [dateState, useDateState] = useState(new Date());
    // Sample data for the table
    const data = [
        { id: 1, datetime: '2024-07-21 14:30', status: 'Active', address: '123 Main St' },
        { id: 2, datetime: '2024-07-21 15:00', status: 'Inactive', address: '456 Elm St' },
        { id: 3, datetime: '2024-07-22 09:45', status: 'Pending', address: '789 Oak St' },
        // Add more rows as needed
    ];
    const addr = "3"

    useEffect(() => {
        setInterval(() => useDateState(new Date()), 1000);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Table bordered hover responsive style={{ maxWidth: 600 }}>
                {/* <Table bordered hover responsive > */}
                {/* <thead>
                    <tr>
                    <th scope="row">#</th>
                    <th scope="row">First</th>
                    <th scope="row">Last</th>
                    <th scope="row">Handle</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <th scope="row">Адрес</th>
                        <td>Самара, Владимирская ул., 2</td>
                    </tr>
                    <tr>
                        <th scope="row">Номер СО</th>
                        <td>512</td>
                    </tr>
                    <tr>
                        <th scope="row">Режим работы</th>
                        <td>Локальный, текущая фаза - <b>{addr}</b></td>
                    </tr>
                    <tr>
                        <th scope="row">Дата, Время</th>
                        <td>
                            {dateState.toLocaleDateString('ru-RU', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })} { }
                            <b>{dateState.toLocaleString('ru-RU', {
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                hour12: false,
                            })}</b>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Home;