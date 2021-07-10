/**
 * colorChecker returns the middleware function.
 * @returns colorChecker
 */
module.exports = colorChecker = () => {
  return colorChecker = (req, res, next) => {
    const hexColorMap = {
      'red': '#ff0000',
      'green': '#00ff00',
      'blue': '#0000ff',
    };

    if (req.body.color) {
      const color = req.body.color;
      req.body.color = hexColorMap[color.toLowerCase()] || '#000000';
    } 
    next();
  };
};
