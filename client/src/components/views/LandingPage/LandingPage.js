import React from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("/app/hello");
    return () => {
      cleanup;
    };
  }, [input]);

  return <div>LandingPage</div>;
}

export default LandingPage;
