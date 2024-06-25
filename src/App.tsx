import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "./constants/firebaseConfig.ts";

import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "user@example.com",
});

const auth = getAuth();
auth.languageCode = "it";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

function App() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      signInWithRedirect(auth, provider);
    }
  });

  return (
    <>
      <MantineProvider theme={theme}>
        Test
        <button onClick={() => signOut(auth)}>log out</button>
      </MantineProvider>
    </>
  );
}

export default App;
