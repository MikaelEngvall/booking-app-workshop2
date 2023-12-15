import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate, useParams } from "react-router-dom";
import Header from './Header';
import BookingList from './BookingList';
import BookingForm from './BookingForm';

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/booking' element={<BookingList />} />
                    <Route path='/booking-form' element={<BookingForm />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/cancel' element={<CancelBooking />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

            </Router>
        </div>
    );
};


const Home = () => {
    const navigate = useNavigate();

    return (<div>
        <h1>Home Component</h1>
        <a href='#' className='btn btn-outline-danger' onClick={() => navigate(-1)}>Back</a>
        <a href='#' className='btn btn-outline-info' onClick={() => navigate('/about')}>About</a>
    </div>)
}
const About = () => <h1>About Component</h1>
const CancelBooking = () => <h1>Cancel Booking Component</h1>;

const DetailsBooking = () => {
    const params = useParams();

    // using useEffect you can call get booking details by id and then set the response data 
    // into the booking object and display data in a card

    return (
        <div>
            <h3>Details</h3>
            <p>ID: {params.id}</p>
        </div>
    )
};

const NotFound = () => <h1>404</h1>;

export default AppRoutes;