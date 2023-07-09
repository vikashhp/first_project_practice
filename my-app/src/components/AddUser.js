import classes from "./AddUser.module.css";
import Button from "./Button";
import { useState } from "react";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [name, setUserName] = useState("");
  const [age, setUserAge] = useState("");
  const [error,setError]=useState()

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(name, age);
    if(name.trim().length===0 || age.trim().length===0){
      setError({
        title:'Invalid Name or Age',
        message:'Something Went Wrong'
      })
      return;
    }
    if(+age<1){
      setError({
        title:'Invalid Age',
        message:'please Enter the age (>1)'
      })
      return;
    }
    props.onAddUser(name,age)
    setUserName('')
    setUserAge('')
  };
  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageHandler = (event) => {
    setUserAge(event.target.value);
  };

  const ErrorHandler=()=>{
    setError(null)
  }



  return (
  <div>
    {error && <ErrorModal title={error.title} message={error.message} onError={ErrorHandler}/>}
    <div className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>UserName</label>
        <input type="text" onChange={usernameHandler} value={name}/>
        <label>Age</label>
        <input type="number" onChange={ageHandler} value={age}/>
        <Button>AddUser</Button>
      </form>
    </div>
    </div>
  );
};

export default AddUser;
