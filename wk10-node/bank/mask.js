const cbScore = {
  mask: (string) => {
    return string = string.replace(/\d(?=\d{4})/g, "#");
  },
  unMask: (string) => {
    return string = string.replace(/\d(?=\d{16})/g, "1234");
  }
}


module.exports = cbScore