import {HStack} from "./primitive/Layout";
import React from "react";
import {VarText} from "./primitive/Text";
import {BackButton, MoreDotButton, ShareButton} from "./Icon";
import {WIDTH} from "../utility/util";

interface IScreenHeader {

    title: string,
    showBackButton: boolean
    showUtilButton: boolean
    showShareButton: boolean
}

export const ScreenHeader : React.FC<IScreenHeader> = ({title, showBackButton, showUtilButton, showShareButton}) => {

    return <>

        <HStack height={48} width={WIDTH * 0.9} paddingBottom={4} jCenter aCenter>

            <HStack justify={"flex-start"} flex={1}>

                { showBackButton? <BackButton size={24} marginRight={8}/> : <></> }

            </HStack>

            <VarText type={"heading2"} content={title} bold/>

            <HStack justify={"flex-end"} flex={1}>

                {showShareButton? <ShareButton size={20} marginLeft={8}/> : <></> }

                {showUtilButton? <MoreDotButton size={20} marginLeft={8}/> : <></> }

            </HStack>

        </HStack>

    </>
}
