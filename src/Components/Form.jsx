import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";

// const style = {
// 	position: "absolute",
// 	top: "50%",
// 	left: "50%",
// 	transform: "translate(-50%, -50%)",
// 	width: 400,
// 	bgcolor: "background.paper",
// 	border: "2px solid #000",
// 	boxShadow: 24,
// 	p: 4,
// };

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
    }, 3000);
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
          <Typography variant="h6" color="primary">
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
            color="primary"
            onClick={(e) => {
              setName(values.name);
            }}
          >
            Agregar
          </Button>
          {sentForm && (
            <p>Gracias {name}, te contactaremos cuando antes vía mail</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
