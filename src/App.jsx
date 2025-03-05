import React from "react";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  name: "じゃけぇ",
  image: "https://picsum.photos/id/30/400",
  email: "12345@email.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト会社",
  },
  website: "https://google.com",
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
