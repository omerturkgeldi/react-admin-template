import { useFormik } from "formik";
import React from "react";

const Dashboard = () => {
  const { handleSubmit,handleChange, searchValue } = useFormik({
    initialValues: {
      value: "",
    },
    onSubmit: values => {
        console.log(values)
    }
  });

  return (
    <div>
      <h2>Dashboard</h2>

      <br></br>

      <h4>Search books...</h4>

      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="value"
                //   value={searchValue.value}
                //   onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
