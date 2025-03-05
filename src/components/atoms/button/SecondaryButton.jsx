import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props; // onClickという名称で受け取っている。中身はonClickAdminとonClickGeneral。
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
