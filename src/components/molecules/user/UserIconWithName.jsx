import { memo, use } from 'react';
import styled from "styled-components";
import { UserContext } from '../../../providers/UserProvider';

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithNameがレンダリングされた");

  const { image, name } = props;
  const { userInfo } = use(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg
        height={160}
        src={image}
        alt="プロフィール"
      />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;