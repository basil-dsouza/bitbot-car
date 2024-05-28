radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.rotatems(BBRobotDirection.Left, 60, 200)
    } else if (receivedNumber == 2) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 200)
    } else if (receivedNumber == 3) {
        bitbot.go(BBDirection.Forward, 100)
    } else if (receivedNumber == 4) {
        bitbot.go(BBDirection.Reverse, 100)
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
})
let Group_ID = 1
radio.setGroup(Group_ID)
basic.showNumber(Group_ID)
