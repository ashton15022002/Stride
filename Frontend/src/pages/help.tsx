import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function GetHelp() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Get Help</h2>
      <p className="text-center text-lg mb-12">
        Need assistance? Find all the resources and support you need here.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-full sm:w-1/3">
          <Card>
            <CardHeader className="font-bold">FAQs</CardHeader>
            <CardBody>
              Browse through our frequently asked questions to find answers to common issues.
            </CardBody>
          </Card>
        </div>

        <div className="w-full sm:w-1/3">
          <Card>
            <CardHeader className="font-bold">Contact Support</CardHeader>
            <CardBody>
              Get in touch with our support team for personalized assistance.
            </CardBody>
          </Card>
        </div>

        <div className="w-full sm:w-1/3">
          <Card>
            <CardHeader className="font-bold">User Guides</CardHeader>
            <CardBody>
              Step-by-step guides to help you navigate and utilize our platform effectively.
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
