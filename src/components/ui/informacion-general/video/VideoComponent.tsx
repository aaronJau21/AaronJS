"use client";

import Image from "next/image";
import React, { useState } from "react";
interface Props {
  title: string;
}
export const VideoComponent = ({ title }: Props) => {
  const img = "https://itoeste.com/wp-content/uploads/2024/08/pe.png";
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const fallbackCopy = (text: string) => {
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.style.position = "fixed"; // evita scroll
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.focus();
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  };

  const handleClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch {
      fallbackCopy(text);
      setCopiedText(text);
    }

    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="bg-black/50 h-full">
      <div className="max-w-11/12 mx-auto h-full flex flex-col justify-center items-center gap-y-9">
        <h1 className="text-blanco text-7xl font-bold">{title}</h1>
        <div className="flex gap-x-5">
          <iframe
            width="1000"
            height="500"
            src="https://www.youtube.com/embed/qOAUm_rAE-E?si=Aszn9nVY_kQDXxzh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="">
            <div className=" text-white">
              <div className="flex items-center">
                <Image
                  src={img}
                  alt="Bandera del Peru"
                  width={21}
                  height={15}
                />
                <p>Peru</p>
              </div>
              <div className="bg-fondo p-5 w-96">
                <h2>AaronJS</h2>
                <p>Ejecutivo Comercial: Aaron</p>
                <div className="flex flex-col gap-y-5 mt-3">
                  <button
                    className="bg-fondo-hover cursor-pointer rounded"
                    onClick={() => handleClick("aaronjau21@gmail.com")}
                  >
                    aaronjau21@gmail.com{" "}
                    {copiedText === "aaronjau21@gmail.com" && "¡Copiado!"}
                  </button>

                  <button
                    className="bg-fondo-hover cursor-pointer rounded"
                    onClick={() => handleClick("+51959467609")}
                  >
                    +51959467609 {copiedText === "+51959467609" && "¡Copiado!"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
