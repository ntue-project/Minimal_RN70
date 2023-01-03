import React, {useEffect, useState} from "react";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {ScreenHeader} from "../component/Header";
import {NotiBuyListButton, NotiGiftButton, NotiPersonButton, NotiTicketButton, XButton} from "../component/Icon";
import {WIDTH} from "../utility/util";
import {FlatList, Image, ListRenderItem, Pressable, View} from "react-native";
import {config, useSpring, animated} from "@react-spring/native";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {IProductItem} from "./MainScreen";
import {useDispatch} from "react-redux";
import images from "../utility/image";
import {Txt} from "../component/primitive/Text";
import {setProductLikeStatus} from "../state/accountSlice";

export enum NotificationCategory {

    product,
    discount,
    order,
    user
}

export interface INotificationBlock {

    category?: NotificationCategory
    title? : string,
    content? : string,
    image? : string,
    index? : number
}

export interface INotificationList {

    productNotifications: INotificationBlock[],
    discountNotifications: INotificationBlock[],
    orderNotifications: INotificationBlock[],
    userNotifications: INotificationBlock[],

}

const notificationData : INotificationList = {

    productNotifications: [
        {
            title: "新設計出爐拉！",
            content: "愛因斯坦跟牛頓玩遊戲工作室推出了全新的杯套！",
            category: NotificationCategory.product
        },{
            title: "新設計出爐拉！",
            content: "愛因斯坦跟牛頓玩遊戲工作室推出了全新的杯套！",
            category: NotificationCategory.product
        },{
            title: "新設計出爐拉！",
            content: "愛因斯坦跟牛頓玩遊戲工作室推出了全新的杯套！",
            category: NotificationCategory.product
        },{
            title: "新設計出爐拉！",
            content: "愛因斯坦跟牛頓玩遊戲工作室推出了全新的杯套！",
            category: NotificationCategory.product
        },{
            title: "新設計出爐拉！",
            content: "愛因斯坦跟牛頓玩遊戲工作室推出了全新的杯套！",
            category: NotificationCategory.product
        },{
            title: "新設計出爐拉！",
            content: "愛因斯坦跟牛頓玩遊戲工作室推出了全新的杯套！",
            category: NotificationCategory.product
        },
    ],

    discountNotifications: [

    ],

    orderNotifications : [

    ],

    userNotifications : [

    ]
}

const NotificationBlock: React.FC<INotificationBlock> = (thisNotification) => {

    const dispatch = useDispatch()
    const [animStart, setAnimStart] = useState(false)
    const navigation = useNavigation()
    const focused = useIsFocused()

    const block = useSpring({

        opacity: animStart ? 1 : 0,
        left: animStart ? 0 : 32,
        config: config.stiff,
        delay: 75 * thisNotification.index!
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setAnimStart(false)
            console.log("BLUR")
        });

        return unsubscribe;
    }, [focused]);

    useEffect(() => {

        if (focused) {
            setAnimStart(true)
        }

    }, [focused])

    return <>

        <animated.View style={block}>

            <Pressable

                style={{

                    height: "auto",
                    width: WIDTH * 0.9,

                    flexDirection: "row",
                    backgroundColor: "white",
                    borderRadius: 10,
                    borderColor: "lightgray",
                    alignItems: "center",
                    borderWidth: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 6,

                    elevation: 8,

                    shadowRadius: 10,
                    shadowOpacity: 0.4,
                    shadowColor: "#bbb",
                    shadowOffset: {
                        height: 4,
                        width: 0
                    }
                }}
            >

                <VStack flex={1}
                        height={WIDTH * 0.15}
                        marginLeft={2}
                        justify={"center"}
                    // backgroundColor={"gray"}
                >
                    <Txt type={"heading3"} content={thisNotification.title} bold color={"#ff6854"}/>
                    <Txt marginTop={4} type={"normal"} content={thisNotification.content + ""}
                         color={"#666666"}/>
                </VStack>

            </Pressable>

        </animated.View>

    </>
}

export const NotificationBlockRenderItem: ListRenderItem<INotificationBlock> = ({item, index, separators}) =>

    <NotificationBlock title={item.title}
                       index={index}
                       content={item.content}
                       image={item.image}
                       category={item.category}
    />

const NotificationScreen : React.FC =() => {

    const [selected, setSelected] = useState(1)
    const [enterAnimation, setEnterAnimation] = useState<boolean>(false)
    const navigation = useNavigation()
    const focused = useIsFocused()

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setEnterAnimation(false)
            console.log("BLUR")
        });

        return unsubscribe;
    }, [focused]);

    useEffect(() => {

        if (focused) {
            setEnterAnimation(true)
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

    const button1 = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 24,
        delay: 100,
        config: config.default,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    const button2 = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 24,
        delay: 150,
        config: config.default,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    const button3 = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 24,
        delay: 200,
        config: config.default,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    const button4 = useSpring({

        opacity: enterAnimation ? 1 : 0,
        bottom: enterAnimation ? 0 : 24,
        delay: 250,
        config: config.default,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    return(

        <BaseLayout aCenter>

            <animated.View style={headerAnimation}>

                <ScreenHeader title={"通知"} spacing={24} showBackButton={false} showUtilButton={true} showShareButton={false}/>

            </animated.View>

            <HStack marginBottom={12}>

                <animated.View style={button1}>
                    <NotiGiftButton onPress={()=> {
                        setSelected(1)
                    }} props={{selected: selected === 1}}/>
                </animated.View>

                <View style={{width: 12}}/>

                <animated.View style={button2}>
                    <NotiTicketButton onPress={()=> {
                        setSelected(2)
                    }} props={{selected: selected === 2}}/>
                </animated.View>

                <View style={{width: 12}}/>

                <animated.View style={button3}>
                    <NotiBuyListButton onPress={()=> {
                        setSelected(3)
                    }} props={{selected: selected === 3}}/>
                </animated.View>

                <View style={{width: 12}}/>

                <animated.View style={button4}>
                    <NotiPersonButton onPress={()=> {
                        setSelected(4)
                    }} props={{selected: selected === 4}}/>
                </animated.View>

            </HStack>

            <FlatList
                data={notificationData.productNotifications}
                renderItem={({item, index, separators})=> <NotificationBlockRenderItem item={item} index={index} separators={separators}/>}

                contentContainerStyle={{
                    width: WIDTH,
                    alignItems: "center",
                    paddingTop: 12
                }}
                ItemSeparatorComponent={() => <View
                    style={{
                        height: 12
                    }}
                />}
            />

        </BaseLayout>
    )
}

export default NotificationScreen
