import React, { FC, useEffect } from "react";
import { Typography } from "antd";
import { useRouter } from "@curi/react-dom";

import SignInForm from "../../components/Auth/SignInForm";
import { LoginParams } from "../../components/Auth/typings";
import useAuth from "../../providers/auth";
import { Pages } from "../../providers/router/routes";

import styles from "./styles.module.less";

export const AuthPage: FC = () => {
  const router = useRouter();

  const { user, signIn } = useAuth();

  useEffect(() => {
    if (user) {
      router.navigate({
        url: router.url({
          name: Pages.Tasks,
        }),
      });
    }
  }, [router, user]);

  const onSignIn = (data: LoginParams) => {
    signIn(data);
  };

  return (
    <div className={styles.main}>
      {user === undefined && (
        <div className={styles.form}>
          <Typography.Title level={4} className={styles.formHeader}>
            Authorization
          </Typography.Title>
          <SignInForm onSignIn={onSignIn} loading={false} />
        </div>
      )}
    </div>
  );
};
