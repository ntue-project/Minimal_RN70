import {BaseLayout, HStack} from "./primitive/Layout";
import React, {useState} from "react";
import {VarText} from "./primitive/Text";
import {Press} from "./primitive/Press";
import {config, useSpring, animated} from "@react-spring/native";
import LinearGradient from "react-native-linear-gradient";

interface ISegmentedButton {

    leftLabel: string,
    rightLabel: string
    onLeftPress: () => void
    onRightPress: () => void
    switchIndex: number
}

// <LinearGradient
//     useAngle={true}
//     angle={175}
//     angleCenter={{ x: 0.5, y: 0.75}}
//     locations={[0, 0.4, 1]}
//     colors={ switchIndex === 1 ?
//         ['#ffa947', "#ff8355", "#ff6a50"] :
//         ["#eee" , "#eee"]}
//
//     style={ switchIndex === 1 ?
//         { height: 32, flex: 1 , marginRight: 4, borderRadius: 8} :
//         { height: 32, flex: 1 , marginRight: 4, borderRadius: 8}}
// >
//
//     <Press backgroundColor={"transparent"} height={32} flex={1} marginRight={4} borderRadius={8}
//            onPress={onLeftPress}
//     >
//         <VarText type={"heading3"} content={leftLabel} color={"#fff"} bold/>
//     </Press>
// </LinearGradient>

export const SegmentedButton : React.FC<ISegmentedButton> = ({leftLabel, rightLabel, onLeftPress, onRightPress, switchIndex}) => {



    return <>

            <HStack height={36} width={"90%"} jCenter aCenter>


                    <Press height={32} flex={1} marginRight={4}
                           borderBottomWidth={switchIndex === 1 ? 2 : 1} borderColor={switchIndex === 1 ? "#ff6b3e" : "#bbb"}
                           // borderWidth={switchIndex === 1 ? 1 : 0} borderColor={"#f54c19"}
                           onPress={onLeftPress}
                    >
                        {switchIndex === 1?
                            <VarText type={"heading3"} content={leftLabel} color={"#ff6b3e"} bold/> : <VarText type={"heading3"} content={leftLabel} color={"#bbb"}/>
                        }
                    </Press>

                    <Press height={32} flex={1} marginLeft={4}
                           borderBottomWidth={switchIndex === 2 ? 2 : 1} borderColor={switchIndex === 2 ? "#ff6b3e" : "#bbb"}
                           onPress={onRightPress}
                    >
                        {switchIndex === 2?
                            <VarText type={"heading3"} content={rightLabel} color={"#ff6b3e"} bold/> : <VarText type={"heading3"} content={rightLabel} color={"#bbb"}/>
                        }
                    </Press>

            </HStack>

    </>
}
