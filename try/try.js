document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('form-container');

  const loginForm = `
    <div class="star">★</div>
    <p><em>Life, Unfiltered.</em></p>
    <h2>Log In</h2>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <p style="font-size: 0.8rem; text-align: right; width: 100%;">Forgot Password?</p>
    <button class="btn">Log In</button>
    <p>or</p>
    <div class="facebook-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="fb"> Log In with Facebook</div>
    <p class="link-text">Don’t have an account? <a href="#" onclick="switchForm('signup')">Create One</a></p>
  `;

  const signupForm = `
    <div class="star">★</div>
    <p><em>Life, Unfiltered.</em></p>
    <h2>Create an Account</h2>
    <input type="text" placeholder="Username" />
    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <button class="btn">Sign Up</button>
    <p>or</p>
    <div class="facebook-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="fb"> Log In with Facebook</div>
    <p class="link-text">Already have an account? <a href="#" onclick="switchForm('login')">Log In here</a></p>
  `;

  window.switchForm = function(type) {
    container.innerHTML = type === 'signup' ? signupForm : loginForm;
  };

  switchForm('login');
});



  