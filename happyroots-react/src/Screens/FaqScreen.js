import React, { useState, useCallback } from "react";
import NavigationBar from "./Components/NavigationBar";
import "../App.css";
import { getPlantFaq } from "../Controllers/PerenualApiController";
import { toast } from "react-toastify";
import { debounce } from 'lodash';

const FaqScreen = () => {
    const [faqs, setFaqs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Debounce the fetchFaqs function
    const fetchFaqs = useCallback(debounce(async (searchTerm) => {
        if (!searchTerm) return; // Prevent fetching if searchTerm is empty
        try {
            const responseData = await getPlantFaq(searchTerm);
            console.log('Fetched FAQs:', responseData);
            setFaqs(Array.isArray(responseData) ? responseData : []); // Ensure responseData is an array
        } catch (error) {
            console.error("Error fetching FAQs:", error);
            toast.error("Error fetching FAQs. Please try again.", {
                className: 'toastify-error',
            });
        }
    }, 500), []); // Adjust debounce time as needed

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        fetchFaqs(e.target.value); // Call debounced function
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchFaqs.cancel(); // Cancel any pending debounced calls
        fetchFaqs(searchTerm); // Immediately invoke with current searchTerm
    };

    return (
        <>
          <NavigationBar />
          <div>
            <h2>Frequently Asked Questions</h2>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search FAQs by keyword..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            {faqs.map((faq) => (
                <div key={faq.id}>
                    {faq.default_image && faq.default_image.medium_url && (
                        <img src={faq.default_image.medium_url} alt={faq.question} />
                    )}
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
          </div>
        </>
    );
};

export default FaqScreen;
