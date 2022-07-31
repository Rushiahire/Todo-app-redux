import React from "react";
import { useSelector , useDispatch} from 'react-redux';
import {onTodoFormTitleChange , onTodoFormDescriptionChange} from '../../store/Action/TodoFormAction';

const AddToList = () => {
  
  const dispatch = useDispatch();

  const formTitle = useSelector((state) => {
    return state.onFormController.title;
  });

  const formDescription = useSelector((state) => {
    return state.onFormController.description;
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit")
  }

  return (
    <div>
      <form className="w-75" onSubmit={onFormSubmit}>
        <div className="row mb-4 mt-5 ">
          <label 
          className="col-sm-2 col-form-label"
          >
            Title :
          </label>
          <div className="col-sm-5">
            <input type="text" 
            className="form-control" 
            id="title" 
            name="title"
            value={formTitle}
            onChange={(event)=>{
              const {value} = event.target;
              console.log(value)
              dispatch(onTodoFormTitleChange(value))
            }}
          />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            Description :
          </label>
          <div className="col-sm-5 ">
            <input
              type="text"
              className="form-control"
              id="description"
              name='description'
              value={formDescription}
              onChange={(event)=>{
                const {value} = event.target;
                console.log(value)
                dispatch(onTodoFormDescriptionChange(value))
              }}
            />
          </div>
        </div>

        <button type="submit" 
        className="btn btn-primary"
        >
          ADD DATA
        </button>
      </form>
      <h1>{formTitle}</h1>
      <h2>{formDescription}</h2>
    </div>
  );
};

export default AddToList;
