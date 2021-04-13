Number.prototype[Symbol.iterator] = function*(){
  for (let i=0; i<this.valueOf(); i++){
    yield i
  }
}

Object.defineProperty(Number.prototype, "times", {
  get(){
    if (!this._times){
      this._times = []
      for (let i=0; i<this.valueOf(); i++) this._times.push(i)
    }

    return this._times
  }
})

Array.prototype.do = function(fn){
  return this.forEach(fn)
}

Array.prototype.getRandom = function(){
  return this[parseInt(Math.random() * this.length)]
}

Array.prototype.random = Array.prototype.getRandom
