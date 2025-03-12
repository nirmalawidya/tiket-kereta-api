export const dynamic = "force-dynamic";

import axiosInstance from "@/helper/api"
import { getServerCookie } from "@/helper/server-cookie"
import HistoryCard from "./components/historyCard"
import { History } from "@/app/karyawan/types"
import FilterPemesanan from "./filterPemesanan"

type props = {
    searchParams: Promise <{
        start_date?: string
        end_date?: string
    }>
}

const getHistory = async (
    start_date: string,
    end_date: string
): Promise<History[]> => {
    try {
        const url = `/purchase/customer?start_date=${start_date}&end_date=${end_date}`
        const token = await getServerCookie('token')
        const response: any = await axiosInstance
            .get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        if (response.data.success === true)

            return response.data.data
        return []
    } catch (error) {
        console.log(error)
        return []
    }
}

const HistoryPage = async (myProp: props) => {
    const start_date = (await myProp.searchParams).start_date?.toString() || ""
    const end_date = (await myProp.searchParams).end_date?.toString() || ""
    const dataHistory = await getHistory(start_date, end_date)

    return (
        <div>
            <div className="w-full p-3">
                <div className="bg-blue-600 w-full p-3 rounded-lg shadow-md">
                    <h1 className="text-white text-lg font-bold">
                        Filter Pemesanan by Date
                    </h1>

                    <FilterPemesanan
                        start_date={start_date}
                        end_date={end_date}
                    />
                </div>

                {
                    start_date !== "" &&
                    end_date !== "" &&
                    <div className="my-3">
                        {/** 
                         * div ini akan tampil jika start_date
                         * dan end_date telah diisi(tdk kosong)
                         */
                        }{
                            dataHistory.length == 0 ?
                                <div className="w-full p-3 rounded-md bg-orange-100">
                                    Maaf, Jadwal tidak tersedia
                                </div> :
                                <div>
                                    {
                                        dataHistory.map((jadwal, index) => (
                                            <HistoryCard
                                                item={jadwal}
                                                key={`keyJadwal-${index}`}
                                            />
                                        ))
                                    }
                                </div>
                        }
                    </div>
                }
            </div>
            
        </div>
    )
}
export default HistoryPage