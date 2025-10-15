import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../../pages/user/get-started";



const Stack = createNativeStackNavigator()


export default function AuthStack() {
    const options = { headerShown: false }
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="getStarted" component={GetStarted} />
        </Stack.Navigator>
    )
}