let sumAll = document.getElementById("sum-All")
let count = 0
let saveNum = document.getElementById("prevEntries")
let total = 0

function addNum(){
    count += 1
    sumAll.textContent = count
}

function removeNum(){
    if(count != 0){
    count -= 1
    sumAll.textContent = count
    }
}

function saveAll() {
    let countStr = count + " - "
    saveNum.textContent +=  countStr
}

function saveAll() {
    if(count > 0){
        let countStr = count + " - "
        saveNum.textContent +=  countStr
    }
}

function resetAll() {
    if(count > 0){
        count = 0
        sumAll.textContent = count
        saveNum.textContent = "Previous Entries: "
    }
   

    
}