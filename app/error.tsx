"use client"

import { CloudAlert } from "lucide-react";


export default function ErrosPage() {
  return (
    <>
     <section className=" bg-white">
        <div className="min-h-[80dvh] container mx-auto grid place-content-center px-4">
            <div className="space-y-4 ">
                <div className="flex items-center">
                    <CloudAlert className="text-red-500 size-40 mx-auto"/>
                </div>
                <p className="text-center font-semibold bg-red-50 rounded-md px-14 py-8">Looks like we have a error, please refresh the page</p>
            </div>
        </div>
    </section>
    </>
  )
}
