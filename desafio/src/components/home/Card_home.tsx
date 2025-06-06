"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
// Importando o componente de loading dinâmico
const LottieAstronaut = dynamic(
  () => import("@/components/LottieAstronaut"),
  { ssr: false }
);
export default function CardHome() {
  const [Login, setLogin] = useState("");
  const router = useRouter();
  const [menurecuo, setMenuRecuo] = useState(false);
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
      <LottieAstronaut/>
    );
  }
  return (
    <div className="flex flex-row h-screen">
      {/* Menu */}
      <button className={`min-md:hidden absolute bottom-[30px] left-[30px] z-20 cursor-pointer bg-[#CC6237] rounded-[15px]  flex items-center justify-center p-1 ${menurecuo && "translate-x-[190px]"} transition-transform duration-300 ease-out`} 
      onClick={() => setMenuRecuo(!menurecuo)}
      >
          <p className="text-white font-normal text-[15px]">Menu</p>
      </button>
      <div className={`
      flex flex-col w-[210px] h-full bg-[#FFFFFF] border-r-[1px] border-[#0000001A] pt-[30px] gap-[30px]
      md:static
      ${menurecuo ? "absolute translate-x-0 md:translate-x-0" : "absolute -translate-x-[210px] md:translate-x-0"} 
      transition-transform duration-300 ease-out z-10`}> 
        <div className="w-full max-h-[24.94px] px-[25px] gap-[10px]">
         <Image
            src="/Frame_TD.png"
            alt="Login"
            width={210}
            height={25}
            priority
          />
        </div>
        <div className="flex flex-col w-full h-full gap-[8px] items-center justify-between">
          <div className="w-full h-[630.06px]">
            <div className="w-full max-h-[15px] px-[25px] gap-[5px]">
              <p className=" w-[29px] h-[15px] text-[9px] leading-[15px] tracking-[0.12em] font-extrabold text-[#A3A3A3]">MENU</p>
            </div>
            <div className="flex flex-col w-full h-full px-[15px] gap-[7px]">
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px] cursor-pointer">
                <Image
                  src="/Dashboard.png"
                  alt="Dashboard"
                  width={15}
                  height={15}
                />
                <p className="w-[68px] h-[15px] font-semibold text-[14px] leading-[15px] text-[#252525]  cursor-pointer">
                  Dashboard
                </p>
              </div>
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px] rounded-[5px] bg-[#CC6237]  cursor-pointer">
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
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px]  cursor-pointer">
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
              <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px]  cursor-pointer">
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
            <div className="flex flex-row w-full max-h-[42px] gap-[10px] p-[1px]  cursor-pointer">
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
            <div className="flex flex-row w-full max-h-[35px] p-[10px] gap-[10px]  cursor-pointer">
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
      {/* Conteúdo Principal Eventos */}
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
        <div className="flex flex-col w-full h-[825px] p-[30px] gap-[300px] max-[440px]:hidden">
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
                  <div className="flex flex-row max-w-[124px] max-h-[36px] gap-[10px] rounded-[33px] px-[10px] py-[15px] bg-[#CC6237] items-center justify-between cursor-pointer">
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
              <div className="w-full max-h-[115px]">
                <table className="w-full h-full ">
                  <thead className="w-full h-[39px] ">
                    <tr className="w-full max-h-[39px]">
                      <th className="w-[332.5px] h-[39px] fontPoppins text-left text-[13px] leading-[15px] font-medium text-[#CC6237]/50">
                        Nome do evento
                      </th>
                      <th className="w-[332.5px] h-[39px] fontPoppins text-left text-[13px] leading-[15px] font-medium text-[#CC6237]/50 pl-[20px]">
                        Total de equipes
                      </th>
                      <th className="w-[332.5px] h-[39px] fontPoppins text-left text-[13px] leading-[15px] font-medium text-[#CC6237]/50 pl-[20px]">
                        Status
                      </th>
                      <th className="w-[332.5px] h-[39px] text-left text-[13px] leading-[15px] font-medium text-[#CC6237]/50 pl-[20px]">
                        Data
                      </th>
                      <th className="w-[40px] max-h-[39px] pl-[20px]"/>
                    </tr>
                  </thead>
                  <tbody className="w-full h-[38px] border-t-[1px] border-[#CC6237]/10">
                    <tr className="w-full h-[38px]">
                      <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593]">
                        Evento 1
                      </td>
                      <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593] pl-[20px]">
                        10
                      </td>
                      <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593] pl-[20px]">
                          <div className="flex flex-row items-center gap-[9px]">
                            <Image
                              src="/ativo.png"
                              alt="ativo"
                              width={9}
                              height={9}
                            />
                            <p>Ativo</p>
                          </div>
                      </td>

                      <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593] pl-[20px] ">
                        01/01/2023
                      </td>
                      <td className="w-[40px] h-[38px] cursor-pointer ">
                        <Image
                          src="/editar.png"
                          alt="editar"
                          width={6}
                          height={17}
                        />
                      </td>
                    </tr>
                    <tr className="w-full h-[38px] border-t-[1px] border-[#CC6237]/10">
                        <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593]">
                          Evento 1
                        </td>
                        <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593] pl-[20px]">
                          10
                        </td>
                        <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593] pl-[20px]">
                            <div className="flex flex-row items-center gap-[9px]">
                              <Image
                                src="/ativo.png"
                                alt="ativo"
                                width={9}
                                height={9}
                              />
                              <p>Ativo</p>
                            </div>
                        </td>
                        <td className="text-left text-[12px] leading-[15px] font-normal text-[#657593] pl-[20px]">
                          01/01/2023
                        </td>
                        <td className="w-[40px] h-[38px]  cursor-pointer">
                          <Image
                            src="/editar.png"
                            alt="editar"
                            width={6}
                            height={17}
                          />
                        </td>
                    </tr>
                    
                  </tbody>
               </table>
              </div>
              <div className="w-full h-[74px] border-t-[1px] border-[#CC6237]/10 py-[10px] gap-[10px] flex items-center justify-end">
                <button className="max-w-[75px] maxh-h-[35px] rounded-[200px] px-[10px] py-[16px] bg-[#F5F5F5] cursor-pointer" >
                  <p className="text-[12px] leading-[15px] font-normal text-[#000000]">
                    Anterior
                  </p>
                </button>
                <button className="w-[35px] max-w-[35px] rounded-[200px] p-[10px] gap-[10px] bg-[#CC6237] cursor-pointer" >
                  <p className="text-[12px] leading-[15px] font-normal text-[#FFFFFF]">
                    1
                  </p>
                </button>
                <button className="w-[35px] max-w-[35px] rounded-[200px] p-[10px] gap-[10px] bg-[#F5F5F5] cursor-pointer" >
                  <p className="text-[12px] leading-[15px] font-normal text-[#000000]">
                    2
                  </p>
                </button>
                <button className="w-[35px] max-w-[35px] rounded-[200px] p-[10px] gap-[10px] bg-[#F5F5F5] cursor-pointer" >
                  <p className="text-[12px] leading-[15px] font-normal text-[#000000]">
                    3
                  </p>
                </button>
                <button className="max-w-[77px] max-w-[35px] rounded-[200px] py-[10px] px-[16px] gap-[10px] bg-[#CC6237] cursor-pointer" >
                  <p className="text-[12px] leading-[15px] font-normal text-[#FFFFFF]">
                    Próxima
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>  
           <div className="flex flex-col w-full h-[100px] p-[30px] min-[440px]:hidden bg-[#CC6237]">
            <div>
              <p className="text-[12px] leading-[15px] font-semibold fontPoppins text-[#FFFFFF] tracking-[0.2px]">Por favor, acesse pelo computador ou tablet para visualizar os eventos ou em uma tela superior a 440px.</p>
            </div>
           </div>
      </div>
    </div>
  );
}
