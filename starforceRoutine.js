// Open starforceCalculator/index.html
// Open browser console
// Run code below

// Starforce calculator: (Safeguard, 30% off, Starcatch, 5/10/15)
let thirty_off = false
let star_catch = false
let five_ten_fifteen = true

console.log('CALCULATING AVERAGES!')

let safeguard = true
console.log('Up to 17')
console.log((repeatExperiment('100000', 10, 12, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 10, 12, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 12, 17, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 12, 17, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 12, 16, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 12, 16, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))

console.log('Safeguarded big jumps')
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))

safeguard = false
console.log('Risky big jumps')
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 21, 22, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))

safeguard = true
console.log('Safeguarded small jumps')
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))

safeguard = false
console.log('Risky big jumps')
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 17, 18, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 18, 19, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 140, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 150, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 160, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))
console.log((repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[0]/1000000000).toFixed(3),
    (percentile(repeatExperiment('100000', 19, 21, getRates('kms', 'normal', false), 200, safeguard, thirty_off, star_catch, five_ten_fifteen, false, false, false, false, 'normal', false, false, 'kms')[2], 0.75)/1000000000).toFixed(3))