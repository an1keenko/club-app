import { ActionIcon, Button, useMantineColorScheme } from "@mantine/core";

import styles from "./Header.module.scss";

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <header className={styles.header}>
      <h4>CLUBNET</h4>
      <div className={styles.div}>
        <ActionIcon
          variant="outline"
          onClick={toggleColorScheme}
          title="Toggle color scheme"
        >
          {colorScheme === "dark" ? "L" : "D"}
        </ActionIcon>
        <Button variant="light">Войти</Button>
      </div>
    </header>
  );
}
