import * as yup from "yup"

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    name:yup.string().min(3,"min 3 chars").required("Required"),
    description:yup.string().min(3,"min 3 chars").required("Required"),
    photo:yup.mixed().required("Required"),
})

export const basicSchemaProductCreate = yup.object().shape({
    name:yup.string().min(3,"min 3 chars").required("Required"),
    description:yup.string().min(3,"min 3 chars").required("Required"),
    photos:yup.mixed().required("Required"),
    price:yup.number().required("Requiered"),
    category_id:yup.number().required("Requiered"),
})

export const loginSchema = yup.object().shape({
    email:yup.string().email("Not valid email").required("Required"),
    // .matches(passwordRules,"not strong enough")
    password:yup.string().min(3,"min 3 chars").required("Required"),
})