import styled from 'styled-components';

export const Portfolio = styled.div`
  text-align: center;
  min-height: 100vh;
  width: 50%;
  margin: auto;

  @media (max-width: 1300px) {
    width: 70%;
  };
  @media (max-width: 750px) {
    width: 90%;
  };
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-auto-flow: dense;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 750px) {
    display: block;
  };
`;

export const Item = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;

  @media (max-width: 750px) {
    margin-top: 60px;
  };
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: block;

  transition: transform 0.2s;

  &:hover {
    transform: scale(103%);
  }

  @media (max-width: 750px) {
    height: auto;
  };
`;

export const InfoBox = styled.div`
  background-color: #f3f3f3;
  border-radius: 5px;

  grid-column: 1 / 4;
  text-align: left;
  @media (max-width: 750px) {
    display: inherit;
  };
  padding: 40px;

  @media (max-width: 750px) {
    margin-top: 20px;
  };
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  text-align: left;
  border-bottom: 2px solid #aaa;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const Languages = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: left;
`;

export const Information = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  text-align: left;
`;

export const Link = styled.a`
  display: inline-block;
  
  border: solid #1A8E7B 2px;
  border-radius: 5px;

  padding: 5px;
  margin-top: 20px;
  margin-right: 10px;
  
  text-align: left;
  text-decoration: none;
  color: #1A8E7B;
  font-weight: 700;

  transition: color 0.3s ease, background 0.3s ease;

  &:hover {
    color: #fff;
    background: #1A8E7B;
  }
`;

export const Pills = styled.div`
  margin-bottom: 20px;

  @media (max-width: 750px) {
    margin-bottom: 10px;
  };
`;

export const Pill = styled.div`
  color: #fff;
  background: #1A8E7B;
  font-weight: 700;
  border-radius: 10px;
  display: inline-block;
  padding: 5px 12px;
  margin-right: 10px;

  @media (max-width: 750px) {
    margin-bottom: 10px;
  };
`;