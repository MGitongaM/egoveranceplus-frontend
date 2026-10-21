import { CableIcon, MonitorX, Server } from 'lucide-react'
import React from 'react'

export default function NotFoundPage() {
  return (
    <>
    <section className=" bg-white">
        <div className="min-h-[80dvh] container mx-auto grid place-content-center px-4">
            <div className="space-y-4 ">
                <div className="flex items-center">
                    <Server className="text-red-500 size-40 mx-auto"/>
                    <CableIcon className="text-red-500 size-20 rotate-90 mx-auto "/>
                    <MonitorX className="text-red-500 size-40 mx-auto"/>
                </div>
                <p className="text-center font-semibold bg-red-50 rounded-md px-14 py-8">Oops, Page Not Found</p>
            </div>
        </div>
    </section>
    </>
  )
}
