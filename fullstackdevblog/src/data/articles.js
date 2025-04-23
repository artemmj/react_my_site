export const articles = [
    {
        id: 8,
        link: "html/python_basics.html",
        title: "Python. База",
        date: "19 Апреля 2025",
        tags: "Python",
        short_content: "Переменные, арифметические операции, условные конструкции, циклы, фукнции, упаковка и распаковка, лямбды, преобразования типов, декораторы try..except, строки, ООП, списки, кортежи, словари, множества, List Comprehension",
        data_category: "python",
        content: `<div class="list-headings">
<ul>
    <li><a href="#intro">Вступление</a></li>
    <li><a href="#vars">Переменные, области видимости</a></li>
    <li><a href="#arifmet_oper">Арифметические операции</a></li>
    <li><a href="#conditional_expressions">Условные выражения</a></li>
    <li><a href="#if_cons_cycles">Условная конструкция if, циклы</a></li>
    <li><a href="#funcs">Функции</a></li>
    <li><a href="#packing">Упаковка и распаковка</a></li>
    <li><a href="#lambda">Лямбда-выражения</a></li>
    <li><a href="#retypes">Преобразование типов</a></li>
    <li><a href="#decorators">Декораторы</a></li>
    <li><a href="#try-except">try..except</a></li>
    <li><a href="#strings">Строки</a></li>
    <li><a href="#oop">ООП</a></li>
    <li><a href="#lists">Списки (list), срезы</a></li>
    <li><a href="#tuples">Кортежи (tuple)</a></li>
    <li><a href="#dicts">Словари (dict)</a></li>
    <li><a href="#sets">Множества (set)</a></li>
    <li><a href="#list_comprehension">List Comprehension</a></li>
</ul>
</div>
<h3 class="section-title" id="intro">Вступление</h3>
<p>Представьте себе инструмент, который превращает ваши идеи в код так же легко, как вы записываете мысли на бумаге. Python — это не просто язык программирования. Это мост между человеческой логикой и машинным интеллектом, между начинающим энтузиастом и профессионалом, между мечтой и реальностью. Python не требует жертвовать красотой ради функциональности. Он позволяет писать программы, которые понятны как компьютеру, так и человеку.</p>
<p>Этот язык — как универсальный ключ: он открывает двери в мир IT, Data Science, игр, робототехники и даже искусства. Здесь не нужны сложные настройки или годы обучения. Все, что требуется, — ваше любопытство и труд.</p>
<div class="text-block">
<pre><code class="lang-py"># Ключевые слова в Python

False      await      else       import     pass
None       break      except     in         raise
True       class      finally    is         return
and        continue   for        lambda     try
as         def        from       nonlocal   while
assert     del        global     not        with
async      elif       if         or         yield</code></pre>
</div>
<h3 class="section-title" id="vars">Переменные, области видимости</h3>
<p><b>Область видимости</b> или <b>scope</b> определяет контекст переменной, в рамках которого ее можно использовать. В Python есть два типа контекста: <b>глобальный</b> и <b>локальный</b>. <b>Глобальный</b> контекст подразумевает, что переменная является глобальной, она определена вне любой из функций и доступна любой функции в программе. <b>Локальная</b> же переменная определяется внутри функции и доступна только из этой функции, то есть имеет локальную область видимости.</p>
<div class="text-block">
<pre><code class="lang-py">x = 10              # Целое число (int)
y = 3.14            # Дробное число (float)
name = "Alice"      # Строка (str)
is_valid = True     # Булево значение (bool)
empty = None        # Пустое значение (NoneType)

value = 42          # int
value = "Сорок два" # str  # динамическая типизация

# Константы (условные)
PI = 3.14159
MAX_USERS = 100

# Множественное присваивание (распаковка)
a, b, c = 1, 2, 3          # a=1, b=2, c=3
x = y = z = 0              # x=0, y=0, z=0
name, age = "Alice", 25    # Распаковка кортежа

# Варианты объявления многострочных строк
text1 = ("Laudate omnes gentes laudate "
"Magnificat in secula ")
text2 = '''Laudate omnes gentes laudate
Magnificat in secula
Et anima mea laudate
Magnificat in secula'''
result = f"text2: {text2}  text1: {text1}"

# Области видимости
# Локальные — внутри функции.
# Глобальные — объявлены вне функций.
x = 10  # Глобальная  
def change_x():  
    global x  
    x = 20  # Изменяем глобальную переменную  
change_x()   # 20

def outer():  
    y = 5  
    def inner():  
        nonlocal y
        y += 1  
    inner()  
    print(y)  # 6  
outer()</code></pre>
</div>
<h3 class="section-title" id="arifmet_oper">Арифметические операции</h3>
<p>При последовательном использовании нескольких арифметических операций их выполнение производится в соответствии с их приоритетом.</p>
<p><b>Особенности:</b></p>
<ul>
<li>Деление <b>/</b> всегда возвращает float, даже для целых чисел</li>
<li>Целочисленное деление <b>//</b> округляет вниз для отрицательных чисел</li>
<li>Остаток от деления <b>%</b> сохраняет знак делителя</li>
</ul>
<p>Приоритет: <b>скобки → степень → умножение/деление → сложение/вычитание</b>.</p>
<div class="text-block">
<pre><code class="lang-py">a = 10
b = 3
print(a + b)   # 13    (сложение)
print(a - b)   # 7     (вычитание)
print(a * b)   # 30    (умножение)
print(a ** b)  # 1000  (степень: 10³)
print(a / b)   # 3.333 (обычное деление)
print(a // b)  # 3     (целочисленное деление)
print(a % b)   # 1     (остаток от деления)

print(8 / 2)    # 4.0 (не 4)
print(-7 // 2)  # -4  (не -3)
print(-7 % 3)   # 2   (так как -7 = (-3)*3 + 2)

# Сокращенные операции
x = 5
x += 2   # x = 7 (аналогично -=, *=, /=, **=)
x **= 2  # x = 49

# Для работы с дробями использовать модуль fractions или округлять результаты
print(0.1 + 0.2)           # 0.30000000000000004 (погрешность)
print(round(0.1 + 0.2, 1)) # 0.3 (округление до 1 знака)</code></pre>
</div>
<h3 class="section-title" id="conditional_expressions">Условные выражения</h3>
<p>Python считает ложными:</p>
<ul>
<li><b>False</b></li>
<li><b>0, 0.0</b></li>
<li><b>"" (пустая строка)</b></li>
<li><b>None</b></li>
<li><b>[], {}, set() (пустые коллекции)</b></li>
</ul>
<div class="text-block">
<pre><code class="lang-py">a, b = 5, 6
result = 5 == 6  # сохраняем результат операции в переменную
print(result)    # False - 5 не равно 6
print(a != b)    # True
print(a > b)     # False - 5 меньше 6

# Логические операторы
age, isFalse = 22, False
result = age > 21 or isFalse  # True, так как выражение age > 21 равно True
print(not age > 21)           # False
print(not 0)                  # True
if x > 0 and x < 10:          # True, если оба условия верны
if not is_blocked:            # Инвертирует условие

# Проверка вхождения (in)
message = "hello world!"
print("hello" in message)      # True - подстрока hello есть в строке "hello world!"
print("gold" not in message)   # True

# Строки сравниваются лексикографически
print("apple" < "banana")  # True (сравнение посимвольно)

# Числа разных типов сравниваются корректно
print(5 == 5.0)  # True (но 5 is 5.0 → False)

# Проверка идентичности (is) - для сравнения объектов, а не значений
a = [1, 2]
b = [1, 2]
print(a == b)  # True (значения одинаковы)
print(a is b)  # False (разные объекты)

# Для сложных условий используй скобки
if (x > 0) and (y != "error"):</code></pre>
</div>
<h3 class="section-title" id="if_cons_cycles">Условная конструкция if, циклы</h3>
<div class="text-block">
<pre><code class="lang-py">age = 18
if age < 18:
print("Доступ запрещен")  
elif age == 18:  
print("Поздравляем с совершеннолетием!")  
else:  
print("Доступ разрешен")

# Тернарный оператор
is_even = "Четное" if x % 2 == 0 else "Нечетное"  
print(is_even)  # Четное (если x = 10)

x = 10
if x > 5 and x < 15:  
print("Число в диапазоне (5, 15)")  
if x == 10 or x == 20:  
print("Число 10 или 20")  
if not x == 0:  
print("Число не ноль")

# Цикл while
count = 0  
while count < 3:  
print(count)  # 0, 1, 2  
count += 1

# Цикл for
fruits = ["яблоко", "банан", "апельсин"]
for fruit in fruits:  
print(fruit.upper())  # ЯБЛОКО, БАНАН, АПЕЛЬСИН

for i in range(3):
print(i)              # 0, 1, 2

for c in fruits:
print(c)
else:  # возможность выполнить что=то на последней итерации
print(f"Последний фрукт: {c}. Цикл завершен");
print("Работа программы завершена")

user = {"name": "Alice", "age": 25}  
for key, value in user.items():  
print(f"{key}: {value}")  # name: Alice, age: 25

# break — выход из цикла:
while True:
answer = input("Введите 'выход' для завершения: ")
if answer == "выход":
break

# continue — переход к следующей итерациии
for num in [1, 2, 3, 4]:  
if num % 2 == 0:  
continue  # Пропустит четные числа  
print(num)    # 1, 3  

# else — выполняется, если цикл завершился без break
for n in [2, 4, 6]:  
if n == 5:  
break  
else:
print("5 не найдено")</code></pre>
</div>
<h3 class="section-title" id="funcs">Функции</h3>
<p>Функции — объекты первого класса: их можно передавать в другие функции, сохранять в переменных. Избегайте изменяемых аргументов по умолчанию. Аннотируйте типы. Мы можем присвоить переменной какую-нибудь функцию и затем, используя переменную, вызывать данную функцию. Мы можем передать ее в качестве параметра в другую функцию. Также одна функция в Python может возвращать другую функцию.</p>
<div class="text-block">
<pre><code class="lang-py">def greet(name):  
"""Возвращает приветствие (docstring)."""  
return f"Привет, {name}!"  
print(greet("Анна"))  # Привет, Анна!

# Позиционные и именованные аргументы
def divide(a, b):  
return a / b  
print(divide(10, 2))       # 5.0 (позиционные)  
print(divide(b=2, a=10))   # 5.0 (именованные) 

# Аргументы по умолчанию
def power(x, exp=2):  
return x ** exp
print(power(3))     # 9 (exp=2)  
print(power(3, 3))  # 27

# Неопределенное количество параметров
def sum(*numbers):
result = 0
for n in numbers:
result += n
print(f"sum = {result}")
sum(1, 2, 3, 4, 5)  # sum = 15
sum(3, 4, 5, 6)     # sum = 18

# Произвольное число аргументов (*args, **kwargs)
def print_args(*args, **kwargs):  
print(f"Аргументы: {args}")  
print(f"Именованные: {kwargs}")  
print_args(1, 2, name="Alice")  
# Аргументы: (1, 2)  
# Именованные: {'name': 'Alice'}  

# Множественный возврат (кортеж)
def min_max(numbers):  
return min(numbers), max(numbers)  
result = min_max([3, 1, 4])  # (1, 4)  

# Ранний выход из функции
def is_even(n):  
if n % 2 == 0:  
return True  
return False  # Можно опустить, но явно лучше.

# Возврат функций из фукнций
def sum(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def select_operation(choice):
if choice == 1:
return sum
elif choice == 2:
return subtract
else:
return multiply
summa = select_operation(1)  # operation = sum
print(summa(10, 6))          # 16
subt = select_operation(2)   # operation = subtract
print(subt(10, 6))           # 4
mult = select_operation(3)   # operation = multiply
print(mult(10, 6))           # 60</code></pre>
</div>
<h3 class="section-title" id="packing">Упаковка и распаковка</h3>
<div class="text-block">
<pre><code class="lang-py"># Позиционная распаковка:
values = [1, 2, 3]
a, b, c = values          # a=1, b=2, c=3
point = (10, 20)
x, y = point              # x=10, y=20
first, *rest = [1,2,3,4]  # first=1, rest=[2,3,4] (* для "остатка")

# Игнорирование элементов:
a, _, c = (1, 2, 3)   # _ = 2 (не используется)

# Упаковка в функции (*args и **kwargs)
# Сбор позиционных аргументов:
def sum_all(*args):
return sum(args)
print(sum_all(1, 2, 3))  # 6 (args = (1,2,3))

# Сбор именованных аргументов:
def print_profile(**kwargs):
for key, val in kwargs.items():
print(f"{key}: {val}")
print_profile(name="Alice", age=25)  # kwargs = {'name': 'Alice', 'age': 25}

# Распаковка в вызовах функций
# Передача элементов коллекции как аргументов:
def multiply(a, b):
return a * b
nums = [3, 4]
print(multiply(*nums))  # 12 (эквивалентно multiply(3, 4))

# Распаковка словаря в именованные аргументы:
def greet(name, message):
print(f"{message}, {name}!")
params = {"name": "Bob", "message": "Hello"}
greet(**params)  # Hello, Bob!

# Объединение коллекций
# Списки/кортежи:
list1 = [1, 2]
list2 = [*list1, 3, 4]  # [1, 2, 3, 4]
# Словари (Python 3.5+):
dict1 = {"a": 1}
dict2 = {"b": 2, **dict1}  # {'b': 2, 'a': 1}

# Распаковка в циклах
users = [("Alice", 25), ("Bob", 30)]
for name, age in users:
print(f"{name}: {age}")
# Для словарей:
for key, value in {"x": 10, "y": 20}.items():
print(key, "→", value)

# Примеры с zip
names = ["Alice", "Bob"]
ages = [25, 30]
for name, age in zip(names, ages):
print(name, age)  # Alice 25, Bob 30
# Создание словаря через zip:
dict(zip(names, ages))  # {'Alice': 25, 'Bob': 30}

# Порядок распаковки:
a, *b, c = [1, 2, 3, 4]  # a=1, b=[2,3], c=4

# Распаковка генераторов:
gen = (x for x in range(3))
a, b, c = gen  # a=0, b=1, c=2

# Ошибки при несоответствии размеров:
# a, b = [1, 2, 3]  # ValueError: too many values to unpack
# a, b, c = [1, 2]  # ValueError: not enough values

# Советы:
# 1. Используйте *_ для игнорирования нескольких элементов: a, *_ = [1,2,3,4]
# 2. Комбинируйте с enumerate():
for index, (name, age) in enumerate([("Alice", 25), ("Bob", 30)]):
print(index, name, age)</code></pre>
</div>
<h3 class="section-title" id="lambda">Лямбда-выражения</h3>
<p><b>Лямбда-выражения</b> в языке Python представляют небольшие анонимные функции, которые определяются с помощью оператора <b>lambda</b>.</p>
<div class="text-block">
<pre><code class="lang-py">square = lambda x: x ** 2  
print(square(4))  # 16  
# Использование с map/filter:  
numbers = [1, 2, 3]  
doubled = list(map(lambda x: x * 2, numbers))  # [2, 4, 6]  

def select_operation(choice):
if choice == 1:
return lambda a, b: a + b
elif choice == 2:
return lambda a, b: a - b
else:
return lambda a, b: a * b
summa = select_operation(1)  # operation = sum
summa(2, 3)  # 5
multi = select_operation(3)  # operation = multiply
multi(2, 3)  # 6</code></pre>
</div>
<h3 class="section-title" id="retypes">Преобразование типов</h3>
<div class="text-block">
<pre><code class="lang-py">a = "2"
b = 3
c = int(a) + b      # 5
b = int(3.7)        # b = 3
c = int("a1c")      # Ошибка
d = int("4.7")      # Ошибка
e = float("5")      # d = 5.0
f = float("abc")    # Ошибка
g = str(False)      # a = "False"
h = str(5.7)        # d = "5.7"

age = 22
message = "Age: " + age        # Ошибка
message = "Age: " + str(age)   # Age: 22
</code></pre>
</div>
<h3 class="section-title" id="decorators">Декораторы</h3>
<p>Декораторы в Python представляют функцию, которая в качестве параметра получает функцию и в качестве результата также возвращает функцию. Декораторы позволяют модифицировать выполняемую функцию, значения ее параметров и ее результат без изменения исходного кода этой функции.</p>
<div class="text-block">
<pre><code class="lang-py">def logger(func):  
"""Декоратор, выводящий имя функции."""  
def wrapper(*args):  
print(f"Вызов функции: {func.__name__}")  
return func(*args)  
return wrapper  

@logger  
def add(a, b):  
return a + b  

print(add(2, 3))  # Вызов функции: add → 5</code></pre>
</div>
<h3 class="section-title" id="try-except">try..except</h3>
<ul>
<li><b>Конкретные исключения</b> - всегда указывайте конкретные <b>типы</b> исключений вместо общего <b>Exception</b></li>
<li><b>Получение информации об ошибке</b> - используйте <b>as</b> для доступа к <b>объекту исключения</b></li>
<li><b>Иерархия исключений</b> - порядок блоков <b>except</b> важен — обрабатывайте <b>от частных к общим</b></li>
</ul>
<div class="text-block">
<pre><code class="lang-py">try:
num = int(input("Введите число: "))
result = 100 / num
except ValueError:
print("Ошибка: введено не число!")
except ZeroDivisionError:
print("Ошибка: деление на ноль!")
except Exception as e:
print(f"Неизвестная ошибка: {e}")
else:
print(f"Результат: {result}")
finally:
print("Завершение операции")

# Вариант с кортежем:
try:
# ...
except (TypeError, KeyError) as e:
print(f"Ошибка: {e}")

# Общий перехват всех исключений
try:
# ...
except Exception as e:  # Не рекомендуется без необходимости!
print(f"Произошла ошибка: {e}")

# Блок else - выполняется, если исключений не было
try:
file = open("data.txt", "r")
except FileNotFoundError:
print("Файл не найден")
else:
print(file.read())
file.close()

# Блок finally - выполняется всегда, даже если было исключение
try:
print("Попытка подключения к БД...")
# ... код с ошибкой ...
except ConnectionError:
print("Ошибка подключения")
finally:
print("Закрытие соединения с БД")  # Обязательное действие

# Пользовательские исключения
class NegativeNumberError(Exception):
"""Вызывается при отрицательном числе"""
pass

try:
num = int(input("Введите положительное число: "))
if num < 0:
raise NegativeNumberError("Число должно быть > 0")
except NegativeNumberError as e:
print(e)

# Повторный вызов исключения (raise), генерация исключений
try:
# ... код ...
except ValueError as e:
print("Логируем ошибку")
raise  # Повторно вызывает исключение для внешней обработки</code></pre>
</div>
<h3 class="section-title" id="strings">Строки</h3>
<pre><code class="lang-py">s1 = 'Простая строка'  
s2 = "Строка с кавычками: 'Привет'"  
s3 = """Многострочная
строка"""  
s4 = r"Сырая строка: \n не преобразуется"  # \n выведется как текст

text = "  Hello, World!  "

# Изменение регистра  
print(text.upper())                  # "  HELLO, WORLD!  "  
print(text.lower())                  # "  hello, world!  "  
print("python".capitalize())         # "Python"  
# Удаление пробелов  
print(text.strip())                  # "Hello, World!"  
# Поиск и замена  
print(text.find("World"))            # 8 (индекс начала подстроки)  
print(text.replace("Hello", "Hi"))   # "  Hi, World!  "  
# Проверки  
print("123".isdigit())               # True  
print("abc".isalpha())               # True  
# Разделение и объединение  
print("a,b,c".split(","))            # ['a', 'b', 'c']  
print(" ".join(["Hello", "World"]))  # "Hello World"  

# Форматирование строк
name = "Анна"
age = 25
# f-строки (Python 3.6+)  
print(f"{name} ({age} лет)")                   # Анна (25 лет)  
print(f"Число: {10.5:.2f}")                    # Число: 10.50  
# Метод format()  
print("{0} любит {1}".format(name, "Python"))  # Анна любит Python  
# Старый стиль (%)  
print("Сайт: %s, Год: %d" % ("python.org", 2024))

# Индексы и срезы
s = "abcdef"
# Обращение по индексу  
print(s[0])     # 'a'  
print(s[-1])    # 'f' (последний символ)  
# Срезы [start:end:step]  
print(s[1:4])   # 'bcd' (символы с 1 до 4 не включительно)  
print(s[::2])   # 'ace' (каждый второй символ)  
print(s[::-1])  # 'fedcba' (реверс строки)  

# Полезные операции
# Длина строки  
print(len("Hello"))  # 5  
# Проверка вхождения подстроки  
print("ell" in "Hello")  # True  
# Экранирование символов  
print("Первая строка\nВторая строка")  # Перевод строки  
print("Кавычки: \"Python\"")           # Кавычки: "Python"  
# ASCII/Unicode  
print(ord("A"))   # 65 (код символа)  
print(chr(65))    # 'A'  

# Многострочные строки и выравнивание
# Выравнивание текста  
print("Текст".ljust(10, "-"))  # Текст------  
print("Текст".center(10, "*")) # **Текст**  
# Многострочный текст  
multiline = """  
Строка 1  
Строка 2  
Строка 3  
"""
print(multiline)

# Удалить все цифры из строки  
s = "a1b2c3"
clean = "".join([c for c in s if not c.isdigit()])  # "abc"  
# Перевернуть слова в строке  
text = "Hello World Python"
reversed_words = " ".join(text.split()[::-1])       # "Python World Hello"</code></pre>
<h3 class="section-title" id="oop">ООП</h3>
<p>Ключевые концепции: <b>классы</b>, <b>объекты</b>, <b>наследование</b>, <b>инкапсуляция</b>, <b>полиморфизм</b>, <b>абстракция</b>.</p>
<p>Советы:</p>
<ul>
<li>Приватные атрибуты (__name) не защищены полностью — доступны через _ClassName__name.</li>
<li>Для перегрузки операторов используйте магические методы (__eq__, __lt__ и др.).</li>
<li>Используйте isinstance() для проверки типа объекта.</li>
<li>Избегайте множественного наследования без необходимости.</li>
</ul>
<p><b>Наследование</b></p>
<pre><code class="lang-py">class Cat:
def __init__(self, name, age):  # Конструктор (инициализатор)
self.name = name            # Публичный атрибут
self._age = age             # Защищенный атрибут (условно приватный)
self.__mood = "😺"          # Приватный атрибут (начинается с __)

# Метод экземпляра
def speak(self):
print(f"{self.name} говорит: Мяу!")

class Tiger(Cat):  # Дочерний класс
def __init__(self, name, age, stripes):
super().__init__(name, age)  # Вызов конструктора родителя
self.stripes = stripes

# Переопределение метода
def speak(self):
print(f"{self.name} рычит: Рррр!")

# Новый метод
def hunt(self):
print(f"{self.name} охотится!")

# Создание объекта
my_cat = Cat("Барсик", 3)
my_cat.speak()  # Барсик говорит: Мяу!
tiger = Tiger("Амур", 5, 100)
tiger.speak()  # Амур рычит: Рррр!</code></pre>
<p><b>Инкапсуляция</b></p>
<pre><code class="lang-py">class BankAccount:
def __init__(self):
self.__balance = 0  # Приватный атрибут

# Геттер
@property
def balance(self):
return self.__balance

# Сеттер
@balance.setter
def balance(self, value):
if value < 0:
    raise ValueError("Баланс не может быть отрицательным")
self.__balance = value

account = BankAccount()
account.balance = 100  # Используем сеттер
print(account.balance)  # 100 (используем геттер)</code></pre>
<p><b>Полиморфизм (разные классы с одинаковым методом)</b></p>
<pre><code class="lang-py">class Dog:
def speak(self):
return "Гав!"

class Duck:
def speak(self):
return "Кря!"

def animal_sound(animal):
print(animal.speak())

animal_sound(Dog())   # Гав!
animal_sound(Duck())  # Кря!</code></pre>
<p><b>Абстрактные классы</b></p>
<pre><code class="lang-py">from abc import ABC, abstractmethod
class Shape(ABC):  # Абстрактный класс
@abstractmethod
def area(self):
pass

class Circle(Shape):
def __init__(self, radius):
self.radius = radius

def area(self):  # Реализация абстрактного метода
return 3.14 * self.radius ** 2

# shape = Shape()  # Ошибка! Нельзя создать экземпляр абстрактного класса
circle = Circle(5)
print(circle.area())  # 78.5</code></pre>
<p><b>Магические методы</b></p>
<pre><code class="lang-py">class Vector:
def __init__(self, x, y):
self.x = x
self.y = y

def __str__(self):  # Для str() и print()
return f"Vector({self.x}, {self.y})"

def __add__(self, other):  # Оператор +
return Vector(self.x + other.x, self.y + other.y)

v1 = Vector(2, 3)
v2 = Vector(1, 4)
v3 = v1 + v2
print(v3)  # Vector(3, 7)</code></pre>
<p><b>Статические и классовые методы</b></p>
<pre><code class="lang-py">class Math:
PI = 3.14159

@staticmethod
def square(x):  # Не требует self/cls
return x ** 2

@classmethod
def circle_area(cls, radius):  # Работает с классом
return cls.PI * radius ** 2

print(Math.square(4))       # 16
print(Math.circle_area(2))  # 12.56636</code></pre>
<p><b>Композиция</b></p>
<pre><code class="lang-py">class Engine:
def start(self):
print("Двигатель запущен")

class Car:
def __init__(self):
self.engine = Engine()  # Композиция

def start(self):
self.engine.start()

car = Car()
car.start()  # Двигатель запущен</code></pre>
<h3 class="section-title" id="lists">Списки (list), срезы</h3>
<p>Изменяемая, упорядоченная коллекция.</p>
<pre><code class="lang-py">nums = [1, 2, 3]                  
mixed = [1, "text", 3.5]  

# Методы
nums.append(4)        # [1, 2, 3, 4]  
nums.insert(1, 5)     # [1, 5, 2, 3, 4] (индекс, значение)  
nums.pop(2)           # Удаляет элемент с индексом 2 → [1, 5, 3, 4]  
nums.remove(5)        # Удаляет первое вхождение 5 → [1, 3, 4]  
nums.reverse()        # [4, 3, 1]  

# Срезы (slice)
print(nums[1:3])      # [3, 1] (элементы с 1 до 3 не включительно)  
print(nums[::-1])     # Реверс списка → [1, 3, 4] → [4, 3, 1]  

# Сортировка
nums.sort()           # [1, 3, 4]  
sorted_nums = sorted(nums, reverse=True)  # Не изменяет исходный список → [4, 3, 1]</code></pre>
<h3 class="section-title" id="tuples">Кортежи (tuple)</h3>
<p>Неизменяемая, упорядоченная коллекция.</p>
<pre><code class="lang-py">point = (10, 20)               
colors = ("red", "green")       
single = (5,)                   # Кортеж из одного элемента (запятая обязательна!)  

# Распаковка
x, y = point                    # x=10, y=20  
# Преобразование в список
list_from_tuple = list(point)   # [10, 20]  
# Индексация
print(colors[1])                # "green"</code></pre>
<h3 class="section-title" id="dicts">Словари (dict)</h3>
<p>Изменяемая коллекция пар <b>ключ: значение</b>. Ключи уникальны и хешируемы.</p>
<pre><code class="lang-py">user = {"name": "Alice", "age": 25}  
user = dict(name="Bob", age=30)  

# Методы
print(user["name"])             # Alice (если ключа нет → KeyError)  
print(user.get("height", 170))  # 170 (значение по умолчанию)  
user["height"] = 175            # Добавление/изменение элемента  
keys = user.keys()              # dict_keys(['name', 'age', 'height'])  
items = user.items()            # Пары (ключ, значение)  

# Удаление
age = user.pop("age")           # Удаляет ключ и возвращает значение → 25  

# Итерация
for key, value in user.items():  
print(f"{key}: {value}")</code></pre>
<h3 class="section-title" id="sets">Множества (set)</h3>
<p>Изменяемая коллекция уникальных элементов. Неупорядоченная.</p>
<pre><code class="lang-py">unique_nums = {1, 2, 2, 3}      # {1, 2, 3}  
empty_set = set()               # Не используйте {} (это словарь)  

# Методы
unique_nums.add(4)              # {1, 2, 3, 4}  
unique_nums.remove(1)           # {2, 3, 4} (если элемента нет → KeyError)  
unique_nums.discard(10)         # Удаляет элемент, если он есть (без ошибки)  

# Операции
a = {1, 2, 3}  
b = {3, 4, 5}  
print(a | b)   # Объединение → {1, 2, 3, 4, 5}  
print(a & b)   # Пересечение → {3}  
print(a - b)   # Разность → {1, 2} </code></pre>
<h3 class="section-title" id="list_comprehension">List Comprehension</h3>
<p>Создание списков в одну строку.</p>
<pre><code class="lang-py"># Базовый пример
squares = [x**2 for x in range(5)]                            # [0, 1, 4, 9, 16]  

# С условием
even_squares = [x**2 for x in range(10) if x % 2 == 0]        # [0, 4, 16, 36, 64]  

# Вложенные циклы
matrix = [[1, 2], [3, 4]]  
flatten = [num for row in matrix for num in row]              # [1, 2, 3, 4]  

# С тернарным оператором
labels = ["Even" if x % 2 == 0 else "Odd" for x in range(4)]  # ['Even', 'Odd', 'Even', 'Odd']  </code></pre>
<p><b>Сравнение структур данных:</b></p>
<div class="table-wrapper">
<table>
    <thead>
    <td>Структура</td>
    <td>Изменяемость</td>
    <td>Упорядоченность</td>
    <td>Уникальность</td>
    <td>Использование</td>
    </thead>
    <tbody>
    <tr>
        <td>Список</td>
        <td>Да</td>
        <td>Да</td>
        <td>Нет</td>
        <td>Динамические коллекции</td>
    </tr>
    <tr>
        <td>Кортеж</td>
        <td>Нет</td>
        <td>Да</td>
        <td>Нет</td>
        <td>Константные данные</td>
    </tr>
    <tr>
        <td>Словарь</td>
        <td>Да</td>
        <td>С Python 3.7+</td>
        <td>Ключи да</td>
        <td>Пары ключ-значение</td>
    </tr>
    <tr>
        <td>Множество</td>
        <td>Да</td>
        <td>Нет</td>
        <td>Да</td>
        <td>Уникальные элементы, проверка вхождения</td>
    </tr>
    </tbody>
</table>
</div>`
    },
    {
        id: 7,
        link: "html/go_deep.html",
        title: "Go. Глубже",
        date: "18 Апреля 2025",
        tags: "Go",
        short_content: "Функции (параметры, возврат, тип), указатели, структуры, методы, интерфейсы, полиморфизм",
        data_category: "go",
    },
    {
        id: 6,
        link: "html/go_basics.html",
        title: "Go. Основы",
        date: "10 Апреля 2025",
        tags: "Go",
        short_content: "Базовые операции, условные выражения, массивы, условные конструкции, циклы, срезы, отображения, именованные типы и псевдонимы, defer и panic",
        data_category: "go",
    },
    {
        id: 5,
        link: "html/javascript_func.html",
        title: "JavaScript. Функциональное программирование",
        date: "8 Апреля 2025",
        tags: "JavaScript",
        short_content: "",
        data_category: "js",
    },
    {
        id: 4,
        link: "html/javascript_basics.html",
        title: "JavaScript. Основы",
        date: "7 Апреля 2025",
        tags: "JavaScript",
        short_content: "",
        data_category: "js",
    },
    {
        id: 3,
        link: "html/django_jwt_auth.html",
        title: "Настройка JWT аутентификации в проекте Django",
        date: "25 Марта 2025",
        tags: "Django, Auth, JWT",
        short_content: "",
        data_category: "django",
    },
    {
        id: 2,
        link: "html/django_setup.html",
        title: "Настройка проекта Django для работы с REST API",
        date: "18 Марта 2025",
        tags: "Django, Docker, Django Rest Framework, API, Swagger, CORS",
        short_content: "",
        data_category: "django",
    },
    {
        id: 1,
        link: "html/server_setup.html",
        title: "Быстрая настройка Linux Ubuntu под простой домашний сервер",
        date: "15 Марта 2025",
        tags: "Linux, Ubuntu, DevOps, Docker, Nginx",
        short_content: "",
        data_category: "devops",
        content: `<h3 class="section-title">Установка пакетов</h3>
<p>Пакеты могут меняться, удаляться. Не мешало бы поддерживать актуальным список.</p>
<pre><code class="language-bash">sudo apt-get install -y vim mosh tmux htop git curl wget unzip zip gcc \
build-essential make ssh apt-transport-https ca-certificates software-properties-common zsh tree \
redis-server nginx zlib1g-dev libbz2-dev libreadline-dev llvm libncurses-dev xz-utils tk-dev \
liblzma-dev python3-dev python3-lxml libxslt1-dev libffi-dev libssl-dev gnumeric libsqlite3-dev \
libpq-dev libxml2-dev libxslt1-dev libjpeg-dev libfreetype-dev libcurl4-openssl-dev supervisor</code></pre>
<h3 class="section-title">Настройка SSH и fail2ban</h3>
<p>Необходимы для нормального доступа к серверу и защиты от ддос атак.</p>
<pre><code class="lang-bash">vim /etc/ssh/sshd_config</code></pre>
<div class="text-block">
<pre><code>AllowUsers &lt;username&gt;
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
X11Forwarding no
PermitEmptyPasswords no</code></pre>
</div>
<pre><code class="lang-bash">sudo apt install fail2ban</code></pre>
<pre><code class="lang-bash">sudo nano /etc/fail2ban/jail.local</code></pre>
<div class="text-block">
<pre><code>[sshd]
enabled = true
maxretry = 3
findtime = 10m
bantime = 1h</code></pre>
</div>
<p>Положить публичный и приватный (при необходимости) ключ в ~/.ssh</p>
<pre><code class="lang-bash">sudo systemctl restart sshd</code></pre>
<h3 class="section-title">Oh-my-ZSH</h3>
<pre><code class="lang-bash">sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $&#123;ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone https://github.com/zsh-users/zsh-autosuggestions $&#123;ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "$&#123;ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"</code></pre>
<p>Добавить <b>zsh-syntax-highlighting zsh-autosuggestions docker docker-compose</b> в ~/.zshrc в plugins</p>
<p>Добавить powerlevel10k/powerlevel10k в ~/.zshrc ZSH_THEME</p>

<h3 class="section-title">Docker</h3>
<pre><code class="lang-bash">sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose</code></pre>

<h3 class="section-title">Nginx</h3>
<pre><code class="lang-bash">sudo apt install ufw

sudo nano /etc/ufw/applications.d/nginx.ini</code></pre>
<div class="text-block">
<pre>[Nginx HTTP]
title=Web Server
description=Enable NGINX HTTP traffic
ports=80/tcp

[Nginx HTTPS]
title=Web Server (HTTPS)
description=Enable NGINX HTTPS traffic
ports=443/tcp

[Nginx Full]
title=Web Server (HTTP,HTTPS)
description=Enable NGINX HTTP and HTTPS traffic
ports=80,443/tcp</pre>
</div>
<pre><code class="lang-bash">sudo ufw enable
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'
sudo ufw status</code></pre>`,
    }
];
