
const DesignID = {
  normal_brue: 0,
  normal_yellow: 1,
  normal_red: 2,
  normal_violet: 3,
  normal_mono: 4,
  gradation_brue_green: 5,
  gradation_yellow_red: 6,
  gradation_red_blue: 7,
  gradation_violet_pink: 8,
  gradation_white_cyan: 9,
  circles_white: 10,
  circles_green_pink: 11,
  circles_cyan_red: 12,
  dottedLine_blue: 13,
  dottedLine_white: 14,
  dottedLine_orange_brue: 15,
  stripe_white: 16,
  stripe_blue: 17,
  stripe_yellow: 18,
  sine_green: 19,
  sine_white_red: 20,
  sine_orange_purple: 21,
  snake: 22,
  bubble: 23,
  arrow: 24,
  pi: 25,
  rects: 26,
  rainbow: 27,
  kanji: 28,
  rahmen: 29,
  lazer: 30,
  spaceShip: 31,
  seigaiha: 32,
  sippou: 33,
  lame: 34,
}

// SpiralDesignEffect
addEffect("Spiral Design normal_brue active", "a", "mul", () => dto.currentDesign == DesignID.normal_brue ? 1.1 : 1);
addEffect("Spiral Design normal_yellow active", "b", "mul", () => dto.currentDesign == DesignID.normal_yellow ? 1.1 : 1);
addEffect("Spiral Design normal_red active", "c", "mul", () => dto.currentDesign == DesignID.normal_red ? 1.1 : 1);
addEffect("Spiral Design normal_violet active", "d", "mul", () => dto.currentDesign == DesignID.normal_violet ? 1.1 : 1);
addEffect("Spiral Design normal_mono active", "e", "mul", () => dto.currentDesign == DesignID.normal_mono ? 1.1 : 1);

addEffect("Spiral Design gradation_brue_green active", "hp", "mul", () => dto.currentDesign == DesignID.gradation_brue_green ? 1.5 : 1);
addEffect("Spiral Design gradation_brue_green passive", "hp", "mul", () => dto.design_isUnlocked[DesignID.gradation_brue_green] ? 1.1 : 1);

addEffect("Spiral Design gradation_yellow_red active", "atk", "mul", () => dto.currentDesign == DesignID.gradation_yellow_red ? 1.5 : 1);
addEffect("Spiral Design gradation_yellow_red passive", "atk", "mul", () => dto.design_isUnlocked[DesignID.gradation_yellow_red] ? 1.1 : 1);

addEffect("Spiral Design gradation_red_blue active", "def", "mul", () => dto.currentDesign == DesignID.gradation_red_blue ? 1.5 : 1);
addEffect("Spiral Design gradation_red_blue passive", "def", "mul", () => dto.design_isUnlocked[DesignID.gradation_red_blue] ? 1.1 : 1);

addEffect("Spiral Design gradation_violet_pink active", "critical", "mul", () => dto.currentDesign == DesignID.gradation_violet_pink ? 1.05 : 1);
addEffect("Spiral Design gradation_violet_pink passive", "critical", "mul", () => dto.design_isUnlocked[DesignID.gradation_violet_pink] ? 1.01 : 1);

addEffect("Spiral Design gradation_white_cyan active", "criticalDamage", "mul", () => dto.currentDesign == DesignID.gradation_white_cyan ? 1.2 : 1);
addEffect("Spiral Design gradation_white_cyan passive", "criticalDamage", "mul", () => dto.design_isUnlocked[DesignID.gradation_white_cyan] ? 1.01 : 1);

addEffect("Spiral Design circles_white active", "regene_while_resting", "mul", () => dto.currentDesign == DesignID.circles_white ? 3 : 1);
addEffect("Spiral Design circles_white passive", "regene_while_resting", "mul", () => dto.design_isUnlocked[DesignID.circles_white] ? 1.5 : 1);

addEffect("Spiral Design circles_green_pink active regene_while_resting", "regene_while_resting", "mul", () => dto.currentDesign == DesignID.circles_green_pink ? 1.5 : 1);
addEffect("Spiral Design circles_green_pink active def", "def", "mul", () => dto.currentDesign == DesignID.circles_green_pink ? 1.3 : 1);
addEffect("Spiral Design circles_green_pink passive regene_while_resting", "regene_while_resting", "mul", () => dto.design_isUnlocked[DesignID.circles_green_pink] ? 1.1 : 1);
addEffect("Spiral Design circles_green_pink passive def", "def", "mul", () => dto.design_isUnlocked[DesignID.circles_green_pink] ? 1.05 : 1);

addEffect("Spiral Design circles_cyan_red active regene_while_resting", "regene_while_resting", "mul", () => dto.currentDesign == DesignID.circles_cyan_red ? 1.5 : 1);
addEffect("Spiral Design circles_cyan_red active atk", "atk", "mul", () => dto.currentDesign == DesignID.circles_cyan_red ? 1.3 : 1);
addEffect("Spiral Design circles_cyan_red passive regene_while_resting", "regene_while_resting", "mul", () => dto.design_isUnlocked[DesignID.circles_cyan_red] ? 1.1 : 1);
addEffect("Spiral Design circles_cyan_red passive atk", "atk", "mul", () => dto.design_isUnlocked[DesignID.circles_cyan_red] ? 1.05 : 1);

addEffect("Spiral Design dottedLine_blue active", "line_number_multiplier", "mul", () => dto.currentDesign == DesignID.dottedLine_blue ? 2 : 1);
addEffect("Spiral Design dottedLine_blue passive", "line_number_multiplier", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_blue] ? 1.25 : 1);

addEffect("Spiral Design dottedLine_white active", "line_number_multiplier", "mul", () => dto.currentDesign == DesignID.dottedLine_white ? 1.25 : 1);
addEffect("Spiral Design dottedLine_white passive line_number_multiplier", "line_number_multiplier", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_white] ? 1.1 : 1);
addEffect("Spiral Design dottedLine_white passive a", "a", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_white] ? 1.05 : 1);
addEffect("Spiral Design dottedLine_white passive b", "b", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_white] ? 1.05 : 1);
addEffect("Spiral Design dottedLine_white passive c", "c", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_white] ? 1.05 : 1);

addEffect("Spiral Design dottedLine_orange_brue active", "line_number_multiplier", "mul", () => dto.currentDesign == DesignID.dottedLine_orange_brue ? 1.25 : 1);
addEffect("Spiral Design dottedLine_orange_brue passive line_number_multiplier", "line_number_multiplier", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_orange_brue] ? 1.1 : 1);
addEffect("Spiral Design dottedLine_orange_brue passive d", "d", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_orange_brue] ? 1.05 : 1);
addEffect("Spiral Design dottedLine_orange_brue passive e", "e", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_orange_brue] ? 1.05 : 1);
addEffect("Spiral Design dottedLine_orange_brue passive f", "f", "mul", () => dto.design_isUnlocked[DesignID.dottedLine_orange_brue] ? 1.05 : 1);

addEffect("Spiral Design stripe_white active", "v", "add", () => dto.currentDesign == DesignID.stripe_white ? 5 : 0);
addEffect("Spiral Design stripe_white passive", "v", "add", () => dto.design_isUnlocked[DesignID.stripe_white] ? 2 : 0);

addEffect("Spiral Design stripe_blue active", "reward_atk", "add", () => dto.currentDesign == DesignID.stripe_blue ? 5 : 0);
addEffect("Spiral Design stripe_blue passive", "reward_atk", "add", () => dto.design_isUnlocked[DesignID.stripe_blue] ? 2 : 0);

addEffect("Spiral Design stripe_yellow active", "reward_def", "add", () => dto.currentDesign == DesignID.stripe_yellow ? 5 : 0);
addEffect("Spiral Design stripe_yellow passive", "reward_def", "add", () => dto.design_isUnlocked[DesignID.stripe_yellow] ? 2 : 0);

addEffect("Spiral Design sine_green active", "reward_exp", "add", () => dto.currentDesign == DesignID.sine_green ? 3 : 0);
addEffect("Spiral Design sine_green passive", "reward_exp", "add", () => dto.design_isUnlocked[DesignID.sine_green] ? 1 : 0);

addEffect("Spiral Design sine_white_red active", "reward_exp_mul", "mul", () => dto.currentDesign == DesignID.sine_white_red ? 1.1 : 1);
addEffect("Spiral Design sine_white_red passive", "reward_exp_mul", "mul", () => dto.design_isUnlocked[DesignID.sine_white_red] ? 1.03 : 1);

addEffect("Spiral Design sine_orange_purple active hp", "hp", "mul", () => dto.currentDesign == DesignID.sine_orange_purple ? 2 : 1);
addEffect("Spiral Design sine_orange_purple active atk", "atk", "mul", () => dto.currentDesign == DesignID.sine_orange_purple ? 2 : 1);
addEffect("Spiral Design sine_orange_purple active def", "def", "mul", () => dto.currentDesign == DesignID.sine_orange_purple ? 2 : 1);
addEffect("Spiral Design sine_orange_purple passive hp", "hp", "mul", () => dto.design_isUnlocked[DesignID.sine_orange_purple] ? 1.3 : 1);
addEffect("Spiral Design sine_orange_purple passive atk", "atk", "mul", () => dto.design_isUnlocked[DesignID.sine_orange_purple] ? 1.3 : 1);
addEffect("Spiral Design sine_orange_purple passive def", "def", "mul", () => dto.design_isUnlocked[DesignID.sine_orange_purple] ? 1.3 : 1);

addEffect("Spiral Design snake active", "super_critical", "add", () => dto.currentDesign == DesignID.snake ? 0.1 : 0);
addEffect("Spiral Design snake passive", "super_critical", "add", () => dto.design_isUnlocked[DesignID.snake] ? 0.03 : 0);

addEffect("Spiral Design bubble active", "rare_drop", "mul", () => dto.currentDesign == DesignID.bubble ? 1.2 : 1);
addEffect("Spiral Design bubble passive", "rare_drop", "mul", () => dto.design_isUnlocked[DesignID.bubble] ? 1.05 : 1);

addEffect("Spiral Design arrow active", "attack_speed", "mul", () => dto.currentDesign == DesignID.arrow ? 1.2 : 1);
addEffect("Spiral Design arrow passive", "attack_speed", "mul", () => dto.design_isUnlocked[DesignID.arrow] ? 1.05 : 1);

addEffect("Spiral Design pi active", "Omega", "mul", () => dto.currentDesign == DesignID.pi ? 1.5 : 1);
addEffect("Spiral Design pi passive", "Omega", "mul", () => dto.design_isUnlocked[DesignID.pi] ? 1.2 : 1);

addEffect("Spiral Design rects active", "reward_exp_mul", "mul", () => dto.currentDesign == DesignID.rects ? 1.05 : 1);
addEffect("Spiral Design rects passive", "battle_upgrade_cost", "mul", () => dto.design_isUnlocked[DesignID.rects] ? 0.95 : 1);

addEffect("Spiral Design rainbow active", "equation_speed", "mul", () => dto.currentDesign == DesignID.rainbow ? 2 : 1);
addEffect("Spiral Design rainbow passive", "equation_speed", "mul", () => dto.design_isUnlocked[DesignID.rainbow] ? 1.5 : 1);

addEffect("Spiral Design kanji active", "delta", "mul", () => dto.currentDesign == DesignID.kanji ? 2 : 1);
addEffect("Spiral Design kanji passive", "equation_slot", "add", () => dto.design_isUnlocked[DesignID.kanji] ? 1 : 0);

addEffect("Spiral Design rahmen active", "gamma", "mul", () => dto.currentDesign == DesignID.rahmen ? 1.5 : 1);
addEffect("Spiral Design rahmen passive", "gamma", "mul", () => dto.design_isUnlocked[DesignID.rahmen] ? 1.2 : 1);

addEffect("Spiral Design lazer active", "z_reactor_exp", "mul", () => dto.currentDesign == DesignID.lazer ? 1.5 : 1);
addEffect("Spiral Design lazer passive", "z_reactor_exp", "mul", () => dto.design_isUnlocked[DesignID.lazer] ? 1.2 : 1);

addEffect("Spiral Design spaceShip active", "omega", "mul", () => dto.currentDesign == DesignID.spaceShip ? 1.1 : 1);
addEffect("Spiral Design spaceShip passive", "omega", "mul", () => dto.design_isUnlocked[DesignID.spaceShip] ? 1.1 : 1);

addEffect("Spiral Design seigaiha active", "alpha", "add", () => dto.currentDesign == DesignID.seigaiha ? 0.025 : 0);
addEffect("Spiral Design seigaiha passive", "alpha", "add", () => dto.design_isUnlocked[DesignID.seigaiha] ? 0.01 : 0);

addEffect("Spiral Design sippou active", "beta", "add", () => dto.currentDesign == DesignID.sippou ? 0.025 : 0);
addEffect("Spiral Design sippou passive", "beta", "add", () => dto.design_isUnlocked[DesignID.sippou] ? 0.01 : 0);

addEffect("Spiral Design lame active", "math", "add", () => dto.currentDesign == DesignID.lame ? 1000 : 0);
addEffect("Spiral Design lame passive", "math", "add", () => dto.design_isUnlocked[DesignID.lame] ? 200 : 0);
