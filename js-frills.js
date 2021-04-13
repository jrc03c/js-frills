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
