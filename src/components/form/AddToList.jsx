import React from 'react';

const AddToList = () => {
    return (
        <div >
            <form className='w-75'>
  <div className="row mb-4 mt-5 ">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Title : </label>
    <div className="col-sm-5">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Description : </label>
    <div className="col-sm-5 ">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary ">ADD DATA</button>
</form>
        </div>
    );
}

export default AddToList;
