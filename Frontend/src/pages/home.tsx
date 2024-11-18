import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
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
      <section className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        <Card className="h-[425px] w-[300px] ">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Crypto Exchange</p>
            <h4 className="text-white font-medium text-large">Trade your favorite cryptocurrencies</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Crypto Exchange"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
        </Card>
        <Card className="h-[425px] w-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Secure Wallet</p>
            <h4 className="text-white font-medium text-large">Keep your assets safe</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Secure Wallet"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-3.jpeg"
          />
        </Card>
        <Card className="h-[425px] w-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Multi-Currency Account</p>
            <h4 className="text-white font-medium text-large">Access live market data</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Multi-Currency Account"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-2.jpeg"
          />
        </Card>
        <Card className="h-[425px] w-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Real-Time Market Data</p>
            <h4 className="text-white font-medium text-large">Stay ahead of the trends</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Real-Time Market Data"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-5.jpeg"
          />
        </Card>
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
