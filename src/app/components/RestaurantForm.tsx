"use client"
import axios from 'axios';
import { useState } from 'react';

interface Restaurant {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phone: string;
    offerDetails: string;
}

const RestaurantForm: React.FC = () => {
    const [restaurant, setRestaurant] = useState<Restaurant>({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phone: '',
        offerDetails: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRestaurant((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/restaurants', restaurant);
            console.log('Restaurant registered:', response.data);
        } catch (error) {
            console.error('Error registering restaurant:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow">
            <h2 className="text-2xl mb-4">Register Your Restaurant</h2>
            {Object.keys(restaurant).map((key) => (
                <div key={key} className="mb-4">
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    {key === 'offerDetails' ? (
                        <textarea
                            id={key}
                            name={key}
                            value={(restaurant as any)[key]}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded"
                            rows={4}
                        />
                    ) : (
                        <input
                            id={key}
                            name={key}
                            type="text"
                            value={(restaurant as any)[key]}
                            onChange={handleChange}
                            className="mt-1 p-2 block w-full border rounded"
                        />
                    )}
                </div>
            ))}
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                Register
            </button>
        </form>
    );
};

export default RestaurantForm;