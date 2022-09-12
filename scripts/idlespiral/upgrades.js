
const UpgradeKind = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  ae11: 7,
  logk: 8,
  beMul: 9,
  k: 10,

  parmA: 11,
  parmB: 12,
  parmC: 13,
  parmD: 14,
  parmE: 15,
  parmF: 16,
  parmG: 17,
  parmK: 18,
  prestigepoint_denominator: 19,
  exponentK: 20,
  u: 21,
  v: 22,
  n: 23,
  // omegaUpgradeIncrement
  // doubleA
  Omega: 24,
  gamma: 25,
  delta: 26,

  z_multiplier: 27,
  a_mul: 28,
  b_mul: 29,
  c_mul: 30,
  d_mul: 31,
  e_mul: 32,
  f_mul: 33,
  g_mul: 34,
  rAll: 35,
  m: 36,
  alpha: 37,
  beta: 38,
}

// UpgradeContainer
addEffect("r upgrade k", "k", "add", () => (dto.upgradeLevels[UpgradeKind.k] ?? 0));
addEffect("r upgrade a", "a", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.a]);
addEffect("r upgrade b", "b", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.b]);
addEffect("r upgrade c", "c", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.c]);
addEffect("r upgrade d", "d", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.d]);
addEffect("r upgrade e", "e", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.e]);
addEffect("r upgrade ae11 a", "a", "mul", () => 1 + 0.01 * dto.upgradeLevels[UpgradeKind.ae11]);
addEffect("r upgrade ae11 b", "b", "mul", () => 1 + 0.01 * dto.upgradeLevels[UpgradeKind.ae11]);
addEffect("r upgrade ae11 c", "c", "mul", () => 1 + 0.01 * dto.upgradeLevels[UpgradeKind.ae11]);
addEffect("r upgrade ae11 d", "d", "mul", () => 1 + 0.01 * dto.upgradeLevels[UpgradeKind.ae11]);
addEffect("r upgrade ae11 e", "e", "mul", () => 1 + 0.01 * dto.upgradeLevels[UpgradeKind.ae11]);
addEffect("r upgrade logk", "a", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.logk] * Math.log10(evaluate("k") + 1));
addEffect("r upgrade f", "f", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.f]);
addEffect("r upgrade g", "g", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.g]);
addEffect("r upgrade beMul passive", "a", "mul", () => (evaluate("b") + evaluate("c") + evaluate("d") + evaluate("e") + evaluate("f") + evaluate("g")) / 6.0);
addEffect("r upgrade beMul active", "a", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.beMul]);
addEffect("r upgrade rAll passive", "delta_r", "mul", () => 1 + (dto.upgradeLevels[UpgradeKind.k] + dto.upgradeLevels[UpgradeKind.a] + dto.upgradeLevels[UpgradeKind.b] + dto.upgradeLevels[UpgradeKind.c] + dto.upgradeLevels[UpgradeKind.d] + dto.upgradeLevels[UpgradeKind.e] + dto.upgradeLevels[UpgradeKind.ae11] + dto.upgradeLevels[UpgradeKind.logk] + dto.upgradeLevels[UpgradeKind.f] + dto.upgradeLevels[UpgradeKind.g] + dto.upgradeLevels[UpgradeKind.beMul] + dto.upgradeLevels[UpgradeKind.rAll]) / 10000);
addEffect("r upgrade rAll active", "delta_r", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.rAll]);

addEffect("p upgrade n", "n", "add", () => dto.upgradeLevels[UpgradeKind.n]);
addEffect("p upgrade v", "v", "add", () => 10 * dto.upgradeLevels[UpgradeKind.v]);
addEffect("p upgrade u", "u", "add", () => dto.upgradeLevels[UpgradeKind.u]);
addEffect("p upgrade parmA", "a", "add", () => dto.upgradeLevels[UpgradeKind.parmA]);
addEffect("p upgrade parmK", "k", "add", () => 10 * dto.upgradeLevels[UpgradeKind.parmK]);
addEffect("p upgrade parmB", "b", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.parmB]);
addEffect("p upgrade parmC", "c", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.parmC]);
addEffect("p upgrade parmD", "d", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.parmD]);
addEffect("p upgrade parmE", "e", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.parmE]);
addEffect("p upgrade parmF", "f", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.parmF]);
addEffect("p upgrade parmG", "g", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.parmG]);
addEffect("p upgrade prestigePoint_demoninator", "prestigePoint_demoninator", "mul", () => 0.95 ** dto.upgradeLevels[UpgradeKind.prestigepoint_denominator]);
addEffect("p upgrade exponentK", "k", "exp", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.exponentK]);
addEffect("p upgrade alpha", "alpha", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.alpha]);
addEffect("p upgrade beta", "beta", "add", () => 0.01 * dto.upgradeLevels[UpgradeKind.beta]);

addEffect("z upgrade z_multiplier", "delta_r", "mul", () => 1 + (((dto.upgradeLevels[UpgradeKind.z_multiplier] > 0) ? 1 : 0) + 0.1 * dto.upgradeLevels[UpgradeKind.z_multiplier]) * Math.log10(dto.z + 1) / 5);
addEffect("z upgrade Omega", "Omega", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.Omega]);
addEffect("z upgrade gamma", "gamma", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.gamma]);
addEffect("z upgrade delta", "delta", "add", () => 0.1 * dto.upgradeLevels[UpgradeKind.delta]);
addEffect("z upgrade a_mul", "a", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.a_mul]);
addEffect("z upgrade b_mul", "b", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.b_mul]);
addEffect("z upgrade c_mul", "c", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.c_mul]);
addEffect("z upgrade d_mul", "d", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.d_mul]);
addEffect("z upgrade e_mul", "e", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.e_mul]);
addEffect("z upgrade f_mul", "f", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.f_mul]);
addEffect("z upgrade g_mul", "g", "mul", () => 1 + 0.1 * dto.upgradeLevels[UpgradeKind.g_mul]);
addEffect("z upgrade m", "m", "add", () => dto.upgradeLevels[UpgradeKind.m]);
