import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {IProductItem} from "../screen/MainScreen";

export type RootParamList = {

    Splash: undefined;
    LoginScreen: undefined;
    IntroductionScreen: undefined;
    InterestScreen: undefined;
    ProductDetailScreen : { thisProduct: IProductItem }

    TabContent: { screen: string }

    MainScreen: undefined;
    WishlistScreen: undefined
    NotificationScreen: undefined
    AccountScreen: undefined
};

export type MainScreenProps = NativeStackNavigationProp<RootParamList, 'MainScreen'>;
export type ProductDetailScreenProps = NativeStackNavigationProp<RootParamList, 'ProductDetailScreen'>;
