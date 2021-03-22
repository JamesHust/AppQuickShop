import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

//Component config đường dẫn cho trang
const Routes = () => {
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default Routes;