import React, { useState } from "react";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isReady, setReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap()}
        onFinish={() => setReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return <AppNavigation />;
}
