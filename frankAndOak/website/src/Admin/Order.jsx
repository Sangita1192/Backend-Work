import React from 'react';
import tshirt from './../Images/Story_Img.avif';
import banner from './../Images/Story_Banner.webp';

function Order() {
    return (
        <>
            <div className="row m-3 rounded-3 shadow-lg">
                <h5 className=" px-2 py-3 bg-dark-subtle rounded-top-3">Orders</h5>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Delete
                                    <input type="checkbox" className='ms-2' />
                                </th>
                                <th>  Sr.No. </th>
                                <th>  Order Name </th>
                                <th>  Product Id</th>
                                <th>  Image</th>
                                <th>  Description </th>
                                <th>  Quantity </th>
                                <th>  Price </th>
                                <th>  Status </th>
                            </tr>

                        </thead>
                        <tbody className='border-bottom-secondary'>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>  1</td>
                                <td>  Men's Wear </td>
                                <td>  12345 </td>
                                <td > <img src={tshirt} alt="photo of the product" style={{ width: '70px' }} /> </td>
                                <td>  description</td>
                                <td>1 </td>
                                <td> $150 </td>
                                <td>  Processing.. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Order