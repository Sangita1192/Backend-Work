import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md';
import tshirt from './../Images/Story_Img.avif';
import banner from './../Images/Story_Banner.webp';

function StoryView() {
    return (
        <>
            <div className="row m-3 rounded-3 shadow-lg">
                <h5 className=" px-2 py-3 bg-dark-subtle rounded-top-3">View Stories</h5>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Delete
                                    <input type="checkbox" className='ms-2' />
                                </th>
                                <th>  Sr.No. </th>
                                <th>  Story Name </th>
                                <th>  Image</th>
                                <th>  Banner</th>
                                <th>  Description </th>
                                <th>  Action </th>
                                <th>  Status </th>
                            </tr>

                        </thead>
                        <tbody className='border-bottom-secondary'>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>  1</td>
                                <td>  Who We Are? </td>
                                <td>  <img src={tshirt} alt="photo of the product" style={{ width: '70px' }} /></td>
                                <td > <img src={banner} alt="photo of the product" style={{ width: '150px', height:"70px" }} /> </td>
                                <td>  description</td>                                
                                <td >
                                    <div className='d-flex gap-2'>
                                        <MdDelete className='text-danger' /> |
                                        <CiEdit className='text-warning' />
                                    </div>

                                </td>
                                <td>  Display </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default StoryView