import React, {useEffect, useState} from "react";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {ScreenHeader} from "../component/Header";
import {SegmentedButton} from "../component/SegmentedButton";
import {config, useSpring, animated} from "@react-spring/native";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {FlatList, Image, ListRenderItem, Pressable, ScrollView, View} from "react-native";
import {WIDTH} from "../utility/util";
import {CategoryItem, IProductItem, ProductItem, SearchResultRenderItem} from "./MainScreen";
import {useDispatch, useSelector} from "react-redux";
import {selectAccount, setProductLikeStatus} from "../state/accountSlice";
import {WishlistHeartIconButton, XButton} from "../component/Icon";
import images from "../utility/image";
import {Txt} from "../component/primitive/Text";

const ProductItem_Liked: React.FC<IProductItem> = (thisProduct) => {

    const dispatch = useDispatch()

    return <>

        <Pressable

            style={{

                height: "auto",
                width: WIDTH * 0.9 - 20,

                flexDirection: "row",
                borderRadius: 10,
                borderColor: "lightgray",
                alignItems: "center"
                // borderWidth: 2,
            }}
        >


            <Image source={{
                //@ts-ignore
                uri: thisProduct.productCoverImagesURL[0]
            }}
                   style={{
                       // borderTopLeftRadius: 8,
                       // borderBottomLeftRadius: 8,
                       borderRadius: 8,
                       height: WIDTH * 0.15,
                       width: WIDTH * 0.25,
                       marginRight: 12,
                   }}

            />

            <VStack flex={1}
                    height={WIDTH * 0.15}
                    marginLeft={2}
                    justify={"center"}
                // backgroundColor={"gray"}
            >
                <Txt type={"normal"} content={thisProduct.productTitle} color={"#666666"}/>
                <Txt marginTop={4} type={"heading3"} bold content={"$ " +
                    //@ts-ignore
                    thisProduct.productPrices[0] + ""
                }
                     color={"#FF5454"}/>
            </VStack>

            <XButton onPress={() => {

                dispatch(setProductLikeStatus({
                    _id: thisProduct._id,
                    productTitle: thisProduct.productTitle,
                    productPrices: thisProduct.productPrices,
                    productRate: thisProduct.productRate,
                    productCoverImagesURL: thisProduct.productCoverImagesURL,
                    productTags: thisProduct.productTags
                }))

            }}/>
        </Pressable>

    </>
}

export const ProductRenderItem: ListRenderItem<IProductItem> = ({item}) =>

    <ProductItem_Liked _id={item._id}
                       productTitle={item.productTitle}
                       productPrices={item.productPrices}
                       productRate={item.productRate}
                       productTags={item.productTags}
                       productCoverImagesURL={item.productCoverImagesURL}
    />

const WishlistScreen: React.FC = () => {

    const [switchIndex, setSwitchIndex] = useState(0)
    const [enterAnimation, setEnterAnimation] = useState(false)

    const focused = useIsFocused()
    const navigation = useNavigation()

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

        if (focused) {
            setEnterAnimation(true)
            setSwitchIndex(1)
        }
    }, [focused])

    const headerAnimation = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 24,
        config: config.slow,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    const SegmentedButtonAnimation = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 24,
        delay: 120,
        config: config.slow,
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

        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        width: WIDTH * 0.9,

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

                <ScreenHeader title={"我的最愛"} showBackButton={false} showUtilButton={false} showShareButton={false}/>

            </animated.View>

            <animated.View style={SegmentedButtonAnimation}>

                <SegmentedButton leftLabel={"最愛好物"} rightLabel={"設計館"} switchIndex={switchIndex}
                                 onLeftPress={() => {
                                     setSwitchIndex(1)
                                 }}
                                 onRightPress={() => {
                                     setSwitchIndex(2)
                                 }}
                />

            </animated.View>

            { switchIndex === 1 ?

                <>
                    <animated.View style={ProductCategory}>

                        <HStack height={72}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                directionalLockEnabled={true}
                                horizontal={true}
                                contentContainerStyle={{

                                    height: 68,
                                    paddingHorizontal: WIDTH * .05,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // backgroundColor: "black"
                                }}
                            >
                                <CategoryItem categoryText={"所有"} selected={true}/>
                                <CategoryItem categoryText={"書寫工具"} selected={false}/>
                                <CategoryItem categoryText={"繪圖工具"} selected={false}/>
                                <CategoryItem categoryText={"圖文創作"} selected={false}/>
                                <CategoryItem categoryText={"圖文創作"} selected={false}/>
                            </ScrollView>
                        </HStack>
                    </animated.View>

                    <animated.View style={SwitchToProductSection}>

                        <FlatList

                            data={account.interests.likedProducts.items}
                            keyExtractor={item => "result_" + item._id.toString()}
                            renderItem={({item, index, separators}) => <ProductRenderItem item={item} index={index}
                                                                                          separators={separators}/>}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}

                            ItemSeparatorComponent={()=>

                                <View style={{
                                    height: 1,
                                    marginVertical: 8,
                                    marginHorizontal: 4,
                                    backgroundColor: "#ddd"

                                }}/>}

                        />

                    </animated.View>

                </>

                :

                <>

                    <animated.View style={StudioCategory}>

                        <HStack height={72}>

                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                directionalLockEnabled={true}
                                horizontal={true}
                                contentContainerStyle={{

                                    height: 68,
                                    paddingHorizontal: WIDTH * .05,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // backgroundColor: "black"
                                }}
                            >
                                <CategoryItem categoryText={"所有"} selected={true}/>
                                <CategoryItem categoryText={"個人品牌"} selected={false}/>
                                <CategoryItem categoryText={"設計師品牌"} selected={false}/>
                                <CategoryItem categoryText={"台灣本土"} selected={false}/>
                                <CategoryItem categoryText={"國際設計師"} selected={false}/>
                            </ScrollView>
                        </HStack>
                    </animated.View>

                    <animated.View style={SwitchToStudioSection}>

                        <FlatList

                            data={account.interests.likedProducts.items}
                            keyExtractor={item => "w" + item._id}
                            renderItem={({item, index, separators}) => <ProductRenderItem item={item} index={index}
                                                                                          separators={separators}/>}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}

                            scrollEnabled={false}

                            ItemSeparatorComponent={()=>

                                <View style={{
                                    height: 1,
                                    marginVertical: 8,
                                    marginHorizontal: 4,
                                    backgroundColor: "#ddd"

                                }}/>}

                        />

                    </animated.View>

                </>

            }

        </BaseLayout>
    )
}

export default WishlistScreen
