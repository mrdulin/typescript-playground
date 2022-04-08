const parentDiv = document.createElement('div');

const childNodes = Array.from(parentDiv.children);
childNodes.forEach((elm) => {
  if (elm instanceof HTMLElement) {
    console.log(elm.offsetWidth);
  }
});

export {};
