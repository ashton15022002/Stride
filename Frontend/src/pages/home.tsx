import React from 'react';
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const Home: React.FC = () => {
  return (
    <div className="px-6 py-8 space-y-16 bg-[#131314]">

      {/* Hero Section */}
      <section 
        className="flex flex-col justify-center items-center text-center text-white rounded-lg min-h-screen"
        style={{ background: 'linear-gradient(134.15499077679797deg, #76339a 0%, #cf461d 100%)' }}
      >
        <h1 className="text-5xl font-extrabold mb-2">
          A Unified Account For All Your Finances
        </h1>
        <p className="text-xl mb-10">
         Send, spend and receive money from anywhere in the world. Infinite currencies. All at your fingertips.
        </p>
        <Button as={Link} href="/open-account" color="primary" size="lg" className="hover:bg-blue-700 mt-10">
          Open an account
        </Button>
      </section>

      {/* Feature Highlights */}
      <section className="flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-8">
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Crypto Exchange
          </h2>
          <p className="text-lg text-gray-600">
            Trade your favorite cryptocurrencies with our user-friendly platform.
          </p>
        </div>
        <div className="text-center bg-blue-100 p-6 rounded-lg shadow-lg transform scale-105">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Secure Wallet
          </h2>
          <p className="text-lg text-gray-600">
            Keep your assets safe with our top-notch security protocols.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Stocks
          </h2>
          <p className="text-lg text-gray-600">
            Access live market data to stay ahead of the trends.
          </p>
        </div>
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Multi-Currency Account
          </h2>
          <p className="text-lg text-gray-600">
            Access live market data to stay ahead of the trends.
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
