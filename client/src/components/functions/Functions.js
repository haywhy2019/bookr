import React, { Fragment } from 'react';
import axios from 'axios';

const Functions = () => {
    return (
        <Fragment>
            <div>

            </div>
        </Fragment>
    )
}

export const getSalesRoom = async () => {
    try {
        const response = await axios.get('http://localhost:5000/allRooms');
        console.log(response);
        const responseData = await response.data;
        console.log(responseData);
        const salesroomData = responseData[0];
        let arr = []
        arr.push(salesroomData);
        console.log(arr);

    } catch (error) {
        console.error(error);
    }
}

export default Functions; 