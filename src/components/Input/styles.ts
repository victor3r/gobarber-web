import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding-left: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    padding: 16px 16px 16px 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
