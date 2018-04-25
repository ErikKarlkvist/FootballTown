'use strict'

export class Database {
  ref = (path) => {
    if (!this[path]) {
      this[path] = new Reference(path)
    }
    return this[path]
  }
}

export class Firestore {
  collection = (path) => {
    if (!this[path]) {
      this[path] = new Collection(path)
    }
    return this[path]
  }
}

export class Collection {
  constructor(path) {
    this.path = path;
    this.data = []
  }

  doc = (path) => {
    if (!this[path]) {
      this[path] = new Doc(path)
    }
    return this[path]
  }

  get = jest.fn((param, callback) => {
    const promise = new Promise ((resolve, reject) => {
      if (callback) {
        callback(this.data)
        resolve()
      } else {
        resolve(this.data)
      }
    })
    RNFirebase.promises.push(promise)
    return promise
  })

  add = jest.fn((data) => {
    const promise = Promise.resolve()
    RNFirebase.promises.push(promise)
    return promise
  })
}

export class Doc {
  constructor(path) {
    this.path = path
    this.snap = { data: () => this._data()}
    this.data = null
  }

  _data = jest.fn(() => {
    return this.data
  })

  get = jest.fn((param, callback) => {
    const promise = new Promise ((resolve, reject) => {
      if (callback) {
        callback(this.snap)
        resolve()
      } else {
        resolve(this.snap)
      }
    })
    RNFirebase.promises.push(promise)
    return promise
  })

  add = jest.fn((param, callback) => {
    const promise = Promise.resolve()
    RNFirebase.promises.push(promise)
    return promise
  })

  remove = jest.fn(() => {
    const promise = Promise.resolve()
    RNFirebase.promises.push(promise)
    return promise
  })

  set = jest.fn((path, params) => {
    const promise = Promise.resolve()
    RNFirebase.promises.push(promise)
    return promise
  })
}

export class Reference {
  constructor(path) {
    this.path = path
    this.snap = { val: () => this._val()}
    this.data = null
  }

  _val = jest.fn(() => {
    return this.data
  })

  once = jest.fn((param, callback) => {
    const promise = new Promise ((resolve, reject) => {
      if (callback) {
        callback(this.snap)
        resolve()
      } else {
        resolve(this.snap)
      }
    })
    RNFirebase.promises.push(promise)
    return promise
  })

  on = jest.fn((param, callback) => {
    const promise = new Promise ((resolve, reject) => {
      if (callback) {
        callback(this.snap)
        resolve()
      } else {
        resolve(this.snap)
      }
    })
    RNFirebase.promises.push(promise)
    return promise
  })

  off = jest.fn((param, callback) => {
    const promise = Promise.resolve()
    RNFirebase.promises.push(promise)
    return promise
  })

  update = jest.fn((data) => {
    const promise = Promise.resolve()
    RNFirebase.promises.push(promise)
    return promise
  })

  remove = jest.fn(() => {
    const promise = Promise.resolve()
    RNFirebase.promises.push(promise)
    return promise
  })
}

export class MockFirebase {
  constructor() {
    this.database = () => {
      if (!this.databaseInstance) {
        this.databaseInstance = new Database()
      }
      return this.databaseInstance
    }
    this.collection = () => {
      if (!this.collectionInstance) {
        this.collectionInstance = new Firestore()
      }
      return this.collectionInstance
    }
  }
}

export default class RNFirebase {
  static initializeApp() {
    RNFirebase.firebase = new MockFirebase()
    RNFirebase.promises = []
    return RNFirebase.firebase
  }

  static reset() {
    RNFirebase.promises = []
    RNFirebase.firebase.databaseInstance = null
    RNFirebase.firebase.collectionInstance = null
  }

  static waitForPromises() {
    return Promise.all(RNFirebase.promises)
  }
}
