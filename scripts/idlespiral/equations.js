
const EquationKind = {
  thales: 0,
  Hypatia: 1,
  archimedes: 2,
  pythagoras: 3,
  euclides: 4,
  eratos: 5,
  Aryabhata: 6,
  brahmagupta: 7,
  khuwarizmi: 8,
  omar: 9,
  bhaskara: 10,
  madhava: 11,
}

// SpiralEquipmentContainer
addEffect("Spiral Equation thales", "hp", "mul", () => 1 + 0.01 * dto.spiralEquipment_level[EquationKind.thales] + 0.001 * Math.max(0, dto.spiralEquipment_level[EquationKind.thales] - 1000));
addEffect("Spiral Equation Hypatia", "def", "mul", () => 1 + 0.01 * dto.spiralEquipment_level[EquationKind.Hypatia] + 0.001 * Math.max(0, dto.spiralEquipment_level[EquationKind.Hypatia] - 1000));
addEffect("Spiral Equation archimedes", "atk", "mul", () => 1 + 0.01 * dto.spiralEquipment_level[EquationKind.archimedes] + 0.001 * Math.max(0, dto.spiralEquipment_level[EquationKind.archimedes] - 1000));
addEffect("Spiral Equation pythagoras", "criticalDamage", "mul", () => 1 + 0.01 * dto.spiralEquipment_level[EquationKind.pythagoras] + 0.001 * Math.max(0, dto.spiralEquipment_level[EquationKind.pythagoras] - 1000));
addEffect("Spiral Equation euclides", "critical", "mul", () => 1 + 0.001 * dto.spiralEquipment_level[EquationKind.euclides] + 0.0001 * Math.max(0, dto.spiralEquipment_level[EquationKind.euclides] - 50));
addEffect("Spiral Equation eratos", "attack_speed", "mul", () => 1 + 0.01 * Math.log10(dto.spiralEquipment_level[EquationKind.eratos] + 1));
addEffect("Spiral Equation Aryabhata", "super_critical", "add", () => 0.01 * Math.log10(dto.spiralEquipment_level[EquationKind.Aryabhata] + 1));
addEffect("Spiral Equation brahmagupta", "equation_speed", "mul", () => 1 + 0.01 * dto.spiralEquipment_level[EquationKind.brahmagupta] + 0.001 * Math.max(0, dto.spiralEquipment_level[EquationKind.brahmagupta] - 1000));
addEffect("Spiral Equation khuwarizmi", "reward_hp_mul", "mul", () => 1 + 0.001 * dto.spiralEquipment_level[EquationKind.khuwarizmi] + 0.0001 * Math.max(0, dto.spiralEquipment_level[EquationKind.khuwarizmi] - 1000));
addEffect("Spiral Equation omar", "reward_atk_mul", "mul", () => 1 + 0.001 * dto.spiralEquipment_level[EquationKind.omar] + 0.0001 * Math.max(0, dto.spiralEquipment_level[EquationKind.omar] - 1000));
addEffect("Spiral Equation bhaskara", "reward_def_mul", "mul", () => 1 + 0.001 * dto.spiralEquipment_level[EquationKind.bhaskara] + 0.0001 * Math.max(0, dto.spiralEquipment_level[EquationKind.bhaskara] - 1000));
addEffect("Spiral Equation madhava", "reward_exp_mul", "mul", () => 1 + 0.0005 * dto.spiralEquipment_level[EquationKind.madhava] + 0.00005 * Math.max(0, dto.spiralEquipment_level[EquationKind.madhava] - 1000));
