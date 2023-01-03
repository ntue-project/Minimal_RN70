import React, {useEffect, useState} from "react";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {ScreenHeader} from "../component/Header";
import {SegmentedButton} from "../component/SegmentedButton";
import {config, useSpring, animated} from "@react-spring/native";
import {RouteProp, useIsFocused, useNavigation, useRoute} from "@react-navigation/native";
import {FlatList, Image, ListRenderItem, Pressable, ScrollView, View} from "react-native";
import {WIDTH} from "../utility/util";
import {CategoryItem, IProductItem, ProductItem, SearchResultRenderItem} from "./MainScreen";
import {useDispatch, useSelector} from "react-redux";
import {selectAccount, setProductLikeStatus} from "../state/accountSlice";
import {HeartButton, WishlistHeartIconButton, XButton} from "../component/Icon";
import images from "../utility/image";
import {Txt} from "../component/primitive/Text";
import {RatingStar, RatingStarBar} from "../component/Gadget";
//
interface IProductItemWithIndex extends IProductItem {
    index: number,
    separators: object,
}
//
// const ProductItem_Liked: React.FC<IProductItemWithIndex> = (thisProduct) => {
//
//     const dispatch = useDispatch()
//
//     return <>
//
//         <Pressable
//
//             style={{
//
//                 height: "auto",
//                 width: WIDTH * 0.9 - 20,
//
//                 flexDirection: "row",
//                 borderRadius: 10,
//                 borderColor: "lightgray",
//                 alignItems: "center"
//                 // borderWidth: 2,
//             }}
//         >
//
//             <Image source={images.logo.uri}
//                    style={{
//                        // borderTopLeftRadius: 8,
//                        // borderBottomLeftRadius: 8,
//                        borderRadius: 8,
//                        height: WIDTH * 0.15,
//                        width: WIDTH * 0.25,
//                        marginRight: 12,
//                    }}
//
//             />
//
//             <VStack flex={1}
//                     height={WIDTH * 0.15}
//                     marginLeft={2}
//                     justify={"center"}
//                 // backgroundColor={"gray"}
//             >
//                 <VarText type={"normal"} content={thisProduct.productTitle} color={"#666666"}/>
//                 <VarText marginTop={4} type={"heading3"} bold content={"$ " + thisProduct.productPrices + ""}
//                          color={"#FF5454"}/>
//             </VStack>
//
//             <XButton onPress={() => {
//
//                 dispatch(setProductLikeStatus({
//                     _id: thisProduct._id,
//                     productTitle: thisProduct.productTitle,
//                     productPrices: thisProduct.productPrices,
//                     productRate: thisProduct.productRate,
//                     productTags: thisProduct.productTags
//                 }))
//
//             }}/>
//         </Pressable>
//
//     </>
// }

// export const ProductRenderItem: ListRenderItem<IProductItemWithIndex> = ({item}) =>
//
//     <ProductItem_Liked _id={item._id}
//                        productTitle={item.productTitle}
//                        productPrices={item.productPrices}
//                        productRate={item.productRate}
//                        index={item.index}
//                        separators={item.separators}
//     />

const ProductDetailScreen: React.FC = () => {

    const [switchIndex, setSwitchIndex] = useState(0)
    const [enterAnimation, setEnterAnimation] = useState(false)
    const [thisProduct, setThisProduct] = useState<IProductItem>()

    const focused = useIsFocused()
    const navigation = useNavigation()
    const route: RouteProp<{params: { thisProduct: IProductItem }}> = useRoute()

    const dispatch = useDispatch()
    const account = useSelector(selectAccount)

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setEnterAnimation(false)
            setSwitchIndex(0)
            console.log("BLUR")
        });

        return unsubscribe;
    }, [focused]);

    useEffect(() => {

        if (route.params.thisProduct) {
            setThisProduct(route.params.thisProduct)
        }

        if (focused) {
            setEnterAnimation(true)
            setSwitchIndex(1)
        }
    }, [focused])

    const headerAnimation = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 48,
        config: config.stiff,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    const SegmentedButtonAnimation = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 32,
        delay: 100,
        config: config.default,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    const ProductCategory = useSpring({

        opacity: switchIndex === 1 ? 1 : 0,
        left: switchIndex === 1 ? 0 : 48,
        delay: 0,
        config: config.default,
    })

    const StudioCategory = useSpring({

        opacity: switchIndex === 2 ? 1 : 0,
        left: switchIndex === 2 ? 0 : 48,
        delay: 0,
        config: config.default,
    })

    const SwitchToProductSection = useSpring({

        opacity: switchIndex === 1 ? 1 : 0,
        left: switchIndex === 1 ? 0 : 64,
        delay: 75,
        config: config.slow,
    })

    const SwitchToStudioSection = useSpring({

        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        width: WIDTH * 0.9,

        opacity: switchIndex === 2 ? 1 : 0,
        left: switchIndex === 2 ? 0 : 64,
        delay: 75,
        config: config.slow,
    })


    return (

        <BaseLayout aCenter>

            <animated.View style={headerAnimation}>

                <ScreenHeader title={"商品資訊"}
                              showBackButton={true}
                              showUtilButton={true}
                              showShareButton={true}
                              onBackButtonPress={() => {
                                  navigation.goBack()
                              }}
                />

            </animated.View>

            <animated.View style={SegmentedButtonAnimation}>

                <Image source={
                    //@ts-ignore
                    {uri: thisProduct?.productCoverImagesURL[0]
                    }}
                       style={{
                           // borderTopLeftRadius: 8,
                           // borderBottomLeftRadius: 8,
                           borderRadius: 16,
                           height: WIDTH * 0.9,
                           width: WIDTH * 0.9,
                       }}

                />

            </animated.View>

            <VStack aCenter>

                <animated.View style={ProductCategory}>

                    <HStack justify={"space-between"} width={WIDTH * 0.9 - 8} aCenter height={56}>

                        <Txt type={"heading1"} content={thisProduct?.productTitle} color={"#666"} fontWeight={"800"}/>

                        <HeartButton size={18} color={"#ff3725"}/>

                    </HStack>

                </animated.View>

                <animated.View style={SwitchToProductSection}>

                    <HStack justify={"space-between"} width={WIDTH * 0.9 - 8} aCenter height={32}>

                        <FlatList

                            horizontal

                            //@ts-ignore
                            data={thisProduct?.productTags}
                            keyExtractor={item => item + new Date()}

                            renderItem={({item}) => <HStack
                                backgroundColor={"transparent"}
                                borderRadius={6}
                                py={3}
                                px={5}
                                borderWidth={1}
                                borderColor={"#ff5454"}

                            >
                                <Txt content={item} type={"nano"} color={"#ff5454"}/>
                            </HStack>}

                            ItemSeparatorComponent={() => <View style={{
                                width: 8,
                            }}></View>}

                            contentContainerStyle={{

                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        />

                    </HStack>

                </animated.View>

                <animated.View style={SwitchToProductSection}>

                    <HStack justify={"flex-start"} width={WIDTH * 0.9 - 8} aCenter height={32}>

                        <Txt type={"heading1"} content={"NT$ " +
                            //@ts-ignore
                            thisProduct?.productPrices[0]} bold color={"#ff5454"}/>

                        <View style={{
                            height: 16,
                            width: 1,
                            backgroundColor: "#ff5454",
                            marginHorizontal: 12
                        }}/>

                        <HStack aCenter justify={"flex-start"}>

                            <RatingStarBar rating={thisProduct?.productRate}/>

                            <Txt type={"heading2"} content={thisProduct?.productRate + ""} color={"#ff5454"} bold
                                 marginLeft={8}/>

                        </HStack>

                    </HStack>

                </animated.View>



                <animated.View style={SwitchToProductSection}>


                </animated.View>

            </VStack>

        </BaseLayout>
    )
}

export default ProductDetailScreen
