// Note(sethyboy0) This file contains the function that calculates the chance of getting the desired input. It also
// contains the functions that read the scraped options from the json files.

// These are all the possible kinds of input the probability calculator can look for.
const emptyInputObject = {
    percStat: 0, // At least this much % stat including % allstat lines.
    lineStat: 0, // At least this many lines of % stat including allstat lines.
    percAllStat: 0, // At least this much % all stat including 1/3rd of % STR, DEX, and LUK. For Xenons.
    lineAllStat: 0, // At least this many lines of % all stat (does not include
    percHp: 0, // At least this much % HP. For DA.
    lineHp: 0, // At least this many lines of % HP. For DA.
    percAtt: 0,// At least this much % atk.
    lineAtt: 0, // At least this many lines of % atk.
    percBoss: 0,
    lineBoss: 0,
    lineIed: 0,
    lineCritDamage: 0,
    lineMeso: 0,
    lineDrop: 0,
    lineMesoOrDrop: 0, // At least this many lines of meso OR drop.
    secCooldown: 0, // At least this many seconds of cooldown reduction.
    lineAutoSteal: 0,
    lineAttOrBoss: 0,
    lineAttOrBossOrIed: 0,
}

// labels for categories used in json data reference and calculations
const CATEGORY = {
    STR_PERC: "STR %",
    DEX_PERC: "DEX %",
    INT_PERC: "INT %",
    LUK_PERC: "LUK %",
    MAXHP_PERC: "Max HP %",
    MAXMP_PERC: "Max MP %",
    ALLSTATS_PERC: "All Stats %",
    ATT_PERC: "ATT %",
    MATT_PERC: "MATT %",
    BOSSDMG_PERC: "Boss Damage",
    IED_PERC: "Ignore Enemy Defense %",
    MESO_PERC: "Meso Amount %",
    DROP_PERC: "Item Drop Rate %",
    AUTOSTEAL_PERC: "Chance to auto steal %",
    CRITDMG_PERC: "Critical Damage %",
    CDR_TIME: "Skill Cooldown Reduction",
    JUNK: "Junk",

    // only used for special line probability adjustment calculations
    DECENT_SKILL: "Decent Skill",
    INVINCIBLE_PERC: "Chance of being invincible for seconds when hit",
    INVINCIBLE_TIME: "Increase invincibility time after being hit",
    IGNOREDMG_PERC: "Chance to ignore % damage when hit",
}

// map inputs to categories in json data that could contribute to a match
// using STR % to represent stat % for STR, LUK, INT, DEX since they all have the same rates
// using ATT % to represent both ATT and MATT % for the same reason
// Assumptions used in calculations:
// - All Stats % counts as 1 line of stat %
// - STR, DEX or LUK % each count as 1/3 All Stats %
const INPUT_CATEGORY_MAP = {
    percStat:[CATEGORY.STR_PERC, CATEGORY.ALLSTATS_PERC],
    lineStat:[CATEGORY.STR_PERC, CATEGORY.ALLSTATS_PERC],
    percAllStat:[CATEGORY.ALLSTATS_PERC, CATEGORY.STR_PERC, CATEGORY.DEX_PERC, CATEGORY.LUK_PERC],
    lineAllStat:[CATEGORY.ALLSTATS_PERC],
    percHp:[CATEGORY.MAXHP_PERC],
    lineHp:[CATEGORY.MAXHP_PERC],
    percAtt:[CATEGORY.ATT_PERC],
    lineAtt:[CATEGORY.ATT_PERC],
    percBoss:[CATEGORY.BOSSDMG_PERC],
    lineBoss:[CATEGORY.BOSSDMG_PERC],
    lineIed:[CATEGORY.IED_PERC],
    lineCritDamage:[CATEGORY.CRITDMG_PERC],
    lineMeso:[CATEGORY.MESO_PERC],
    lineDrop:[CATEGORY.DROP_PERC],
    lineMesoOrDrop:[CATEGORY.DROP_PERC, CATEGORY.MESO_PERC],
    secCooldown:[CATEGORY.CDR_TIME],
    lineAutoSteal: [CATEGORY.AUTOSTEAL_PERC],
    lineAttOrBoss: [CATEGORY.ATT_PERC, CATEGORY.BOSSDMG_PERC],
    lineAttOrBossOrIed: [CATEGORY.ATT_PERC, CATEGORY.BOSSDMG_PERC, CATEGORY.IED_PERC],
}

// type of calculation can be total number of lines or a value sum (e.g. stat %, seconds of CDR)
const CALC_TYPE = {
    LINE: 0,
    VAL: 1,
}

// mapping between an input field and a function for checking if it has been satisfied by the specified "outcome"
// where "outcome" refers to the set of potential lines that were rolled
const OUTCOME_MATCH_FUNCTION_MAP = {
    percStat: (outcome, requiredVal) => (_calculateTotal(outcome, CATEGORY.STR_PERC, CALC_TYPE.VAL)
        + _calculateTotal(outcome, CATEGORY.ALLSTATS_PERC, CALC_TYPE.VAL)) >= requiredVal,
    lineStat: (outcome, requiredVal) => (_calculateTotal(outcome, CATEGORY.STR_PERC)
        + _calculateTotal(outcome, CATEGORY.ALLSTATS_PERC)) >= requiredVal,
    percAllStat: checkPercAllStat,
    lineAllStat: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.ALLSTATS_PERC) >= requiredVal,
    percHp: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.MAXHP_PERC, CALC_TYPE.VAL) >= requiredVal,
    lineHp: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.MAXHP_PERC) >= requiredVal,
    percAtt: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.ATT_PERC, CALC_TYPE.VAL) >= requiredVal,
    lineAtt: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.ATT_PERC) >= requiredVal,
    percBoss: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.BOSSDMG_PERC, CALC_TYPE.VAL) >= requiredVal,
    lineBoss: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.BOSSDMG_PERC) >= requiredVal,
    lineIed: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.IED_PERC) >= requiredVal,
    lineCritDamage: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.CRITDMG_PERC) >= requiredVal,
    lineMeso: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.MESO_PERC) >= requiredVal,
    lineDrop: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.DROP_PERC) >= requiredVal,
    lineMesoOrDrop: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.MESO_PERC)
        + _calculateTotal(outcome, CATEGORY.DROP_PERC) >= requiredVal,
    secCooldown: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.CDR_TIME, CALC_TYPE.VAL) >= requiredVal,
    lineAutoSteal: (outcome, requiredVal) => _calculateTotal(outcome, CATEGORY.AUTOSTEAL_PERC) >= requiredVal,
    lineAttOrBoss: (outcome, requiredVal) => (_calculateTotal(outcome, CATEGORY.ATT_PERC)
        + _calculateTotal(outcome, CATEGORY.BOSSDMG_PERC)) >= requiredVal,
    lineAttOrBossOrIed: (outcome, requiredVal) => (_calculateTotal(outcome, CATEGORY.ATT_PERC)
        + _calculateTotal(outcome, CATEGORY.BOSSDMG_PERC)
        + _calculateTotal(outcome, CATEGORY.IED_PERC)) >= requiredVal
}

// calculate "effective" All Stats %
// where STR, DEX or LUK % each count as 1/3 All Stats %
function checkPercAllStat(outcome, requiredVal) {
    let actualVal = 0;
    for (const [category, val, _] of outcome) {
        if (category === CATEGORY.ALLSTATS_PERC) {
            actualVal += val;
        }
        else if ([CATEGORY.STR_PERC, CATEGORY.DEX_PERC, CATEGORY.LUK_PERC].includes(category)) {
            actualVal += val / 3;
        }
    }
    return actualVal >= requiredVal;
}

// get the total number of lines or total value of a specific category in this outcome
// calcType: specifies whether we are calculating number of lines or total value (defaults to lines if not specified)
function _calculateTotal(outcome, desiredCategory, calcType=CALC_TYPE.LINE) {
    let actualVal = 0;
    for (const [category, val, _] of outcome) {
        if (category === desiredCategory) {
            if (calcType === CALC_TYPE.VAL) {
                actualVal += val;
            }
            else if (calcType === CALC_TYPE.LINE) {
                actualVal += 1;
            }
        }
    }
    return actualVal;
}


// generate a list of relevant categories based on the input
// this will be used to consolidate entries from the list of rates prior to generating all the possible outcomes to
// calculate
function getUsefulCategories(probabilityInput) {
    let usefulCategories = [];
    for (const field in INPUT_CATEGORY_MAP) {
        if (probabilityInput[field] > 0) {
            usefulCategories = usefulCategories.concat(INPUT_CATEGORY_MAP[field]);
        }
    }
    return Array.from(new Set(usefulCategories));
}

// consolidate number of entries in the rates list to only the lines we care about
// all other categories we don't care about get lumped into a single entry for junk lines
// Note(ming) we still keep around "special" lines which can impact the probability of 2nd or 3rd lines even
// if we don't want them
function getConsolidatedRates(ratesList, usefulCategories) {
    const consolidatedRates = [];
    let junk_rate = 0.0;
    let junk_categories = []  // list of categories we lumped into Junk for debugging purposes

    for (const item of ratesList) {
        const [category, val, rate] = item;

        if (usefulCategories.includes(category) || isSpecialLine(category)) {
            consolidatedRates.push(item);
        }
        else if (category === CATEGORY.JUNK) {
            // using concat here since "Junk" is already a category that exists in the json data.
            // we're expanding it here with additional "contextual junk" based on the user input, so we want to preserve
            // the old list of junk categories too
            junk_rate += rate;
            junk_categories = junk_categories.concat(val);
        }
        else {
            junk_rate += rate;
            junk_categories.push(`${category} (${val})`);
        }
    }

    consolidatedRates.push([CATEGORY.JUNK, junk_categories, junk_rate]);
    return consolidatedRates;
}

// check if an outcome meets our the input requirements
function satisfiesInput(outcome, probabilityInput) {
    for (const field in probabilityInput) {
        if (probabilityInput[field] > 0) {
            if (!OUTCOME_MATCH_FUNCTION_MAP[field](outcome, probabilityInput[field])) {
                return false;
            }
        }
    }
    return true;
}

// Mapping of "special" categories and the maximum occurrence they can have per item.
// we can only have max of 2 of these lines:
// * IED
// * chance to ignore % damage
// * drop rate
// * boss damage
// * invincible for a short period of time with a certain probability when attacked
//
// we can only have 1 of these lines:
// * any decent skill
// * increased invincibility time after being hit
//
// if we reach the maximum number of occurrences for a category, that category is excluded for the next line(s)
const MAX_CATEGORY_COUNT = {
    [CATEGORY.DECENT_SKILL]: 1,
    [CATEGORY.INVINCIBLE_TIME]: 1,
    [CATEGORY.IED_PERC]: 2,
    [CATEGORY.BOSSDMG_PERC]: 2,
    [CATEGORY.DROP_PERC]: 2,
    [CATEGORY.IGNOREDMG_PERC]: 2,
    [CATEGORY.INVINCIBLE_PERC]: 2,
}

const isSpecialLine = category => (Object.keys(MAX_CATEGORY_COUNT)).includes(category);

// calculate the adjusted rate for a line in the outcome based on previous special lines, current pool of possibilities
// calculation method (from Nexon's website):
// display probability / (100% - the sum of the display probabilities of the excluded options)
// reference: https://maplestory.nexon.com/Guide/OtherProbability/cube/strange
function getAdjustedRate(currentLine, previousLines, currentPool){
    const current_rate = currentLine[2];

    // the first line will never have its rates adjusted
    if (previousLines.length === 0) {
        return current_rate;
    }

    // special categories that we've reached the limit on in previous lines, so need to be removed from current pool
    let to_be_removed = [];

    // count occurrences of each special line
    // populate the list of special lines to be removed from the current pool
    // if any of them exceed the max allowed count, exit early with rate of 0 since this outcome is not possible
    let special_lines_count = {};
    for (const [cat, val, rate] of [...previousLines, currentLine]) {
        if (isSpecialLine(cat)) {
            if (!((Object.keys(special_lines_count)).includes(cat))) {
                special_lines_count[cat] = 0;
            }
            special_lines_count[cat] += 1;

            if (special_lines_count[cat] > MAX_CATEGORY_COUNT[cat]) {
                return 0;
            }
            else if (special_lines_count[cat] === MAX_CATEGORY_COUNT[cat]) {
                to_be_removed.push(cat);
            }
        }
    }

    // deduct total rate for each item to be removed from the pool
    let adjusted_total = 100;
    for (const [cat, val, rate] of currentPool) {
        if (to_be_removed.includes(cat)) {
            adjusted_total -= rate;
        }
    }

    return current_rate/adjusted_total * 100;
}

// calculate chance for an outcome to occur (the set of potential lines resulting from a cube roll)
// obtained by multiplying of the rates of the item rolled on the 1st, 2nd, and 3rd line with each other
// rates of lines 2 and/or 3 are adjusted if there are "special" lines rolled prior
function calculateRate(outcome, filteredRates) {
    console.log("original outcome", outcome);
    console.log(`[${outcome[0][0]}, ${outcome[1][0]}, ${outcome[2][0]}]`);

    // a version of outcome with rates adjusted for lines 2 and 3 if applicable
    const adjustedOutcome = [
        getAdjustedRate(outcome[0], [], filteredRates.first_line),
        getAdjustedRate(outcome[1], [outcome[0]], filteredRates.second_line),
        getAdjustedRate(outcome[2], [outcome[0], outcome[1]], filteredRates.third_line),
    ]

    console.log("final adjustedOutcome", adjustedOutcome);

    let chance = 100;
    for (const rate of adjustedOutcome) {
        chance = chance * (rate / 100);
    }

    console.log("chance =", chance);
    return chance;
}



// functions to convert UI input to corresponding labels used in the json data for easier reference
const tierNumberToText = {
    3: "legendary",
    2: "unique",
    1: "epic",
    0: "rare",
}

function convertItemType(itemType) {
    // use ring for accessory option (cubeData lists rates per specific accessory so just use ring since they are all
    // the same)
    // Note(ming) KMS website does not have badge data. mapping badge to heart for now
    if (itemType === "accessory") {
        return "ring";
    }
    else if (itemType === "badge") {
        return "heart";
    }
    else {
        return itemType;
    }
}

// modify cube data based on item level if needed (for items over lvl 160)
// HACK(ming): KMS does not have adjusted Stat % based on item level, so we are making the assumption that
// for lvl 160+ items, value of stat percentage categories are increased by 1% (e.g. 12% STR becomes 13% STR)
function convertCubeDataForLevel(cubeData, itemLevel) {

    // don't need to make adjustments to items lvl <160
    if (itemLevel < 160) {
        return cubeData
    }

    let adjustedCubeData = {};
    const affected_categories = [CATEGORY.STR_PERC, CATEGORY.LUK_PERC, CATEGORY.DEX_PERC, CATEGORY.INT_PERC,
        CATEGORY.ALLSTATS_PERC, CATEGORY.ATT_PERC, CATEGORY.MATT_PERC];

    console.groupCollapsed("Adjusted stats for lvl >160")
    for (const line in cubeData) {
        adjustedCubeData[line] = [];
        for (const [cat, val, rate] of cubeData[line]) {
            let adjustedVal = val;

            // adjust the value if this is an affected category
            for (const affected_category of affected_categories) {
                if (affected_category === cat) {
                    adjustedVal += 1;
                    console.log(`Found affected category ${cat}: ${val} -> ${adjustedVal}`);
                    break;
                }
            }

            adjustedCubeData[line].push([cat, adjustedVal, rate]);
        }
    }
    console.groupEnd();
    console.log("adjustedCubeData", adjustedCubeData);
    return adjustedCubeData;
}

// calculates the probability of achieving the set of desired criteria specified by user input
function getProbability(desiredTier, probabilityInput, itemType, cubeType, itemLevel) {
    console.log(`tier=${desiredTier}, item=${itemType}, cube=${cubeType}`);
    console.log("probability input", probabilityInput);

    // convert parts of input for easier mapping to keys in cubeRates
    const tier = tierNumberToText[desiredTier];
    const itemLabel = convertItemType(itemType);

    // get the cubing data for this input criteria from cubeRates (which is based on json data)
    const raw_cubeData = {
        first_line: cubeRates.lvl120to200[itemLabel][cubeType][tier].first_line,
        second_line: cubeRates.lvl120to200[itemLabel][cubeType][tier].second_line,
        third_line: cubeRates.lvl120to200[itemLabel][cubeType][tier].third_line,
    };
    console.log("raw_cubeData", raw_cubeData);
    const cubeData = convertCubeDataForLevel(raw_cubeData, itemLevel);
    console.log("cubeData", cubeData);

    // generate consolidated version of cubing data that group any lines not relevant to the calculation into a single
    // Junk entry
    const usefulCategories = getUsefulCategories(probabilityInput);
    console.log("usefulCategories", usefulCategories);
    const consolidatedCubeData = {
        first_line: getConsolidatedRates(cubeData.first_line, usefulCategories),
        second_line: getConsolidatedRates(cubeData.second_line, usefulCategories),
        third_line: getConsolidatedRates(cubeData.third_line, usefulCategories),
    };
    console.log("consolidatedCubeData", consolidatedCubeData);

    // loop through all possible outcomes and sum up the rate of outcomes that match the input
    let total_chance = 0;
    let total_count = 0;
    let count_useful = 0;
    let count_invalid = 0;
    for (const line1 of consolidatedCubeData.first_line) {
        for (const line2 of consolidatedCubeData.second_line) {
            for (const line3 of consolidatedCubeData.third_line) {
                // check if this outcome meets our needs
                const outcome = [line1, line2, line3];
                if (satisfiesInput(outcome, probabilityInput)) {
                    // calculate chance of this outcome occurring
                    console.log("=== Outcome ", total_count, "===")
                    const result = calculateRate(outcome, consolidatedCubeData);
                    total_chance += result;

                    if (result === 0) {
                        count_invalid++;
                    }
                    else {
                        count_useful++;
                    }
                }
                total_count++;
            }
        }
    }

    console.log("total chance: ", total_chance);
    console.log("valid matching outcomes", count_useful);
    console.log("invalid matching outcomes", count_invalid);
    console.log("total outcomes", total_count);
    return total_chance / 100;
}