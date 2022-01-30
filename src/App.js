import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  function requestDTO(formData) {
    return { ...formData };
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const requestPayload = requestDTO(data);
    console.log("requestPayload", requestPayload);
  };
  return (
    <div className="App">
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
      <div></div>
    </div>
  );
}

export default App;
