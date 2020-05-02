/*
 * Saloimex
 * Faris Han, 2020
 */
class Saloimex {
  constructor(key) {
    this.key = key || 'saloimex_';
  }

  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));

    return data;
  }

  load() {
    let data = false;

    if (localStorage.getItem(this.key)) {
      /* istanbul ignore next */
      data = JSON.parse(localStorage.getItem(this.key));
    }

    return data;
  }

  import(string) {
    const data = JSON.parse(atob(string));

    this.save(data);

    return data;
  }

  export(data) {
    this.save(data);

    const result = btoa(JSON.stringify(data));

    return result;
  }
}

export default Saloimex;
