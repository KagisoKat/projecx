<template>
    <div class="ml-3 mt-3">
  <h1>Create an Account</h1>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("successfully registered");
      router.push("/sign-in");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>