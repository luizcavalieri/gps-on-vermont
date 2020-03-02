
export function headerScrolling() {
  document.body.classList.add("landing-page");
  document.body.classList.add("sidebar-collapse");
  document.documentElement.classList.remove("nav-open");
  return function cleanup() {
    document.body.classList.remove("landing-page");
    document.body.classList.remove("sidebar-collapse");
  };
}

export function chunks(arr, size) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input should be Array');
  }

  if (typeof size !== 'number') {
    throw new TypeError('Size should be a Number');
  }

  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, size + i));
  }

  return result;
};

