import React from 'react'

function StoryDetail() {
    return (
        <>
            <div className="row m-3 rounded-3 shadow-lg">
                <h5 className=" px-2 py-3 bg-dark-subtle rounded-top-3">Our Stories</h5>
                <div className='p-5 pt-2'>
                    <label htmlFor="" className='form-label'> Story Name </label>
                    <input type="text" placeholder='Story Name' className='form-control' />
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Image</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Banner Image</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    
                    <label htmlFor="" className='form-label mt-3'>Description </label>
                    <textarea className='form-control mb-3' placeholder="description" />
                    <div className='d-flex gap-4 align-items-center mt-3'>
                        <label htmlFor="" className='form-label'> Status </label>
                        <input type="radio" /> Display
                        <input type="radio" /> Hide
                    </div>


                    <button className='mt-4 btn btn-primary px-3 text-white' > Add Story </button>
                </div>

            </div>
        </>
    )
}

export default StoryDetail