
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

var evaluation_cache = {}
function evaluate ( name, debug = false ) {
  if ( debug )
    console.log("Evaluating " + name)
  if ( evaluation_cache[name] && !debug )
    return evaluation_cache[name]

  var value = 0
  if ( effects[name] ) {
    for ( var effect of effects[name] )
      if ( effect.type == "base" ) {
        if ( debug ) {
          console.log(effect)
          console.log(effect.value())
        }
        value = effect.value()
      }
    for ( var effect of effects[name] )
      if ( effect.type == "add" ) {
        if ( debug ) {
          console.log(effect)
          console.log(effect.value())
        }
        value += effect.value()
      }
    for ( var effect of effects[name] )
      if ( effect.type == "mul" ) {
        if ( debug ) {
          console.log(effect)
          console.log(effect.value())
        }
        value *= effect.value()
      }
    for ( var effect of effects[name] )
      if ( effect.type == "indep" ) {
        if ( debug ) {
          console.log(effect)
          console.log(effect.value())
        }
        value += effect.value()
      }
    for ( var effect of effects[name] )
      if ( effect.type == "exp" ) {
        if ( debug ) {
          console.log(effect)
          console.log(effect.value())
        }
        value **= effect.value()
      }
  }

  if ( value != value ) {
    console.log(`${name} is NaN`)
    console.log(effects[name])
  }

  evaluation_cache[name] = value
  return value
}
