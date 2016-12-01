var box = {
    locked: true,
    unlock: function() {
        this.locked = false;
    },
    lock: function() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error(" Locked !");
        return this._content;
    }
};

function withBoxUnlocked(value) {
    var locked = box.locked;
    if (!locked)
        value();

    box.unlock();

    try {
        value();
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function() {
  box.content.push("Gold");
})

try{
  withBoxUnlocked(function() {
    throw new Error("Error thrown!")
  });
} catch (e) {
  console.log("Error raised: ", e);
}

console.log(box.locked);
