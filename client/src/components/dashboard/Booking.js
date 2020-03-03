import React, { Component } from 'react';
import Button from '../buttons/Buttons'
import axios from 'axios'
import './dashboard.css'
// new
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingTitle: '',
            description: '',
            startDate: new Date(),
            bookingStatus: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        // console.log(this.state)
    }

    onChange = date => {
        this.setState({ startDate: date })
        // console.log(this.state)
    }

       
    createMyMeeting = async () => {
    let booking = this.state
    console.log(booking)
    try {
        const response = await axios.post("/api/roombookings", booking);
        const responseData = await response.data;
        const bookingResponse = responseData;
        let arr = [];
        arr.push(bookingResponse)
        console.log(arr)
        this.setState({bookingStatus:arr.map(status => status.message)})
        console.log(bookingResponse); 
    } catch (error) {
        console.error(error);
    }  
          
    }

    
    

    render() {
        return (
            <div className='book-container'>
                <p>New Booking</p>
                <form>
                    <label>
                        Meeting Title <br />
                        <input className='book-input'
                            name="meetingTitle"
                            type="text"
                            value={this.state.meetingTitle}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>Description <br />
                        <input className='book-input'
                            name="description"
                            type="text"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <div>
                        <label>Select meeting Room <br />
                            <select value={this.state.room}
                                onChange={this.handleInputChange}
                                name='room' className='book-input'
                                required
                                >
                                <option value="">  ---select room---  </option>
                                <option value="board room">Board Room</option>
                                <option value="marketing room">Marketing Room</option>
                                <option value="sales room">Sales Room</option>
                                <option value="tech room">Tech Room</option>
                            </select>
                        </label>
                        <br />
                        <label>Date & Time <br />
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.onChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={30}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm"
                                required
                            />
                        </label>
                    </div>

                    <br />
                </form>
                <Button
                      className="booking"
                    name='Book Room'
                    click={this.createMyMeeting}
                />
                <div> <p className="output">{this.state.bookingStatus}</p></div>
            </div>
        );
    }
}

export default Booking;