import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBooks = () => {
    const [data,setData]=useState(
        {
            "title":"",
            "category":"",
            "pyear":"",
            "author":"",
            "description":"",
            "dname":"",
            "pname":"",
            "price":"",
            "edition":"",

        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Books added Successfully")
                    
                } else {
                    alert("Error")
                }   
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <center>
            <h3>Add Books</h3>
        </center>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Category</label>
                            <select id="" className="form-control" name='category' value={data.category} onChange={inputHandler}>
                                <option value="SCIF">SCIF</option>
                                <option value="Horror">Horror</option>
                                <option value="History">History</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Published year</label>
                            <input type="text" className="form-control" name='pyear' value={data.pyear} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Author Name</label>
                            <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Description</label>
                            <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>

                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Distributed Name</label>
                            <input type="text" className="form-control" name='dname' value={data.dname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Publisher Name</label>
                            <input type="text" className="form-control" name='pname' value={data.pname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Edition</label>
                            <input type="text" className="form-control" name='edition' value={data.edition} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success" onClick={readValue}>Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddBooks