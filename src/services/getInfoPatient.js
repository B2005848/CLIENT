import { ref } from "vue";

export const getInformationPatient = () => {
  const errorMessage = ref("");
  const username = ref("");
  const first_name = ref("");
  const last_name = ref("");
  const handleGetInformationPatient = async (userId) => {
    try {
      const response = await window.axios.get(
        `http://localhost:3000/api/handle/patient/getinfo/${userId}`
      );
      console.log(response.data);
      if (response.status === 200) {
        username.value = response.data.dataInfo.patient_id;
        first_name.value = response.data.dataInfo.first_name;
        last_name.value = response.data.dataInfo.last_name;
      }
    } catch (error) {
      console.error(
        "An error occurred while get data information patient:",
        error
      );
    }
  };

  return {
    handleGetInformationPatient,
    errorMessage,
    username,
    first_name,
    last_name,
  };
};
