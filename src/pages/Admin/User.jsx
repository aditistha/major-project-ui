import * as React from "react";
import Table from "@mui/material/Table";
import { useNavigate } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {createUser, getAllUsers} from "../../api/userAction";
import {useEffect, useState} from "react";


const rows = [
    {Firstname:"Ram",Lastname:"stha", Email:"example@gmail.com", Password:"fsghshsdc", Address: "baneshwor", Phone: "9818035087", Gender:"male", Jobtitle:"cashier", Date: "2020/02/22", Salary: "1000", Status: "Full-time"},
]


export default function BasicTable() {
    const [data, setData] = useState([])

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/RegisterDB");
    };

    useEffect(() => {
        getAllUsers().then(
            success => {
                if(success.data) {
                    console.log(success.data)
                    //TODO uncomment below line if api gives success message
                    // setData(success.data)
                }else{
                    console.log("Empty Error Response")
                }
            },
            error => {
                if(error.response) {
                    //Backend Error message
                    console.log(error.response)
                }else{
                    //Server Not working Error
                    console.log("Servier not working")
                }
            }
        )
        //TODO remove below line if api is working
        setData(rows);

    }, [])

    return (
        <>
            <div className="Table">
                <h3>Employees</h3>
                <div className="registerbtn mb-5 mt-5">
                    <Button variant="contained" color="primary" onClick={handleRegisterClick}>Register Employee</Button>
                </div>
                <TableContainer
                    component={Paper}
                    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>FirstName</TableCell>
                                <TableCell align="left" >LastName</TableCell>
                                <TableCell align="left" >Email</TableCell>
                                <TableCell align="left" >Password</TableCell>
                                <TableCell align="left" >Address</TableCell>
                                <TableCell align="left" >Phone</TableCell>
                                <TableCell align="left" >Gender</TableCell>
                                <TableCell align="left" >Job Title</TableCell>
                                <TableCell align="left" >Date of hire</TableCell>
                                <TableCell align="left" >Salary</TableCell>
                                <TableCell align="left" >Status</TableCell>
                                <TableCell align="left" >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ color: "white" }}>
                            {data.map((row, idx) => (
                                <TableRow
                                    key={idx}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.Firstname}
                                    </TableCell>
                                    <TableCell align="left" className="table-cell">{row.Lastname}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Email}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Password}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Address}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Phone}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Gender}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Jobtitle}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Date}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Salary}</TableCell>
                                    <TableCell align="left" className="table-cell" >{row.Status}</TableCell>
                                    <TableCell align="left" className="Details">
                                        <Button className=" bg-success" style={{ border: "none", color: "white", height: "25px" }}>Edit</Button>
                                        <Button style={{ marginTop: "5px", backgroundColor: "#CD5C5C", border: "none", color: "white", height: "25px" }}>Delete</Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

//TODO for creating User use below function inside functional component
// function createData(payload) {
//     createUser(payload).then(
//         success => {
//             if(success.data) {
//                 console.log(success.data);
//             }else{
//                 console.log("Empty Error Response")
//             }
//         },
//         error => {
//             if(error.response) {
//                 //Backend Error message
//                 console.log(error.response)
//             }else{
//                 //Server Not working Error
//             }
//         }
//     )
// }