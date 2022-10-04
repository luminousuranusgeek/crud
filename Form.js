import React from "react";
import {Input} from "antd";

const FormElement = ({handleSubmit,name,setName})=>(
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <Input
            type="text"
            placeholder="Enter Name"
            value={name}
            style={{width:"50%"}}
            autoFocus
            required
            />
           <br/>
           <button className="btn btn-primary mt-1"></button>
        </div>
        </form>

);
export default FormElement;
