import React, { FC } from "react";
import { Space } from "antd";
import LoginOutlined from "@ant-design/icons/lib/icons/LoginOutlined";
import { useRouter } from "@curi/react-universal";

import useAuth from "../../providers/auth";
import { Pages } from "../../providers/router/routes";

import UserDropDown from "./UserDropDown";

import styles from "./styles.module.less";

const Auth: FC = () => {
  const router = useRouter();

  const { user } = useAuth();

  if (!user) {
    return (
      <Space
        className={styles.login}
        onClick={() =>
          router.navigate({
            url: router.url({
              name: Pages.Home,
            }),
          })
        }
      >
        Login
        <LoginOutlined />
      </Space>
    );
  } else {
    return <UserDropDown />;
  }
};

export default Auth;
