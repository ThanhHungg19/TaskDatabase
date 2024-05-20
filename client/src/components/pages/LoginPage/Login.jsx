import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../Background";
import { login } from "../../../services/AuthServices";
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
  Icon,
  Hr,
  Link,
} from "./Styled";

const Login = () => {
  const navigate = useNavigate();

  // Handle Router to Register Page
  const handleRegister = () => {
    navigate("/register");
  };

  const hanldeIndex = () => {
    navigate("/");
  };

  const [userInformations, setUserInformations] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Log in to Trello Clone";
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginResult = await login(userInformations);
    if (loginResult.success) {
      // Redirect to a different page upon successful login
      navigate("/home");
    } else {
      // Handle login failure (display error message, etc.)
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <BgContainer>
        <Background />
      </BgContainer>
      <Container>
        <TrelloIconContainer onClick={hanldeIndex}>
          <Icon src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" />
        </TrelloIconContainer>
        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Log in to Trello</Title>
              <Input
                type="email"
                placeholder="Enter email"
                required
                value={userInformations.email}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={userInformations.password}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    password: e.target.value,
                  })
                }
              />
              <Button>Log in</Button>
              <Hr />
              <Link fontSize="0.85rem" onClick={handleRegister}>
                Sign up for an account
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Login;
