import { Container, Text } from "@nextui-org/react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function AboutUs() {
  return (
    <Container className="py-12">
      <Text h2 className="text-center">
        About Us
      </Text>
      <Text className="text-center text-lg mb-12">
        Learn more about Stride, our mission, and the team behind the innovation.
      </Text>

      <Card className="mb-6">
        <CardHeader className="font-bold">Our Mission</CardHeader>
        <CardBody>
          <Text>
            At Stride, our mission is to empower individuals and businesses by providing a secure, user-friendly, and innovative platform for cryptocurrency trading and management.
          </Text>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="font-bold">Meet the Team</CardHeader>
        <CardBody>
          <Text>
            Our team consists of industry experts with a passion for technology, security, and financial innovation.
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
