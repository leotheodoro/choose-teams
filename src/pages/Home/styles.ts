import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  display: flex;
  justify-content: space-between;
`;
export const HeaderTitle = styled.h1`
  color: #3a3a3a;
  font-size: 36px;
  line-height: 30px;
  max-width: 100%;
  font-weight: bold;
  margin: 30px auto;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;

  input {
    height: 56px;
    border: 0;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #ececec;
    border-radius: 8px;
    border-right: 1px solid #fff;
  }

  button {
    border: 0;
    border-radius: 8px;
    padding: 10px;
    background-color: #2574a9;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#2574a9')};
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
`;

export const Teams = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    flex-direction: row;
    margin: 0 auto 20px;
  }
`;

export const Team = styled.div`
  flex: 1;
  margin-top: 20px;
  max-width: 100%;
  background-color: #ececec;
  border-radius: 8px;
  padding: 15px;

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-right: 20px;
    }
  }
`;

export const Player = styled.div`
  max-width: 100%;
  background-color: #fff;
  display: flex;
  padding: 10px;
  margin-top: 20px;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  span {
    margin-left: auto;
  }

  button {
    margin-left: 20px;
    padding: 0 10px;
    border: 0;
    color: red;
    background-color: #fff;
  }
`;

export const LevelBadge = styled.span`
  border-radius: 50%;
  background-color: #2574a9;
  padding: 2px;
  color: #fff;
`;

export const Players = styled.div`
  max-width: 100%;
  background-color: #ececec;
  margin: 0 auto;
  border-radius: 8px;
  padding: 10px;

  div {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
`;

export const SortTeams = styled.button`
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 0;
  border-radius: 8px;
  padding: 20px;
  background-color: #2574a9;
  color: #fff;
  transition: background-color 0.2s;
  width: 720px;
  justify-content: center;

  &:hover {
    background-color: ${shade(0.2, '#2574a9')};
  }

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  display: flex;
  margin-bottom: 10px;
`;
