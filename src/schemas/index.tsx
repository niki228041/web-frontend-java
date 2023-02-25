import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    name:yup.string().min(3,"min 3 chars").required("Required"),
    description:yup.string().min(3,"min 3 chars").required("Required"),
    photo:yup.mixed().required("Required"),
})

export const loginSchema = yup.object().shape({
    email:yup.string().email("Not valid email").required("Required"),
    password:yup.string().min(3,"min 3 chars").matches(passwordRules,"not strong enough").required("Required"),
})