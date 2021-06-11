<template>
<div style="margin-top:6rem">
    <div id="recaptcha-container"></div>
<form @submit.prevent="register">
  <input type="email" v-model="email" placeholder="Your email address" />
  <br>
  <p></p>
  <input type="password" v-model="password" placeholder="Your password" />
  <br>
  <p></p>
  <input type="password" v-model="registrationPassword" placeholder="Re-enter password" />
  <br>
  <p></p>
  <button>Register</button>
</form>

<form @submit.prevent="login">
    <h2>login</h2>
    <input type="email" v-model="email" placeholder="Your email address" />
  <br>
  <p></p>
  <input type="password" v-model="password" placeholder="Your password" />
  <br>
  <button>login</button>
</form>
<h4>google auth</h4>
<button @click="googleSignin()" >Google Signin</button>
<p></p>
<button @click="googleSignout()">Google Signout</button>
<p></p>
<h4>Apple auth </h4>
<button @click="appleSignin()" >apple Signin</button>
<p></p>
<h3>phone sign in</h3>

<input type="text" v-model="phone" placeholder="phone" />

<button id="sign-in-button"  @click="phoneSign()">получить код</button>
<p></p>
<input type="text" v-model="code" placeholder="phone" />
{{uid}}
<button @click="codeSignin()">войти по коду</button>

</div>
</template>

<script>
import firebase from 'firebase'

var provider = new firebase.auth.GoogleAuthProvider();



export default {
    created(){
  if (process.browser){ 
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});
  
  }
  },
data() {
  return {
    email: '',
    password: '',
    registrationPassword: '',
    phone:'',
    code:'',
    uid:''
  }
},

methods: {

  phoneSign(){
    // const phoneNumber = getPhoneNumberFromUserInput();
    let appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(this.phone, appVerifier)
  
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      console.log('kkk');
    }).catch((error) => {
      console.log('eeror');
      console.log(error);
    });
  },
  codeSignin(){
    // const code = getCodeFromUserInput();
    confirmationResult.confirm(this.code).then((result) => {
  // User signed in successfully.
    const user = result.user;
    this.uid = user.uid
    
  // ...
  }).catch((error) => {
    console.log('error');
  });
  },
    appleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider_apple).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user.displayName)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
},
  googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      this.uid = user.displayName
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
},
googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
},
    login(){
firebase.auth().signInWithEmailAndPassword(this.email, this.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user.uid);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    },
  register() {
firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user.uid);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  }
}
}
</script>