import React, { useEffect, useState } from "react";
import MyBid from "../modules/game/components/my-bids";
import GameLayout from "../modules/game/components/GameLayout";
import { useRouter } from "next/router";

const MyBids = () => {
  const router = useRouter();
  const [type, setType] = useState(null);
  let { channel } = router.query;

  useEffect(() => {
    if (channel) {
      setType(channel);
    }
  }, [channel]);
  return <GameLayout>{type ? <MyBid type={type} /> : <MyBid />}</GameLayout>;
};

export default MyBids;
