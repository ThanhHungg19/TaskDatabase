import React, { useEffect, useState } from "react";
import IndexNav from "../../IndexNav";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  LeftWrapper,
  Title,
  Text,
  Button,
  SvgItem,
} from "./Styled";

const Index = () => {
  let history = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    document.title = "Trollo"
  }, [])
  return (
    <>
      {/* {data.map(user=> {
        return <h1>{user.name}</h1>
      })} */}
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <LeftWrapper>
              <Title>Trollo helps teams move work forward.</Title>
              <Text>
                Collaborate, never teamworks. How to pass PDM A+ ?
                Use Trollo
              </Text>
              <Button onClick={() => history.push("/register")}>
                Sign up - it's free
              </Button>
            </LeftWrapper>
          </LeftSide>
          <RightSide>
            <SvgItem src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" />
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;