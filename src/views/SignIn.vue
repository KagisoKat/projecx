<template>
    <div class="ml-3 mt-3">
    <h1>Sign into Account</h1>
    <p>
      <input
        class="text-black mt-3"
        type="email"
        placeholder="Email"
        v-model="email"
      />
    </p>
    <p>
      <input
        class="text-black mt-3"
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p>
      <button
        class="bg-red-700 rounded text-black mt-3 ml-2 p-2"
        @click="register"
      >
        Submit
      </button>
    </p>
</div>
</template>
    
    <script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref(); //error message
const router = useRouter(); //get reference to our vue router

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("successfully signed in");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid eamil";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with email was found";
        case "auth/wrong-password":
          errMsg.value = " Password incorrect";
          break;
        default:
          errMsg.value = "Email or password incorrect";
      }
    });
};
</script>