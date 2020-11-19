import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
`;
export const HeaderTitle = styled.h1`
  color: #3a3a3a;
  font-size: 36px;
  max-width: 720px;
  font-weight: bold;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 20px;

  input {
    height: 56px;
    border: 0;
    padding: 10px;
    background-color: #ececec;

    &:first-child {
      flex: 1;
      border-radius: 8px 0 0 8px;
      border-right: 1px solid #fff;
    }
  }

  button {
    border: 0;
    border-radius: 0 8px 8px 0;
    padding: 10px;
    background-color: #2574a9;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#2574a9')};
    }
  }
`;

export const Teams = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Team = styled.div`
  flex: 1;
  margin-top: 40px;
  max-width: 720px;
  background-color: #ececec;
  border-radius: 8px;
  padding: 15px;

  &:first-child {
    margin-right: 10px;
  }
`;

export const Player = styled.div`
  max-width: 700px;
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
  max-width: 1450px;
  background-color: #ececec;
  margin: 0 auto;
  border-radius: 8px;
  padding: 10px;

  div {
    max-width: 1450px;
  }
`;

export const SortTeams = styled.button`
  max-width: 720px;
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
`;
