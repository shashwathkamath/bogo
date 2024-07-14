import OfferList from '@/app/components/Offers';
import React from 'react';

const OffersPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <OfferList />
        </div>
    );
};

export default OffersPage;