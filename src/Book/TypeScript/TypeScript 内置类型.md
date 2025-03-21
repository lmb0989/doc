- ## Partial

  所有属性设置为`可选`

  ```typescript
  interface User {
      name: string;
      age: number;
      email: string;
  }
  
  // { name?: string; age?: number; email?: string; }
  type Result = Partial<User>  
  ```

- ## Required

  所有属性设置为`必选`

  ```typescript
  interface User {
      name?: string;
      age?: number;
      email?: string;
  }
  
  // { name: string; age: number; email: string; }
  type Result = Required<User>
  ```

- ## Readonly

  所有属性设置为`只读`

  ```typescript
  interface User {
      name: string;
      age: number;
      email: string;
  }
  
  // { readonly name: string; readonly age: number; readonly email: string; }
  type Result = Readonly<User>
  ```

- ## Pick

  用于从给定类型中`选择`指定的属性

  ```typescript
  interface User {
      name: string;
      age: number;
      email: string;
      address: string;
  }
  
  // { name: string; age: number; }
  type Result = Pick<User, "name" | "age">;
  ```

- ## Record

  返回一个具有`指定属性`类型的`对象类型`

  ```typescript
  type Fruit = "apple" | "banana" | "orange";
  
  // { apple: number; banana: number; orange: number; }
  type fruitPrices = Record<Fruit, number>;
  ```

- ## Exclude

  用于从一个`联合类型`中`排除`指定的类型

  ```typescript
  type Fruit = "apple" | "banana" | "orange";
  
  // "banana" | "orange"
  type fruitExclude = Exclude<Fruit, "apple">;
  ```

- ## Extract

  用于从一个`联合类型`中`提取`指定的类型

  ```typescript
  type Animal = "dog" | "cat" | "bird" | "monkey";
  
  //  "cat" | "bird"
  type ExtractBird = Extract<Animal, "cat" | "bird">;
  ```

- ## Omit

  用于从一个`对象`类型中`排除`指定的属性

  ```typescript
  type Person = {
      name: string;
      age: number;
      gender: string;
  };
  
  // { name: string; gender: string; }
  type OmitAge = Omit<Person, "age">;
  ```

- ## NonNullable

  从一个类型中排除 `null` 和 `undefined`

  ```typescript
  type NullableString = string | null | undefined | boolean;
  
  // string | boolean
  type NonNullableString = NonNullable<NullableString>;
  ```

- ## Parameters

  它用于获取函数的`参数类型`

  它接受一个函数作为参数，并返回一个`元组`类型，其中包含了函数的每个参数类型

  ```typescript
  function greet(name: string, age: number): void {
      console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  // [string, number]
  type GreetParams = Parameters<typeof greet>;
  ```

- ## ConstructorParameters

  用于获取`构造函数`的参数类型

  返回一个`元组`类型，该元组类型包含了构造函数的参数类型

  ```typescript
  class Person {
      constructor(name: string, age: number) {
          // constructor implementation
      }
  }
  
  // [string, number]
  type PersonConstructorParams = ConstructorParameters<typeof Person>;
  ```

- ## ReturnType

  用于获取函数的`返回值`类型

  它接受一个函数类型作为参数，并返回该函数的返回值类型

  ```typescript
  function add(a: number, b: number): {a: string, b: number} {
      return {a: a.toString(), b};
  }
  
  // { a: string; b: number; }
  type AddResult = ReturnType<typeof add>;
  ```

- ## InstanceType

  用于获取`构造函数`的实例类型。

  接受一个构造函数类型作为参数，并返回该构造函数类型的`实例类型`

  ```typescript
  class Person {
      name: string;
      age: number;
  
      constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }
  }
  
  // Person
  type PersonInstance = InstanceType<typeof Person>;
  ```

- ## Uppercase

  用于将字符串类型的字母转换为`大写`

  ```typescript
  type Fruit = "apple" | "banana" | "orange";
  
  // "APPLE" | "BANANA" | "ORANGE"
  type FruitUppercase = Uppercase<Fruit>;
  ```

- ## Lowercase

  用于将字符串类型的字母转换为`小写`

  ```typescript
  type Fruit = "APPLE" | "BANANA" | "ORANGE";
  
  //  "apple" | "banana" | "orange"
  type FruitLowercase = Lowercase<Fruit>;
  ```

- ## Capitalize

  用于将字符串的`首字符`转换为`大写`

  ```typescript
  type Fruit = "apple" | "banana" | "orange";
  
  // "Apple" | "Banana" | "Orange"
  type FruitCapitalize = Capitalize<Fruit>;
  ```

- ## Uncapitalize

  用于将字符串的`首字符`转换为`小写`

  ```typescript
  type A = "ClientStart" | "MoreBtn" | "SkillBtn";
  
  // "clientStart" | "moreBtn" | "skillBtn"
  type B = Uncapitalize<A>;
  ```

  