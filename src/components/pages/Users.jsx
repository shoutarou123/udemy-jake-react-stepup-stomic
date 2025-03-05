import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { use } from "react";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇー${val}`,
    image: "https://picsum.photos/id/30/400",
    email: "12345@email.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト会社",
    },
    website: "https://google.com",
  };
});


export const Users = () => {
  const { userInfo, setUserInfo } = use(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin })

  return (
    <SContainer>
      <h2>Users一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;