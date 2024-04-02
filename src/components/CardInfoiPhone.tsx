import React from "react";

interface CardInfoiPhoneProps {
  data: string[];
  children: React.ReactNode;
}

export function CardInfoiPhone({ data, children }:CardInfoiPhoneProps) {
  return (
    <div className="flex md:flex-row gap-4 flex-col justify-center items-center md:justify-start md:items-start">
      <div className="w-20 flex flex-row items-center justify-start">
        {children}
      </div>
      <ul className="flex flex-col gap-1 text-center md:text-left justify-center items-center md:justify-start md:items-start w-full">
        {data.map((value: string,index:number) => {
          return <li key={index} className="text-base font-medium">{value}</li>;
        })}
      </ul>
    </div>
  );
}
