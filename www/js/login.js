/* This JavaScript file read and write new user data to respective classes.
 * This page redirects the account sign up according to roles,  
 * eg. student or teacher.
 */

//Getting a reference to the database service
var database = firebase.database();

	firebase.auth().onAuthStateChanged(function(is_Student)  //this function writes user account to s_users
	{
		if (is_Student) 
		{
			// User is signed in.
			document.getElementById("message").innerHTML = "<h3> Hello, Student </h3>";			
		  } 

		else 
		{
		    console.log("No User!");
		}
	});



firebase.auth().onAuthStateChanged(function(is_Teacher)  //this function writes user account to t_users
		{
		    if (is_Teacher == true && is_Student == false) 
		    {
		        // User is signed in.
		        var displayName = user.displayName;
		        var email = user.email;
		        var emailVerified = user.emailVerified;
		        var photoURL = user.photoURL;
		        var uid = user.uid;
		        var providerData = user.providerData;
		        
		        user.getIdToken().then(function(accessToken) 
		        {
		        	document.body.innerHTML = '<h3> Hello, Teacher </h3>';
		          document.getElementById('sign-in-status').textContent = 'Signed in';
		          document.getElementById('sign-in').textContent = 'Sign out';
		          document.getElementById('account-details').textContent = JSON.stringify({
		            displayName: displayName,
		            email: email,
		            emailVerified: emailVerified,
		            phoneNumber: phoneNumber,
		            photoURL: photoURL,
		            uid: uid,
		            accessToken: accessToken,
		            providerData: providerData
		          }, null, '  ');
		        });
		      } 
		    
		    else 
		    {
		        // User is signed out.
		        document.getElementById('sign-in-status').textContent = 'Signed out';
		        document.getElementById('sign-in').textContent = 'Sign in';
		        document.getElementById('account-details').textContent = 'null';
		      }
		    }, function(error) {
		      console.log(error);
		    }
		    );

  window.addEventListener('load', function() {
    initApp()
  });