
const ChallengeKind = {
  none: 0,
  basic: 1,
  SlowSpiral: 2,
  SinSpiral: 3,
  StraightLine: 4,
  drain: 5,
  poorMath: 6,
  no_rebirth: 7,
  drunk: 8,
  gluttony: 9,
  sinkhole: 10,
  sphere: 11,
  fury: 12,
  lava: 13,
  go_back_to: 14,
}

// Domain / Challenge / ChallengeContainer
addEffect("Challenge SlowSpiral First Clear Reward", "softPrestigeSkip", "add", () => (dto.challengeLevels[ChallengeKind.SlowSpiral] ?? 0) >= 1 ? 1 : 0);
addEffect("Challenge SinSpiral First Clear Reward", "softPrestigeSkip", "add", () => (dto.challengeLevels[ChallengeKind.SinSpiral] ?? 0) >= 1 ? 1 : 0);
addEffect("Challenge StraightLine First Clear Reward", "softPrestigeSkip", "add", () => (dto.challengeLevels[ChallengeKind.StraightLine] ?? 0) >= 1 ? 1 : 0);
addEffect("Challenge drain First Clear Reward", "softPrestigeSkip", "add", () => (dto.challengeLevels[ChallengeKind.drain] ?? 0) >= 1 ? 1 : 0);
addEffect("Challenge poorMath First Clear Reward", "softPrestigeSkip", "add", () => (dto.challengeLevels[ChallengeKind.poorMath] ?? 0) >= 1 ? 1 : 0);

addEffect("Challenge basic Reward", "delta_r", "mul", () => 1 + 0.5 * (dto.challengeLevels[ChallengeKind.basic] ?? 0));
addEffect("Challenge SlowSpiral Reward", "omega", "mul", () => 1 + 0.1 * (dto.challengeLevels[ChallengeKind.SlowSpiral] ?? 0));
addEffect("Challenge SinSpiral Reward", "prestige_level_limit", "add", () => dto.challengeLevels[ChallengeKind.SinSpiral] ?? 0);
addEffect("Challenge StraightLine Reward", "k", "mul", () => 1 + (dto.challengeLevels[ChallengeKind.StraightLine] ?? 0));
addEffect("Challenge drain Reward", "tornado_cost_reduction", "add", () => -0.1 * (dto.challengeLevels[ChallengeKind.drain] ?? 0));

addEffect("Challenge poorMath Reward", "delta_r", "mul", () => {
  var value = 1;
  if ((dto.challengeLevels[ChallengeKind.poorMath] ?? 0) >= 1) {
    value *= evaluate("a");
    value *= evaluate("b");
    value *= evaluate("c");
  }
  if ((dto.challengeLevels[ChallengeKind.poorMath] ?? 0) >= 2)
    value *= evaluate("d");
  if ((dto.challengeLevels[ChallengeKind.poorMath] ?? 0) >= 3)
    value *= evaluate("e");
  if ((dto.challengeLevels[ChallengeKind.poorMath] ?? 0) >= 4)
    value *= evaluate("f");
  if ((dto.challengeLevels[ChallengeKind.poorMath] ?? 0) >= 5)
    value *= evaluate("g");

  return value ** (1/11);
});

addEffect("Challenge no_rebirth Reward", ParametersKind.automation_interval, "mul", () => 0.5 ** (dto.challengeLevels[ChallengeKind.no_rebirth] ?? 0));
addEffect("Challenge drunk Reward", ParametersKind.omegaExponent, "add", () => 0.1 * (dto.challengeLevels[ChallengeKind.drunk] ?? 0));
addEffect("Challenge gluttony Reward atk", ParametersKind.atk, "mul", () => 1 + 0.2 * (dto.challengeLevels[ChallengeKind.gluttony] ?? 0));
addEffect("Challenge gluttony Reward hp", ParametersKind.hp, "mul", () => 1 + 0.2 * (dto.challengeLevels[ChallengeKind.gluttony] ?? 0));
addEffect("Challenge gluttony Reward def", ParametersKind.def, "mul", () => 1 + 0.2 * (dto.challengeLevels[ChallengeKind.gluttony] ?? 0));
addEffect("Challenge sinkhole Reward", ParametersKind.delta_r, "mul", () => 1 + Math.log((dto.timeSinceOmegaPrestige ?? 0) / 13 + 1) / Math.log(10 - (dto.challengeLevels[ChallengeKind.sinkhole] ?? 0)));
addEffect("Challenge sphere Reward z_reactor_exp", ParametersKind.z_reactor_exp, "mul", () => 1 + ((dto.challengeLevels[ChallengeKind.sphere] ?? 0) >= 1));
addEffect("Challenge sphere Reward z_reactor_cap", ParametersKind.z_reactor_cap, "mul", () => 1 + 0.05 * (dto.challengeLevels[ChallengeKind.sphere] ?? 0));
addEffect("Challenge fury Reward enemy_growth_reduction", ParametersKind.enemy_growth_reduction, "mul", () => 0.95 ** (dto.challengeLevels[ChallengeKind.fury] ?? 0));
addEffect("Challenge fury Reward multiattack", ParametersKind.multiattack, "add", () => (dto.challengeLevels[ChallengeKind.fury] ?? 0) >= 6 ? 2 : 0);
addEffect("Challenge lava Reward equation_slot", ParametersKind.equation_slot, "add", () => (dto.challengeLevels[ChallengeKind.lava] ?? 0) >= 1 ? 1 : 0);
addEffect("Challenge lava Reward raid_boss_damage", ParametersKind.raid_boss_damage, "mul", () => 1 + 0.25 * (dto.challengeLevels[ChallengeKind.lava] ?? 0));
