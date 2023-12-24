import axios from "axios";

const baseUrl = "https://mobilecart-9pp4.onrender.com/";

export const getAllMobile = async () => {
  const { data } = await axios.get(baseUrl + "api/v1/getAllMobiles");
  return data;
};

export const getMobileDetail = async (id) => {
  const { data } = await axios.get(baseUrl + `api/v1//getMobileDetail/${id}`);
  return data;
};

export const addMobileReview = async (mobileId, message) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
  };
  const { data } = await axios.post(
    baseUrl + `api/v1/createMobileReview`,
    {
      message,
      mobileId,
    },
    config
  );
  return data;
};
