import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c47130622d90458cba607aecc8ef2756",
  },
});
