import React from 'react'
import GameLayout from '../modules/game/components/GameLayout'
import LeaderboardComponent from '../modules/game/components/leaderboardComponent'

const leaderboard = () => {
    return (
        <GameLayout>
            <LeaderboardComponent />
        </GameLayout>
    )
}

export default leaderboard
