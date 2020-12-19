//创建一个Person Class
class Person {
  //构造器方法
  constructor(name, age) {
    //构造器中的this是谁？=>类的实例对象
    this.name = name
    this.age = age
  }
  //一般方法
  speak() {
    //speak方法放在了哪里？=>class的原型对象(prototype)上，供实例使用
    //通过Person class调用speak时，speak中的this就是Person实例(instance)
    console.log(`我叫${this.name}，我的年龄是${this.age}`);
  }
}

//创建一个Student类，继承于Person类
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age) // Super必须最开始调用
    this.grade = grade
  }
  //重写从父类继承过来的方法
  speak() {
    console.log(`我叫${this.name}，我的年龄是${this.age}，我读的是${this.grade}年级。`);
  }
  study() {
    //study方法放在了哪里？=>class的原型对象(prototype)上，供实例使用
    //通过Student class调用study时，study中的this就是Student实例(instance)
    console.log('我很努力的学习。');
  }
}

/*
总结：
1.类中的constructor不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
2.如果A类继承了B类，且A类中写了constructor，那么A类constructor中的super是必须调用的。
3.类中所定义的方法，都是放在了类的原型对象上，供实例去使用。
*/

class Car {
  constructor(name, price) {
    this.name = name
    this.price = price
    // this.wheel = 4
  }
  //类中可以直接写赋值语句，如下代码的含义是：给Car的实例对象添加一个属性，名为a，值为1
  a = 1
}

const car1 = new Car('奔驰c63', 299)
const car1 = new Car('宝马m3', 288)