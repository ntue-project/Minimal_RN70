import React, {useEffect} from "react";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {WIDTH} from "../utility/util";
import {Txt} from "../component/primitive/Text";
import {Image, ScrollView, View} from "react-native";
import {Press} from "../component/primitive/Press";
import images from "../utility/image";
import {RightArrow, ShoppingBag} from "../component/Icon";
import {ScreenHeader} from "../component/Header";
import {useIsFocused} from "@react-navigation/native";
import {RealmApp} from "../realm/realm";

const AccountScreen : React.FC = () => {

    const focused = useIsFocused()

    useEffect(() => {



    }, [focused])

    return (
        <>
            <BaseLayout aCenter>

                <ScreenHeader title={"我的帳戶"} showBackButton={false} showUtilButton={false} showShareButton={false}/>

                <ScrollView
                    style={{
                        width: "100%",
                    }}
                    contentContainerStyle={{
                        alignItems: "center",
                        marginTop: 12,
                        paddingBottom: 32
                    }}
                >

                    <VStack
                        width={WIDTH * 0.9}
                        padding={16}
                        backgroundColor={"white"}
                        borderRadius={16}
                        borderColor={"#ccc"}
                        borderWidth={1}
                        shadowOpacity={0.25}
                        shadowRadius={16}
                        shadowColor={"gray"}
                        shadowOffset={{
                            height: 8,
                            width: 0
                        }}

                    >

                        <HStack height={64}
                                borderRadius={10}
                                align={"center"}
                        >

                            <View style={{

                                borderRadius: 256,
                                backgroundColor: "black",
                                height: "100%",
                                aspectRatio: 1,
                                marginRight: 16,
                                overflow: "hidden"
                            }}>

                                <Image
                                    source={images.avatar.uri}
                                    resizeMode={"cover"}
                                    style={{
                                        height: "100%",
                                        aspectRatio: 1
                                    }}
                                />

                            </View>

                            <HStack justify={"space-between"} flex={1}>

                                <VStack
                                    height={"100%"}
                                    justify={"space-evenly"}>

                                    <Txt type={"heading2"} content={"Sarah Raycaster"} bold/>

                                    <Press
                                        borderWidth={1}
                                        borderRadius={4}
                                        borderColor={"black"}
                                        height={24}
                                        width={72}
                                        onPress={()=> {

                                        }}>

                                        <Txt type={"caption"} content={"一般會員"}/>

                                    </Press>

                                </VStack>

                                <VStack justify={"center"}

                                >

                                    <Press

                                        height={32}
                                        width={48}
                                        backgroundColor={"#eee"}
                                        borderRadius={8}
                                        onPress={()=> {

                                        }}>

                                        <Txt type={"normal"} content={"編輯"} color={"#888"} bold/>

                                    </Press>

                                </VStack>

                            </HStack>

                        </HStack>

                        {/*<View style={{*/}
                        {/*    height: 1,*/}
                        {/*    width: "100%",*/}
                        {/*    backgroundColor: "lightgray",*/}
                        {/*    marginTop: 16*/}
                        {/*}}/>*/}

                        <HStack height={48}
                                marginTop={16}
                                backgroundColor={"white"}
                                borderRadius={12}
                                borderColor={"#ccc"}
                                borderWidth={1}
                                shadowOpacity={0.2}
                                shadowRadius={6}
                                shadowColor={"gray"}
                                shadowOffset={{
                                    height: 4,
                                    width: 0
                                }}
                        >

                            <Press
                                justify={"space-between"} width={"100%"}
                                paddingLeft={16}
                                paddingRight={8}
                                onPress={()=> {
                                    console.log("sdcds")
                                }}>

                                <HStack align={"center"}>

                                    <ShoppingBag size={20} marginRight={8}/>
                                    <Txt type={"heading3"} content={"購物紀錄"} color={"#666"} bold/>

                                </HStack>

                                <RightArrow size={20}/>

                            </Press>

                        </HStack>

                        <HStack
                            align={"center"}
                            marginTop={16}
                            height={64}
                            borderRadius={10}
                            justify={"space-evenly"}
                        >

                            <View style={{

                                borderRadius: 256,
                                backgroundColor: "lightgray",
                                height: "80%",
                                aspectRatio: 1,
                                marginRight: 12
                            }}>

                            </View>

                            <View style={{

                                borderRadius: 256,
                                backgroundColor: "lightgray",
                                height: "80%",
                                aspectRatio: 1,
                                marginRight: 12
                            }}>

                            </View>

                            <View style={{

                                borderRadius: 256,
                                backgroundColor: "lightgray",
                                height: "80%",
                                aspectRatio: 1,
                                marginRight: 12
                            }}>

                            </View>

                            <View style={{

                                borderRadius: 256,
                                backgroundColor: "lightgray",
                                height: "80%",
                                aspectRatio: 1,
                                marginRight: 12
                            }}>

                            </View>

                        </HStack>

                    </VStack>

                    <VStack

                        width={WIDTH * 0.9}
                        height={180}

                        marginTop={14}
                        borderColor={"#ccc"}
                        backgroundColor={"white"}
                        borderRadius={16}
                        borderWidth={1}
                        shadowOpacity={0.25}
                        shadowRadius={16}
                        shadowColor={"gray"}
                        shadowOffset={{
                            height: 8,
                            width: 0
                        }}
                    >

                        <HStack px={18} marginTop={2} align={"center"} height={36}>

                            <Txt type={"heading3"} content={"購物"} color={"#666"} letterSpacing={1} bold/>

                        </HStack>

                        <View style={{
                            width: "100%",
                            height: 1,
                            backgroundColor: "#ccc"
                        }}/>

                    </VStack>

                    <VStack

                        width={WIDTH * 0.9}
                        height={180}

                        marginTop={14}
                        borderColor={"#ccc"}
                        backgroundColor={"white"}
                        borderRadius={16}
                        borderWidth={1}
                        shadowOpacity={0.25}
                        shadowRadius={16}
                        shadowColor={"gray"}
                        shadowOffset={{
                            height: 8,
                            width: 0
                        }}
                    >

                        <HStack px={18} marginTop={2} align={"center"} height={36}>

                            <Txt type={"heading3"} content={"購物"} color={"#666"} letterSpacing={1} bold/>

                        </HStack>

                        <View style={{
                            width: "100%",
                            height: 1,
                            backgroundColor: "#ccc"
                        }}/>

                    </VStack>

                </ScrollView>


            </BaseLayout>
        </>
    )
}

export default AccountScreen
