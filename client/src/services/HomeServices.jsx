import axios from "axios";

const baseUrl = "http://localhost:3001/board";

export const createBoard = async (props) => {
    try {
        const res = await axios.post(baseUrl, props);
        return res.data; // Return the response data for further use
    } catch (error) {
        console.error("Cannot create Board:", error); // Log the error details
        throw error; // Rethrow the error to handle it further up the call chain if needed
    }
}

export const boardTitleUpdate = async (Title, boardId) => {
    try {
        await axios.put(`${baseUrl}/${boardId}`, { Title: Title });
    } catch (error) {
        console.error("Cannot update Board title:", error); // Log the error details
        throw error; // Rethrow the error to handle it further up the call chain if needed
    }
}
