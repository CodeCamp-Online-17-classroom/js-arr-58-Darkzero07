// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];

const group = persons.reduce((obj, person) => {
  if (!obj[person.sex]) {
    obj[person.sex] = [];
  }
  obj[person.sex].push(person.name);
  return obj;
}, {});
console.log(group);

// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
