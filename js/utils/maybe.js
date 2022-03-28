/**
 * @prettier
 */

export class Maybe {
  static withDefault(value, maybe) {
    if (maybe instanceof Just) {
      return maybe.getValue();
    }

    if (maybe instanceof Nothing) {
      return value;
    }
  }
}

export class Just extends Maybe {
  constructor(value) {
    super();
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

export class Nothing extends Maybe {
  constructor(value) {
    super();
  }
}

export function isJust(maybe) {
  if (maybe instanceof Just) {
    return true;
  }

  return false;
}

export function isNothing(maybe) {
  if (maybe instanceof Nothing) {
    return true;
  }

  return false;
}
