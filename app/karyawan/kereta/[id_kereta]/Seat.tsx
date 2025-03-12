"use client"

import { KursiType } from "../../types"
import EditSeat from "./editSeat"
import DeleteSeat from "./deleteSeat"

type props = {
    item: KursiType
}

const Seat = (myProp: props) => {

    return (
        <div className="size-16 rounded-sm flex items-center justify-center bg-sky-700 relative">
            <span className="text-white font-semibold m-12 mb-8">
                {myProp.item.seat_number}
            </span>

            <div className="rounded-md gap-3 flex flex-wrap justify-center items-center">
                <EditSeat item={myProp.item} />
                <DeleteSeat item={myProp.item} />
            </div>
        </div>
    )
}
export default Seat