import React, { useState } from 'react';

export const Form = () => {

  const [data, setData] = useState({
    Name: "",
    age: "",
    email: "",
    city: ""
  });

  const [errors, setErrors] = useState({});


  const validate = () => {
    const newErrors = {};

    if (data.Name.trim() === "") {
      newErrors.Name = "Name is required";
    }

    if (data.age.trim() === "") {
  newErrors.age = "Age is required";
    } else if (Number(data.age)>120 || Number(data.age) <= 0) {
 newErrors.age = "Age must be a valid number";
    }

    if (data.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if ((!data.email.includes("@")) ) {
newErrors.email = "Invalid email format";
    }

    if (data.city.trim() === "") {
      newErrors.city = "City is required";
    }

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
alert("Form submitted successfully ");
      console.log(data);
    }
    else{
      alert("Form is not valid")
    }
  };

 
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <form className="form-fields" onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          name="Name"
  value={data.Name}
          onChange={handleOnChange}
        />
 {errors.Name && <p style={{ color: "red" }}>{errors.Name}</p>}

        <label>Age:</label>
        <input
          name="age"
          value={data.age}
          onChange={handleOnChange}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

        <label>Email:</label>
<input
          name="email"
          value={data.email}
          onChange={handleOnChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>City:</label>
       <input
          name="city"
          value={data.city}
          onChange={handleOnChange}
        />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
