
const ReactorKind = {
  r: 0,
  lineRenderer: 1,
  equation: 2,
  battle_stats: 3,
  crit: 4,
  s_crit: 5,
}

// Domain / Z_reactor / ReactorContainer
addEffect("Reactor r active", ParametersKind.delta_r, "mul", () => 1 + 0.01 * (dto.reactor_values[ReactorKind.r] ?? 0));
addEffect("Reactor r passive", ParametersKind.delta_r, "mul", () => {
  if ( (dto.reactor_levels[ReactorKind.r] ?? 0) >= 1000 )
    return 1 + 0.005 * (dto.reactor_levels[ReactorKind.r] ?? 0) + 0.00005 * ((dto.reactor_levels[ReactorKind.r] ?? 0) - 1000);
  else
    return 1 + 0.005 * (dto.reactor_levels[ReactorKind.r] ?? 0);
});

addEffect("Reactor lineRenderer active", ParametersKind.line_number_multiplier, "mul", () => 1 + 0.01 * ((dto.reactor_values[ReactorKind.lineRenderer] ?? 0) ** 1.8) / 25000);
addEffect("Reactor lineRenderer passive", ParametersKind.line_number_multiplier, "mul", () => {
  if ( (dto.reactor_levels[ReactorKind.lineRenderer] ?? 0) >= 1000 )
    return 1 + 0.005 * (dto.reactor_levels[ReactorKind.lineRenderer] ?? 0) + 0.0005 * ((dto.reactor_levels[ReactorKind.lineRenderer] ?? 0) - 1000);
  else
    return 1 + 0.05 * (dto.reactor_levels[ReactorKind.lineRenderer] ?? 0);
});

addEffect("Reactor equation active", ParametersKind.equation_speed, "mul", () => 1 + 0.01 * ((dto.reactor_values[ReactorKind.equation] ?? 0) ** 1.5) / 20000);
addEffect("Reactor equation passive", ParametersKind.equation_speed, "mul", () => {
  if ( (dto.reactor_levels[ReactorKind.equation] ?? 0) >= 1000 )
    return 1 + 0.005 * (dto.reactor_levels[ReactorKind.equation] ?? 0) + 0.00025 * ((dto.reactor_levels[ReactorKind.equation] ?? 0) - 1000);
  else
    return 1 + 0.025 * (dto.reactor_levels[ReactorKind.equation] ?? 0);
});

addEffect("Reactor battle_stats active hp", ParametersKind.hp, "mul", () => 1 + 0.01 * ((dto.reactor_values[ReactorKind.battle_stats] ?? 0) ** 3) / 1e14);
addEffect("Reactor battle_stats active atk", ParametersKind.atk, "mul", () => 1 + 0.01 * ((dto.reactor_values[ReactorKind.battle_stats] ?? 0) ** 3) / 1e14);
addEffect("Reactor battle_stats active def", ParametersKind.def, "mul", () => 1 + 0.01 * ((dto.reactor_values[ReactorKind.battle_stats] ?? 0) ** 3) / 1e14);
addEffect("Reactor battle_stats passive hp", ParametersKind.hp, "mul", () => {
  if ( (dto.reactor_levels[ReactorKind.battle_stats] ?? 0) >= 1000 )
    return 1 + 0.005 * (dto.reactor_levels[ReactorKind.battle_stats] ?? 0) + 0.0005 * ((dto.reactor_levels[ReactorKind.battle_stats] ?? 0) - 1000);
  else
    return 1 + 0.05 * (dto.reactor_levels[ReactorKind.battle_stats] ?? 0);
});
addEffect("Reactor battle_stats passive atk", ParametersKind.atk, "mul", () => {
  if ( (dto.reactor_levels[ReactorKind.battle_stats] ?? 0) >= 1000 )
    return 1 + 0.005 * (dto.reactor_levels[ReactorKind.battle_stats] ?? 0) + 0.0005 * ((dto.reactor_levels[ReactorKind.battle_stats] ?? 0) - 1000);
  else
    return 1 + 0.05 * (dto.reactor_levels[ReactorKind.battle_stats] ?? 0);
});
addEffect("Reactor battle_stats passive def", ParametersKind.def, "mul", () => {
  if ( (dto.reactor_levels[ReactorKind.battle_stats] ?? 0) >= 1000 )
    return 1 + 0.005 * (dto.reactor_levels[ReactorKind.battle_stats] ?? 0) + 0.0005 * ((dto.reactor_levels[ReactorKind.battle_stats] ?? 0) - 1000);
  else
    return 1 + 0.05 * (dto.reactor_levels[ReactorKind.battle_stats] ?? 0);
});

addEffect("Reactor crit active", ParametersKind.critical, "indep", () => 0.01 * SigmaSum(Math.floor((dto.reactor_values[ReactorKind.crit] ?? 0) / 1e9)));
addEffect("Reactor crit passive", ParametersKind.critical, "indep", () => {
  if ( (dto.reactor_levels[ReactorKind.crit] ?? 0) >= 1000 )
    return 0.000005 * (dto.reactor_levels[ReactorKind.crit] ?? 0) + 0.00005 * (dto.reactor_levels[ReactorKind.crit] ?? 0);
  else
    return 0.00005 * (dto.reactor_levels[ReactorKind.crit] ?? 0);
});

addEffect("Reactor super_critical active", ParametersKind.super_critical, "indep", () => 0.01 * Math.floor((dto.reactor_values[ReactorKind.s_crit] ?? 0) / 2e16));
addEffect("Reactor super_critical passive", ParametersKind.super_critical, "indep", () => {
  if ( (dto.reactor_levels[ReactorKind.s_crit] ?? 0) >= 1000 )
    return 0.000005 * (dto.reactor_levels[ReactorKind.s_crit] ?? 0) + 0.00005 * (dto.reactor_levels[ReactorKind.s_crit] ?? 0);
  else
    return 0.00005 * (dto.reactor_levels[ReactorKind.s_crit] ?? 0);
});

function SigmaSum ( level ) {
  var r = 0;
  for ( var i = 0; i < level; i++ )
    r += 1 / Math.sqrt(i + 1);
  return r;
}
