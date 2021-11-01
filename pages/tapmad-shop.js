import React from "react";
import GameLayout from "../modules/game/components/GameLayout";
import RightSidebar from "../modules/game/components/right-sidebar";
import styles from "../modules/game/game.module.css"

const TapmadShop = () => {
  return (
    <GameLayout>
      <div className="container">
        <div className="row mt-2">
          <div class="col">
            <div class={`${styles.bgBlackNoHover} ${styles.border} pl-2`}>
              <h5>Tapmad Shop</h5>
              <span class="text-white">
                Khush khabri ab tapmad par kharido PUBG, BIGO, Tinder k Vouchers
                or bohat kuch
              </span>
            </div>
          </div>
        </div>
        <RightSidebar shop={"200px"} />
      </div>
    </GameLayout>
  );
};

export default TapmadShop;
