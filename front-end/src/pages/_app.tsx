import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer 
          position="top-center"
          autoClose={2000}
          transition={Flip}
        />
        <Component {...pageProps} />
    </>
  );
}
