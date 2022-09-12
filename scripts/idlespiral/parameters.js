
const ParametersKind = {
  largeA: "largeA",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  k: "k",
  p: "p",
  q: "q",
  n: "n",
  sigmaA: "sigmaA",
  omega: "omega",
  omegaExponent: "omegaExponent",
  alpha: "alpha",
  m: "m",
  beta: "beta",
  Omega: "Omega",
  gamma: "gamma",
  delta: "delta",
  prestigepoint_denominator: "prestigepoint_denominator",
  prestige_level_limit: "prestige_level_limit",
  tornado_cost_reduction: "tornado_cost_reduction",
  cubic_root: "cubic_root",
  logarithm_base: "logarithm_base",
  softPrestigeSkip: "softPrestigeSkip",
  automation_interval: "automation_interval",
  atk: "atk",
  hp: "hp",
  regene: "regene",
  regene_while_resting: "regene_while_resting",
  critical: "critical",
  criticalDamage: "criticalDamage",
  def: "def",
  block: "block",
  deltap: "deltap",
  attack_speed: "attack_speed",
  reward_atk: "reward_atk",
  reward_def: "reward_def",
  reward_hp: "reward_hp",
  reward_exp: "reward_exp",
  enemy_hp_reduction_add: "enemy_hp_reduction_add",
  reward_hp_mul: "reward_hp_mul",
  reward_def_mul: "reward_def_mul",
  reward_exp_mul: "reward_exp_mul",
  reward_atk_mul: "reward_atk_mul",
  battle_upgrade_max_level: "battle_upgrade_max_level",
  rare_drop: "rare_drop",
  super_critical: "super_critical",
  super_critical_damage: "super_critical_damage",
  battle_upgrade_cost: "battle_upgrade_cost",
  math: "math",
  multiattack: "multiattack",
  enemy_growth_reduction: "enemy_growth_reduction",
  atk_and_def_from_pi: "atk_and_def_from_pi",
  exp_from_gamma: "exp_from_gamma",
  s_critical_from_napier: "s_critical_from_napier",
  battle_upgrade_max_level_2: "battle_upgrade_max_level_2",
  reward_mathSkill: "reward_mathSkill",
  raid_boss_damage: "raid_boss_damage",
  raid_boss_time: "raid_boss_time",
  line_number_multiplier: "line_number_multiplier",
  equation_speed: "equation_speed",
  z_reactor_exp: "z_reactor_exp",
  r_reactor_cap: "r_reactor_cap",
  equation_slot: "equation_slot",
  spiralPointFromTornadoPrestige: "spiralPointFromTornadoPrestige",
  inspiration: "inspiration",

  delta_r: "delta_r",
}

// Parameter
addBaseValue("a", 1);
addBaseValue("b", 1);
addBaseValue("c", 1);
addBaseValue("d", 1);
addBaseValue("e", 1);
addBaseValue("f", 1);
addBaseValue("g", 1);
addBaseValue("u", 1);
addBaseValue("n", 1);
addBaseValue("m", 1);
addBaseValue("omegaExponent", 1);
addBaseValue("gamma", 0.1);
addBaseValue("alpha", 1);
addBaseValue("beta", 1);
addBaseValue("cubit_root", 3);
addBaseValue("logarithm_base", 100);
addBaseValue("prestigePoint_denominator", 1e5);
addBaseValue("tornado_cost_reduction", 1);
addBaseValue("automation_interval", 1);

addBaseValue("atk", 10);
addBaseValue("hp", 100);
addBaseValue("def", 1);
addBaseValue("deltap", 1);
addBaseValue("regene_while_resting", 1);
addBaseValue("critical", 0.05);
addBaseValue("criticalDamage", 2);
addBaseValue("attack_speed", 1);
addBaseValue("enemy_hp_reduction_add", 100);
addBaseValue("reward_atk_mul", 1);
addBaseValue("reward_def_mul", 1);
addBaseValue("reward_hp_mul", 1);
addBaseValue("reward_exp_mul", 1);
addBaseValue("rare_drop", 1);
addBaseValue("super_critical_damage", 5);
addBaseValue("battle_upgrade_cost", 1);
addBaseValue("enemy_growth_reduction", 1);

addBaseValue("line_number_multiplier", 1);
addBaseValue("equation_speed", 1);
addBaseValue("z_reactor_exp", 1);
addBaseValue("z_reactor_cap", 1);
addBaseValue("spiralPointFromTornadoPrestige", 1);

// Currency / DistanceMultiplier
addEffect("Base largeA", "largeA", "base", () => {
  var a = evaluate("a");
  var b = evaluate("b");
  var c = evaluate("c");
  var d = evaluate("d");
  var e = evaluate("e");
  var f = evaluate("f");
  var g = evaluate("g");
  if ( dto.currentChallengeKind == ChallengeKind.poorMath )
    return a + b + c + d + e + f + g;
  else
    return a * b * c * d * e * f * g;
});

addEffect("Base delta_r", "delta_r", "base", () => {
  var m = evaluate("m");
  var sigmaA = evaluate("sigmaA");
  var omega = evaluate("omega");
  var omegaExponent = evaluate("omegaExponent");
  var k = evaluate("k");
  return m * sigmaA * omega ** omegaExponent + k;
});

addEffect("Line Number Multiplier", "delta_r", "mul", () => 1 + ((5 /*lines*/) - 1) * 0.1 * evaluate("line_number_multiplier"));

// Currency / ReccurenceMultiplier
addEffect("Formula integral", "integral", "base", () => {
  var alpha = evaluate("alpha");
  var beta = evaluate("beta");
  var integral = 2 * alpha ** (beta + 1) / (beta + 1);
  return integral;
});
addEffect("Base sigmaA", "sigmaA", "base", () => {
  var u = evaluate("u");
  var v = evaluate("v");
  var n = evaluate("n");
  var A = evaluate("largeA");
  var integral = evaluate("integral");

  if ( n == 1 )
    return A;

  var Ai = A;
  var sum = Ai;
  for ( var i = 1; i < n; i++ ) {
    Ai = integral * u * Ai + v;
    sum += Ai;
  }

  return sum;
});

// SoftPrestige
addEffect("omega Prestige omegaExponent", "omegaExponent", "add", () => (dto.omegaPrestigeLevel ?? 0));
addEffect("Base omega", "omega", "base", () => 1.25 ** (dto.omegaPrestigeLevel ?? 0));

// Currency / ZMultiplier
addEffect("Omega unlock", "Omega", "add", () => dto.tornadoPrestigeTier >= 1 ? 0.1 : 0);
addEffect("Base delta_z", "delta_z", "base", () => evaluate("gamma") * evaluate("Omega") + evaluate("delta"));
