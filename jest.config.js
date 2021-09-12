const jest = {
  'automock': false,
  'collectCoverage': true,
  'coverageThreshold': {
    'global': {
      'branches': 100,
      'functions': 100,
      'lines': 100,
      'statements': 100
    }
  },
  'verbose': true
}

module.exports = jest