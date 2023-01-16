import axios from "axios";

axios.defaults.baseURL = "https://global-warming.org/api/";

const getData = async (id) => {
  try {
    const response = await axios.get(`${id}-api`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
