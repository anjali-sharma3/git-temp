import React, { useState } from 'react';
const Login=()=>{
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    return(
        <>
        <div className="login-container">
            <div className="form-container">
                <form action="">
                    <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name='name' placeholder='Enter your name' value={name} autoComplete='off' onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                    </div>
                    <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name='email' placeholder='e.g. john@gmail.com' value={email} autoComplete='off' onChange={(e)=>{
                        setEmail(e.target.value)

                    }}/>
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name='password' value={password} autoComplete='off' onChange={(e)=>{
                        setPassword(e.target.value)

                    }}/>
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name='password' value={password} autoComplete='off' onChange={(e)=>{
                        setPassword(e.target.value)

                    }}/>
                    </div>
                    <div>
                    <label htmlFor="confirm-password">Password</label>
                    <input type="confirm-password" id="confirm-password" name='password' value={password} autoComplete='off' onChange={(e)=>{
                        setPassword(e.target.value)

                    }}/>
                    </div>
                    <div>
                    
                    <input type="submit" id="submit" name='submit' value='submit'/>
                    </div>

                </form>
            </div>
            
        </div>

        </>
    );
}
export default Login;