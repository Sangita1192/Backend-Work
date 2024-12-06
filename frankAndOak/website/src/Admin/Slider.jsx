import React from 'react'

function Slider() {
    return (
        <>
            <div className="row m-3 rounded-3 shadow-lg">
                <h5 className=" px-2 py-3 bg-dark-subtle rounded-top-3">Add Slider</h5>
                <div className='p-5 pt-2'>
                    <label htmlFor="" className='form-label'> Slider Name </label>
                    <input type="text" placeholder='Slider Name' className='form-control mb-3' />
                    <label htmlFor="" className='form-label'>Heading </label>
                    <input type="text" placeholder='Heading' className='form-control mb-3' />
                    <label htmlFor="" className='form-label'>Sub Heading </label>
                    <input type="text" placeholder='Sub Heading' className='form-control mb-3' />
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Image</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className='d-flex gap-4 align-items-center mt-3'>
                        <label htmlFor="" className='form-label'> Status </label>
                        <input type="radio" /> Display
                        <input type="radio" /> Hide
                    </div>
                    <button className='mt-4 btn btn-primary px-3 text-white' > Add Slider </button>
                </div>

            </div>
        </>
    )
}

export default Slider