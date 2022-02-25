import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [values, setValues] = useState();

 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setValues()
    
  };
  return (
    <div className="App">
      {/* <h1> {values}</h1> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="class"
          {...register("education.0.class")}
        />
        <input
          type="text"
          placeholder="collage"
          {...register("education.0.collage")}
        />
        <input
          type="text"
          placeholder="school"
          {...register("education.0.school")}
        />{" "}
        <br />
        <input type="Submit" />
      </form>
    </div>
  );
}

export default App;
