import { TransactionInfo } from "@/models/Customer";

type Prop = {
    data: TransactionInfo[]
}
export default function HistoryTable({ data }: Prop) {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {/* <th scope="col" className="px-6 py-3"></th> */}
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Stock Code
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Total CNF
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Running Balance
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                        ETA
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Deposit
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Balance
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Action
                    </th> */}
                </tr>
            </thead>
            <tbody>
                {data?.map((item: TransactionInfo, i: number) => {
                    return (
                        <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                            <td className="px-6 py-4">{item.listingName}</td>
                            <td className="px-6 py-4">{item.stockCode}</td>
                            <td className="px-6 py-4">
                                {item.amount}
                            </td>
                            <td className="px-6 py-4">
                                {item.runningBalance}
                            </td>
                            {/* <td className="px-6 py-4 flex">
                                <Link href={`/global/results/cars/${item.}`}>
                                    <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        View
                                    </p>
                                </Link>
                            </td> */}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
