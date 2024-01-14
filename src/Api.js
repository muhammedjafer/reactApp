import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5_9NEbofybgIMeTT7v7tZZBT3rMgY5iKeNSUaNmbGRI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
