const coding = ['java', 'c++', 'pyhton', 'ruby']


const values = coding.forEach( (item) => {
    // console.log(item)
    return item
} )
console.log(values)   // undefined


//  u can return vales using for each loop as follows

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = []
numbers.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
} )
console.log(newNum)

// it is too comples, so filters are introduced...


// *****************filters*********************

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrNum = myNum.filter( (num) => num>4)
console.log(arrNum)

// you have to use return keywors if you use the scope'{}'

const anotherNum = myNum.filter( (num) => {
    return num > 4
 } )
 console.log(anotherNum)


// array of objects...

const books = [
    { title: 'Book One', genre: 'Fiction' , publish: 1981, 
    edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction' , publish: 1992,
    edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction' , publish: 1989,
    edition: 2010 },
    { title: 'Book Five', genre: 'Science' , publish: 2009,
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction' , publish: 1987,
    edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986,
    edition: 1996 },
    {title: 'Book Eight', genre: 'Science' , publish: 2011,
    edition: 2016 }
]

const userBook = books.filter( (bk) =>  bk.genre === 'History')
console.log(userBook)


const userBook2 = books.filter( (bk) =>   { 
    return bk.edition >= 2000 && bk.genre === 'History'
})
console.log(userBook2)
