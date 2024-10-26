import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Container, Text } from "@nextui-org/react";

export default function ExploreOurApp() {
  return (
    <Container className="py-12">
      <Text h2 className="text-center">
        Explore Our App
      </Text>
      <Text className="text-center text-lg mb-12">
        Discover the features that make Stride the perfect platform for all your crypto needs.
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="font-bold">User Dashboard</CardHeader>
          <CardBody>
            <Text>
              A comprehensive dashboard to manage your assets, trades, and transactions.
            </Text>
            <Button className="mt-4" href="/explore-our-app">
              View Dashboard
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="font-bold">Trading Tools</CardHeader>
          <CardBody>
            <Text>
              Advanced tools and analytics to help you make informed trading decisions.
            </Text>
            <Button className="mt-4" href="/explore-our-app">
              Explore Tools
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="font-bold">Security Features</CardHeader>
          <CardBody>
            <Text>
              Robust security features to protect your assets and personal information.
            </Text>
            <Button className="mt-4" href="/explore-our-app">
              Learn More
            </Button>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
