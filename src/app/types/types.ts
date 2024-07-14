// types.ts
export interface Offer {
    id: number;
    restaurantName: string;
    offerDescription: string;
    validUntil: string;
}

export interface FormData {
    restaurantName: string;
    offerDescription: string;
    validUntil: string;
}