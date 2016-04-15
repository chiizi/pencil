const _scopeGetter = a => k => {
  try {
    a.reverse().forEach(o => {
      if (k in o) {
        throw o[k]
      }
    })
  }
  catch (v) {
    return v
  }
}

export default _scopeGetter
