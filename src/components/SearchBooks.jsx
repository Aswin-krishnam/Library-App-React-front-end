import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchBooks = () => {
    const [data,setData]=useState(
        {
            "title":"",
  

        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
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
        </div>

    </div>
  )
}

export default SearchBooks