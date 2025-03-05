import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router";

export const Top = () => {
  const navigate = useNavigate();

  const onClickAdmin = () => navigate("/users", {state: {isAdmin: true }});

  const onClickGeneral = () => navigate("/users", {state: {isAdmin: false }});

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
