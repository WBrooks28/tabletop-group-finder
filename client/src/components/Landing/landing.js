import React from "react";
import styled from "styled-components";
import hero from "../../assets/hero.jpg";

const Section = styled.section`
  background-color: #868784;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 1000px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #fafafa;
`;

const Paragraph = styled.p`
  color: #fafafa;
  text-align: center;
`;

const PlayBtn = styled.button`
  background-color: #508ca4;
  border-radius: 20px;
  padding: 22px;
`;

const Landing = () => {
  return (
    // <div className="container">
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Welcome to Table-Top Game Finder!</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              neque animi quo cupiditate commodi saepe culpa sed itaque velit
              maiores optio dolorem excepturi aperiam dolores, voluptatibus
              suscipit amet quis repellat!
            </Paragraph>
            <PlayBtn />
          </div>
        </div>
        <div className="col-md-6">
          <Title>Second Div</Title>
        </div>
      </div>
    </Section>
    // </div>
  );
};

export default Landing;
