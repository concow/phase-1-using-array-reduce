const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const reducer = (result, sum) => {

//}

// const totalBatteries = batteryBatches.reduce(function(sum, number) {
//     return (sum + number)
// }

// )

function reducer(sum, number) {
    const totalBatteries = 0
    batteryBatches.reduce(function(sum, number) {
        return sum + number
    }
    )
}