import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import style from "../styles/PotCard.module.css";
import { useAppContext } from "../context/context";
import { shortenPk } from "../utils/helper";
import { Toaster } from 'react-hot-toast';
// Temp imports
import { PublicKey } from '@solana/web3.js';
import { useState } from "react"

const PotCard = () => {
  const [showInput , setShowInput] =useState(false)

  const {
    connected,
    isMasterInitialized,
    initMaster,
    lotteryId,
    ticketPrice,
    isLotteryAuthority,
    setTicketPrice,
    lotteryPot,
    lottery,
    buyTicket,
    createLottery,
    pickWinner,
    isFinished,
    canClaim,
    claimPrize,
    lotteryHistory
  }=useAppContext()
  
  const clickHandler=()=>{
    setShowInput(true)
  }
  function setValue(e){
      setTicketPrice(e.target.value);
      console.log(ticketPrice);
  }

  if (!isMasterInitialized)
    return (
      <div className={`${style.wrapper}`}>
        <div className={style.title}>
          <span className={style.title}>#{lotteryId}</span>
        </div>
        {connected ? (
          <>
            <div className={style.btn} onClick={initMaster}>
              Initialize master
            </div>
          </>
        ) : (
          // Wallet multibutton goes here
          <div className="w-full hidden  items-center justify-center">
          <WalletMultiButton />
          </div>
        )}
      </div>
    );

  return (
    <div className={style.wrapper}>
      <Toaster />
      <div className={style.title}>
        
        <span className={style.textAccent}>#{lotteryId}</span>
      </div>
      <div className={style.pot}>Pot 💰 : {lotteryPot} SOL</div>
      <div className={style.recentWinnerTitle}>👤Authority👤</div>
      <div className={style.winner}>
        {lottery?.authority &&
          shortenPk(
            lottery.authority.toBase58()
          )}
      </div>
      {connected ? (
        <>
          {!isFinished && (
            <div className={style.btn} onClick={buyTicket}>
              Enter
            </div>
          )}

          {isLotteryAuthority && !isFinished && (
            <div className={style.btn} onClick={pickWinner}>
              Pick Winner
            </div>
          )}

          {canClaim && (
            <div className={style.btn} onClick={claimPrize}>
              Claim prize
            </div>
          )}

          {lottery?.winnerId && <div className={style.btn} onClick={clickHandler}>
            Create lottery
          </div>}

          {showInput && lottery.winnerId && <div className="w-full flex flex-col items-center mt-6  justify-center">
            <input type="number" placeholder="Enter the ticket price in SOL" className="bg-red-900 w-[50%] placeholder:text-yellow-400 placeholder:text-center input focus:outline-none rounded-md border-yellow-200 border py-5 text-yellow-200 text-center" onChange={setValue}/>
            <button onClick={createLottery} className="bg-yellow-300 font-bold text-red-900 text-lg px-8 mt-4 rounded-lg hover:bg-yellow-500 py-3">Create</button>
            </div>
            }
        </>
      ) : (
        <div></div>
        // <WalletMultiButton/>
      )}
    </div>
  );
};

export default PotCard;
