
const VariableUpgradeKind = {
  k: 0,
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  atk: 8,
  def: 9,
}

// InfiniteSpiralDomain
addEffect("Store upgrade k", "k", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.k]);
addEffect("Store upgrade a", "a", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.a]);
addEffect("Store upgrade b", "b", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.b]);
addEffect("Store upgrade c", "c", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.c]);
addEffect("Store upgrade d", "d", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.d]);
addEffect("Store upgrade e", "e", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.e]);
addEffect("Store upgrade f", "f", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.f]);
addEffect("Store upgrade g", "g", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.g]);
addEffect("Store upgrade atk", "atk", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.atk]);
addEffect("Store upgrade def", "def", "mul", () => 1 + 0.01 * dto.variableUpgradeLevels[VariableUpgradeKind.def]);
