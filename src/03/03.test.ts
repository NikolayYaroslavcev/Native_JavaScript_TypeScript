import { StudentType } from "./../02/02";
// import { addSkill, makeStudentActive } from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "Nik",
    age: 27,
    isActive: true,
    addres: {
      streetTitle: "Surganova 2",
      city: {
        title: "Minsk",
        countryTitle: "Belarus",
      },
    },
    technologies: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "React",
      },
    ],
  };
});

// test("student should be made active", () => {
//   expect(student.isActive).toBe(false);

//   makeStudentActive(student);

//   expect(student.isActive).toBe(true);
// });

// test("student lives in city?", () => {
//   let result1 = doesStudentLifeIn(student, "Moscow");
//   let result2 = doesStudentLifeIn(student, "Minsk");

//   expect(result1).toBe(false);
//   expect(result2).toBe(true);
// });
