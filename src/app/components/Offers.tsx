"use client"
import { Offer } from '@/app/types/types';
import React, { useEffect, useState } from 'react';

const OfferList: React.FC = () => {
    const [offers, setOffers] = useState<Offer[]>([]);

    useEffect(() => {
        // In a real app, you'd fetch this data from your backend
        const dummyOffers: Offer[] = [
            { id: 1, restaurantName: 'Pizza Place', offerDescription: 'Buy one pizza, get one free', validUntil: '2024-08-01' },
            { id: 2, restaurantName: 'Burger Joint', offerDescription: 'Buy one burger, get one free', validUntil: '2024-07-31' },
        ];
        setOffers(dummyOffers);
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Current BOGO Offers</h2>
            {offers.map((offer) => (
                <div key={offer.id} className="border p-4 mb-4 rounded">
                    <h3 className="text-xl font-semibold">{offer.restaurantName}</h3>
                    <p>{offer.offerDescription}</p>
                    <p className="text-sm text-gray-500">Valid until: {offer.validUntil}</p>
                </div>
            ))}
        </div>
    );
};

export default OfferList;