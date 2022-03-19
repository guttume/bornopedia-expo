import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack } from "native-base";
import CogOutlineIcon from "../assets/icons/CogOutlineIcon";
import ShoppingCartIcon from "../assets/icons/ShoppingCartIcons";
import { useMst } from "../models/root";
import CartScreen from "../screens/store/CartScreen";
import CategoryScreen from "../screens/store/CategoryScreen";
import GenerateQRScreen from "../screens/store/GenerateQRScreen";
import ProductDetailScreen from "../screens/store/ProductDetailScreen";
import ProductListScreen from "../screens/store/ProductListScreen";
import routes from "./routes";

const StoreStack = createNativeStackNavigator();

const StoreNavigator = () => {
  const { drawer, auth } = useMst();

  return (
    <StoreStack.Navigator
      initialRouteName={routes.GENERATE_QR}
      screenOptions={({ navigation }) => ({
        animation: "slide_from_right",
        headerTitle: `Hi ${auth.firstName}`,
        headerRight: () => (
          <HStack space="4">
            <ShoppingCartIcon
              size="8"
              onPress={() => navigation.navigate(routes.CART)}
            />
            <CogOutlineIcon size="8" onPress={() => drawer.toggle()} />
          </HStack>
        ),
      })}
    >
      <StoreStack.Screen name={routes.CATEGORY} component={CategoryScreen} />
      <StoreStack.Screen
        name={routes.PRODUCT_LIST}
        component={ProductListScreen}
      />
      <StoreStack.Screen
        name={routes.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <StoreStack.Screen
        name={routes.GENERATE_QR}
        component={GenerateQRScreen}
      />
      <StoreStack.Screen
        name={routes.CART}
        component={CartScreen}
        options={() => ({
          headerTitle: "Your Cart",
        })}
      />
    </StoreStack.Navigator>
  );
};

export default StoreNavigator;
