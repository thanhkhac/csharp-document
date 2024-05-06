var obj = {
  name: "Academy",

  myFunc: function () {
    console.log(this.name);
  },
};

obj.myFunc();
