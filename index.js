let lorem = 'Lorem ipsum dolor sit tempore soluta ad eveniet nobis animi optio eaque asperiores culpa.Temporibus, officia perferendis iure quasi iste voluptatem. Sit autem facere magni doloremque dolores commodi! Iste voluptatibus sit deleniti et repellat velit nihil similique debitis. Dolorem facilis ut maiores cum laborum.Eius iure at praesentium aliquam aperiam asperiores ipsa minus in totam porro? Aperiam minima, nihil harum ratione distinctio ex eum consectetur dignissimos beatae ullam voluptatum atque quia similique incidunt quisquam?At rem aliquam ducimus repudiandae corrupti quas explicabo, repellendus eos fuga veritatis omnis eligendi accusantium perspiciatis laboriosam quos veniam, maiores minima! Aspornatur, at iure? Aliquam ipsum sed offyciis totam Dignissimos!';
let diyor = lorem[lorem.indexOf('D')] + lorem[lorem.indexOf('i')] + lorem[lorem.indexOf('y')] + lorem[lorem.indexOf('o')] + lorem[lorem.indexOf('r')]
console.log(diyor);

let str = 'aaa@bbb@ccc'
str = str.split('@').join('!')
console.log(str);

let str1 = 'Hello,it is Html'
str1 = str1.slice(0,13) + 'not Js'
console.log(str1);

let alex = 'alex'
alex = alex.toUpperCase(alex[0]) + alex.slice(1)
console.log(alex);

let random = Math.random()
random.toString()
random = random.split('.').join('')
console.log(random);

let lut = 'Lex Luter has a big suit'
lut = 'A' + lut.slice(3)
console.log(lut);