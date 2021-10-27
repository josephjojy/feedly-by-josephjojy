import axios from "axios";

const URL = "https://inshortsapi.vercel.app/news?category="

const feed = (category) => {
    const res = await axios.get(`${URL}${category}`);
    return res.data;
}

export {feed}