import React from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    return (
        <div>
            <Navbar/>
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Harry Poter</td>
                                    <td>JK Rowling</td>
                                    <td>2000</td>
                                    <td>1990</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>9568465222</td>
                                    <td>Thornton</td>
                                    <td>@abc.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry</td>
                                    <td>9532181252</td>
                                    <td>John</td>
                                    <td>Larry@twitter.com</td>

                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Otto</td>
                                    <td>8515874253</td>
                                    <td>Doe</td>
                                    <td>otto@mdo.in</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jayadeep</td>
                                    <td>7542168852</td>
                                    <td>Joseph</td>
                                    <td>jayadeep@adh.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Bro</td>
                                    <td>732655592</td>
                                    <td>Otto</td>
                                    <td>abc@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Alex</td>
                                    <td>715826595</td>
                                    <td>Hosseph</td>
                                    <td>alex@as.in</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Don</td>
                                    <td>7661615658</td>
                                    <td>Romeo</td>
                                    <td>Don@asd.co.in</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Febin</td>
                                    <td>5655952659</td>
                                    <td>George</td>
                                    <td>febin@mdo.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Ebin</td>
                                    <td>7356771682</td>
                                    <td>Raj</td>
                                    <td>ebin@gm.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewall