import {HStack} from "./primitive/Layout";
import React from "react";
import {Txt} from "./primitive/Text";
import {BackButton, MoreDotButton, ShareButton} from "./Icon";
import {WIDTH} from "../utility/util";

interface IScreenHeader {

    title: string,
    spacing?: number,
    showBackButton: boolean
    showUtilButton: boolean
    showShareButton: boolean
    onBackButtonPress?: ()=> void
    onUtilButtonPress?: ()=> void
    onShareButtonPress?: ()=> void
}

export const ScreenHeader: React.FC<IScreenHeader> = ({
                                                          title,
                                                          spacing,
                                                          showBackButton,
                                                          showUtilButton,
                                                          showShareButton,
                                                          onBackButtonPress,
                                                          onUtilButtonPress,
                                                          onShareButtonPress,

                                                      }) => {

    return <>

        <HStack height={28} width={WIDTH * 0.9} marginBottom={spacing? spacing : 12} marginTop={12} jCenter aCenter>

            <HStack justify={"flex-start"} flex={1}>

                {showBackButton ? <BackButton size={24} marginRight={8} onPress={onBackButtonPress}/> : <></>}

            </HStack>

            <Txt type={"heading1"} content={title} bold letterSpacing={1}/>

            <HStack justify={"flex-end"} flex={1}>

                {showShareButton ? <ShareButton size={20} marginLeft={8} onPress={onShareButtonPress}/> : <></>}

                {showUtilButton ? <MoreDotButton size={20} marginLeft={8} onPress={onUtilButtonPress}/> : <></>}

            </HStack>

        </HStack>

    </>
}
