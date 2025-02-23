import { NavigationContainer } from "@react-navigation/native";
import { ProviderComposer } from "./providers";
import { Router } from "./router";

const App = () => {
  return (
    <NavigationContainer>
      <ProviderComposer>
        <Router />
      </ProviderComposer>
    </NavigationContainer>
  );
};

export default App;
