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

const s1 = new Student('小张', 15, '高一')
s1.speak()