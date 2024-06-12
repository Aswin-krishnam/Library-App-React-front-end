import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchBooks = () => {
    const [data,setData]=useState(
        {
            "title":"",
        }
    )

    const [result,setResult]=useState([])
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                setResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
                }
  return (
    <div>
        <Navbar/>
<center>
            <h3>Search Books</h3>
        </center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-primary" onClick={readValue}>Search</button>

                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                            
                                result.map(
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

export default SearchBooks