import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase'


export const Register = () => {



    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => { 
        e.preventDefault();
        const { name, value } = e.target;
        setData((data) => ({ 
            ...data,
            [name]: value
        }))   
        console.log(data)     
    }

const handleSubmit = async(e) => { 
    e.preventDefault();
    try {
        // const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
          
          // console.log(email)
      
        //    showMessage("Welcome: " + email, "success")
      
        console.log(userCredential)
      
        } catch (error) {
            console.log(error)
        //   if (error.code === "auth/email-already-in-use") {    
        //     showMessage('email already in use', 'error')
        //   } else if (error.code === "auth/invalid-email") {
        //     showMessage('Invalid email', 'error')
        //   } else if (error.code === "auth/weak-password") {
        //     showMessage('Password inavalid', 'error')
        //   } else if (error.code) {
        //     showMessage('Something went wrong', 'error')
        //   }
        }
      };

  return (
    <form action="submit">
            <label htmlFor="email">Email:</label>
            <input name="email" value={data.email} onChange={handleChange} type="email" className="form-control mb-3" placeholder="Email" required />
            <label htmlFor="password">Password:</label>
            <input name="password" value={data.password} onChange={handleChange} type="password" className="form-control mb-3" placeholder="Password" required />
            <button onClick={handleSubmit} className="btn btn-primary">Login</button>
        </form>
  )
}

