let powerful_tier_probabilities = { 3: 0.2, 4: 0.3, 5: 0.36, 6: 0.14, 7: 0 }
let eternal_tier_probabilities = { 3: 0, 4: 0.29, 5: 0.45, 6: 0.25, 7: 0.01 }

var stat_per_tier = { "140-159": 8, "160-179": 9, "180-199": 10, "200-219": 11 }
let combo_stat_per_tier = { "140-159": 4, "160-179": 5, "180-199": 5, "200-219": 6 }
var stat_equivalences = { "all_stat": 8, "secondary_stat": 0.1, "attack": 3 }

function factorial(number) {
    var value = number;
    for (var i = number; i > 1; i--)
        value *= i - 1;
    return value;
};

function combination(n, r) {
    if (n == r) return 1;
    if (r == 0) return 1;
    return factorial(n) / (factorial(r) * factorial(n - r));
};

function possibleOutcome(main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier) {
    var list = [main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier]
    var index = 0
    var total_tiers = 0
    while (index < list.length) {
        if (list[index] > 0) total_tiers++
        index++
    }
    return total_tiers <= 4
}

function numberOfLines(main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier) {
    var list = [main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier]
    var index = 0
    var number_of_lines = 0
    while (index < list.length) {
        if (list[index] > 0) number_of_lines++
        index++
    }
    return number_of_lines
}

function getTierProbability(main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier, flame_type) {
    var list = [main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier]
    var index = 0
    var probability = 0
    if (flame_type == "powerful") var tier_probabilities = powerful_tier_probabilities
    if (flame_type == "eternal") var tier_probabilities = eternal_tier_probabilities
    while (index < list.length) {
        var tier = list[index];
        if (tier > 0) {
            if (probability == 0) probability = tier_probabilities[tier]
            else {
                probability = probability * tier_probabilities[tier]
            }
        }
        index++
    }
    return probability
}

function getProbability(item_level, flame_type, item_type, desired_stat) {
    //function getProbability(item_level, flame_type, item_type, desired_stat) {
    //red
    var main_tier = 0
    var secondary_tier = 0
    var combo_one_tier = 0 //includes sec_stat
    var combo_two_tier = 0
    var combo_three_tier = 0
    var all_stat_tier = 0
    var attack_tier = 0

    var solutions = []
    var upper_limit = 7
    var lower_limit = 3

    if (flame_type == "eternal") {
        upper_limit = 8
        lower_limit = 4
    }

    var main_tier = 0
    while (main_tier < upper_limit) {
        var secondary_tier = 0;
        while (secondary_tier < upper_limit) {
            var combo_one_tier = 0;
            while (combo_one_tier < upper_limit) {
                var combo_two_tier = 0;
                while (combo_two_tier < upper_limit) {
                    var combo_three_tier = 0;
                    while (combo_three_tier < upper_limit) {
                        var all_stat_tier = 0;
                        while (all_stat_tier < upper_limit) {
                            var attack_tier = 0;
                            while (attack_tier < upper_limit) {
                                //equation here
                                //console.log(main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier);
                                var stat_score = main_tier * stat_per_tier[item_level] + secondary_tier * stat_per_tier[item_level] * stat_equivalences["secondary_stat"] + combo_one_tier * (combo_stat_per_tier[item_level] * stat_equivalences["secondary_stat"] + combo_stat_per_tier[item_level]) + combo_two_tier * combo_stat_per_tier[item_level] + combo_three_tier * combo_stat_per_tier[item_level] + all_stat_tier * stat_equivalences["all_stat"] + attack_tier * stat_equivalences["attack"]
                                if (stat_score >= desired_stat) {
                                    //console.log("Success!")
                                    if (possibleOutcome(main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier)) {
                                        var solution = { "main_tier": main_tier, "secondary_tier": secondary_tier, "combo_one_tier": combo_one_tier, "combo_two_tier": combo_two_tier, "combo_three_tier": combo_three_tier, "all_stat_tier": all_stat_tier, "attack_tier": attack_tier }
                                        solutions[solutions.length] = solution
                                    }
                                }

                                if (attack_tier == 0) {
                                    var attack_tier = lower_limit
                                }
                                else {
                                    attack_tier++
                                }
                            }
                            if (all_stat_tier == 0) {
                                var all_stat_tier = lower_limit
                            }
                            else {
                                all_stat_tier++
                            }
                        }
                        if (combo_three_tier == 0) {
                            var combo_three_tier = lower_limit
                        }
                        else {
                            combo_three_tier++
                        }
                    }
                    if (combo_two_tier == 0) {
                        var combo_two_tier = lower_limit
                    }
                    else {
                        combo_two_tier++
                    }
                }
                if (combo_one_tier == 0) {
                    var combo_one_tier = lower_limit
                }
                else {
                    combo_one_tier++
                }
            }
            if (secondary_tier == 0) {
                var secondary_tier = lower_limit
            }
            else {
                secondary_tier++
            }
        }
        if (main_tier == 0) {
            var main_tier = lower_limit
        }
        else {
            main_tier++
        }
    }
    var probability = 0

    for (var i = 0; i < solutions.length; i++) {
        var main_tier = solutions[i].main_tier;
        var secondary_tier = solutions[i].secondary_tier
        var combo_one_tier = solutions[i].combo_one_tier
        var combo_two_tier = solutions[i].combo_two_tier
        var combo_three_tier = solutions[i].combo_three_tier
        var all_stat_tier = solutions[i].all_stat_tier
        var attack_tier = solutions[i].attack_tier

        var number_of_lines = numberOfLines(main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier)

        //hypergeometric distribution
        var line_probability = combination(12, 4 - number_of_lines) / combination(19, 4)

        //var p = number_of_lines/19;
        //var q = 1 - p
        //var line_probability = Math.pow(p, number_of_lines) * Math.pow(q, 4-number_of_lines)

        var tier_probability = getTierProbability(main_tier, secondary_tier, combo_one_tier, combo_two_tier, combo_three_tier, all_stat_tier, attack_tier, flame_type)
        var event_probability = line_probability * tier_probability
        probability = probability + event_probability
    }

    return probability
}

function geoDistrQuantile(p) {
    var mean = 1 / p

    var median = Math.log(1 - 0.5) / Math.log(1 - p)
    var seventy_fifth = Math.log(1 - 0.75) / Math.log(1 - p)
    var eighty_fifth = Math.log(1 - 0.85) / Math.log(1 - p)
    var nintey_fifth = Math.log(1 - 0.95) / Math.log(1 - p)

    return { mean: mean, median: median, seventy_fifth: seventy_fifth, eighty_fifth: eighty_fifth, nintey_fifth: nintey_fifth }
}
//test
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculateButton").addEventListener("click", function () {
        var item_level = document.getElementById('item_level').value
        var flame_type = document.getElementById('flame_type').value
        var item_type = document.getElementById('item_type').value
        var desired_stat = document.getElementById('desired_stat').value
        var guild_discount = document.getElementById('guild_discount').checked

        stat_equivalences.all_stat = document.getElementById('all_stat').value
        stat_equivalences.attack = document.getElementById('attack').value
        stat_equivalences.secondary_stat = document.getElementById('secondary_stat').value
        //console.log(stat_equivalences)

        var p = getProbability(item_level, flame_type, item_type, desired_stat)
        var stats = geoDistrQuantile(p)

        var mean = Math.round(stats.mean)
        var median = Math.round(stats.median)
        var seventy_fifth = Math.round(stats.seventy_fifth)
        var eighty_fifth = Math.round(stats.eighty_fifth)
        var nintey_fifth = Math.round(stats.nintey_fifth)

        var mean_cost = "N/A"
        var median_cost = "N/A"
        var seventy_fifth_cost = "N/A"
        var eighty_fifth_cost = "N/A"
        var ninety_fifth_cost = "N/A"

        if (flame_type == "powerful") {
            if (!guild_discount) {
                var mean_cost = mean * 9500000
                var median_cost = median * 9500000
                var seventy_fifth_cost = seventy_fifth * 9500000
                var eighty_fifth_cost = eighty_fifth * 9500000
                var ninety_fifth_cost = nintey_fifth * 9500000
            }
            else {
                var mean_cost = mean * 9120000
                var median_cost = median * 9120000
                var seventy_fifth_cost = seventy_fifth * 9120000
                var eighty_fifth_cost = eighty_fifth * 9120000
                var ninety_fifth_cost = nintey_fifth * 9120000
            }
        }

        document.getElementById('result').style.display = '';
        document.getElementById('error-container').style.display = 'none';
        document.getElementById('result').innerHTML =
            `
    <div class="container secondarycon">
      <div class=" statBox statBox1" style="background-color:#aaa;">
        <h2 style="text-align:center;">Mesos Stats</h2>
            <p style="text-align:center;"">
                Average cost: ${mean_cost.toLocaleString()}<br />
            Median cost: ${median_cost.toLocaleString()}<br />
            </p>
      </div>
      <div class=" statBox statBox2" style="background-color:#bbb;">
        <h2 style="text-align:center;">Mesos Percentiles</h2>
        <p style="text-align:center;"">
            75% chance within ${seventy_fifth_cost.toLocaleString()} mesos<br />
            85% chance within ${eighty_fifth_cost.toLocaleString()} mesos<br />
            95% chance within ${ninety_fifth_cost.toLocaleString()} mesos<br />
        </p>
      </div>
      
      <div class=" statBox statBox3" style="background-color:#aaa;">
        <h2 style="text-align:center;"">Flame Stats</h2>
            <p style="text-align:center;"">
                Average flames: ${mean.toLocaleString()} ${flame_type} flames<br />
                Median flames: ${median.toLocaleString()} ${flame_type} flames<br />
            </p>
      </div>
      <div class=" statBox statBox4" style="background-color:#bbb;">
        <h2 style="text-align:center;">Flame Percentiles</h2>
        <p style="text-align:center;"">
            75% chance within ${seventy_fifth.toLocaleString()} ${flame_type} flames<br />
            85% chance within ${eighty_fifth.toLocaleString()} ${flame_type} flames<br />
            95% chance within ${nintey_fifth.toLocaleString()} ${flame_type} flames<br />
        </p>
      </div>
    </div>
        `
    })
})