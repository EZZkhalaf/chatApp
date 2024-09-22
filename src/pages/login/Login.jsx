import React from 'react'
import './Login.css';

export const Login = () => {
  return (
    <div className='loginWrap'>
      

      
      <div class="container">
        <div class="screen">
          <div class="screen__content">
                <h1 className='mb'>Login </h1>
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input type="text" class="login__input" placeholder="username" />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input type="password" class="login__input" placeholder="Password" />
              </div>
              <button class="button login__submit">
                <span class="button__text">Log In </span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>				
            <div className='no-account'>
            <a href='#'  className='no-account2'>

              {"dont have an account?"}
            </a>
              
            </div>
            </form>
             
          		</div>
        </div>
      </div>
     
      
    </div>
  )
}
