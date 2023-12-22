"use client";

import agent from "@/api/agent";
import { TransactionInfo } from "@/models/Customer";
import { useUserStore } from "@/store/store";
import { useEffect, useState } from "react";
import ActivityTable from "../payment-history/components/activity";

export default function Page() {
    const [historyData, setHistoryData] = useState<TransactionInfo[]>([]);
    const { user } = useUserStore();
    useEffect(() => {
        const getData = async () => {
            // 36
            const details = await agent.LoadData.getSalesOrderDetailPerStock(
                user.customerId
            );
            let data = details.data.filter(
                (itm: TransactionInfo) => itm.isVoucher === true
            );
            setHistoryData(data);
        };
        getData();
    }, []);
    console.log(historyData);

    return (
        <div className="w-full">
            <p className="text-lg text-[#221C63] text-center mt-3 mb-2">
                Account Activity
            </p>
            <ActivityTable data={historyData} />
        </div>
    );
}
