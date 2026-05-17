import React, {useEffect, useState} from 'react';
import {DataGrid} from '@miu/x-data-grid';

function DataTable(){
    const[rows, setRows]=useState([]);
    const columns=[
        { field: 'id', headerName: 'ID', whidth: 70},
        { field: 'name', headerName: 'Name', width: 130},
        { field: 'email', headerName: 'Email', width: 200},
    ];

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((data)=>{
                const newRows=data.map((item)=>({
                id: item.id,
                name: item.name,
                email: item.email,
            }));
            setRows(newRows);
        });
    }, []);
    
    return(
        <div style={{ height: 400, width: '100%'}}>
            <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={5}
            />
        </div>
    );
}

export default DataTable;
