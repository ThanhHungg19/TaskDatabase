import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../Background";
import { register } from "../../../services/AuthServices";
import {
  BgContainer,
  Container,
  TrelloIconContainer,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Button,
  Text,
  Icon,
  Hr,
  Link,
} from "./Styled";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleIndex = () => {
    navigate("/");
  };

  const [userInformations, setUserInformations] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Email: "",
    Password: "",
  });

  useEffect(() => {
    document.title = "Create a Trello Account";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerResult = await register(userInformations);
    if (registerResult.success) {
      // Navigate to the login page upon successful registration
      navigate("/login");
    } else {
      // Handle registration failure (display error message, etc.)
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <BgContainer>
        <Background />
      </BgContainer>
      <Container>
        <TrelloIconContainer onClick={handleIndex}>
          <Icon src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" />
        </TrelloIconContainer>
        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Sign up for your account</Title>
              <Input
                type="text"
                placeholder="Enter First Name"
                required
                value={userInformations.FirstName}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    FirstName: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                placeholder="Enter Last Name"
                required
                value={userInformations.LastName}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    LastName: e.target.value,
                  })
                }
              />
              <Input
                  type="text"
                  placeholder="Enter Username"
                  required
                  value={userInformations.Username} // Make sure UserName is correctly spelled
                  onChange={(e) =>
                    setUserInformations({
                      ...userInformations,
                      Username: e.target.value, // Ensure that UserName is set correctly
                    })
                  }
                />
              <Input
                type="email"
                placeholder="Enter Email"
                required
                value={userInformations.Email}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    Email: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={userInformations.Password}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    Password: e.target.value,
                  })
                }
              />
              <Text>
                By signing up, you confirm that you have read and accepted our{" "}
                <Link fontSize="0.75rem">Terms of Service</Link> and{" "}
                <Link fontSize="0.75rem">Privacy Policy</Link>.
              </Text>
              <Button type="submit">Submit</Button>
              <Hr />
              <Link fontSize="0.85rem" onClick={handleLogin}>
                Already have an account? Log In
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Register;
