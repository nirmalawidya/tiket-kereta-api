export const dynamic = "force-dynamic";

import { getServerCookie } from "@/helper/server-cookie"
import { KeretaType } from "../types"
import axiosInstance from "@/helper/api"
import Train from "./Train"
import AddKereta from "./addKereta"

// functiom to get all data kereta
const getKereta = async (): Promise<KeretaType[]> => {
    try {
        /** get token from cookie */
        const TOKEN = await getServerCookie(`token`)
        const url = `/train`

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

const KeretaPage = async () => {
    /** call function to load "data kereta"
     * from backend
     */
    const dataKereta = await getKereta()

    return (
        <div className="w-full p-5 bg-white">
            <h1 className="text-xl font-semibold">
                Data Kereta
            </h1>
            <span className="text-sm">
                Halaman ini memuat daftar kereta api yang tersedia
            </span>

            <div className="my-3">
                <AddKereta />
                {/* mapping data kereta */}
                {
                    dataKereta.map((kereta, index) => (
                        <Train
                            item={kereta}
                            key={`kereta-${index}`} // fungsi key supaya beda dari kereta satu dengan kereta yang lain
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default KeretaPage
