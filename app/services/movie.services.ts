import axios from "axios";

const API_BASE_URL = 'https://api.themoviedb.org/3' ;

const client = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: process.env.API_KEY}
});

export const searchMovies = async(query: string) => {
    try {
        const response = await client.get("/search/movie", {
            params: {query}
        });

        if(response.data && response.data.results) {
            return response.data.results;
        } else {
            console.error("Whoops! Our movies are playing hide-and-seek with the code. Time to channel our inner detective and solve this reel mystery! 🕵️‍♂️🎥")
        }
    } catch(error) {
        console.error(error);
        return [];
    }
}