import { FormData } from '@/app/types/types';
import React, { useState } from 'react';

const RestaurantForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        restaurantName: '',
        offerDescription: '',
        validUntil: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send this data to your backend
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ restaurantName: '', offerDescription: '', validUntil: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Submit a BOGO Offer</h2>
            <div>
                <label htmlFor="restaurantName" className="block">Restaurant Name</label>
                <input
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>
            <div>
                <label htmlFor="offerDescription" className="block">Offer Description</label>
                <textarea
                    id="offerDescription"
                    name="offerDescription"
                    value={formData.offerDescription}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                ></textarea>
            </div>
            <div>
                <label htmlFor="validUntil" className="block">Valid Until</label>
                <input
                    type="date"
                    id="validUntil"
                    name="validUntil"
                    value={formData.validUntil}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit Offer
            </button>
        </form>
    );
};

export default RestaurantForm;