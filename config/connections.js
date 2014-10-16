module.exports = {
  mysql: {
    host      : 'localhost',
    port      : 3306,
    user      : 'root',
    password  : 'root',
    database  : 'otreningu',
    migrate   : 'safe',
    // Optional
    charset   : 'utf8',
    adapter   : 'mysql'
    // collation : 'utf8_swedish_ci'
  }
};