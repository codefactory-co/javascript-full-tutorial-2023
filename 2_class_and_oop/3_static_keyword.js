/**
 * Static Keyword
 */
// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);