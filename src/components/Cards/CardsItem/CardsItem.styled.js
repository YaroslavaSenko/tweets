import styled from '@emotion/styled';

export const BgImage = styled.img`
     width: 287px;
    height: 146px;
    z-index:0;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  z-index: 100;
`;

export const CardUser = styled.img`
  position: absolute;
  top: 220px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const WrapperAvatar = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  top: 180px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: rgb(235, 216, 255);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 1;
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.5;
  }
`;

export const AvatarImage = styled.img`
  width: 86px;
    height: 90px;
  border-radius: 50%;
  object-fit: cover;
z-index: 1;
  padding-top: 10px;
`;

export const User = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0;
  margin-bottom: 16px;
`;
export const Tweet = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0;
  margin-bottom: 16px;
`;


export const Follower = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0;
  margin-bottom: 26px;
`;

export const Button = styled.button`
  min-width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border: none;
  color: #373737;
  background-color: ${({ follow }) => (follow ? "#5cd3a8" : "#ebd8ff")};
  padding: 14px 28px;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #5cd3a8;
  }
`;