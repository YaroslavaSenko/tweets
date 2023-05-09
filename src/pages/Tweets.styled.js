import styled from '@emotion/styled';

export const LoadMore = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border: none;
  color: #373737;
  padding: 14px 28px;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #5cd3a8;
  }
`;

export const Nav = styled.div`
display: flex;
justify-content: center;
@media (max-width: 780px) {
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`;