

 <template>
  <div>
    <button class="mr-2 mt-2 mb-1 bg-red-800 p-2 rounded" @click="handleSignout" v-if="isLoggedIn">Sign out</button>
  </div>
    
</template>
  
 <script setup>
 import { onMounted, ref} from "vue";
 import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
 import { useRouter } from "vue-router";
 const router = useRouter();
 const isLoggedIn = ref(false);

 let auth;
 onMounted (() =>{
 auth = getAuth();
 onAuthStateChanged(auth, (user) =>{
 if (user) {
  isLoggedIn.value = true;
 } else {
  isLoggedIn.value =false;
 }
 
 });
 });

 const handleSignout = () => {
  signOut(auth).then (() => {
  router.push("/sign-in")
  })
  }
</script>
  
  <style></style> 