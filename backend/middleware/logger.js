/**
 * Title: Logger middleware
 * Description: Logger middleware
 * Author: M.h Sajjad Hossain Ripon
 * Data: Wed,2022-12-14
 * Time: 18:01:14.000-05:00
 */
const logger = function (req, res, next) {
  console.log("logging");
  next();
};
