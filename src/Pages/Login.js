import { useFormik} from 'formik'
import * as Yup from 'yup'

const Login = () => {
    const formik = useFormik ({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
            .required("Username est requis"),
            password: Yup.string()
            .min(5, "Password trop court")
            .required("Password est requis")
        }),

    })

    return(
        <>
        <div>
            <p className="text-center bg-dark text-light p-3 col-5 my-2 mx-auto">LOGIN</p>
        </div>
        <div className="mx-2 bg-secondary border border-dark rounded my-2 d-flex justify-content-center">
        <form onSubmit={formik.handleSubmit}>
            <p>Username</p>
            <input
            type="text"
            name="username"
            placeholder="enter username"
            value={formik.values.username}
            onChange={formik.handleChange}
            />
            {formik.errors.username && <p>{formik.errors.username}</p>}
            <br />
            <p>Password</p>
            <input
            type="text"
            name="password"
            placeholder="enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            />
            {formik.errors.password && <p>{formik.errors.password}</p>}
            <br />
            <button className="text-center bg-dark text-light p-3 col-12 my-2" type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default Login