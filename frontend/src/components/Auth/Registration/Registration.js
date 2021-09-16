import './Registration.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import  schema   from "./validation";
import "animate.css";


function Registration() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submiteForm = (data) => {
        console.log(data);
    }
    
    return (
        <div className="form-container">
        <form onSubmit={handleSubmit(submiteForm)}>
            <div className="mb-3">
                <label  for="email" className="form-label">Email address</label>
                <input type="email"  className="form-control" id="email" placeholder="Email" aria-describedby="emailHelp" {...register("email")}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                
                <p className="authError animate__animated animate__flash animate__delay-2s" >{errors.email?.message}</p>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password"  className="form-control" id="password" placeholder="Password" {...register("password")}/>
                <p className="authError animate__animated animate__flash animate__delay-2s	">{errors.password?.message}</p>
            </div>
            <div className="mb-3">
                <label for="confirmPassword" className="form-label">Confirm password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Password" {...register("confirmPassword")}/>
                <p className="authError animate__animated animate__flash animate__delay-2s">{errors.confirmPassword && "incorrect"}</p>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
  </div>
    );
  }
  
  export default Registration;