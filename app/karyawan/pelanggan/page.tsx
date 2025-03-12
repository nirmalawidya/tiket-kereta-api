export const dynamic = "force-dynamic";

import { getServerCookie } from "@/helper/server-cookie"
import { AdminType } from "../types"
import axiosInstance from "@/helper/api"
import AddPelanggan from "./addPelanggan"
import Pelanggan from "./pelanggan"

const getPelanggan = async (): Promise<AdminType[]> => {
    try {
            /** get token from cookie */
            const TOKEN = await getServerCookie(`token`)
            const url = `/customer`
    
            /** hit endpoint */
            const response = await axiosInstance
                .get(url, {
                    headers: {
                        authorization: `Bearer ${TOKEN}`
                    }
                })
    
            // arti == compare value aja
            // arti === compare value dan tipe data
            if (response.data.success == true) {
                return response.data.data
            }
            return []
        } catch (error) {
            console.log(error)
            return []
        }
}
const PelangganPage = async () => {
    const dataPelanggan = await getPelanggan()

    return (
        <div className="w-full p-5 bg-white">
            <h1 className="text-xl font-semibold">
                Data Pelanggan
            </h1>
            <span className="text-sm">
                Halaman ini memuat daftar pelanggan yang tersedia
            </span>

            <div className="my-3">
                <AddPelanggan />
                {
                    dataPelanggan.map((customer, index) => (
                        <Pelanggan
                            item={customer}
                            key={`pelanggan-${index}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default PelangganPage