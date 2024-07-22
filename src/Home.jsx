// src/Home.jsx
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Home = ({ configData }) => {
    const [dateState, useDateState] = useState(new Date());

    const addr = "3"

    useEffect(() => {
        setInterval(() => useDateState(new Date()), 1000);
    }, []);

    // console.log("home call")
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Table bordered hover responsive style={{ maxWidth: 400, }}>
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
                        <td>{configData.address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Номер СО</th>
                        <td>{configData.soNumber}</td>
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
            {/* {configData.mode} */}
        </div>
    );
};

export default Home;