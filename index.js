// jais code

function findMatching(drivers, name) {
  let driversName = drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
  return driversName;
}

function fuzzyMatch(drivers, name) {
  let driversName = drivers.filter(function (driver) {
    return driver.slice(0, 2).toLowerCase() === name.toLowerCase();
  });
  return driversName;
}

function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}
//arrow function! I seriously just dont get it
