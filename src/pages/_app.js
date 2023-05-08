import { Approvider } from "../context.jsx";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Approvider>
      <Component {...pageProps} />
    </Approvider>
  );
}
