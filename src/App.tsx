import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "cyan",
  });

  return (
    <>
      <MantineProvider theme={theme}>Test</MantineProvider>
    </>
  );
}

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCyznN0G8P6KGhNIY1o104Vn2ZH06yCing",
//     authDomain: "club-app-3822b.firebaseapp.com",
//     projectId: "club-app-3822b",
//     storageBucket: "club-app-3822b.appspot.com",
//     messagingSenderId: "742423654420",
//     appId: "1:742423654420:web:b7cd2ed0a74e9f9330b701",
//     measurementId: "G-GBBJW7TY7W"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
