import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authenticate-login";

export const useLoginPatient = () => {
  const router = useRouter();
  const authStore = useAuthStore();

  const loginData = ref({
    username: "",
    password: "",
  });

  const errorMessage = ref("");

  const handleLogin = async () => {
    try {
      const response = await window.axios.post(
        "http://localhost:3000/api/patient/account/login",
        loginData.value
      );
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;

        // Save status login into store Pinia
        authStore.login(loginData.value.username, accessToken, refreshToken);

        // navigate to list product page
        router.push({ name: "home.page.product" });
        console.log("Login success", loginData.value.username);
      }
    } catch (error) {
      errorMessage.value = error.response?.data?.message || "Login failed";
      console.log(error.response.data.message);
    }
  };

  return {
    loginData,
    handleLogin,
    errorMessage,
  };
};
