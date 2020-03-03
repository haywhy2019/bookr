import React, { Fragment, useState, useEffect } from 'react';
import { TiPencil } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

const Mymeetings = () => {
    const [booked, setBooked] = useState([]);

    useEffect( () => {
        const getMyMeeting = async () => {
            try {
              const response = await axios.get("/api/roombookings");
              const responseData = await response.data;
              console.log(responseData);
              const meetingRoom = responseData;
              console.log(meetingRoom); 
              setBooked(meetingRoom);
            } catch (error) {
              console.error(error);
            }         
        }
        getMyMeeting()
    },[])
    
   
    
    return (
        <Fragment>
        {booked.map((booked) => {
            return (
                <div className='mymeetings container-fluid'>
                 <p>Scheduled meetings</p>
                <div className="card w-75 customcard">
               <div className="card-body customcard">
                        <div className='utilityicons'>
                            <TiPencil className='edit' /> <AiOutlineClose className='close' />
                        </div>
                        <h5 className="card-title">Meeting name</h5>
                        <p className="card-text">{booked.meetingTitle}</p>
                        <h5  className="card-title">Meeting description</h5>
                        <p className="card-text">{booked.description}</p>
                        <h5  className="card-title">Room Name</h5>
                        <p className="card-text">{booked.room}</p>
                        <h5  className="card-title">Time</h5>
                        <p className="card-text">{booked.startDate}</p>
                     </div>
                </div>
                </div>
            )
        })
        
        }
        
         </Fragment>
            
        //     <div className='mymeetings container-fluid'>
        //         <p>Scheduled meetings</p>
        //         <div className="card w-75 customcard">
        //             <div className="card-body customcard">
        //                 <div className='utilityicons'>
        //                     <TiPencil className='edit' /> <AiOutlineClose className='close' />
        //                 </div>
        //                 <h5 className="card-title">Meeting name</h5>
        //                 <p className="card-text">Meeting description</p>
        //             </div>
        //         </div>
        //     </div>
        
    )
}

// const Mymeetings2 = () => {
//     return (
//         <Fragment>
//             <div className='mymeetings container-fluid'>
//                 <p>Scheduled meetings</p>
//                 <div className="card w-75 customcard">
//                     <div className="card-body customcard">
//                         <div className='utilityicons'>
//                             <TiPencil className='edit' /> <AiOutlineClose className='close' />
//                         </div>
//                         <h5 className="card-title">Meeting name</h5>
//                         <p className="card-text">Meeting description</p>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

export default Mymeetings;
