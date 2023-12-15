import React, { useState } from "react";

const BookingForm = ({ bookingId, onBookingSubmit }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any validation or additional logic here
        onBookingSubmit({ bookingId, email });
    };

    return (
        <div>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="bookingId" className="form-label">Booking ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="bookingId"
                        value={bookingId}
                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
