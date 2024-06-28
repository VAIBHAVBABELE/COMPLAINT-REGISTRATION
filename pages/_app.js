import "@/styles/globals.css";
import {ChainId,ThirdwebProvider} from  "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const LocalChainId = ChainId;
  const desiredChainId =LocalChainId.Mumbai;
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
      <Toaster/>

    </ThirdwebProvider>
  
  )
}

export default MyApp
