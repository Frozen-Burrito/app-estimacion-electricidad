import axios from "axios";

import { axiosClient } from "../api/axios_client";
import { IBlogEntryCreated, IBlogResponse, INewBlogEntry, IUserResponse } from "..";

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

export const publishNewEntry = async (blogEntry: INewBlogEntry): Promise<boolean> => {
    try {
        const result = await axiosClient.post("/blog", blogEntry);

        console.log(result);

        return true;

    } catch (error) {
        console.log("Error trying to publish new blog entry: ", error);

        // const errorResult: IBlogEntryCreated = {
        //     location: "/",
        //     postId: ""
        // } 

        return false;
    }
}

export const getUserWithFirebaseUID = async (uid: string): Promise<IUserResponse | null> => {
    try {
        const result = await axiosClient.get(`/usuarios/firebase/${uid}`);

        console.log(result);

        const userData: IUserResponse = {
            _id: result.data.data._id,
            uid: result.data.data.uid,
            displayName: result.data.data.displayName,
            email: result.data.data.email,
            avatarUrl: result.data.data.avatarUrl,
            providerId: result.data.data.providerId,
            creationTime: result.data.data.creationTime,
        }

        console.log(userData);

        return userData;


    } catch (error) {
        console.log("Error trying to publish new blog entry: ", error);

        return null;
    }
} 