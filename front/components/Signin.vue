<template>
  <div >
    <div id="sign-in-button"></div>
    <div v-if="!phone_form_sign"> 
    <div v-if="!sign">
      <v-btn @click="googleSignin()" class="btn">
        вход с Google <img src="/google.png" alt="" />
      </v-btn>
      <p></p>
      <v-btn @click="phone_form_sign = !phone_form_sign " class="btn"> вход по номеру телефона </v-btn>
    </div>
    <div v-if="sign">
      <v-alert class="hello-alert" style="box-shadow: 4px 4px 4px #0000004f; " type="success">Привет {{google_name}}</v-alert>
    </div>
    </div>
    <div v-if="phone_form_sign">
      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="phone"
      :rules="phonerules"
      label="Phone"
      required
    ></v-text-field>
        <v-btn
        v-if="code_sign_time === 0"
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
    {{onrecapcha}}
      получить код
    </v-btn>
    <v-btn v-if="code_sign_time <= 60 && code_sign_time >0">
      повторно через {{code_sign_time }} с
    </v-btn>
     </v-form>
      <v-form
      v-if="code_form"
    ref="form_code"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="code"
      :rules="coderules"
      label="code"
      required
    ></v-text-field>
        <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate_code"
    >
      вход
    </v-btn>
     </v-form>
    </div>
    {{codetime}}
  </div>
</template>

<script>
import firebase from 'firebase'
var provider = new firebase.auth.GoogleAuthProvider();
export default {
  computed:{
    codetime(){
      console.log(this.code_sign_time);
      // if (this.code_sign_time == 1){
      //   console.log(this.code_sign_time);
      //   this.stoptime = false;
      // }
    },
    onrecapcha(){
    
  if (process.browser){ 
    console.log('kkk');
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});
  
  }
  }
  },
  data() {
    return {
      code_sign_time:0,
      valid: true,
      stoptime :true,
      phonerules: [
        (v) => v.length > 1 || "номер обязателен",
        (v) => v[0]=='+' || "+ обязателен"
        ],
      coderules: [
        (v) => v.length == 6 || "должно быть 6 знаков",
        (v) => !!v  || "не может быть пустым"
        ],
      sign: false,
      google_name:'',
      phone_form_sign:false,
      code_form:false,
      phone:'+',
      code:''
    };
  },
  methods: {
    stopSec_time(){
      if(this.code_sign_time>0){
        this.code_sign_time = this.code_sign_time -1
      }
    },
    timecode(){
      setInterval(this.stopSec_time, 1000);
        
    },
      validate () {
        this.$refs.form.validate()
        if(this.$refs.form.validate()){
          this.phoneSign() 
        }
      },
      validate_code(){
      this.$refs.form_code.validate()
        if (this.$refs.form.validate()){
        this.codeSignin()
        }
      },
    phoneSign() {
      // const phoneNumber = getPhoneNumberFromUserInput();
      var self = this
      let appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(this.phone, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;

          self.code_form = true
          self.code_sign_time = 60
          self.timecode()
          
        })
        .catch((error) => {
          console.log("eeror");
          console.log(error);
        });
    },
    codeSignin() {
      var self = this
      // const code = getCodeFromUserInput();
     
      // const code = getCodeFromUserInput();
      confirmationResult
        .confirm(this.code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
      
        console.log(user.uid);
          self.code_form = false
          self.phone_form_sign = false
          self.sign=true
          self.google_name = user.uid
          self.code_sign_time=0
        })
        .catch((error) => {
          console.log("error",error);
        });
    },

    googleSignin() {
      var self = this
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;
          self.sign = true;
          self.google_name = user.displayName
          
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
@media(max-width:500px){
  .hello-alert{
  font-size:0.6rem
}
}

</style>
