<template>
  <div>
    <div v-if="!sign">
      <v-btn @click="googleSignin()" class="btn">
        вход с Google <img src="/google.png" alt="" />
      </v-btn>
      <p></p>
      <v-btn class="btn"> вход по номеру телефона </v-btn>
    </div>
    <div v-if="sign">
      <v-alert type="success">Успешно!</v-alert>
    </div>
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
      sign: false,
    };
  },
  methods: {
    phoneSign() {
      // const phoneNumber = getPhoneNumberFromUserInput();
      let appVerifier = window.recaptchaVerifier;

      firebase
        .auth()
        .signInWithPhoneNumber(this.phone, appVerifier)

        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          console.log("kkk");
        })
        .catch((error) => {
          console.log("eeror");
          console.log(error);
        });
    },
    codeSignin() {
      // const code = getCodeFromUserInput();
      confirmationResult
        .confirm(this.code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          this.uid = user.uid;

          // ...
        })
        .catch((error) => {
          console.log("error");
        });
    },
    appleSignin() {
      firebase
        .auth()

        .signInWithPopup(provider_apple)
        .then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;

          console.log(token);
          console.log(user.displayName);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(error.code);
          console.log(error.message);
        });
    },
    googleSignin() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;
          this.sign = true;
          setTimeout((console.log('kkk')), 2000);
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(error.code);
          console.log(error.message);
        });
    },

    googleSignout() {
      firebase
        .auth()
        .signOut()

        .then(
          function () {
            console.log("Signout Succesfull");
          },
          function (error) {
            console.log("Signout Failed");
          }
        );
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
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
    },
  },
};
</script>

<style scoped>
img {
  width: 2rem;
}
.btn {
  width: 100%;
  background: white;
  font-size: 0.6rem;
}
</style>
