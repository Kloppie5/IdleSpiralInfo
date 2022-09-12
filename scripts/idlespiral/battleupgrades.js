
var BattleUpgradesKind = {
  hp_mul_1: {id: 0, },
  atk_mul_1: 1,
  def_mul_1: 2,
  regene_mul_1: 3,
  reward_hp_1: 4,
  reward_atk_1: 5,
  reward_def_1: 6,
  critical_indep_01: 7,
  criticalDamage_mul_1: 8,
  reward_exp_1: 9,
  enemy_hp_reduction_add_1: 10,
  regene_while_resting_mul_1: 11,
  attackSpeed_mul_01: 12,
  hp_mul_5: 13,
  atk_mul_5: 14,
  def_mul_5: 15,
  regene_mul_5: 16,
  reward_hp_mul_5: 17,
  reward_atk_mul_5: 18,
  reward_def_mul_5: 19,
  reward_exp_mul_5: 20,
  critical_indep_02: 21,
  criticalDamage_mul_5: 22,
  attack_speed_mul_05: 23,
  maxlevelup_no_24: 24,
  unlock_khuwarizmi: 25,
  unlock_omar: 26,
  unlock_bhaskara: 27,
  unlock_madhava: 28,
  atk_and_def_from_pi: 29,
  exp_from_gamma: 30,
  s_critical_from_napier: 31,
  math_skill_100: 32,
  hp_mul_10: 33,
  atk_mul_10: 34,
  def_mul_10: 35,
  reward_hp_mul_10: 36,
  reward_atk_mul_10: 37,
  reward_def_mul_10: 38,
  reward_exp_mul_10: 39,
  rare_drop_mul_01: 40,
  maxlevelup_no_41: 41,
}

// Domain / Battle / BattleUpgrades
addEffect("Battle upgrade HP +1%", ParametersKind.hp, "mul", () => 1 + 0.01 * (dto.battle_upgrade_levels[BattleUpgradesKind.hp_mul_1] ?? 0));
addEffect("Battle upgrade ATK +1%", ParametersKind.atk, "mul", () => 1 + 0.01 * (dto.battle_upgrade_levels[BattleUpgradesKind.atk_mul_1] ?? 0));
addEffect("Battle upgrade DEF +1%", ParametersKind.def, "mul", () => 1 + 0.01 * (dto.battle_upgrade_levels[BattleUpgradesKind.def_mul_1] ?? 0));
addEffect("Battle upgrade Regenerate +1%", ParametersKind.regene, "mul", () => 1 + 0.01 * (dto.battle_upgrade_levels[BattleUpgradesKind.regene_mul_1] ?? 0));
addEffect("Battle upgrade Reward HP +1", ParametersKind.reward_hp, "add", () => (dto.battle_upgrade_levels[BattleUpgradesKind.reward_hp_1] ?? 0));
addEffect("Battle upgrade Reward ATK +1", ParametersKind.reward_atk, "add", () => (dto.battle_upgrade_levels[BattleUpgradesKind.reward_atk_1] ?? 0));
addEffect("Battle upgrade Reward DEF +1", ParametersKind.reward_def, "add", () => (dto.battle_upgrade_levels[BattleUpgradesKind.reward_def_1] ?? 0));
addEffect("Battle upgrade Critical +0.1%", ParametersKind.critical, "indep", () => 0.001 * (dto.battle_upgrade_levels[BattleUpgradesKind.critical_indep_01] ?? 0));
addEffect("Battle upgrade Critical Damage +1%", ParametersKind.criticalDamage, "mul", () => 1 + 0.01 * (dto.battle_upgrade_levels[BattleUpgradesKind.criticalDamage_mul_1] ?? 0));
addEffect("Battle upgrade Reward EXP +1", ParametersKind.reward_exp, "add", () => dto.battle_upgrade_levels[BattleUpgradesKind.reward_exp_1] ?? 0);
addEffect("Battle upgrade Enemy HP Reduction +1%", ParametersKind.enemy_hp_reduction_add, "add", () => -0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.enemy_hp_reduction_add_1] ?? 0));
addEffect("Battle upgrade Regenerate While Resting +1%", ParametersKind.regene_while_resting, "mul", () => 1 + 0.01 * (dto.battle_upgrade_levels[BattleUpgradesKind.regene_while_resting_mul_1] ?? 0));
addEffect("Battle upgrade Attack Speed +0.1%", ParametersKind.attack_speed, "mul", () => 1 + 0.001 * (dto.battle_upgrade_levels[BattleUpgradesKind.attackSpeed_mul_01] ?? 0));
addEffect("Battle upgrade HP +5%", ParametersKind.hp, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.hp_mul_5] ?? 0));
addEffect("Battle upgrade ATK +5%", ParametersKind.atk, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.atk_mul_5] ?? 0));
addEffect("Battle upgrade DEF +5%", ParametersKind.def, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.def_mul_5] ?? 0));
addEffect("Battle upgrade Regenerate +5%", ParametersKind.regene, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.regene_mul_5] ?? 0));
addEffect("Battle upgrade Reward HP +5%", ParametersKind.reward_hp, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_hp_mul_5] ?? 0));
addEffect("Battle upgrade Reward ATK +5%", ParametersKind.reward_atk, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_atk_mul_5] ?? 0));
addEffect("Battle upgrade Reward DEF +5%", ParametersKind.reward_def, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_def_mul_5] ?? 0));
addEffect("Battle upgrade Reward EXP +5%", ParametersKind.reward_exp, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_exp_mul_5] ?? 0));
addEffect("Battle upgrade Critical +0.2%", ParametersKind.critical, "indep", () => 0.002 * (dto.battle_upgrade_levels[BattleUpgradesKind.critical_indep_02] ?? 0));
addEffect("Battle upgrade Critical Damage +5%", ParametersKind.criticalDamage, "mul", () => 1 + 0.05 * (dto.battle_upgrade_levels[BattleUpgradesKind.criticalDamage_mul_5] ?? 0));
addEffect("Battle upgrade Attack Speed +0.5%", ParametersKind.attack_speed, "mul", () => 1 + 0.005 * (dto.battle_upgrade_levels[BattleUpgradesKind.attack_speed_mul_05] ?? 0));
addEffect("Battle upgrade Max Level +1", ParametersKind.battle_upgrade_max_level, "add", () => dto.battle_upgrade_levels[BattleUpgradesKind.maxlevelup_no_24] ?? 0);

// unlock_khuwarizmi
// unlock_omar
// unlock_bhaskara
// unlock_madhava

addEffect("Battle upgrade ATK and DEF from PI", ParametersKind.atk_and_def_from_pi, "add", () => dto.battle_upgrade_levels[BattleUpgradesKind.atk_and_def_from_pi] ?? 0);
addEffect("Battle upgrade EXP from Gamma", ParametersKind.exp_from_gamma, "add", () => dto.battle_upgrade_levels[BattleUpgradesKind.exp_from_gamma] ?? 0);
addEffect("Battle upgrade S-Critical Damage from Napier", ParametersKind.s_critical_from_napier, "add", () => dto.battle_upgrade_levels[BattleUpgradesKind.s_critical_from_napier] ?? 0);

addEffect("Battle upgrade Math Skill", ParametersKind.math, "add", () => 100 * (dto.battle_upgrade_levels[BattleUpgradesKind.math_skill_100] ?? 0));
addEffect("Battle upgrade HP +10%", ParametersKind.hp, "mul", () => 1 + 0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.hp_mul_10] ?? 0));
addEffect("Battle upgrade ATK +10%", ParametersKind.atk, "mul", () => 1 + 0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.atk_mul_10] ?? 0));
addEffect("Battle upgrade DEF +10%", ParametersKind.def, "mul", () => 1 + 0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.def_mul_10] ?? 0));
addEffect("Battle upgrade Reward HP +10%", ParametersKind.reward_hp, "mul", () => 1 + 0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_hp_mul_10] ?? 0));
addEffect("Battle upgrade Reward ATK +10%", ParametersKind.reward_atk, "mul", () => 1 + 0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_atk_mul_10] ?? 0));
addEffect("Battle upgrade Reward DEF +10%", ParametersKind.reward_def, "mul", () => 1 + 0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_def_mul_10] ?? 0));
addEffect("Battle upgrade Reward EXP +10%", ParametersKind.reward_exp, "mul", () => 1 + 0.1 * (dto.battle_upgrade_levels[BattleUpgradesKind.reward_exp_mul_10] ?? 0));
addEffect("Battle upgrade Rare Drop +0.1%", ParametersKind.rare_drop, "mul", () => 1 + 0.001 * (dto.battle_upgrade_levels[BattleUpgradesKind.rare_drop_mul_01] ?? 0));
addEffect("Battle upgrade Max Level 2 +1", ParametersKind.battle_upgrade_max_level_2, "add", () => dto.battle_upgrade_levels[BattleUpgradesKind.maxlevelup_no_41] ?? 0);
