import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {IPress, IPressIcon, IPressWithProps} from "../typedef/IPress";
import {WIDTH} from "../utility/util";
import MaskedView from "@react-native-masked-view/masked-view";
import {Icon} from "react-native-vector-icons/Icon";
import LinearGradient from "react-native-linear-gradient";

export const EyeIcon: React.FC = () => <Feather name="eye" size={18} color="#bbb"/>;
export const EyeOffIcon: React.FC = () => <Feather name="eye-off" size={18} color="#bbb"/>;
export const HeartOutline: React.FC = () => <FontAwesome name="heart-o" size={20} color="#FF5454"/>;
export const HeartFilled: React.FC = () => <FontAwesome name="heart" size={20} color="#FF5454"/>;

export const GoogleIconButton: React.FC<IPress> = ({onPress}) => {

    return (
        <Pressable style={{
            borderRadius: 100,
            backgroundColor: "#ff5454",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center"
        }}
                   onPress={onPress}>
            <FontAwesome5 name="google" size={17} color="#fff"/>
        </Pressable>
    )

}

export const FacebookIconButton: React.FC<IPress> = ({onPress}) => {

    return (
        <Pressable style={{
            borderRadius: 100,
            backgroundColor: "#5c5b8c",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center"
        }}
                   onPress={onPress}>
            <FontAwesome5 name="facebook-f" size={17} color="#fff"/>
        </Pressable>
    )

}

export const AppleIconButton: React.FC<IPress> = ({onPress}) => {

    return (
        <Pressable style={{

            borderRadius: 100,
            backgroundColor: "#000",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2
        }}
                   onPress={onPress}>
            <FontAwesome5 name="apple" size={19} color="#fff"/>
        </Pressable>
    )

}

export const ShoppingCart: React.FC<IPress> = ({onPress}) => {

    return (
        <Pressable style={{

            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#ddd",
            backgroundColor: "#f2f2f2",
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2
        }}
                   onPress={onPress}>
            <Feather name="shopping-cart" size={18} color="#666"/>
        </Pressable>
    )

}

export const MainScreenSearchButton: React.FC<IPress> = ({onPress}) => {

    return (
        <Pressable style={{

            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#ff5e3e",
            backgroundColor: "#ff8742",
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2
        }}
                   onPress={onPress}>
            <Feather name="search" size={18} color="#fff"/>
        </Pressable>
    )

}

export const XButton: React.FC<IPress> = ({onPress}) => {

    return (
        <Pressable style={{

            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#bbb",
            backgroundColor: "#f2f2f2",
            height: 20,
            width: 20,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 1,
        }}
                   onPress={onPress}>
            <Feather name="x" size={14} color="#888"/>
        </Pressable>
    )

}

export const MoreDotButton: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {

    return (
        // @ts-ignore
        <Pressable style={{

            height: size! + 6,
            width: size! + 6,
            justifyContent: "center",
            alignItems: "center",

            marginLeft: props.marginLeft
        }}
                   onPress={onPress}>
            <Feather name="more-horizontal" size={size} color="#888"/>
        </Pressable>
    )

}

export const ShareButton: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {

    return (
        // @ts-ignore
        <Pressable style={{

            height: size! + 6,
            width: size! + 6,
            justifyContent: "center",
            alignItems: "center",

            marginLeft: props.marginLeft
        }}
                   onPress={onPress}>
            <Feather name="share" size={size} color="#888"/>
        </Pressable>
    )

}

export const BackButton: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {


    return (

        // @ts-ignore
        <Pressable style={{

            height: size! + 6,
            width: size! + 6,
            justifyContent: "center",
            alignItems: "center",

            marginRight: props.marginRight

        }}
                   onPress={onPress}>
            <Feather name="chevron-left" size={size} color="#888"/>
        </Pressable>
    )

}

export const RightArrow: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {


    return (

        // @ts-ignore
        <Pressable style={{

            height: size! + 6,
            width: size! + 6,
            justifyContent: "center",
            alignItems: "center",

            marginRight: props.marginRight

        }}
                   onPress={onPress}>
            <Feather name="chevron-right" size={size} color="#888"/>
        </Pressable>
    )

}

export const ShoppingBag: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {


    return (

        // @ts-ignore
        <Pressable style={{

            height: size! + 6,
            width: size! + 6,
            justifyContent: "center",
            alignItems: "center",

            marginRight: props.marginRight

        }}
                   onPress={onPress}>
            <Feather name="shopping-bag" size={size} color={color? color : "#666"}/>
        </Pressable>
    )

}

// export const ShoppingBag: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {
//
//
//     return (
//
//         // @ts-ignore
//         <Pressable style={{
//
//             height: size! + 6,
//             width: size! + 6,
//             justifyContent: "center",
//             alignItems: "center",
//
//             marginRight: props.marginRight
//
//         }}
//                    onPress={onPress}>
//             <Feather name="shopping-bag" size={size} color="#888"/>
//         </Pressable>
//     )
//
// }

export const RatingStarHalf: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {


    return (

        // @ts-ignore
        <Pressable style={{

            height: size! + 4,
            width: size! + 4,
            justifyContent: "center",
            alignItems: "center",

            marginRight: props.marginRight

        }}
                   onPress={onPress}>
            <FontAwesome name="star-half-empty" size={size} color={color}/>
        </Pressable>
    )

}

export const RatingStarFull: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {


    return (

        // @ts-ignore
        <Pressable style={{

            height: size! + 4,
            width: size! + 4,
            justifyContent: "center",
            alignItems: "center",

            marginRight: props.marginRight

        }}
                   onPress={onPress}>
            <FontAwesome name="star" size={size} color={color}/>
        </Pressable>
    )

}

export const RatingStarOutline: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {


    return (

        // @ts-ignore
        <Pressable style={{

            height: size! + 4,
            width: size! + 4,
            justifyContent: "center",
            alignItems: "center",

            marginRight: props.marginRight

        }}
                   onPress={onPress}>
            <FontAwesome name="star-o" size={size} color={color}/>
        </Pressable>
    )

}

export const HeartButton: React.FC<IPressIcon> = ({onPress, size, color, ...props}) => {


    return (

        // @ts-ignore
        <Pressable style={{

            height: size! + 6,
            width: size! + 6,
            justifyContent: "center",
            alignItems: "center",

            marginRight: props.marginRight

        }}
                   onPress={onPress}>
            <Feather name="heart" size={size} color={color}/>
        </Pressable>
    )

}


export const WishlistHeartIconButton: React.FC<IPressWithProps> = ({onPress, props}) => {

    return(
        <Pressable style={{
            zIndex: 100,
            position: "absolute",
            left:  WIDTH * 0.43 - 32 -8, //related to the width of the item
            bottom: WIDTH * 0.43 + 8, //related to the size itself
            borderRadius: 100,
            backgroundColor: "#fff",
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
            elevation: 8,
            shadowOpacity: .2,
            shadowOffset: {
                height: 1,
                width: 0
            },
            shadowRadius: 6,
        }}
                   onPress={onPress}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: 32 }}
                maskElement={
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        {props!.liked? // weather it is hearted.
                            <FontAwesome
                                name="heart"
                                size={18}
                                color="white"
                            /> : <FontAwesome
                                name="heart-o"
                                size={18}
                                color="white"
                            /> }
                    </View>
                }>
                <LinearGradient
                    useAngle={true}
                    angle={170}
                    angleCenter={{ x: 0.5, y: 0.7}}
                    locations={[0, 0.6]}
                    colors={['#ffd5a2', "#ff5234"]}
                    style={{ flex: 1 }}
                />
            </MaskedView>
        </Pressable>
    )
}

export const NotiGiftButton: React.FC<IPressWithProps> = ({onPress, props}) => {

    return(

        <Pressable style={

            props.selected ? {

                borderRadius: 100,
                overflow: "hidden",
                backgroundColor: "black",
                zIndex: 100,
                height: 56,
                width: 56,
                // justifyContent: "center",
                // alignItems: "center",

            } : {

                zIndex: 100,
                height: 56,
                width: 56,
                justifyContent: "center",
                alignItems: "center",

            }}
                   onPress={onPress}>

            {props.selected ?

                <></> :

                <MaskedView

                    style={{flex: 1, flexDirection: 'row', height: 32, zIndex: 1}}
                    maskElement={

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                            <View style={{
                                position: "absolute",
                                borderRadius: 100,
                                borderWidth: 2,
                                height: 56,
                                width: 56
                            }}/>
                            <Feather
                                name="gift"
                                size={24}
                                color="white"
                            />

                        </View>
                    }>

                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{x: 0.5, y: 0.7}}
                        locations={[0, 0.6]}
                        colors={['#ffad32', "#ff5454"]}
                        style={{flex: 1}}
                    />

                </MaskedView>
            }

            {props.selected?


                <LinearGradient
                    useAngle={true}
                    angle={170}
                    angleCenter={{x: 0.5, y: 0.7}}
                    locations={[0, 0.6]}
                    colors={['#ffad32', "#ff5454"]}
                    style={{flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 2}}
                >
                    <Feather
                        name="gift"
                        size={24}
                        color="white"
                    />

                </LinearGradient> : <></>

            }

        </Pressable>
    )
}

export const NotiTicketButton: React.FC<IPressWithProps> = ({onPress, props}) => {

    return(

        <Pressable style={

            props.selected ? {

                borderRadius: 100,
                overflow: "hidden",
                backgroundColor: "black",
                zIndex: 100,
                height: 56,
                width: 56,
                // justifyContent: "center",
                // alignItems: "center",
                ...props

            } : {

                zIndex: 100,
                height: 56,
                width: 56,
                justifyContent: "center",
                alignItems: "center",
                ...props

            }}
                   onPress={onPress}>

            {props.selected ?

                <></> :

                <MaskedView

                    style={{flex: 1, flexDirection: 'row', height: 32, zIndex: 1}}
                    maskElement={

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                            <View style={{
                                position: "absolute",
                                borderRadius: 100,
                                borderWidth: 2,
                                height: 56,
                                width: 56
                            }}/>
                            <MaterialCommunityIcons
                                name="ticket-percent-outline"
                                size={25}
                                color="white"
                            />

                        </View>
                    }>

                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{x: 0.5, y: 0.7}}
                        locations={[0, 0.6]}
                        colors={['#ffad32', "#ff5454"]}
                        style={{flex: 1}}
                    />

                </MaskedView>
            }

            {props.selected?


                <LinearGradient
                    useAngle={true}
                    angle={170}
                    angleCenter={{x: 0.5, y: 0.7}}
                    locations={[0, 0.6]}
                    colors={['#ffad32', "#ff5454"]}
                    style={{flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 0}}
                >
                    <MaterialCommunityIcons
                        name="ticket-percent-outline"
                        size={25}
                        color="white"
                    />

                </LinearGradient> : <></>

            }

        </Pressable>
    )
}

export const NotiBuyListButton: React.FC<IPressWithProps> = ({onPress, props}) => {

    return(

        <Pressable style={

            props.selected ? {

                borderRadius: 100,
                overflow: "hidden",
                backgroundColor: "black",
                zIndex: 100,
                height: 56,
                width: 56,
                // justifyContent: "center",
                // alignItems: "center",

            } : {

                zIndex: 100,
                height: 56,
                width: 56,
                justifyContent: "center",
                alignItems: "center",

            }}
                   onPress={onPress}>

            {props.selected ?

                <></> :

                <MaskedView

                    style={{flex: 1, flexDirection: 'row', height: 32, zIndex: 1}}
                    maskElement={

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                            <View style={{
                                position: "absolute",
                                borderRadius: 100,
                                borderWidth: 2,
                                height: 56,
                                width: 56
                            }}/>
                            <Feather
                                name="clipboard"
                                size={24}
                                color="white"
                            />

                        </View>
                    }>

                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{x: 0.5, y: 0.7}}
                        locations={[0, 0.6]}
                        colors={['#ffad32', "#ff5454"]}
                        style={{flex: 1}}
                    />

                </MaskedView>
            }

            {props.selected?


                <LinearGradient
                    useAngle={true}
                    angle={170}
                    angleCenter={{x: 0.5, y: 0.7}}
                    locations={[0, 0.6]}
                    colors={['#ffad32', "#ff5454"]}
                    style={{flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 2}}
                >
                    <Feather
                        name="clipboard"
                        size={24}
                        color="white"
                    />

                </LinearGradient> : <></>

            }

        </Pressable>
    )
}

export const NotiPersonButton: React.FC<IPressWithProps> = ({onPress, props}) => {

    return(

        <Pressable style={

            props.selected ? {

                borderRadius: 100,
                overflow: "hidden",
                backgroundColor: "black",
                zIndex: 100,
                height: 56,
                width: 56,
                // justifyContent: "center",
                // alignItems: "center",

            } : {

                zIndex: 100,
                height: 56,
                width: 56,
                justifyContent: "center",
                alignItems: "center",

            }}
                   onPress={onPress}>

            {props.selected ?

                <></> :

                <MaskedView

                    style={{flex: 1, flexDirection: 'row', height: 32, zIndex: 1}}
                    maskElement={

                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                            <View style={{
                                position: "absolute",
                                borderRadius: 100,
                                borderWidth: 2,
                                height: 56,
                                width: 56
                            }}/>
                            <Feather
                                name="user"
                                size={24}
                                color="white"
                            />

                        </View>
                    }>

                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{x: 0.5, y: 0.7}}
                        locations={[0, 0.6]}
                        colors={['#ffad32', "#ff5454"]}
                        style={{flex: 1}}
                    />

                </MaskedView>
            }

            {props.selected?


                <LinearGradient
                    useAngle={true}
                    angle={170}
                    angleCenter={{x: 0.5, y: 0.7}}
                    locations={[0, 0.6]}
                    colors={['#ffad32', "#ff5454"]}
                    style={{flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 2}}
                >
                    <Feather
                        name="user"
                        size={24}
                        color="white"
                    />

                </LinearGradient> : <></>

            }

        </Pressable>
    )
}

