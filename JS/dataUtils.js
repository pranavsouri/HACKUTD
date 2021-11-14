
// Gets operations from data
function getOperations(data) {
    return data["operations"]
  }
  
  // Gets an array of water in x and revenues in y for an operation
  function getWaterProfitFromOperations(operation) {
    let dataPrice = [];
    revenues = operation["revenueStructure"];
    for(let i = 0 ; i < revenues.length ; i++) {
      dataPrice.push({
        x: revenues[i]["flowPerDay"],
        y: revenues[i]["dollarsPerDay"]
      })
    }
    return dataPrice;
  }
  
  // Gets the index of the maximum operation
  function getIndexOfMaximumOfOperation(operation) {
    let maxIndex = 0;
    revenues = operation["revenueStructure"];
    for(let i = 0 ; i < revenues.length ; i++) {
      if(revenues[i]["dollarsPerDay"] > revenues[maxIndex]["dollarsPerDay"]) {
        maxIndex = i;
      }
    }
    return maxIndex
  }
  
  // Gets indexes of assending profit values into an operation
  function getMaxProfitSortedArray(operation) {
    revenues = operation["revenueStructure"];
    values = [];
    for(let i = 0 ; i < revenues.length ; i++) {
      values.push({
        flowPerDay: revenues[i].flowPerDay,
        dollarsPerDay: revenues[i].dollarsPerDay,
        index: i
      })
    }
  
    values = values.sort((a,b) => {
      return b.dollarsPerDay - a.dollarsPerDay;
    })
  
    values = values.map((v) => {
      return v.index
    })
    return values
  }
  
  // Gets the index of the max profit value for each operation
  function getIndexOfMaximumOfOperations(operations) {
    operationMaxIndexes = []
    for(let i = 0 ; i < operations.length ; i++) {
      operationMaxIndexes.push(getIndexOfMaximumOfOperation(operations[i]))
    }
    return operationMaxIndexes
  }
  
  //  gets the water for each max index for each operation
  function getWaterForMaxProfit(data) {
    operations = getOperations(data)
    getMaxProfitIndexes = getIndexOfMaximumOfOperations(operations)
    console.log(getMaxProfitIndexes)
    waterRequired = 0
    for(let i = 0 ; i < operations.length ; i++) {
      waterRequired = waterRequired + operations[i]["revenueStructure"][getMaxProfitIndexes[i]]["flowPerDay"]
    }
    return waterRequired
  }
  
  function isSignocidal(Operation) {
    sortedProfitIndexArray = getMaxProfitSortedArray(Operation);
    return Math.abs(sortedProfitIndexArray[0] - sortedProfitIndexArray[1]) > 1
  }
  
  // Gets peaks in increasing index of signosidal operation
  function getPeakIndexesOfSignosidalOperations(operation) {
  
    revenues = operation["revenueStructure"];
    values = [];
    for(let i = 0 ; i < revenues.length ; i++) {
      if(i-1 >= 0 && i + 1 < revenues.length && revenues[i].dollarsPerDay > revenues[i-1].dollarsPerDay && revenues[i].dollarsPerDay > revenues[i+1].dollarsPerDay) {
        values.push(i);
      }
    }
  
    return values
  }
  
  function getOperationsOfType(operations) {
    sinosidalOperations = []
    onePeakOperations = []
    for(let i = 0 ; i < operations.length ; i++) {
      if(isSignocidal(operations[i])) {
        sinosidalOperations.push(operations[i]);
      } else {
        onePeakOperations.push(operations[i]);
      }
    }
  
    return [sinosidalOperations,onePeakOperations]
  }
  