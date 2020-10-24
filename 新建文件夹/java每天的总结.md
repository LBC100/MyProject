## 什么是标识符?
 1. 在java源程序当中凡是程序员有权利自己命名的单词都是标识符.
 2. 标识符可以标识什么元素?
       

## 数据类型
1. 数据类型的作用是什么?
  - 程序中有很多数据, 没一个数据都是有相关类型的, 不同数据类型的数据占用空间大小不同.
  - 数据类型的作用是指导JVM在运行程序的时候给该数据分配多大的内存空间
        
2. 基本数据类型
    - 基本数据类型包括四大类八小种
      - 第一类: 整数型
        byte, short, int, long
      - 第二类: 浮点型
        float, double
      - 第三类: 布尔型
        boolean
      - 第四类: 字符型
        char
    
3. 字符串"abc" 不属于基本数据类型, 属于"引用数据类型", 字符属于基本数据类型.
    - 字符串使用双引号 "abc"
    - 字符使用单引号 'a'

4. 基本数据类型    占用空间

		byte       	 1
		short         2
		int           4
		long          8
		float         4
		double        8
		boolean       1
		char          2
        
## 字符串 需要字符编码

## static 成员变量 会有默认值
    static int k;  // 默认为0

	局部变量不会有默认值
	    int k = 1000;

## 引用数据类型
  - 类
  - 接口
  - 数组

## java语言当中的整数型字面值有三中表示方式:
1. 十进制(默认的方式)
2. 八进制(以0开始, 如: 010 表示 8)
3. 十六进制(以0x开始, 如: 0x10 表示 16)

## 存在自动类型转换. 
- 小容量可以自动转换成大容量, 称为自动类型转换
- 如

		long x = 456;
		long y = 2147483648; // 报错, 因为默认是int类型, 但是这个数字已经超出int的数值范围了.
		long y = 2147483648L; // 正确
	
- 大容量转换成小容量, 需要进行强制类型转换, 强制类型转换可能会损失精度, 应当谨慎使用.
- 如

	    long x = 100L;
	    int y = x; // 编译报错
		
	    int y = (int)x; // 强制类型转换, 可能会损失精度
		
	    例子: 
	      long k = 2147473648L;
	      int e = (int)k;
	      System.out.println(e); // 损失精度严重, 结果是负数

## 当一个整数字面值没有超出byte, short, char的取值范围, 这个字面值可以直接赋值给byte, shrt, char类型的变量. 这种机制SUN允许了, 目的是为方便程序员编程
	- 大容量转换成小容量是需要添加强制类型转换, byte, short, char的 是特殊情况
	    byte b = 50; // 不报错, java 的特殊对待
	    byte b1 = 128; // 报错

## 关于浮点类型数据类型:
- float 单精度(4个字节)
- double 双进度(8个字节, 精度较高)

- double的精度太低(相对来说), 不适合做财务软件.
    SUN在基础se类库当中为程序员准备了精确度更高的类型, 
    这是一种引用数据类型, 不属于基本数据类型, 它是: java.math.BigDecimal

- 在java语音中, 所有的浮点型字面值(3.0), 
	默认被当做double类型来处理, 要想该字面值当做float类型来处理, 需要在字面值后面添加F/f
	
	    float f = 5.1 // 报错
	
	    解决方案
	      1.
	        float f = (float)5.1; // 强制类型转换
	
	      2.
	        float f = 5.1F; // 没有类型转换

## 注意:double和float在计算机储存的都是近似值

## 转换规则
1. 八种基本数据类型当中除布尔类型之外, 其他7种类型都可以互相转换
2. 容量排序
  byte < short, char < int < long < float < double
  - 注: 任何浮点类型不管占用多少个字节, 都比整数型容量大.
3. 大容量转换成小容量需要加类型转换符. 可能会损失精度, 所有谨慎使用
4. 当整数字面值没有超出byte, short, char的取值范围, 可以直接赋值.
5. byte, short, char混合运算的时候, 各自先转换成int类型再做运算.
6. 多种数据类型混合运算, 先转换容量最大的那种类型再做运算.
	- 如:
	
			double dd = 10 / 3; // 3.0
			dd = 10.0 / 3; // 3.333333333335


## 运算符
1. 算术运算符
	1. ++ 出现在变量后. 规则: 先做赋值运算, 再对变量中保存的值进行自加1.反之亦然
		
	        int a = 100;
	        int b = a ++;
	        // 先赋值再++.  a = 101,   b = 100
		
	2. 关系运算符
		
	3. 逻辑运算符
		    &   逻辑与    (两边的算子都是true, 结果才是true)
		    |   逻辑或    (两边的算子只要有一个true, 结果就是true)
		    !   逻辑非    (取反)
		    ^   逻辑异或  (两边的算子只要不一样, 结果就是true) 
		        (true ^ false)  true
		        (true ^ true)   false
		        (false ^ false) false
		
	   
	4. 什么时候使用短路与?
		- &&  短路与
		- ||  短路或
		- 后面的表达式不需要执行的时候.
		- 实际开发&&用得比较多


## 关于switch语句
1. switch语句也属于选择结构也是分支语句
2. switch语句的语法结构

		switch(int或String类型的字面值或变量) {
			case int或String类型的字面值或变量 :
				java语句
				break;
			case int或String类型的字面值或变量 :
				java语句
				break;
			default:
				java语句
				break;
		}


## 循环
1. for循环
	- 批量执行.
	- break; 被翻译为"中断/折断"
		- 终止循环语句
		- 如: 找数据, 找到后不需要继续执行.
	- 语法结构
	
			for(初始化表达式; 布尔表达式; 更新表达式) {
				循环体
			}				
		
2. while循环
3. do..while循环
	- 先循环一次再判断
	
			do {
				循环体;
			}while(布尔表达式);

## 循环控制语句
1. break; 被翻译为"中断/折断"
	- 终止循环语句
	- 如: 找数据, 找到后不需要继续执行.
2. continut; 继续/go on/下一个
	- 当前本次循环结束.
	-  不执行 continut 下面的代码, 跳过, 执行下一次循环.
		
## 方法
1. 方法定义在类体当中.
		
		public class test1 {
			  public static void main(String[] args) {
			
			    test1.testFn();
			  }
			
			  public static void testFn () {
			    System.out.println(123);
			  }
		}
 
## 方法在执行过程中, 在JVM中的内存四如何分配的?内存是如何变化的?
1. 方法只定义, 不调用, 是不会执行的, 并且在jvm中页不会给该方法分配"运行所属"的内存空间.只有在调用这个方法的时候, 才会动态的给这个方法分配所属的内存空间.
2. 在jvm内存划分有这样三块主要的内存空间(当然除了这三块之外还有其他的内存空间):
	- 方法区内存
	- 堆内存
	- 栈内存
3. 关于栈数据结构
	- 栈: stack, 是一种数据结构
	- 数据结构反应的是数据的存储形态.
	- 数据结构是独立的学科, 不属于任何编程语言的范畴. 只不过在大多数编程语言当中要使用数据结构.
4. 方法代码片段属于.class字节码文件的一部分, 字节码文件在类加载的时候, 将其放到了方法区当中. 所有jvm的三块主要的内存空间中方法区内存最先有数据. 存放了代码片段.
5. 代码片段虽然在方法区内存当中只有一份, 但是可以被重复调用. 每一次调用这个方法的时候, 需要给该方法分配独立的活动场所, 在栈内存中分配. (栈内存中分配方法运行的所属内存空)
	- 方法在调用的瞬间, 会给该方法分配内存空间, 会在栈中发生压栈动作, 方法执行结束之后, 给该方法分配的内存空间全部释放, 此时发生弹栈动作.
6. 局部变量在"方法体"中声明. 局部变量在运行阶段内存在栈中分配.

## 方法重载 overload
1. https://www.bilibili.com/video/BV1Rx411876f?p=98
2. 在程序当中功能相似的方法, 分别起了多个不同的名字, 这对于程序员来说, 调用方法的时候不方便, 程序员需要记忆更多的方法, 才能完成调用.
3. 参数的类型不同, 调用的方法不同. 此时区分方法不再依靠方法名了, 依靠的是参数的数据类型. https://www.bilibili.com/video/BV1Rx411876f?p=99
4. 什么条件满足之后构成了方法重载
	- 在同一个类当中
	- 方法名相同
	- 参数列表不同
		- 数量不同
		- 类型不同
		- 顺序不同
5. 方法重载和什么有关系?
	- 方法重载和方法名 + 参数类别有关系
	- 方法重载和返回值类型无关
	- 方法重载和修饰符列表无关
	

## 对象
1. new 在堆内存存储
2. java语言当中, 程序员只能通过"引用"去访问堆内存当中对象内部的实例变量.
3. 实例变量是一个对象一份, 100个对象有100份.
4. 对象创建没赋值, 会有默认值
5. https://www.bilibili.com/video/BV1Rx411876f?p=115 对象的创建
6. 实例变量必须先创建对象, 通过引用.的方式访问, 不能直接使用类名.的方式访问
	- System.out.println(Product.productNo); // 编译报错
7. **重点: 没有static关键字的方法被称为"实例方法"**
8. **重点: 没有static关键字的变量被称为"实例变量"**
9. **实例变量在堆内存的对象内部存储**, 所以访问改数据的时候, 必须先创建对象, 通过引用方式访问.

	
## 对象封装
1. 封装的步骤
	- 所有属性私有化, 使用private关键字进行修饰, 修饰后所有数据只能在本类访问.
	- 对外提供简单的操作入口.
		- 对外提供两个公开的方法, 分别是set方法和get方法.
	- get, set方法命名规范.
		
			public void setAge(int a) {
				age = a;
			}
			public int getAge() {
				return age;
			}

## static关键字 单词翻译为 静态的
1. **有static关键字修饰的方法怎么调用: 类名.方法名(实参);**
	- 有stati方法是绑在类上的.
2. **没有static关键字修饰的方法怎么调用: 引用.方法名(实参);**
	- 没有static方法是绑在引用上的.
3. static方法调用不上对象去调用, 是一个类名去调用, 执行过程中没有"当前对象"(this). 因此static方法访问不了实例变量.
4. static 修饰的变量为静态变量. 中国人类, 国籍的字段是共用的, 可以使用 static修饰.
5. 静态变量
	- 静态变量在类加载的时候初始化, 不需要创建对象, 内存就开辟了.
	- 静态变量存储在方法区内存当中.

## 静态代码块
1. 可以使用static 关键字来定义"静态代码块"
	- 语法格式
	
			static {
				java语句
			}
2. 静态代码块在类加载时执行, 并且只执行一次.
3. 静态代码块在一个类中可以编写多个, 并且遵循自上而下的顺序依次执行.
4. **静态代码块的作用是什么? 怎么用? 什么时候用?**
	- 1

## 什么时候成员变量声明为实例变量呢?
- 所有对象都有这个属性, 并且这个属性的值会随着对象的变化而变化(不同对象的这个属性具体的值不同)

## 什么时候成员变量声明为静态变量呢?
- 所有对象都有这个属性, 并且这个属性的值是一样的, 建议定义为静态变量, 节省内存的开销. 
	- 静态变量在类加载的时候初始化, 内存在方法区中开辟. 访问的时候不需要创建对象, 直接使用"类名.静态变量名"的方式访问.




## java类中的构造方法
1. 构造方法的方法名必须和类名一致.
2. 构造方法的作用?
	- 构造方法存在的意义是, 通过构造方法的调用, 可以创建对象.
	- **创建对象的同时, 初始化实例变量的内存空间.(给实例变量赋值)**
3. 构造方法怎么调用?
	- 普通方法是这样调用的: 方法修饰符中有static的时候: 类名.方法名(实参列表); 方法没有static的时候: 引用.方法名(实参列表);
	- new 构造方法(实参列表);  如: new User();
	- 构造方法调用执行之后, 有返回值吗?
		- 每一个构造方法实际上执行结束之后都有返回值, 并且返回值类型是构造方法所在类的类型.
	- 当一个类中没有构造方法, 系统会默认有一个构造方法.
	- **当一个类显示的将构造方法定义出来了, 那么系统则不再默认为这个类提供缺省构造器. 建议开发找那个手动的为当前类提供无参构造方法.因为无参数构造方法太常用了.**
	- 构造方法支持重载机制.
	



## 对象和引用的概念?
1. **对象**: 目前在使用new运算符**在堆内存中开辟的内存空间**称为对象.
2. **引用**: 是一个变量, 不一定是局部变量, 还可能是成员变量. 引用保存了内存地址, 指向了堆内存当中的对象.
3. 所有访问实例相关的数据, 都需要通过"引用."的方式访问, 因为只有通过引用才能找到对象.
4. 只有一个空的引用, 访问对象的实例相关的数据会出现**空指针异常**.

## 关于java语言当中的this关键字:
1. this是一个关键字, 翻译为: 这个
2. this是一个引用, this是一个变量, **this变量中保存了内存地址指向了自身**, this存储在JVM堆内存java对象内部.
3. 创建100个java对象, 每一个对象都有this, 也就说有100个不同的this.
4. this可以出现在"实例方法"当中, this指向当前正在执行这个动作的对象.
5.  this出现在实例对象当中.
6. 构造方法调用构造方法. **实现不传参则使用默认值的功能**. this() 只能出现在构造方法的第一行
		
		public Date(int y, int m, int d) {
			this.y = y;
			this.m = m;
			this.d = d;
		}
		public Date() {
			this(1970, 1, 1); // 实现不传参则使用默认值的功能.
		}


## "this."什么时候不能省略?
1. 用来区分局部变量和实例变量的时候 this 不能省略.

## 对象总结
		class 类名 {
			静态代码块
			实例代码块
			
			静态变量
			实例变量
			
			构造方法
			
			静态方法
			实例方法
		}
		
## 继承
1. 	继承是面向对象的三大特征之一, 三大特征分别是: 封装, 继承, 多态
2. 继承"基本"的作用是: 代码复用. 但是继承最"重要"的作用是: 有了继承才有了以后"方法的覆盖"和"多态机制".
3. 继承语法格式

		[修饰符列表] class 类名 extends 父类名 {
		
		}
4. java 语言当中只支持单继承, 一个类不能同时继承很多类, 只能继承一个类.
5. 关于继承中的一些术语:
	- 父类, 基类, 超类, superclass
	- 子类, 派生类, subclass
6. 在java语言当中子类继承父类都继承哪些数据呢?
	- 私有的不支持继承
	- 构造方法不支持继承
	- 其他数据都可以继承
7. 虽然java语言当中只支持单继承, 但是一个类也可以间接继承其他类.
8. java语言中假设一个类没有显示的继承任何类, 该类默认继承javaSE库当中提供的java.Object类.
9. 继承父类后, 子类的构造方法第一句代码是 super()
		
		class CreditAccount extends Account {
			public CreditAccount () {
				super(); // Account 的构造方法
			}
		}


## 方法重写
1. 什么时候使用方法重写?
	- 当父类中的方法已经无法满足当前子类的业务需求, 子类有必要将父类继承过来的方法进行重写编写, 这个重写编写的过程称为重写/方法覆盖.
	
2. 什么条件满足后发生方法重写?
	- 方法重写发生在具有继承关系的父子类之间.
	- 方法名相同, 方法名相同, 形参列表相同.
	- 访问权限不能更低, 可以更高.
	- 抛出异常可以更多, 不能更少.
3. 建议方法重写的时候复制粘贴.
4. 注意:
	- 私有方法不能继承, 所以不能覆盖.
	- 构造方法不能继承, 所以不能覆盖.
	- 覆盖只针对方法, 不谈属性.

## 多态
1. 关于多态中涉及到的几个概念:
	- 向上转型(upcasting)
		- 子类型 --> 父类型
		- 又被称为: 自动类型转换.
	- 向下转型(downcasting)
		- 父类型 --> 子类型
		- 又被称为: 强制类型转换. (需要加强制类型转换符)
2. **无论是向上转型还是向下转型, 两种类型之间必须要有继承关系. 没有继承关系, 程序是无法编译通过的.**
3. 多态语法机制
	- Animal和Cat之间存在继承关系, Animal是父类, Cat是子类.
	- new Cat() 创建的对象类型是Cat, a2这个引用的数据类型是Animal, 可见它们进行了类型转换.
	- 子类型转换成父类型, 称为向上转型.
	- 无论Cat类有没有重写move方法, 运行运行阶段一定调用的是Cat对象的move方法, 因为底层真实对象就是Cat对象.

## java程序永远分为编译阶段和运行阶段. 
1. 编译阶段编译器检查a2这个引用的数据类型为Animal, 由于Animal.class字节码当中有move()方法, 所有编译通过了. 这个过程我们称为静态绑定, 编译阶段绑定.
2. 在程序运行阶段, JVM堆内存当中真实创建的对象是Cat对象, 那么以下程序在运行阶段一定会调用Cat对象的move()方法, 此时发生了程序的动态绑定, 运行阶段绑定.
3. **父类型引用指向子类型对象这种机制导致程序存在编译阶段绑定和运行阶段绑定两种不同形态/状态, 这种机制可以成为一种多态语法机制.**
4. 编译阶段编译器检查到a2的类型是Animal类型, 从Animal.class字节码文件中查找catchMouse()方法, 最终没有找到该方法, 导致静态绑定失败, 没有绑定成功, 也就是说编译失败了. 别谈运行了.
5. https://www.bilibili.com/video/BV1Rx411876f?p=153

## 向下转型/downcasting/强制类型转换
1. 向下转型也需要两种类型之间必须有继承关系. 不然编译报错. 强制类型转换需要加强制类型转换符.
2. 什么时候需要使用向下转型呢?
	- 当调用的方法是子类型中特有的, 在父类当中不存在, 必须进行向下转型.
	- Cat c2 = (Cat)a2;
	- 动物类 "鸟儿" 向下转型为 "猫". 报错
	
			// 运行报错
			Animal a3 = new Bird();
			Cat c3 = (Cat)a3;


## instanceof运算符怎么用?
1. 语法格式
	- (引用 instanceof 数据类型名)
2. 以上运算符的执行结果类型是布尔类型, 结果可能是true/false
3. 关于运算结果true/false
	- 假设(a instanceof Animal)
		- true表示: a这个引用指向的对象是一个Animal类型.
		- false表示: a这个引用指向的对象不是一个Animal类型.
4. java 规范中要求: 在进行强制类型转换之前, 建议采用instanceof运算符进行判断 避免ClassCastException异常发生.


## 多态什么时候用?
1. 减低耦合度. Master主人类面向的是一个抽象的Pet, 不再面向具体的宠物.
2. 提倡面向抽象编程, 不要面向具体编程. 面向抽象编程的好处是, 耦合度低, 拓展力强
3. 能使用多态尽量使用多态.
4. 父类型引用指向子类型对象.
5. https://www.bilibili.com/video/BV1Rx411876f?p=154

## 关于java语言当中final关键字
1. final是一个关键字, 表示最终的, 不可变的
2. final修饰的类无法被继承
3. final修饰的方法无法被覆盖
4. final修饰的变量一旦赋值之后, 不可重新赋值
5. final修饰的实例变量?
	 - 必须手动赋值.
6. final修饰的引用?
	- final修饰的引用, 一旦指向某个对象之后, 不能再指向其他对象, 那么指向的对象无法被垃圾回收器回收.
7. **常量**
	- public static final 类型 常量名 = 值;
	- java规范找那个要求所有常量的名字全部大写, 每个单词之间使用下划线连接

## 修饰符
		public		表示公开的, 在任何位置都可以访问
		protected	同包, 子类
		缺省		   同包
		private		表示私有的, 只能在本类中访问
		
## 抽象类 (面向抽象编程)
1. 抽象类无法实例化的, 无法创建对象的, 所以抽象类是用来被子类继承的.
2. 什么是抽象类?
	- 类和类之间具有共同特征, 将这些共同特征提取出来, 形成的就是抽象类.
3. 语法

		[修饰符列表] abstract class 类名 {
			类体;
		}
4. 抽象类虽然无法实例化, 但是抽象类有构造方法, 这个构造方法是供子类使用的.
5. **重要结论: 一个非抽象的类继承抽象类, 必须将抽象类中的抽象方法实现了(重写).**
6. 多态会用到抽象类.

## 抽象方法
1. 抽象方法表示没有实现的方法, 没有方法体的方法.
	- 特点1: 没有方法体
	- 特点2: abstract 关键字修饰

			如:
			pulic abstract void doSome();
2. 抽象类中不一定有抽象方法, 抽象方法必须出现在抽象类中

## 接口在开发中的作用
1. 接口在开发中的作用, 类似于多态在开发中的作用.
2. 多态: 面向抽象编程, 不要面向具体编程. 降低程序的耦合度. 提高程序的拓展力.
3. 面向接口编程.
4. 餐厅的多态例子: https://www.bilibili.com/video/BV1Rx411876f?p=514		
		
## 接口
1. 接口也是一种引用数据类型.
2. 接口是完全抽象的.(抽象类是半抽象的), 或者也可以说接口是特殊的抽象类.
3. 接口怎么定义, 语法是什么?
	
		[修饰符列表] interface 接口名 {}
4. 接口支持多继承, 一个接口可以继承多个接口
5. 接口中只包含两部分内容, 一部分是: 常量. 一部分是: 抽象方法. 接口中没有其他内容了. 只有以上两部分
6. 接口所有的元素都是public修饰的
7. 接口中的抽象方法定义是: public abstract 修饰符可以省略.
8. 接口中的常量的public static final 可以省略


## 接口实现
1. 类和类之间叫做继承, 类和接口之间叫做实现. 也可以将"实现"看做"继承"
2. 实现使用implements关键字完成
3. 非抽象类继承接口必须将接口中所有的方法重写(实现)
4. 一个类可以同时实现多个接口.
5. **一个类同时实现多个接口后, 调用其他接口中的方法, 你需要转型(接口转型)**

## 继承和接口都存在的话, 代码应该怎么写?
1. extends 关键字在前, implements 关键字在后


## toString
1. toString() 方法的作用是什么?
	- toString() 方法设计的目的是: 通过调用这个方法可以将一个"Java对象"转换成"字符串表示形式"


## 关于object 类中的equals方法
1. sun公司设计equals 方法的目的是什么?
	- equals方法是判断两个对象是否相等的. 以后编程的过程当中, 都要通过equals方法来判断两个对象是否相等. 
2. 判断两个Java对象是否相等, 不能使用"==", 因为"=="比较的是两个对象的内存地址.
	- 在object类中的equals方法当中, 默认采用的是"=="判断两个Java对象是否相等. 而"=="判断的是两个Java对象的内存地址, 我们应该判断两个Java对象的内容是否相等. 所以老祖宗的equals方法不够用, 需要子类重写equals.
3. **String类以及重写了equals方法, 比较两个字符串不能使用==, 必须使用equals. equals是通用的**
	- String 已经重写toString()方法了.
4. **大结论**
	- Java中基本数据类型比较是否相等, 使用==
	- Java中所有的引用数据类型统一使用equals方法来判断是否相等.
	- **以后所有类的equals方法需要重写**


## finalize()方法
1. 这个方法不需要程序员手动调用, JVM的垃圾回收器负责调用这个方法.
2. finalize() 方法实际上是sun公司为Java程序员准备的一个时机, 垃圾销毁时机. 如果希望在对象销毁时机执行一段代码的话, 这段代码要写到finalize() 方法当中.
3. 重写finalize() 方法
		
		protected void finalize() throws Throwable {
			System.out.println("即将被销毁!")
		}
4. **提示: **Java中的垃圾回收器不是轻易启动的, 垃圾太少, 或者时间没到, 种种条件下, 有可能启动, 也有可能不启动.
5. 这个方法在新版本Java中过时了

## 匿名内部类
1. 什么是内部类?
	- 内部类: 在类的内部又定义了一个新的类. 被称为内部类
2. 内部类的分类:
	- 静态内部类: 类似于静态变量
	- 实例内部类: 类似于实例变量
	- 局部内部类: 类似于局部变量
3. 使用内部类编写的代码, 可读性很差, 能不用尽量不用
4. 语法
	
		new Compute() {
			public int sum (int a, int b) {};
		}
5. 不建议使用匿名内部类. 可读性差, 太复杂, 太乱, 不可复用

## 数组
1. Java语言中的数组是一种引用数据类型. 不属于基本数据类型. 数组的父类是object
2. 数组因为是引用类型, 所有数组对象是存储在堆内存当中.
3. 数组当中如果存储的是"Java对象"的话, 实际上存储的是对象的"引用"(内存地址)
4. **数组一旦创建, 在Java中规定, 长度不可变**
5. **Java中的数组要求数组中元素的类型统一**
6. 数组在内存方面存储的时候, 数组中的元素内存地址是连续的
7. 所有的数组都是拿"首元素的内存地址"作为整个数组对象的内存地址
8. 数组的优点和缺点
	- 优点: 查询/查找/检索 某个下标的元素时效率极高. 可以说是查询效率最高的一个数据结构
		- 为什么检索效率高?
			- 第一: 每一个元素的内存地址在空间存储上是连续的
			- 第二: 每一个元素类型相同, 所以占用空间大小一样
			- 第三: 知道第一个元素内存地址, 知道每一个元素占用空间的大学, 又知道下标, 所以通过一个数学表达式就可以计算出某个下标上元素的内存地址. 直接通过内存地址定位元素, 所以数组的检索效率是最高的
			- 数组中存储100个元素, 或者存储100万个元素, 在元素查询方面, 效率是相同的
	- 缺点: 
		- 由于保证数组中每个元素的内存地址连续, 所以在数组上随机删除或者增加元素的时候, 效率较低, 因为随机增删元素会涉及到后面元素统一向前或者向后位移的操作
		- 数组不能存储大数据量. 因为很难在内存空间上找到一块特别大的连续的内存空间
9. 数组的最后一个元素的增删效率没有影响
10. 语法格式

		int [] array1;
		double [] array2;
		boolean [] array3;
		String[] array4;
		Object[] array5;
11. 初始化数组
	- 静态初始化语法
			
			int[] array = {100, 200, 300}
	- 动态初始化语法

			// 初始化一个5个长度的int类型数组, 每个元素默认值0
			int[] array = new int[5]; // 这里的5表示数组的元素个数. 
			
			String[] names = new String[6]; // 初始化6个长度的String类型数组, 每个元素默认值null
									

## 数组中存储的类型为引用数据类型
1. 利用多态, 数组可以放不同的对象


## 关于数组的拓容
1. 先新建一个大容量的数组, 然后将小容量的数组汇总的数据一个一个拷贝到大数组当中.
2. 拷贝
	- System.arraycopy();
2. 结论: 数组拓容效率较低. 因为涉及到拷贝的问题. 所以在以后的开发中请注意: 尽可能少的进行数组拷贝
	
## 字符串频繁拼接, 会有什么问题?
1. 因为Java中字符串是不可变的, 每一次拼接都会产生新字符串. 这样会占用大量的方法区内存. 造成内存空间浪费.


		String s = "abc";
		s += "hello";
		以上代码导致在方法区字符串常量池中创建了3个对象
		"abc"
		"hello"
		"abchello"
2. 如果需要进行大量字符串的拼接操作, 建议使用JDK中自带的:
	- java.lang.StringBuffer  	是线程安全的
	- java.lang.StringBuilder 	是非线程安全的

## 包装类
1. 8种基本数据类型对应8中包装类
	
		基本数据类型			包装类型
		------------------------------
		byte					java.lang.Byte (父类Number)
		short				java.lang.Short (父类Number)
		int					java.lang.Integer (父类Number)
		long					java.lang.Long (父类Number)
		float				java.lang.Float (父类Number)
		double				java.lang.Double (父类Number)		boolean				java.lang.Boolean (父类Object)
		char				java.lang.Character (父类Object)
2. 装箱, 拆箱.
	- 基本数据类型 - (转换为) -> 引用数据类型 (装箱)
	- 将引用数据类型 -- (转换为) -> 基本数据类型 (拆箱)
3. 在JDK1.5之后, 支持自动拆箱和自动装箱了
	- Integer x = 100; // 自动装箱
	- int y = x; // 自动拆箱
	- 例子
		- Integer x = 100; System.out.println(z + 1); // 直接加法运算.  自动拆箱
4. Integer面试题
	- Java中为了提高程序的执行效率, 将[-128到127]之间所有的包装对象提前创建好, 放到了一个方法区的"整数型常量池"当中了, 目的是只有用这个区间的数据不需要在new了, 直接从整数型常量池当中取出来.
		
		Integer x = 127;
		Integer y = 127;
		System.out.println(a == b); true

## 日期 Date
1. 获取系统当前时间 (精确到毫秒的系统当前时间)
	- Date nowTime = new Date();
2. 日期格式化

		Date nowTime = new Date(); 
		SimpleDateFormat sdf = new SimpleDateFormat("yyy-MM-dd HH:mm:ss SSS");  
		String nowTimeStr = sdf.format(nowTime);

## 数字格式化
1. 加入千分位. 如1,234.56

## 异常处理的方式
1. 在方法声明的位置上, 使用throws关键字, 抛给上一级.
2. 使用try.. catch语句进行异常捕捉
3. 打印异常堆栈信息
	- e.printStackTrace()
4. 异常在实际开发中的作用
	- https://www.bilibili.com/video/BV1Rx411876f?p=655

## finally 面试题
1. 代码

		m(); // 100
		public stati int m() {
			int i = 100;
			try {
				return i;
			} finally {
				i++;
			}
		}
2. 反编译后的代码

		public static int m() {
			int i =100;
			int j = i;
			i++;
			return j;
		}
	
		
3. 结论: Java语法规则不能破坏
	- 方法体中的代码必须遵循自上而下顺序依次逐行执行 (亘古不变的语法!)
	- retrun 语句一旦执行, 整个方法必须结束





## 精度高的数据类型 BigDecimal

## 枚举类型
1. https://www.bilibili.com/video/BV1Rx411876f?p=628

## 集合
1. 在Java中集合分为两大类
	- 单个方式存储元素:
		- 以单个方式存储元素, 这一类集合中超级父接口: java.util.Collection;
	- 键值对方式存储元素:
		- 以键值对方式存储元素, 这一类集合中超级父接口: java.util.Map;
2. 集合继承结构图
	- https://www.bilibili.com/video/BV1Rx411876f?p=664
	- https://www.bilibili.com/video/BV1Rx411876f?p=665 
3. 例子
	
		Collection c = new ArrayList();
		c.add(1200);
		c.add(3.14); // 自动装箱


## 关于集合 遍历/迭代
1. 遍历方式/迭代方式, 是所有Collection通用的一种方式. 在Map集合中不能用. 在所有Collection以及子类中使用.
2. 迭代器最初并没有指向第一个元素.
3. 遍历/迭代

		while(it.hasNext()) {
			Object obj = itnext();
			system.out.println(obj);
		}
4. HashSet
	- 无序, 不可重复
5. 放在集合里的元素要重写equals方法
6. 当集合结构发生了改变, 迭代器需要重新获取. 否则会出现异常
	- 在迭代集合元素的过程中, 不能调用集合对象的remove方法删除元素: c2.remove(o)
	- 可以使用迭代器来删除. it.remove();

## List
1. 特点
	- 有序 List集合中的元素有下标
	- 可重复
	- 特有遍历方式
			
			for(int i = 0; i < list.size(); i++) {
				Object obj = list.get(i);
			}
2. 指定对象第一次出现处的索引
	- myList.indexOf("A");
	- myList.lastIndexOf 最后一次出现处的索引
3. 删除指定位置的元素
	- remove();

## HashSet
1. 无序, 不可重复

## TreeSet 集合 (可排序集合)
1. 无序不可重复的, 但是存储的元素可以自动按照大小顺序排序
2. Set<String> strs = new TreeSet<>();

## 链表数据结构
1. 基本的单元是节点node 
	- 单向链表 https://www.bilibili.com/video/BV1Rx411876f?p=684
2. 对于单链表来说, 任何一个节点node都有两个属性:
	- 第一: 存储的数据
	- 下一节点的内存地址
3. 链表优缺点
	- 优点: 随机增删元素较高 (因为增删元素不涉及到大量元素位移)
	- 缺点: 查询效率较低, 每一次查某个元素的时候都需要从头节点开始往下遍历
4. Java的链表是双向链表

## 泛型
1. 使用泛型 List<Animal> 之后, 表示List 集合中只允许存储Animal类型的数据. 使用泛型之后, 每一次迭代返回的数据都是Animal类型.
2. 泛型的优缺点
	- 优点
		- 第一: 集合中存储的元素类型统一了.
		- 第二: 从集合中取出的元素类型是泛型指定的类型, **不需要进行大量的"向下转型"**
	- 缺点
		- 导致集合中存储的元素缺乏多样性!
3. 大多数业务中, 集合中的类型还是统一的.
4. 自动类型推断机制 (又称为钻石表达式)
	- List<Animal> myList = new ArrayList<>();

## foreach
1.   语法
		
		for(int data : arr) {
			System.out.println(data);
		}
2. 缺点: 没有下标


## Map
1. Map接口中常用方法:
	- V put(K key, V value) 向Map集合中添加键值对
	- V get(Object key) 通过key获取value
	- void clear() 清空Map集合
	- boolean containsKey(Object key) 判断Map中是否包含某个key
	- boolean containsValue(Object value) 判断Map中是否包含某个value
		- **contains方法底层调用的都是equals进行对比的, 所以自定义的类型需要重新equals方法**
	- boolean isEmpty() 获取Map集合中元素个数是否为0
	- Set<K> keySet() 获取Map集合所有的key (所有的键是一个set集合)
	- V remove(Object key) 通过key删除键值对
	- int size() 获取Map集合中键值对的个数
	- Collection<V> values() 获取Map 集合中所有的value, 返回一个Collection
	- Set<Map.Entry<K, V>> entrySet() 将Map集合转换成Set集合
	- https://www.bilibili.com/video/BV1Rx411876f?p=696
2. 语法
	
		Map <Integer, String> map = new HashMap<>();
		map.put(1, "张三");

3. Map集合的遍历
	- 第一种: 获取所有key, 通过遍历key, 来遍历value
			
			for(Integer key : keys) {
				map.get(ket);
			}
	- 第二种: 这种方式比较高, 因为获取key和value都是直接从node对象获取的属性值.
			
			
		    Map<Integer, String> map = new HashMap<>();
		
		    map.put(1, "张三");
		    map.put(2, "李四");
		
		    Set<Map.Entry<Integer, String>> set = map.entrySet();
		
		    // 获取迭代器
		    Iterator<Map.Entry<Integer, String>> it2 = set.iterator();
		    while (it2.hasNext()) {
		      Map.Entry<Integer, String> node = it2.next();
		      Integer key = node.getKey();
		      String value = node.getValue();
		
		      System.out.println(key + "=" + value);
		    }
		    
		    // 或者 用 foreach
		        for (Map.Entry<Integer, String> node : set) {
			      System.out.println(node.getKey() + "=" + node.getValue());
			    }

## HashMap 集合
1. 哈希表是一个数组和单向链表的结合体
2. 数组: 在查询方面效率很高, 随机增删方面效率很低. 单向链表: 在随机增删方面效率较高, 在查询方面效率很低. 哈希表将以上的两种数据结构融合在一起, 充分发挥它们各自的优点
3. HashMap集合的key特点
	- 无序, 不可重复
	- 为什么无序? 因为不一定挂到哪个单向链表上.
	- 不可重复是怎么保证的? equals方法来保证 HashMap集合的key不可重复
4. https://www.bilibili.com/video/BV1Rx411876f?p=701
5. 结论: 放在HashMap 集合key部分的, 以及放在HashSet集合中的元素, 需要同时重写hashCode方法和equals方法
6. 在JDK8之后, 如果哈希表单向链表中元素超过8个, 单向链表这种数据结构会变成红黑树数据结构. 当红黑树上的节点数量小于6时, 会重新把红黑树变成单向链表数据结构. 初始容量是16, 加载因子是0.75


## Properties 是一个Map 集合
1. Properties 的key和value都是String类型. Properties 被称为属性类对象.

## TreeSet 集合
1. TreeSet 集合中的元素: 无序不可重复, 但是可以按照元素的大小顺序自动排序. 称为: 可排序集合.
2. 放到TreeSet 或者 TreeMap集合 key 部分的元素要想做到排序, 包括两种方式:
	- 第一种: 放在集合中的元素实现java.lang.Comparable接口
	- 第二种: 在构造TreeSet 或者 TreeMap集合 的时候给它传一个比较器对象

## 自平衡二叉树
1. 比较器 https://www.bilibili.com/video/BV1Rx411876f?p=714
		
## IO流
1. 什么是IO?
	- I  : Input
	- O : Output
	- 通过IO可以完成硬盘文件的读和写
2. IO流的分类
	- 按照流的方向进行分类
		- 往内存中去, 叫做输入. 读
		- 从内存中出来, 叫做输出. 写
	- 有的按照字节的方式读取数据, 一次读取1个字节byte, 等同于一次读取8个二进制位. 这种流失万能的, 什么类型的文件都可以读取. 包括: 文件文件, 图片, 声音文件, 视频文件.
	- 有点流是按照字符的方式读取的, 一次读取一个字符, 这种流是为了方便读取普通文本文件而存在的, 这种流不能读取: 图片, 声音, 视频 等. 如: txt文件
	- 流的分类: 输入流, 输出流, 字节流, 字符流
3. Java IO流 四大家族
	- java.io.InputStream    字节输入流
	- java.io.OutputStream  字节输出流
	- java.io.Reader           字符输入流
	- java.io.Writer             字符输出流
	- 四大家族的首领都是抽象类 (abstract class)
	- **注意: 在Java中只要"类名"以Stream结尾的都是字节流. 已"Reader/Writer"结尾的都是字符流**
4. 特点
	- 所有流都实现了: java.io.Closeable 接口, 都是可关闭的, 都有close() 方法. 养成好习惯, 用完流一定要关闭.
	- 所有的输出流都实现了: java.io.Flushable 接口, 都是可刷新的, 都有flush() 方法. 养成好习惯, 输出流在最终输出之后, 一定要记得flush() 刷新一下. 这个刷新
表示将 管道 当中剩余未输出的数据强行输出完 (清空管道), 刷新的作用就是清空管道.
5. java.io包下需要掌握的流有16个
	- 文件专属
		- FileInputStream;
			- https://www.bilibili.com/video/BV1Rx411876f?p=727
			- https://www.bilibili.com/video/BV1Rx411876f?p=729
		- FileOutputStream;
			- https://www.bilibili.com/video/BV1Rx411876f?p=733
		- FileReader;
		- FileWriter;
	- 转换流 (将字节流转换成字符串)
		- InputStreamReader;
		- OutputStreamWriter;
	- 缓冲流
		- 使用以下流的时候不需要自定义char数组, 或者说不需要自定义byte数组. 自带缓冲.
		- BufferedReader;
		- BufferedWriter;
		- BufferedInputStream;
		- BufferedOutputStream;
	- 数据流
		- DataInputStream;
		- DataOutputStream;
	- 标准输出流
		- PrintWriter;
		- PrintStream
	- 对象流
		- ObjectInputStream;
		- ObjectOutputStream;

6. **节点流 / 包装流**
	- 当一个流的构造方法中需要一个流的时候, 这个被传进来的流叫做: 节点流. 
	- 外部负责包装的这个流叫做: 包装流, 还有一个名字叫做: 处理流.
	- 对于包装流来说, 只需要关闭最外层流就行, 里面的节点流会自动关闭.
	
## 文件复制
1. https://www.bilibili.com/video/BV1Rx411876f?p=734	

## File 文件和目录路径名的抽象表示形式
1. 表现形式 https://www.bilibili.com/video/BV1Rx411876f?p=743
	- C : \Drivers 这是一个File对象
2. 常用方法
	-  https://www.bilibili.com/video/BV1Rx411876f?p=745
	
## 序列化和反序列化
1. 序列化: 拆分对象.  反序列化: 组装对象.
2. 参与序列化和反序列化的对象, 必须实现Serializalble 接口
3. transient 关键字表示游离的, 不参与序列化.
	- private transient String name; // 不参与序列化操作
4. 序列号版本号的作用
	- 如果不手动写序列号, 会自动生成序列号.
	- 如果源码改动序列号也会改变
	- **最好手动填写序列号版本号, 这样即使改变源码也可以反序列化**
	- privat static final long serialVersionUID = 3429873294;

## 多线程
1. 什么是进程? 什么是线程?
	- 进程是一个应用程序 (1个进程是一个软件)
	- 线程是一个进程中的执行场景/执行单元. 一个进程可以启动多个线程
2. 注意
	- 进程A和进程B的内存独立不共享.
	- 在Java中线程A和线程B
		- 线程A和线程B, 堆内存和方法区内存共享. 但是栈内存独立, 一个线程一个栈.
3. 对于多核的CPU电脑来说, 真正的多线程并发是没问题的. 单核的CPU不能够做到真正的多线程并发.
4. Java语言中, 实现线程有两种方式
	- 第一种: 编写一个类, 直接继承java.lang.Thread, 重写run方法
		- MyThread myThread = new MyThread(); myThread.start();
		- https://www.bilibili.com/video/BV1Rx411876f?p=762
	- 第二种: 编写一个java.lang.Runnable接口, 实现run方法
			
			public class MyRunnable implements Runnable {
				public void run() {
				}
			}
			
			// 创建线程对象
			Thread t = new Thread(new MyRunnable());
			// 启动线程
			t.start();
5. 线程图
	 - t.run() 单线程
	 - t.start() 启用多线程. 分配栈空间, 瞬间完成.
	 - https://www.bilibili.com/video/BV1Rx411876f?p=763
6. 线程的生命周期
	- https://www.bilibili.com/video/BV1Rx411876f?p=766
	- 新建状态
	- 就绪状态
	- 运行状态
	- 阻塞状态
	- 死亡状态
7. 设置线程
	- 设置线程名字: t.setName(""ttt");
	- 获取线程名字: String tName = t.getName();
8. 获取当前线程对象
	- Thread currentThread = Thread.currentThread();
9. 休眠 线程
	- sleep. Thread.sleep(1000);
	- 叫醒一个睡眠的线程
		- t.interrupt();
		- 这种终断睡眠的方式, 利用了Java的异常机制
10. **怎么合理的终止一个线程的执行**
	- 打一个布尔标记. https://www.bilibili.com/video/BV1Rx411876f?p=774
11. 线程合并
	- https://www.bilibili.com/video/BV1Rx411876f?p=779

## 线程安全
1. 当多线程并发的环境下, 有共享数据, 并且这个数据还会被修改, 此时就存在线程安全问题, 怎么解决这个问题?
	- 线程排队执行. 这种机制被称为: 线程同步机制.
	- synchronized.  https://www.bilibili.com/video/BV1Rx411876f?p=786
	- synchronized.  https://www.bilibili.com/video/BV1Rx411876f?p=788
2. synchronized 的写法
	- 第一种: 同步代码块
		
			// 灵活
			synchronized (线程共享对象) {
				同步代码块
			}
	- 第二种: 在实例方法上使用synchronized
		- 表示共享对象一定是this, 并且同步代码块是整个方法体
	- 第三种: 在静态方法上使用synchronized, 表示类锁.
		- 保证静态变量安全
3. synchronized 出现在静态方法上是找类锁.
	- 类锁只有一把.
4. **synchronized 面试题**
	- https://www.bilibili.com/video/BV1Rx411876f?p=794
	- https://www.bilibili.com/video/BV1Rx411876f?p=795
	- https://www.bilibili.com/video/BV1Rx411876f?p=796
	

## 开发中应该怎么解决线程安全问题
1. 尽量使用局部变量代替"实例变量"和"静态变量"
2. 如果必须是实例变量, 那么可以考虑创建多个对象, 这样实例变量的内存就不共享了. (一个线程对应一个对象, 就没有数据安全问题了)
3. 如果不能使用局部变量, 对象也不能创建多个, 这个时候就只能选择synchronized 了. 线程同步机制

## 守护进程
1. https://www.bilibili.com/video/BV1Rx411876f?p=801

## 定时任务
1. https://www.bilibili.com/video/BV1Rx411876f?p=803


## 死锁
1. synchronized 最好不要嵌套使用.
2. https://www.bilibili.com/video/BV1Rx411876f?p=797




## 回顾
1. https://www.bilibili.com/video/BV1Rx411876f?p=633


## 栈
1. https://www.bilibili.com/video/BV1Rx411876f?p=92
2. 栈数据结构存储数据的特点是:
	- 先进后出
	- 后进先出

	
## 队列
1. 先进先出
