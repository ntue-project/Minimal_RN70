import {HStack} from "./primitive/Layout";
import {RatingStarFull, RatingStarHalf, RatingStarOutline} from "./Icon";
import React from "react";

interface RatingStarProps {
    type?: string
}

interface RatingStarBarProps {
    rating?: number
}

export const RatingStar: React.FC<RatingStarProps> = ({type}) => {

     return <>

         { type === "FULL" ? <RatingStarFull size={14} color={"#ff5454"}/> :
             type === "HALF" ? <RatingStarHalf size={14} color={"#ff5454"}/> :
                 <RatingStarOutline size={14} color={"#ff5454"}/> }

     </>
}

export const RatingStarBar: React.FC<RatingStarBarProps> = ({rating}) => {

    return (
        <HStack width="auto" aCenter>
            <RatingStar type="FULL"/>
            <RatingStar type={rating! >= 2? "FULL" : rating! >= 1.35? "HALF" : "OUTLINE"}/>
            <RatingStar type={rating! >= 3? "FULL" : rating! >= 2.35? "HALF" : "OUTLINE"}/>
            <RatingStar type={rating! >= 4? "FULL" : rating! >= 3.35? "HALF" :  "OUTLINE"}/>
            <RatingStar type={rating! >= 5? "FULL" : rating! >= 4.35? "HALF" :  "OUTLINE"}/>
        </HStack>
    )
}
