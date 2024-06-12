import React, { useState } from 'react'
import Navbar from './Navbar'

const DeleteBooks = () => {
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
        // axios.post("",data).then(
        //     (response)=>{
        //         console.log(response.data)
        //         if (response.data.status=="success") {
        //             alert("Product added Successfully")
                    
        //         } else {
        //             alert("Error")
        //         }   
        //     }
        // ).catch(
        //     (error)=>{
        //         console.log(error.message)
        //         alert(error.message)
        //     }
        // )
    }
  return (
    <div>
        <Navbar/>
<center>
            <h3>Delete Books</h3>
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

                            <button className="btn btn-danger" onClick={readValue}>Delete</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteBooks