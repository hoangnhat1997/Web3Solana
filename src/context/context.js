import React, { createContext, useEffect, useState } from "react";

import * as ExpoLinking from "expo-linking";

export const TwitterContext = createContext();

const state = "1";

export const TwitterProvider = ({ children }) => {
  const [deepLink, setDeepLink] = useState("");

  useEffect(() => {
    checkDeepLink = async () =>
      (await ExpoLinking.getInitialURL()) &&
      setDeepLink(ExpoLinking.getInitialURL);

    const deepLinkSubscription = ExpoLinking.addEventListener("url", () =>
      setDeepLink(url)
    );

    return () => deepLinkSubscription.remove;
  }, []);
  return (
    <TwitterContext.Provider value={{ state }}>
      {children}
    </TwitterContext.Provider>
  );
};
