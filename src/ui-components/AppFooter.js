import React from 'react';
function AppFooter() {
  return (
	<footer className="container-fluid text-center">
	  <p>Flower Store Copyright</p>  
	  <form className="form-inline">
		<input type="email" className="form-control" size="50" placeholder="Sign up with your email for deals" />
		<button type="button" className="btn btn-danger">Sign Up</button>
	  </form>
	</footer>
  );
}

export default AppFooter;