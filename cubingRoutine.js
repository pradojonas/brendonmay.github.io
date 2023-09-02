// Open cubingCalculator/index.html
// Open browser console
// Run code below

function calculateCost(equip, desiredStat, cubeType, tierUpResultsCost) {
    let legendaryTier = 3;
    let probabilityInputObject = translateInputToObject(desiredStat);
    let p = getProbability(legendaryTier, probabilityInputObject, equip, cubeType, 150);
    let tier_up = getTierCosts(legendaryTier, legendaryTier, cubeType, false);
    let stats = geoDistrQuantile(p);
    let results = outputStatsToUi(stats, tier_up, cubeType, 150);
    let resultsCost = [results[0]/1000000000, results[1]/1000000000];
    if (tierUpResultsCost) {
        resultsCost[0] = resultsCost[0] + tierUpResultsCost[0];
        resultsCost[1] = resultsCost[1] + tierUpResultsCost[1];
        // console.log('Including tier up costs');
    }
    console.log(resultsCost[0].toFixed(3), resultsCost[1].toFixed(3));
}

let epicTier = 1;
let legendaryTier = 3;
let desiredStat = 'any';

console.log('====== EPIC FROM LEGENDARY WITH BLACK CUBES ======');

let tier_up = getTierCosts(epicTier, legendaryTier, 'black', false);
let stats = {
    mean: 0,
    median: 0,
    seventy_fifth: 0,
    eighty_fifth: 0,
    nintey_fifth: 0,
}
let tierUpResults = outputStatsToUi(stats, tier_up, 'black', 150);
let tierUpResultsCost = [tierUpResults[0]/1000000000, tierUpResults[1]/1000000000];
console.log(desiredStat, 'cost to tierUp', tierUpResultsCost);

console.log('====== TIER UP + 21% STATS ======');
desiredStat = 'percStat+21';
let cubeType = 'red';
calculateCost('hat', desiredStat, cubeType, tierUpResultsCost);
calculateCost('top', desiredStat, cubeType, tierUpResultsCost);
calculateCost('bottom', desiredStat, cubeType, tierUpResultsCost);
calculateCost('shoes', desiredStat, cubeType, tierUpResultsCost);
calculateCost('cape', desiredStat, cubeType, tierUpResultsCost);
calculateCost('accessory', desiredStat, cubeType, tierUpResultsCost);
calculateCost('heart', desiredStat, cubeType, tierUpResultsCost);

console.log('====== 24% STATS ======');
desiredStat = 'percStat+24';
cubeType = 'red';
calculateCost('hat', desiredStat, cubeType);
calculateCost('top', desiredStat, cubeType);
calculateCost('bottom', desiredStat, cubeType);
calculateCost('shoes', desiredStat, cubeType);
calculateCost('cape', desiredStat, cubeType);
calculateCost('accessory', desiredStat, cubeType);
calculateCost('heart', desiredStat, cubeType);

console.log('====== 27% STATS ======');
desiredStat = 'percStat+27';
cubeType = 'red';
calculateCost('hat', desiredStat, cubeType);
calculateCost('top', desiredStat, cubeType);
calculateCost('bottom', desiredStat, cubeType);
calculateCost('shoes', desiredStat, cubeType);
calculateCost('cape', desiredStat, cubeType);
calculateCost('accessory', desiredStat, cubeType);
calculateCost('heart', desiredStat, cubeType);

console.log('====== 30% STATS ======');
desiredStat = 'percStat+30';
cubeType = 'red';
calculateCost('hat', desiredStat, cubeType);
calculateCost('top', desiredStat, cubeType);
calculateCost('bottom', desiredStat, cubeType);
calculateCost('shoes', desiredStat, cubeType);
calculateCost('cape', desiredStat, cubeType);
calculateCost('accessory', desiredStat, cubeType);
calculateCost('heart', desiredStat, cubeType);

console.log('====== CD HAT & CRIT GLOVES ======');
calculateCost('hat', 'secCooldown+2&lineStat+1', cubeType, tierUpResultsCost);
calculateCost('hat', 'secCooldown+2&lineStat+2', cubeType);
calculateCost('gloves', 'lineCritDamage+1&lineStat+1', cubeType, tierUpResultsCost);
calculateCost('gloves', 'lineCritDamage+1&lineStat+2', cubeType);

console.log('====== WSE ======');
calculateCost('weapon', 'percAtt+21', cubeType, tierUpResultsCost);
calculateCost('weapon', 'percAtt+21&percBoss+30', cubeType);
calculateCost('weapon', 'percAtt+30', cubeType);
calculateCost('secondary', 'percAtt+21', cubeType, tierUpResultsCost);
calculateCost('secondary', 'percAtt+21&percBoss+30', cubeType);
calculateCost('secondary', 'percAtt+30', cubeType);
calculateCost('emblem', 'percAtt+21', cubeType, tierUpResultsCost);
calculateCost('emblem', 'percAtt+21&lineIed+1', cubeType);
calculateCost('emblem', 'percAtt+30', cubeType);

console.log('====== 33% BLACK CUBES ======');
desiredStat = 'percStat+33';
cubeType = 'black';
calculateCost('hat', desiredStat, cubeType);
calculateCost('top', desiredStat, cubeType);
calculateCost('bottom', desiredStat, cubeType);
calculateCost('shoes', desiredStat, cubeType);
calculateCost('cape', desiredStat, cubeType);
calculateCost('accessory', desiredStat, cubeType);
calculateCost('heart', desiredStat, cubeType);

console.log('====== BLACK CUBES WSE, HAT, GLOVES ======');
cubeType = 'black';
calculateCost('hat', 'secCooldown+4', cubeType);
calculateCost('gloves', 'lineCritDamage+1&lineStat+2', cubeType);
calculateCost('gloves', 'lineCritDamage+2', cubeType);
calculateCost('gloves', 'lineCritDamage+2&lineStat+1', cubeType);
calculateCost('weapon', 'percAtt+24&percBoss+30', cubeType);
calculateCost('secondary', 'percAtt+24&percBoss+30', cubeType);

console.log('====== HAKU FAN ======');
cubeType = 'red';
calculateCost('weapon', 'percAtt+30', cubeType);