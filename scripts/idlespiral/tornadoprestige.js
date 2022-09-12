
const UnlockWithTornado = {
  AutoPrestige: 0,
  AutoOmegaPrestige: 1,
  Challenge: 2,
  Challenge_Drain: 3,
  Challenge_drunk: 4,
  Challenge_noRebirth: 5,
  Challenge_gluttony: 6,
  Challenge_sinkhole: 7,
  Enemy_PI: 8,
  Enemy_Gamma: 9,
  Enemy_Napier: 10,
  Challenge_Flower: 11,
  Exponent_A: 12,
  Challenge_Slow: 13,
  Z_boolster: 14,
  Challenge_Straight: 15,
  NewSigma: 16,
  Challenge_Poor: 17,
  Equation: 18,
  critical: 19,
  m: 20,
  integral: 21,
  Challenge_sphere: 22,
  new_battle_upgrade: 23,
  z_reactor_c: 24,
  z_reactor_cx: 25,
  Enemy_penta: 26,
  Challenge_fury: 27,
  new_battle_upgrade_2: 28,
}

// Prestige / TornadoPrestige
addEffect("Tornado bonus delta r tier factor", "delta_r", "mul", () => 1 + 0.5 * dto.tornadoPrestigeTier);
addEffect("Tornado bonus delta r playtime factor", "delta_r", "mul", () => 1 + HourFactor(dto.AccumulatedHour));
addEffect("Tornado bonus delta r max P factor", "delta_r", "mul", () => 1 + 0.1 * Math.log10(dto.AccumulatedMaxP + 1));

addEffect("Tornado bonus delta z tier factor", "delta_z", "mul", () => 1 + 0.5 * dto.tornadoPrestigeTier);
addEffect("Tornado bonus delta z playtime factor", "delta_z", "mul", () => 1 + HourFactor(dto.AccumulatedHour));
addEffect("Tornado bonus delta z max P factor", "delta_z", "mul", () => 1 + 0.1 * Math.log10(dto.AccumulatedMaxP + 1));

addEffect("Tornado bonus regene_while_resting tier factor", "regene_while_resting", "mul", () => 1 + 0.1 * dto.tornadoPrestigeTier);
addEffect("Tornado bonus regene_while_resting playtime factor", "regene_while_resting", "mul", () => 1 + HourFactor(dto.AccumulatedHour));
addEffect("Tornado bonus regene_while_resting max P factor", "regene_while_resting", "mul", () => 1 + 0.1 * Math.log10(dto.AccumulatedMaxP + 1));

addEffect("Tornado bonus a", "a", "add", () => 0.2 * dto.tornadoPrestigeTier * HourFactor(dto.AccumulatedHour) * (1 + 0.1 * Math.log10(dto.AccumulatedMaxP + 1)));
addEffect("Tornado bonus b", "b", "add", () => 0.02 * dto.tornadoPrestigeTier * HourFactor(dto.AccumulatedHour) * (1 + 0.01 * Math.log10(dto.AccumulatedMaxP + 1)));
addEffect("Tornado bonus c", "c", "add", () => 0.02 * dto.tornadoPrestigeTier * HourFactor(dto.AccumulatedHour) * (1 + 0.01 * Math.log10(dto.AccumulatedMaxP + 1)));
addEffect("Tornado bonus d", "d", "add", () => 0.02 * dto.tornadoPrestigeTier * HourFactor(dto.AccumulatedHour) * (1 + 0.01 * Math.log10(dto.AccumulatedMaxP + 1)));
addEffect("Tornado bonus e", "e", "add", () => 0.02 * dto.tornadoPrestigeTier * HourFactor(dto.AccumulatedHour) * (1 + 0.01 * Math.log10(dto.AccumulatedMaxP + 1)));

addEffect("Tornado unlock NewSigma", "m", "add", () => dto.tornadoPrestigeTier >= 13 ? 1 : 0);
addEffect("Tornado unlock critical", "critical", "indep", () => dto.tornadoPrestigeTier >= 17 ? 0.1 : 0);
addEffect("Tornado unlock criticalDamage", "criticalDamage", "mul", () => dto.tornadoPrestigeTier >= 17 ? 2 : 0);

function HourFactor ( hour ) {
  if (hour <= 100.0)
    return hour * 1.0 * 0.01;
  if (hour <= 1000.0)
    return hour * 1.0 * 0.01 + (hour - 100.0) * 1.0 * 0.005;
  return hour * 1.0 * 0.01 + (hour - 100.0) * 1.0 * 0.005 + (hour - 1100.0) * 1.0 * 0.001;
}
