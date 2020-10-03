import styled from 'styled-components';

export const infoWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const infoCenter = styled.div``;

export const scroll = styled.div`
  position: absolute;
  top: 90vh;
  width: 100%;
  text-align: center;
`;

export const title = styled.h1`
  font-weight: 700;
  font-size: 5em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 3em;
  };
`;

export const subtitle = styled.h2`
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2em;
  };
`;

export const biography = styled.p`
  width: 40vw;
  padding-left: 30vw;
  position: inline-block;
  padding-top: 20px;
  font-weight: 300;
  font-size: 1.2em;
  text-align: center;
  @media (max-width: 1000px) {
    width: 70vw;
    padding-left:15vw;
  };
`;

export const social = styled.div`
  text-align: center;
`;

export const socialicon = styled.a`
  width: 2vw;
  display: inline-block;
  color: #1A8E7B;
  padding: 10px;
  padding-top: 30px;
  &:hover {
    color: #30A08D;
  }
  @media (max-width: 1000px) {
    width: 4vw;
  };
  @media (max-width: 600px) {
    width: 8vw;
  };
`;

export const scrolltext = styled.div``;

export const scrollicon = styled.div`
  color: #515151;
  width: 1.5vw;
  display: inline-block;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 4vw;
  };
`;