
const RewardType = {
  hp: 0,
  atk: 1,
  def: 2,
  a: 3,
  b: 4,
  c: 5,
  d: 6,
  e: 7,
  k: 8,
  regene: 9,
  critical: 10,
  criticalDamage: 11,
  a_mul: 12,
  b_mul: 13,
  c_mul: 14,
  d_mul: 15,
  e_mul: 16,
  k_mul: 17,
  hp_mul: 18,
  atk_mul: 19,
  def_mul: 20,
  n: 21,
  v: 22,
  gamma: 23,
  delta: 24,
  Omega: 25,
  attackSpeed: 26,
  gamma_mul: 27,
  delta_mul: 28,
  Omega_mul: 29,
  exp: 30,
  rare_chance: 31,
  super_critical: 32,
  super_criticalDamage: 33,
  math_skill: 34,
  other: 35,
  enemy_hp_reduction: 36,
  regene_resting: 37,
  maxlevelup_no_24: 38,
  unlock: 39,
  inspiration: 40,
  math_core: 41,
  inverse_core: 42,
  hp2_mul: 43,
  atk2_mul: 44,
  def2_mul: 45,
}

// Domain / Battle / BattleReward / BattleRewardContainer
addEffect("Battle reward a", ParametersKind.a, "add", () => dto.battle_rewards[RewardType.a] ?? 0);
addEffect("Battle reward b", ParametersKind.b, "add", () => dto.battle_rewards[RewardType.b] ?? 0);
addEffect("Battle reward c", ParametersKind.c, "add", () => dto.battle_rewards[RewardType.c] ?? 0);
addEffect("Battle reward d", ParametersKind.d, "add", () => dto.battle_rewards[RewardType.d] ?? 0);
addEffect("Battle reward e", ParametersKind.e, "add", () => dto.battle_rewards[RewardType.e] ?? 0);
addEffect("Battle reward k", ParametersKind.k, "add", () => dto.battle_rewards[RewardType.k] ?? 0);
addEffect("Battle reward atk", ParametersKind.atk, "add", () => dto.battle_rewards[RewardType.atk] ?? 0);
addEffect("Battle reward def", ParametersKind.def, "add", () => dto.battle_rewards[RewardType.def] ?? 0);
addEffect("Battle reward hp", ParametersKind.hp, "add", () => dto.battle_rewards[RewardType.hp] ?? 0);

addEffect("Battle reward atk2%", ParametersKind.atk, "mul", () => 1 + (dto.battle_rewards[RewardType.atk2_mul] ?? 0));
addEffect("Battle reward def2%", ParametersKind.def, "mul", () => 1 + (dto.battle_rewards[RewardType.def2_mul] ?? 0));
addEffect("Battle reward hp2%", ParametersKind.hp, "mul", () => 1 + (dto.battle_rewards[RewardType.hp2_mul] ?? 0));

addEffect("Battle reward regene", ParametersKind.regene, "add", () => dto.battle_rewards[RewardType.regene] ?? 0);
addEffect("Battle reward critical", ParametersKind.critical, "add", () => dto.battle_rewards[RewardType.critical] ?? 0);
addEffect("Battle reward criticalDamage", ParametersKind.criticalDamage, "mul", () => 1 + (dto.battle_rewards[RewardType.criticalDamage] ?? 0));
addEffect("Battle reward gamma", ParametersKind.gamma, "add", () => dto.battle_rewards[RewardType.gamma] ?? 0);
addEffect("Battle reward delta", ParametersKind.delta, "add", () => dto.battle_rewards[RewardType.delta] ?? 0);
addEffect("Battle reward Omega", ParametersKind.Omega, "add", () => dto.battle_rewards[RewardType.Omega] ?? 0);
addEffect("Battle reward super_critical", ParametersKind.super_critical, "add", () => dto.battle_rewards[RewardType.super_critical] ?? 0);
addEffect("Battle reward super_criticalDamage", ParametersKind.super_criticalDamage, "mul", () => 1 + (dto.battle_rewards[RewardType.super_criticalDamage] ?? 0));
addEffect("Battle reward super_critical threshold", ParametersKind.super_critical, "add", () => (dto.battle_rewards[RewardType.super_criticalDamage] ?? 0) > 5 ? 0.01 : 0);
addEffect("Battle reward inspiration", ParametersKind.inspiration, "add", () => dto.battle_rewards[RewardType.inspiration] ?? 0);

addEffect("Battle reward a%", ParametersKind.a, "mul", () => 1 + (dto.battle_rewards[RewardType.a_mul] ?? 0));
addEffect("Battle reward b%", ParametersKind.b, "mul", () => 1 + (dto.battle_rewards[RewardType.b_mul] ?? 0));
addEffect("Battle reward c%", ParametersKind.c, "mul", () => 1 + (dto.battle_rewards[RewardType.c_mul] ?? 0));
addEffect("Battle reward d%", ParametersKind.d, "mul", () => 1 + (dto.battle_rewards[RewardType.d_mul] ?? 0));
addEffect("Battle reward e%", ParametersKind.e, "mul", () => 1 + (dto.battle_rewards[RewardType.e_mul] ?? 0));
addEffect("Battle reward k%", ParametersKind.k, "mul", () => 1 + (dto.battle_rewards[RewardType.k_mul] ?? 0));
addEffect("Battle reward hp%", ParametersKind.hp, "mul", () => 1 + (dto.battle_rewards[RewardType.hp_mul] ?? 0));
addEffect("Battle reward atk%", ParametersKind.atk, "mul", () => 1 + (dto.battle_rewards[RewardType.atk_mul] ?? 0));
addEffect("Battle reward def%", ParametersKind.def, "mul", () => 1 + (dto.battle_rewards[RewardType.def_mul] ?? 0));
addEffect("Battle reward gamma%", ParametersKind.gamma, "mul", () => 1 + (dto.battle_rewards[RewardType.gamma_mul] ?? 0));
addEffect("Battle reward delta%", ParametersKind.delta, "mul", () => 1 + (dto.battle_rewards[RewardType.delta_mul] ?? 0));
addEffect("Battle reward Omega%", ParametersKind.Omega, "mul", () => 1 + (dto.battle_rewards[RewardType.Omega_mul] ?? 0));
addEffect("Battle reward attack speed", ParametersKind.attack_speed, "mul", () => diminishedAttackSpeed((dto.battle_rewards[RewardType.attackSpeed] ?? 0)));
addEffect("Battle reward rare drop", ParametersKind.rare_drop, "mul", () => diminishedRareChance((dto.battle_rewards[RewardType.rare_chance] ?? 0)));
addEffect("Battle reward math skill", ParametersKind.math, "add", () => dto.battle_rewards[RewardType.math_skill] ?? 0);
addEffect("Battle reward enemy growth reduction", ParametersKind.enemy_growth_reduction, "mul", () => decay(dto.battle_rewards[RewardType.math_skill] ?? 0));

function diminishedAttackSpeed ( pure_attack_speed ) {
  if ( pure_attack_speed < 4 )
    return 1 + pure_attack_speed;
  return ( 17.5 * pure_attack_speed + 55 ) ** (1/3);
}
function diminishedRareChance ( pure_rare_chance ) {
  if ( pure_rare_chance < 0.5 )
    return 1 + pure_rare_chance;
  if ( pure_rare_chance < 5.5 )
    return 1.5 + ( pure_rare_chance - 0.5 ) * 0.05;
  return 1.75 + ( pure_rare_chance - 0.75 ) * 0.001;
}
function decay ( math_skill ) {
  if ( math_skill < 50000 )
    return 1 - 0.5 * math_skill / 50000;
  return 1 - (0.9 - 1 / 1.000018326 ** math_skill);
}
