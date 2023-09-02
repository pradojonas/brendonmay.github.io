// Open flameCalculator/index.html
// Open browser console
// Run code below

// Set equivalences and class
stat_equivalences = { "all_stat": 8, "secondary_stat": 0.1, "attack": 3, "hp_stat":1/110 };
let maple_class = 'other';

let flameCost = 9500000;
let weaponStats = {
    "attack_tier": "6",
    "dmg_percent": "0"
};
function calculateMean (prob) {
    return Math.round(prob.mean)*flameCost/1000000000;
}
function calculate75th (prob) {
    return Math.round(prob.seventy_fifth)*flameCost/1000000000;
}

console.log('Weapon T6')
let probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'weapon', weaponStats, false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))

console.log('Dominator/Pap Mark')
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '100', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))

console.log('Non Flame Advantage')
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '20', true, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '30', true, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '40', true, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '50', true, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))

console.log('Lvl 140-149')
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '64', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '84', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '94', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '98', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '106', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('140-149', 'powerful', 'armor', '111', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))

console.log('Lvl 160-169')
probability = geoDistrQuantile(getProbability('160-169', 'powerful', 'armor', '71', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('160-169', 'powerful', 'armor', '93', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('160-169', 'powerful', 'armor', '101', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('160-169', 'powerful', 'armor', '108', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('160-169', 'powerful', 'armor', '117', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('160-169', 'powerful', 'armor', '122', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))

console.log('Lvl 180-189')
probability = geoDistrQuantile(getProbability('180-189', 'powerful', 'armor', '73', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('180-189', 'powerful', 'armor', '97', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('180-189', 'powerful', 'armor', '105', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('180-189', 'powerful', 'armor', '113', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('180-189', 'powerful', 'armor', '122', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('180-189', 'powerful', 'armor', '128', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))

console.log('Lvl 200-209')
probability = geoDistrQuantile(getProbability('200-209', 'powerful', 'armor', '80', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('200-209', 'powerful', 'armor', '107', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('200-209', 'powerful', 'armor', '115', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('200-209', 'powerful', 'armor', '124', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('200-209', 'powerful', 'armor', '134', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
probability = geoDistrQuantile(getProbability('200-209', 'powerful', 'armor', '140', false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))

console.log('Weapon T6+')
weaponStats = {"attack_tier": "6", "dmg_percent": "4"};
probability = geoDistrQuantile(getProbability(undefined, 'powerful', 'weapon', weaponStats, false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
weaponStats = {"attack_tier": "6", "dmg_percent": "7"};
probability = geoDistrQuantile(getProbability(undefined, 'powerful', 'weapon', weaponStats, false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
weaponStats = {"attack_tier": "6", "dmg_percent": "10"};
probability = geoDistrQuantile(getProbability(undefined, 'powerful', 'weapon', weaponStats, false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
weaponStats = {"attack_tier": "6", "dmg_percent": "12"};
probability = geoDistrQuantile(getProbability(undefined, 'powerful', 'weapon', weaponStats, false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
weaponStats = {"attack_tier": "6", "dmg_percent": "13"};
probability = geoDistrQuantile(getProbability(undefined, 'powerful', 'weapon', weaponStats, false, maple_class));
console.log(calculateMean(probability).toFixed(3), calculate75th(probability).toFixed(3))
console.log('Weapon T7')
weaponStats = {"attack_tier": "7", "dmg_percent": "0"};
probability = geoDistrQuantile(getProbability(undefined, 'eternal', 'weapon', weaponStats, false, maple_class));
console.log(3*calculateMean(probability).toFixed(3), 3*calculate75th(probability).toFixed(3)) //Eternal flame only