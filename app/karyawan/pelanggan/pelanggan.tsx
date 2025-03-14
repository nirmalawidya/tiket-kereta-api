"use client"

import { AdminType } from "../types"
import DeletePelanggan from "./deletePelanggan"
import EditPelanggan from "./editPelanggan"
import ResetPassword from "./resetPassword"

type props ={
    item: AdminType
}
const Pelanggan = (myProp: props) => {
    return(
        <div className="w-full flex flex-wrap my-2 border rounded-md bg-sky-50">
            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium text-blue-600">
                    Nama Pelanggan
                </small>
                <span>
                        {myProp.item.name}
                </span>
            </div>

            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium text-blue-600">
                    Username
                </small>
                <span>
                    {myProp.item.user_details.username}
                </span>
            </div>

            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium text-blue-600">
                    Password
                </small>
                <span className="block">**************</span>
            </div>

            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium text-blue-600">
                    Address
                </small>
                <span>
                    {myProp.item.address}
                </span>
            </div>

            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium text-blue-600">
                    No Phone
                </small>
                <span>
                    {myProp.item.phone}
                </span>
            </div>

            <div className="w-full md:w-4/12 p-2 flex flex-col">
                <small className="text-sm font-medium text-blue-600">
                    Nik
                </small>
                <span>
                    {myProp.item.nik}
                </span>
            </div>

            <div className="w-full md:w-2/12 p-2 flex flex-col">
                <small className="text-sm font-medium text-blue-600">
                    Opsi
                </small>
                <div className="flex gap-2 items-center">
                    <EditPelanggan pelanggan={myProp.item} />
                    <DeletePelanggan pelanggan={myProp.item} />
                    <ResetPassword pelanggan={myProp.item} />
                </div>
            </div>
        </div>
    )
}
export default Pelanggan