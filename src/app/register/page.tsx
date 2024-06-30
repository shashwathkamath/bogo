import Head from 'next/head';
import RestaurantForm from '../components/RestaurantForm';

const Register = () => {
    return (
        <div>
            <Head>
                <title>Register Restaurant</title>
                <meta name="description" content="Register your restaurant for BOGO offers" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="p-4">
                <RestaurantForm />
            </main>
        </div>
    );
};

export default Register;