"use server"
import dbConn from "../utils/dbConn";
import Contact from "@/models/contact";
export const submitContact = async (data) => {
    try {
        await dbConn();

        await Contact.create(data);
        return {status : "ok" , message: "message sent succesfully"};
        
    } catch (error) {
        return {status: "not-ok" , message: "error"}
    }
} 