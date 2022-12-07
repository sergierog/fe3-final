import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";



const Form = () => {
  const [sentForm, setSentForm] = useState(false);
  const [name, setName] = useState();
  

  //Aqui deberan implementar el form completo con sus validaciones
  let initialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (valores, { resetForm }) => {
    resetForm();
    setSentForm(true);
    setTimeout(() => {
      setSentForm(false);
    }, 5000);
  };

  let validate = (valores) => {
    let errors = {};
    // Validacion nombre
    if (valores.name.length < 5) {
      errors.name = "Su nombre debe contener al menos 5 letras";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
      errors.name = "Nombre solo debe contener letras espacios";
    }

    // Validacion correo

    if (!valores.email) {
      errors.email = "Debe ingresar un email";
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)
    ) {
      errors.email = "Ingrese un email valido";
    }
    return errors;
  };

  const { handleChange, handleSubmit, values, handleBlur, errors, touched } =
    useFormik({
      initialValues,
      validate,
      onSubmit,
    });

  return (
    <div>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "400px",
          }}
          onSubmit={handleSubmit}
          
         
        >
          <Typography variant="h6" color="black" >
            Contactanos
          </Typography>
          <TextField
            id="outlined-basic"
            label="Nombre completo"
            variant="outlined"
            name="name"
            fullWidth
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            
          />
          {touched.name && errors.name && (
            <div className="error">{errors.name}</div>
          )}

          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            fullWidth
            value={values.email}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}

          <Button
            type="submit"
            variant="contained"
            color="info"
            onClick={(e) => {
              setName(values.name);
            }}
          >
            Agregar
          </Button>
          
        </form>
      </div>
      {sentForm && (
            <p>Gracias {name}, te contactaremos cuanto antes vía mail</p>
          )}
    </div>
  );
};

export default Form;
