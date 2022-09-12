
class Effect {
  constructor ( name, target, type, value ) {
    this.name = name
    this.target = target
    this.type = type
    this.value = value
  }
}

var effects = {}
function addEffect ( name, target, type, value ) {
  if ( !effects[target] )
    effects[target] = []
  effects[target].push(new Effect(name, target, type, value))
}
function addBaseValue ( target, value ) {
  addEffect("Base Value", target, "base", () => value)
}

var evalation_cache = {}
function evaluate ( name ) {
  if ( evalation_cache[name] )
    return evalation_cache[name]

  var value = 0
  if ( effects[name] ) {
    for ( var effect of effects[name] )
      if ( effect.type == "base" )
        value = effect.value()
    for ( var effect of effects[name] )
      if ( effect.type == "add" )
        value += effect.value()
    for ( var effect of effects[name] )
      if ( effect.type == "mul" )
        value *= effect.value()
    for ( var effect of effects[name] )
      if ( effect.type == "indep" )
        value += effect.value()
    for ( var effect of effects[name] )
      if ( effect.type == "exp" )
        value **= effect.value()
  }

  if ( value != value ) {
    console.log(`${name} is NaN`)
    console.log(effects[name])
  }

  evalation_cache[name] = value
  return value
}
