//NEXT
import type { AppProps } from "next/app";

//CSS
import "@/styles/globals.css";

//CONTEXT
import ThemeContextProvider from "@/context/darkModeContext";

//Toast
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeContextProvider>
        <ToastContainer 
            position="top-center"
            autoClose={2000}
            transition={Flip}
          />
        <Component {...pageProps} />
    </ThemeContextProvider>
  );
}