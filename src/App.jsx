import { useEffect, useState } from "react";
import RestaurantLanding from "./pages/RestaurantLanding";
import BetLanding from "./pages/BetLanding";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);
  }, []);

  return (
    <>
      {isMobile ? <BetLanding /> : <RestaurantLanding />}
    </>
  );
}

export default App;
