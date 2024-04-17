// import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [formData, setFormData] = useState({ answer: "" });

  // const handleAnswerSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(event);
  //   try {
  //     const response = await fetch("your_api_url", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     console.log("Form submitted successfully!", response);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const onSubmit = (data) => {
    console.log(data);
    const {
      name,
      email,
      number,
      gender,
      division,
      district,
      upazila,
      zip,
      instituteName,
    } = data;
    const addData = {
      name,
      email,
      number,
      gender,
      division,
      district,
      upazila,
      zip,
      instituteName,
    };
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            showConfirmButton: false,
            timer: 1500,
            title: "Your Data Stored",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      <h1 className="text-4xl text-primary font-bold">Programming Contest</h1>
      <div className="hero container mx-auto">
        <div className="md:flex justify-between items-center gap-12 px-3">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="md:grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="+088"
                  className="input input-bordered"
                />
                {errors.number && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gander</span>
                </label>
                <select
                  {...register("gender", { required: true })}
                  className="input input-bordered"
                >
                  <option value="female">female</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Division</span>
                </label>
                <input
                  {...register("division", { required: true })}
                  type="text"
                  placeholder="Division"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <input
                  {...register("district", { required: true })}
                  type="text"
                  placeholder="District"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upazila</span>
                </label>
                <input
                  {...register("upazila", { required: true })}
                  type="text"
                  placeholder="Upazila"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ZIP Code</span>
                </label>
                <input
                  {...register("zip", { required: true })}
                  type="number"
                  placeholder="ZIP Code"
                  className="input input-bordered"
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Institute Name</span>
              </label>
              <input
                {...register("instituteName", { required: true })}
                type="text"
                placeholder="Institute Name"
                className="input input-bordered"
              />
            </div>
            {/* <ExampleComponent /> */}

            <div className="form-control mt-1">
              <button disabled className="btn btn-primary">
                Form Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContestForm;
