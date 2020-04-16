let hp = 100

hp = hp - 85

if(hp <= 0) {
    console.log("GAME OVER")
} else if(hp <= 20){
    console.log("Player is low on health")
} else {
    console.log("Keep playing.")
}