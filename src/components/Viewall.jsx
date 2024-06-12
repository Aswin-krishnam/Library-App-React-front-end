import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:8080/viewall").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            <center>
                <h3>View All Books</h3>
            </center>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SL No</th>
                                    <th scope="col">Book Title</th>
                                    <th scope="col">Author </th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Published Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            // data.products.map(
                                data.map(
                                (value, index) => {
                                    return <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.title}</td>
                                    <td>{value.author}</td>
                                    <td>{value.price}</td>
                                    <td>{value.pyear}</td>
                                    
                                </tr>
                               }
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewall