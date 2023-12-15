import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingList = () => {
    const navigate = useNavigate();

    const baseURL = "http://localhost:8080";

    const [bookings, setBookings] = useState([]);

    const getBookings = async () => {
        try {
            const response = await axios.get(baseURL + "/api/v1/booking/from/2023-12-11/to/2023-12-12");
            if (response.status === 200) {
                setBookings(response.data);
            }
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    useEffect(() => {
        getBookings();
    }, []); // The empty dependency array ensures that this effect runs once when the component mounts

    const bookBookingClickHandler = async (id) => {
        // Redirect to BookingForm with the booking ID
        navigate(`/booking-form/${id}`);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {bookings && bookings.length !== 0 && (
                    <h2 className="mb-4">Booking List</h2>
                )}
                <div className="row">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="card mb-4 col-md-3">
                            <div className="card-body">
                                <p className="card-text">DateTime: {booking.dateTime}</p>
                            </div>
                            <div className="d-grid card-footer">
                                <button
                                    type="button"
                                    className={`btn btn-${booking.booked ? 'danger' : 'success'}`}
                                    onClick={() => bookBookingClickHandler(booking.id)}
                                    disabled={`${booking.booked ? 'disabled' : ''}`}
                                >
                                    {booking.booked ? 'Booked' : 'Available'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingList;
