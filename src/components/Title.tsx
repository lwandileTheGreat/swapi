import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

interface FormValues {
  search: string;
}

const Header: React.FC = () => {
  const initialValues: FormValues = { search: "" };

  let navigate = useNavigate();


  const handleSubmit = (search: string) => {
    navigate(`/search/${search}`);
  };

  return (
    <div className="text-black">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        rel="stylesheet"
      />

      <div className="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
        
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            handleSubmit(values.search);
            actions.setSubmitting(false);
          }}
        >
          
          <Form className="w-screen md:w-1/5 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <Link to='/' ><img  src={require("../images/logo192.png")} alt="logo" width='20%' height='5%'/></Link> 


            <Field
              className="flex-grow px-2 rounded-l-full rounded-r-full text-sm focus:outline-none"
              id="search"
              name="search"
              placeholder="Search for a name"
            />

            <button
              type="submit"
              className="fas fa-search text-lg text-gray-700 w-5 h-5"
            ></button>
          </Form>
        </Formik>
        <p style={{textAlign: 'center'}}>Welcome to the Star Wars Character/s website, where you get a chance to know more about your favourite characters⭐</p>
      </div>
    </div>
  );
};

export default Header;
