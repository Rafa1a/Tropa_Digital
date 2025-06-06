"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import dynamic from "next/dynamic";

// Importando o componente de loading dinâmico
const LottieLoading = dynamic(() => 
    import("@/components/Lottieloading"), {
    ssr: false,
});

export default function Card_Login({envemail, envpassword}:{envemail: string, envpassword: string}) {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    return (
        <div className="
        flex flex-row
        max-w-[756px] 
        max-h-[498px] 
        bg-white 
        rounded-[20px] 
        p-[10px]
        shadow-[0_100px_200px_0px] 
        shadow-black/25 
        ">
            {/* FRAME 1 */}
            <div className="flex flex-col w-[339px] h-[478px] gap-[20px] pt-[40px] pb-[40px] pr-[20px] pl-[20px]">
                <div className="flex flex-col gap-[35px] max-w-[299px] h-[388px] pb-[35px]">
                    <Image
                        src="/Frame_TD.png"
                        alt="Login"
                        width={161}
                        height={25}
                        priority
                    />
                    <div className="flex flex-col w-[299px] h-[35px]">
                        <h1 className="text-[26px] leading-[25px] font-bold text-[#CC6237] ">
                            Bem-vindo de volta!
                        </h1>
                        <p className="text-[13px] leading-[15px] font-normal text-[#95a6c7]">
                            Entre com sua conta para acessar o painel.
                        </p>
                    </div>
                    <div className="flex flex-col w-[299px] max-h-[200px]">
                        <div className="flex flex-col w-[299px]  max-h-[60px] gap-[15px]">
                            <label className="w-[299px] h-[15px] text-[13px] leading-[15px] font-semibold text-[#CC6237]">
                                E-mail
                            </label>
                            <input
                                type="email"
                                placeholder="seunome@seuservidor.com"
                                className="
                                max-w-[299px] h-[40px] rounded-[100px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] bg-[#F6F6F6]
                                text-[12px] leading-[15px] font-normal text-[#657593] 
                                "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="w-[299px] h-[15px] text-[13px] leading-[15px] font-semibold text-[#CC6237]">
                                Senha
                            </label>
                            <div className="relative w-[299px]">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    placeholder="Digite aqui"
                                    className="
                                    w-full h-[40px] rounded-[100px] pt-[10px] pb-[10px] pl-[20px] pr-[40px] bg-[#F6F6F6]
                                    text-[12px] leading-[15px] font-normal text-[#657593]
                                    "
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Image
                                    src="/eyes.png"
                                    alt="Mostrar senha"
                                    width={24.37}
                                    height={16.25}
                                    className="absolute right-3 top-3  cursor-pointer"
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    style={{ display: isPasswordVisible ? 'none' : 'block' }}
                                />
                                <Image
                                    src="/eye-closed.png"
                                    alt="Ocultar senha"
                                    width={24.37}
                                    height={16.25}
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    style={{ display: isPasswordVisible ? 'block' : 'none' }}
                                />
                            </div>
                            <div className={`
                                w-[299px] max-h-[40px] gap-[5px] 
                                cursor-pointer
                                ${loading && "cursor-none opacity-80"}
                                `}>
                                <div className="flex w-[299px] h-[40px] rounded-[100px] justify-center pt-[10px] pb-[10px] pl-[25px] pr-[25px] bg-[#CC6237] 
                                transition-opacity duration-300 ease-out hover:opacity-80
                                "
                                onClick={() => {
                                    if (loading) return; 
                                    setLoading(true);
                                    if (email === envemail && password === envpassword) {
                                        setTimeout(() => {
                                            localStorage.setItem("login", "true");
                                            setLoading(false);  
                                            router.replace("/home");
                                        }, 1000);
                                    } else {
                                        setTimeout(() => {
                                            alert("E-mail ou senha incorretos");
                                            setLoading(false);
                                        }, 1000);
                                    }
                                }}
                            >
                                    {loading?<LottieLoading/>:<p className="w-[36px] h-[15px] text-[13px] leading-[15px] font-medium text-white">
                                        Entrar
                                    </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FRAME 2 */}
            <div className="w-[397.5px] h-[478px]  flex justify-end max-[770px]:hidden ">
                <div className="w-[355.5px] h-[478px] rounded-[20px] bg-[#CC6237] flex justify-center items-end ">
                    <Image
                        src="/image.png"
                        alt="Imagem de fundo"
                        width={357}
                        height={316}
                        className="rounded-[20px] relative top-4.5 right-10"
                    />
                </div>
            </div>
        </div>
    );
}