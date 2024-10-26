import React from 'react';
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const Home: React.FC = () => {
  return (
    <div className="px-6 py-8 space-y-16 bg-gray-50">

      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">
          ONE ACCOUNT FOR THE WORLD'S MONEY
        </h1>
        <p className="text-xl mb-8">
          Make your money work worldwide, for less. Send, spend and get paid. 40 currencies. All at your fingertips.
        </p>
        <Button as={Link} href="/open-account" color="primary" size="lg" className="hover:bg-blue-700">
          Open an account
        </Button>
        <Button as={Link} href="/send-money" color="secondary" size="lg" className="ml-4 hover:bg-purple-700">
          Send money
        </Button>
      </section>

      {/* Feature Highlights */}
      <section className="flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-8">
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Easy Crypto Exchange
          </h2>
          <p className="text-lg text-gray-600">
            Trade your favorite cryptocurrencies with our user-friendly platform.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Secure Wallet
          </h2>
          <p className="text-lg text-gray-600">
            Keep your assets safe with our top-notch security protocols.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Real-Time Market Data
          </h2>
          <p className="text-lg text-gray-600">
            Access live market data to stay ahead of the trends.
          </p>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="text-center bg-gray-100 py-16 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Users Say
        </h2>
        <blockquote className="text-xl text-gray-600 italic mb-4">
          "Stride has revolutionized the way I trade crypto. The interface is intuitive, and I love the security features."
        </blockquote>
        <p className="text-lg text-gray-600">- Jane Doe, Crypto Enthusiast</p>
      </section>

      {/* Security and Trust */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Your Security is Our Priority
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stride is built with the latest security measures to ensure your assets are protected at all times.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary-600 text-white py-24 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold mb-8">
          Ready to Get Started?
        </h2>
        <Button as={Link} href="/signup" color="primary" size="lg" className="hover:bg-primary-700">
          Create an Account
        </Button>
      </section>
    </div>
  );
};

export default Home;
