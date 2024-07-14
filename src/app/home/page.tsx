import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Bogo Main Page</h1>
            <div className="space-y-4">
                <Link href="/restaurant-form" className="block bg-blue-500 text-white px-4 py-2 rounded text-center">
                    Restaurant Owners: Submit an Offer
                </Link>
                <Link href="/offers" className="block bg-green-500 text-white px-4 py-2 rounded text-center">
                    View Current Offers
                </Link>
            </div>
        </div>
    );
};