"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Lottie from "@/components/lottie";
import Image from "next/image";

export default function CardHome() {
  const [Login, setLogin] = useState("");
  const router = useRouter();
  useEffect(() => {
    const login = localStorage.getItem('login')||"";
    setLogin(login);
    if(!login) {
      setTimeout(() => {
        router.replace("/");
      }, 2000);
    }
  }, []);

  if (!Login) {
    return (
      <Lottie/>
    );
  }
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col w-[210px] h-[914px] bg-[#FFFFFF] border-r-[1px] border-[#0000001A] pt-[30px] gap-[30px]"> 
        <div className="w-full max-h-[24.94px] px-[25px] gap-[10px]">
         <Image
            src="/Frame_TD.png"
            alt="Login"
            width={210}
            height={25}
            priority
          />
        </div>
        <div className="flex flex-col w-full h-full gap-[8px] items-center">
          <div className="w-full h-[630.06px]">
            <div className="w-full max-h-[15px] px-[25px] gap-[5px]">
              <p className=" w-[29px] h-[15px] text-[9px] leading-[15px] tracking-[0.12em] font-extrabold text-[#A3A3A3]">MENU</p>
            </div>
            <div className="flex flex-col w-full h-full px-[15px] gap-[7px]">
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px]">
                <Image
                  src="/Dashboard.png"
                  alt="Dashboard"
                  width={15}
                  height={15}
                />
                <p className="w-[68px] h-[15px] font-semibold text-[14px] leading-[15px] text-[#252525]">
                  Dashboard
                </p>
              </div>
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px] rounded-[5px] bg-[#CC6237]">
                <Image
                  src="/eventos.png"
                  alt="eventos"
                  width={15}
                  height={15}
                />
                <p className="w-[50px] h-[15px] font-semibold text-[14px] leading-[15px] text-[#FFFFFF]">
                  Eventos
                </p>
              </div>
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px]">
                <Image
                  src="/equipes.png"
                  alt="equipes"
                  width={15}
                  height={15}
                />
                <p className="w-[50px] h-[15px] font-semibold text-[14px] leading-[15px] text-[#252525]">
                  Equipes
                </p>
              </div>
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px]">
                <Image
                  src="/inscricoes.png"
                  alt="inscricoes"
                  width={15}
                  height={15}
                />
                <p className="w-[50px] h-[15px] font-semibold text-[14px] leading-[15px] text-[#252525]">
                  Inscrições
                </p>
              </div>
            </div>
          </div>
          <div className="w-[160px] h-[1px] bg-black/10"/>
          <div className="w-[210px] max-[182px] border-r-[1px] border-[#0000001A] pt-[30px] pb-[30px] pr-[25px] pl-[25px] gap-[5px]">
            <div className="flex flex-row w-full max-h-[42px] gap-[10px] p-[1px]">
              <div className="w-[40px] h-[40px] rounded-[15px] border-[1px] border-[#CC6237]">
                <Image
                  src="/admin.png"
                  alt="Admin"
                  width={40}
                  height={40}
                  className=" rounded-[15px] border-[2px] border-[#FFFFFF]"
                />
              </div>
              <div className="flex flex-col max-w-[82px] max-h-[31px] gap-[1px]">
                <p className="text-[14px] leading-[15px] font-medium text-[#000000] whitespace-nowrap">
                  Kaiques Steck
                </p>
                <p className="text-[11px] leading-[15px] font-normal text-[#000000]/50">
                  Administrador
                </p>
              </div>
              
            </div>
            <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px]">
              <Image
                src="/dados.png"
                alt="dados"
                width={15}
                height={15}
              />
              <p className="font-medium text-[14px] leading-[15px] text-[#252525]">
                Alterar dados
              </p>
            </div>
            <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px] cursor-pointer transition-transform duration-300 ease-out hover:translate-x-2"
            onClick={()=>{
              localStorage.removeItem('login');
              router.replace("/");
            }}
            >
              <Image
                src="/sair.png"
                alt="Sair"
                width={15}
                height={15}
              />
              <p className="font-medium text-[14px] leading-[15px] text-[#252525]">
                Sair
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  w-full h-full bg-[#F8F8F8] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col w-full h-[119px] justify-between p-[30px]">
          <div className="flex flex-row w-full max-h-[23px] ">
              <p className="text-[16px] leading-[23px] font-normal text-[#252525]">
                Bem vindo de volta, <span className="font-bold">Kaique Steck</span>
              </p>
          </div>
          <div className="w-full max-h-[23px] gap-[10px]">
            <p className="text-[20px] leading-[23px] font-bold text-[#CC6237]/90">
              Todos os eventos
            </p>
          </div>
        </div>  
        <div className="flex flex-col w-full h-[825px] p-[30px] gap-[300px]">
          <div className="w-full max-h-[289px] rounded-[10px] border-[1px] border-[#09428F2B] p-[20px] gap-[10px] bg-[#FFFFFF]">
            <div className="flex flex-col w-full max-h-[249px] rounded-[10px] bg-[#FFFFFF]"> 
              <div className="flex flex-row justify-end items-center w-full h-[60px]">
                <div className="flex flex-row max-w-[337px] max-h-[36px] gap-[10px]">
                  <div className="flex flex-row max-w-[203px] max-h-[36px] px-[10px] py-[15px] gap-[10px] bg-[#F6F6F6] rounded-[33px] items-center justify-between">
                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                      <Image
                        src="/pesquisa.png"
                        alt="pesquisa"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className="w-[147px] max-h-[15px] flex items-center">
                      <input
                        type="text"
                        placeholder="Buscar eventos"
                        className="font-medium text-[13px] leading-[15px] text-[#000000]/20"
                      />
                    </div>
                    
                  </div>
                  <div className="flex flex-row max-w-[124px] max-h-[36px] gap-[10px] rounded-[33px] px-[10px] py-[15px] bg-[#CC6237] items-center justify-between">
                      <Image
                        src="/inserir.png"
                        alt="inserir"
                        width={16}
                        height={16}
                      />
                      <div className="max-w-[69px] max-h-[15px] flex items-center">
                        <p className="font-medium text-[13px] leading-[15px] text-[#FFFFFF]">
                        Inserir novo
                        </p>
                      </div>
                    </div>         
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}
