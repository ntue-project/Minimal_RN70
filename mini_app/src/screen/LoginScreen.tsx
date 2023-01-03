import React, {useState} from "react";
import {GradientButton} from "../component/GradientButton";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {Press} from "../component/primitive/Press";
import {HEIGHT, WIDTH} from "../utility/util";

// @ts-ignore
import Logo from "../resource/logo.svg"
import {Image, Text, TextInput} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppleIconButton, EyeIcon, EyeOffIcon, FacebookIconButton, GoogleIconButton} from "../component/Icon";
import {Txt} from "../component/primitive/Text";

import {selectAccount} from "../state/accountSlice";
import images from "../utility/image";
import {RealmApp} from "../realm/realm";


const LoginScreen: React.FC = () => {

    const [inputPassword, setInputPassword] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputNickname, setInputNickname] = useState("")

    const [showPassword, setShowPassword] = useState(false)

    const [isLoginMode, setIsLoginMode] = useState(true)

    const dispatch = useDispatch()
    const account = useSelector(selectAccount)

    return (

        <BaseLayout center>

            <VStack justify={"space-between"} aCenter height={HEIGHT * 0.7} width={"100%"}>

                <Logo height={40}/>

                <VStack marginTop={HEIGHT * 0.05} height={440} justify={"space-between"} aCenter>

                    <HStack width={WIDTH * 0.4} height={48} aCenter justify={"space-between"}>
                        <FacebookIconButton onPress={() => {
                            console.log("login with facebook")
                            //Facebook login logic
                            //Facebook login logic
                            //Facebook login logic
                        }}/>
                        <GoogleIconButton onPress={() => {
                            console.log("login with google")
                            //Google login logic
                            //Google login logic
                            //Google login logic
                        }}/>
                        <AppleIconButton onPress={() => {
                            console.log("login with apple")
                            //Apple login logic
                            //Apple login logic
                            //Apple login logic
                        }}/>
                    </HStack>

                    {isLoginMode ?

                        <>

                            <HStack height={1} backgroundColor={"#ff5454"} width={WIDTH * 0.75} opacity={0.5}>
                                <Txt type={"heading3"} content={"使用 Minimal 帳號登入"} position={"absolute"}
                                     left={"19%"} top={-10} backgroundColor={"white"} px={12}/>
                            </HStack>

                            <VStack>

                                <VStack marginBottom={16}>
                                    <Txt type={"heading3"} content={"帳號"} marginBottom={8} marginLeft={8}
                                         color="#666"/>
                                    <HStack width={WIDTH * 0.8} aCenter borderRadius={15} backgroundColor="#f5f5f5"
                                            paddingRight={12}>

                                        <TextInput
                                            style={{
                                                height: 48,
                                                backgroundColor: "transparent",
                                                paddingHorizontal: 16,
                                                fontSize: 14,
                                                letterSpacing: 0.5,
                                                color: "#666",
                                                flex: 1,
                                            }}
                                            placeholder={"輸入電子郵件"}
                                            placeholderTextColor={"#c4c4c4"}
                                            textContentType="emailAddress"
                                            value={inputEmail}
                                            onChangeText={(text) => {
                                                setInputEmail(text)
                                            }}
                                        />

                                    </HStack>
                                </VStack>

                                <VStack>
                                    <Txt type={"heading3"} content={"密碼"} marginBottom={8} marginLeft={8}
                                         color="#666"/>
                                    <HStack width={WIDTH * 0.8} aCenter borderRadius={15} backgroundColor="#f5f5f5"
                                            paddingRight={12}>

                                        <TextInput
                                            style={{
                                                height: 48,
                                                backgroundColor: "transparent",
                                                paddingHorizontal: 16,
                                                fontSize: 14,
                                                letterSpacing: 0.5,
                                                color: "#666",
                                                flex: 1,
                                            }}
                                            placeholder={"輸入密碼"}
                                            placeholderTextColor={"#c4c4c4"}
                                            textContentType="newPassword"
                                            secureTextEntry={true}
                                            value={inputPassword}
                                            onChangeText={(text) => {
                                                setInputPassword(text)
                                            }}
                                        />

                                        {showPassword ? <EyeIcon/> : <EyeOffIcon/>}
                                    </HStack>
                                </VStack>

                            </VStack>

                            <VStack marginTop={32}>

                                <GradientButton type={"lg"} fontWeight={"bold"} title={"登入 Minimal"}
                                                width={WIDTH * 0.65}
                                                onPress={async () => {

                                                    console.log("hi!!!")
                                                    const credentials = Realm.Credentials.emailPassword(inputEmail, inputPassword)

                                                    try {

                                                        const user = await RealmApp.logIn(credentials);
                                                        console.log("Successfully logged in!", user.id);
                                                        return user;

                                                    } catch (err: any) {

                                                        console.error("Failed to log in", err.message);
                                                    }

                                                }} debugLog="Btn Login Press"/>

                                <HStack height={48} jCenter aCenter>

                                    <Txt type={"heading3"} content={"沒有帳號？"} color={"#888"}/>

                                    <Press onPress={() => {

                                        setIsLoginMode(prev => !prev)
                                    }}>
                                        <Txt type={"heading3"} content={"註冊"} color={"#ff5454"} bold/>
                                    </Press>
                                </HStack>
                            </VStack>

                        </> :

                        <>

                            <HStack height={1} backgroundColor={"#ff5454"} width={WIDTH * 0.75} opacity={0.5}>
                                <Txt type={"heading3"} content={"註冊 Minimal 帳戶"} position={"absolute"}
                                     left={"19%"} top={-10} backgroundColor={"white"} px={12}/>
                            </HStack>

                            <VStack>

                                <VStack marginBottom={16}>
                                    <Txt type={"heading3"} content={"帳號"} marginBottom={8} marginLeft={8}
                                         color="#666"/>
                                    <HStack width={WIDTH * 0.8} aCenter borderRadius={15} backgroundColor="#f5f5f5"
                                            paddingRight={12}>

                                        <TextInput
                                            style={{
                                                height: 48,
                                                backgroundColor: "transparent",
                                                paddingHorizontal: 16,
                                                fontSize: 14,
                                                letterSpacing: 0.5,
                                                color: "#666",
                                                flex: 1,
                                            }}
                                            placeholder={"輸入電子郵件"}
                                            placeholderTextColor={"#c4c4c4"}
                                            textContentType="emailAddress"
                                            value={inputEmail}
                                            onChangeText={(text) => {
                                                setInputEmail(text)
                                            }}
                                        />

                                    </HStack>
                                </VStack>

                                <VStack>
                                    <Txt type={"heading3"} content={"密碼"} marginBottom={8} marginLeft={8}
                                         color="#666"/>
                                    <HStack width={WIDTH * 0.8} aCenter borderRadius={15} backgroundColor="#f5f5f5"
                                            paddingRight={12}>

                                        <TextInput
                                            style={{
                                                height: 48,
                                                backgroundColor: "transparent",
                                                paddingHorizontal: 16,
                                                fontSize: 14,
                                                letterSpacing: 0.5,
                                                color: "#666",
                                                flex: 1,
                                            }}
                                            placeholder={"輸入密碼"}
                                            placeholderTextColor={"#c4c4c4"}
                                            textContentType="newPassword"
                                            secureTextEntry={true}
                                            value={inputPassword}
                                            onChangeText={(text) => {
                                                setInputPassword(text)
                                            }}
                                        />

                                        {showPassword ? <EyeIcon/> : <EyeOffIcon/>}
                                    </HStack>
                                </VStack>
                            </VStack>

                            <VStack marginTop={32}>

                                <GradientButton type={"lg"} fontWeight={"bold"} title={"註冊 Minimal"}
                                                width={WIDTH * 0.65} onPress={async () => {

                                    console.log("Registering User...")

                                    //@ts-ignore
                                    RealmApp.emailPasswordAuth.registerUser({ email: inputEmail , password: inputPassword})
                                        .then(res=> {
                                            console.log("Registration Result: " + res)
                                        }, rej=> {
                                            console.log("Registration Rejection: " + rej)
                                        })

                                }} debugLog="Btn Login Press"/>

                                <HStack height={48} jCenter aCenter>

                                    <Txt type={"heading3"} content={"已有帳戶？"} color={"#888"}/>

                                    <Press onPress={()=> {

                                        setIsLoginMode(prev => !prev)}
                                    }>
                                        <Txt type={"heading3"} content={"登入"} color={"#ff5454"} bold/>
                                    </Press>

                                </HStack>
                            </VStack>
                        </>

                    }


                </VStack>
            </VStack>
        </BaseLayout>
    )
}

export default LoginScreen
