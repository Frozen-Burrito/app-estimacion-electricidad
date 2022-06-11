import axios from "axios";
import { IBlogResponse } from "..";

export const getBlogPosts = async (): Promise<IBlogResponse[]> => {
    try {
        const result = await axios.get("http://localhost:5001/api/v1/blog");

        // console.log(result.dat);

        return result.data.data;
    } catch (error) {
        console.log("Unable to fetch blog entries: ", error);

        return [];
    }
}