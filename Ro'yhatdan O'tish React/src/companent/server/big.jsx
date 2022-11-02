import axios from 'axios';
import React from 'react';
import '../assets/style.css'
import { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
const server = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`

const Api_max = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get(server)
            .then(res => {
                setDatas(res.data)
           
            }).catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <>
          
                <div className="row">

                <Table className='Table' dark hover>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    <p className='bar'>Крипто</p>
                                </th>
                                <th>
                                    <p className='bar'>Название</p>
                                </th>
                                <th>
                                    <p className='bar'>Текущая цена</p>
                                </th>
                                <th>
                                    <p className='bar'>Изменение 24 час</p>
                                </th>
                                <th>
                                    <p className='bar'>Рынок</p>
                                </th>
                                <th>
                                    <p className='bar'>
                                        Рейтинг рыночной капитализации</p>
                                </th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((item, i) => (
                                <tr>
                                    <th scope="row">
                                        <p className='object' >{item.market_cap_rank}</p>
                                    </th>
                                    <td className='text-center'>
                                        <img width={25} height={25} src={item.image} alt="" />
                                    </td>

                                    <td>
                                        <p className='coin object'>{item.id} <sup className='symbol' >{item.symbol}</sup></p>
                                    </td>

                                    {/* ${item.current_price} */}
                                    {item.current_price < 10 ? (
                                        <td className='text-center warning'>
                                            <p className='object' >${item.current_price}</p>
                                        </td>

                                    ) : (
                                        <td className='text-center green'>
                                            <p className='object' >${item.current_price}</p>

                                        </td>
                                    )}


                                    {item.market_cap_change_percentage_24h < 0 ? (
                                        <td className='red'>
                                            <p className='object' >  {item.market_cap_change_percentage_24h}%</p>
                                        </td>
                                    ) : (
                                        <td className='green'>
                                            <p className='object' >  {item.market_cap_change_percentage_24h}%</p>
                                        </td>
                                    )}

                                    <td>
                                       <p className='object' > ${item.market_cap}</p>
                                    </td>
                                
                                    <td>
                                        <p className='text-center object' >{item.market_cap_rank}</p>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </Table>
                 
                </div>


        </>
    );
};


export default Api_max;