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

Object.defineProperty(Array.prototype, "first", {
  get(){
    return this[0]
  },

  set(){
    throw new Error("The `first` property of an array is read-only!")
  },
})

Object.defineProperty(Array.prototype, "last", {
  get(){
    return this[this.length - 1]
  },

  set(){
    throw new Error("The `last` property of an array is read-only!")
  },
})
