function getWaterToGive(rightWater, inFlow) {
  if (inFlow - rightWater >= 0) {
    return rightWater
  } else {
    return inFlow
  }
}

function getResponse(data) {

  inFlowWater = data.flowRateIn;
  // console.log(inFlowWater);
  operations = getOperations(data);

  sol = {}
  for (let i = 0; i < operations.length; i++) {
    sol[operations[i].id] = 0;
  }

  operationTypes = getOperationsOfType(operations);

  sinosidalOperations = operationTypes[0];
  onePeakOperations = operationTypes[1];


  onePeakIndices = []
  for (let i = 0; i < onePeakOperations.length; i++) {
    onePeakIndices.push(getMaxProfitSortedArray(onePeakOperations[i]));
  }

  sinosidalIndices = []
  for (let i = 0; i < sinosidalOperations.length; i++) {
    sinosidalIndices.push(getPeakIndexesOfSignosidalOperations(sinosidalOperations[i]));
  }

  // Send water for first peak of each singsidal
  for (let i = 0; i < sinosidalIndices.length && inFlowWater > 0; i++) {
    sinOp = sinosidalOperations[i];
    SinOpIndexes = sinosidalIndices[i];
    OpWaterFlow = sinOp.revenueStructure[SinOpIndexes[0]].flowPerDay;

    waterToGive = getWaterToGive(OpWaterFlow, inFlowWater);

    sol[sinOp.id] = waterToGive;
    inFlowWater = inFlowWater - waterToGive;
  }

  // Send water for each one peak
  for (let i = 0; i < onePeakIndices.length && inFlowWater > 0; i++) {
    Op = onePeakOperations[i];
    OpIndexes = onePeakIndices[i];
    OpWaterFlow = Op.revenueStructure[OpIndexes[0]].flowPerDay;

    waterToGive = getWaterToGive(OpWaterFlow, inFlowWater);


    sol[Op.id] = waterToGive;
    inFlowWater = inFlowWater - waterToGive;
  }

  // Send all remaining water in sign
  for (let i = 0; i < sinosidalIndices.length && inFlowWater > 0; i++) {
    sinOp = sinosidalOperations[i];
    SinOpIndexes = sinosidalIndices[i];

    index = 1;
    OpWaterFlow = sinOp.revenueStructure[SinOpIndexes[index]].flowPerDay;

    while (index < SinOpIndexes.length && inFlowWater - OpWaterFlow > 0) {
      OpWaterFlow = sinOp.revenueStructure[SinOpIndexes[index]].flowPerDay;
      index++;
    }
    index--;
    if (index < 0) {
      continue;
    }
    OpWaterFlow = sinOp.revenueStructure[SinOpIndexes[index]].flowPerDay;

    waterToGive = getWaterToGive(OpWaterFlow, inFlowWater);

    sol[sinOp.id] = waterToGive;
    inFlowWater = inFlowWater - waterToGive;
  }

  // Distribute remaining evenly in signosidal
  if (sinosidalIndices.length != 0) {
    waterPerSin = inFlowWater / sinosidalIndices.length;

    for (let i = 0; i < sinosidalIndices.length && inFlowWater > 0; i++) {
      Op = sinosidalOperations[i];
      sol[Op.id] = sol[Op.id] + waterPerSin;
      inFlowWater = inFlowWater - waterPerSin;
    }
  }

  // Distribute remaining evenly in one peak ( Only happens if no signosidal)

  for (let i = 0; i < onePeakIndices.length && inFlowWater > 0; i++) {
    Op = onePeakOperations[i];
    sol[Op.id] = waterPerSin;
    inFlowWater = inFlowWater - waterPerSin;
  }

  resp = []

  for (var obj in sol) {
    resp.push({
      operationId: obj,
      flowRate: sol[obj]
    })
  }

  return resp;
}

function stupidResponse() {
  inFlowWater = data.flowRateIn;
  operations = getOperations(data);
  resp = []
  waterPerOperation = inFlowWater/operations.length

  for(let i = 0 ; i < operations.length ; i++) {
    resp.push({
      operationId: operations[i].id,
      flowRate: waterPerOperation
    })
  }

  return resp;
}

function getDummyResponse(operations) {
  resp = []
  for (let i = 0; i < operations.length; i++) {
    resp.push({
      operationId: operations[i].id,
      flowRate: 10
    })
  }
  return JSON.stringify(resp);
}


// window.onload = function() {
// operations = getOperations(dummyData);
// for(let i = 0 ; i < operations.length ; i++){
// operation = operations[i];
// console.log(operation)
// createChart([operation])
// console.log(isSignocidal(operation));
// }
// }

// getResponse(dummyData)



