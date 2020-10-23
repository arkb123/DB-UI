    import React from 'react'
    import { DataGrid } from '@material-ui/data-grid';
    import './AdminLit.css'
    import Button from '@material-ui/core/Button';
    import { Link } from "react-router-dom";

    const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${
            params.getValue('lastName') || ''
        }`,
    },
    ];

    const rows = [
    { id: 1, lastName: 'Bhandari', firstName: 'Aakarshan', age: 19 },
    { id: 2, lastName: 'Toe', firstName: 'Min', age: 22 },
    { id: 3, lastName: 'Selvidge', firstName: 'Kris', age: null },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 32 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 28 },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    export default function AdminList() {
    return (
        <div className="admin-wrapper">
            <h2>Admin list</h2>
            <div className="AdminList-div" style={{ height: 400, width: '70%' }}>
            <DataGrid className= "dataGrid" rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div> 
            <Link to="/welcome"><Button className="report-backButton" variant="contained" color="primary">back</Button></Link> 
        </div>
        
    );
    }
