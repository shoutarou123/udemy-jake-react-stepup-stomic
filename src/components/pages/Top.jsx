import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router";
import { use } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = use(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  }
    

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    navigate("/users");
  }

  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton> {/* onClickという名称でSecondaryButtonへ渡している */}
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
