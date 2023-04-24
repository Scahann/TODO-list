import React, { FC } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import useAuth from "../../../providers/auth";

import styles from "./styles.module.less";

const UserDropDown: FC = () => {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <Dropdown
        menu={
          user
            ? {
                items: [
                  {
                    key: "1",
                    label: (
                      <span
                        onClick={() => {
                          logout();
                        }}
                      >
                        Log out
                      </span>
                    ),
                  },
                ],
              }
            : null
        }
      >
        <Space className={styles.main} align="center">
          <UserOutlined />
          {user.login}
          <DownOutlined className={styles.downIcon} />
        </Space>
      </Dropdown>
    );
  } else {
    return null;
  }
};

export default UserDropDown;
