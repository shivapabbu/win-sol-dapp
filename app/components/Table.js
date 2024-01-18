import { useAppContext } from "../context/context";
import style from "../styles/Table.module.css";
import TableRow from "./TableRow";

import { PublicKey } from '@solana/web3.js';

const Table = () => {

  const {lotteryHistory}=useAppContext()
  
  return (
    <div className={style.wrapper}>
        <div className="text-indigo-200 text-3xl py-4 border-b text-bold bg-gray-900 w-full text-center">Hall of Fame</div>
      <div className={style.tableHeader}>
        <div className={style.addressTitle}>Lottery No.</div>
        <div className={style.addressTitle}>Address</div>
        <div className={style.addressTitle}>Ticket</div>
        <div className={style.amountTitle}>Amount</div>
      </div>
      <div className={style.rows}>
        {lotteryHistory?.map((h, i) => (
          <TableRow key={i} {...h} />
        ))}
      </div>
    </div>
  );
};

export default Table;
