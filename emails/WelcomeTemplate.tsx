import * as React from "react";

import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

import { CSSProperties } from "react";

interface EmailTemplateProps {
  name: string;
}

const WelcomeTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text className="font-bold text-3xl ">Hello {name}</Text>
            <Link href="https://www.google.com/">www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

export default WelcomeTemplate;
