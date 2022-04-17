const ages = [18, 20, 21, 100, 99, 14];

const predicate = (age: number) => {
  return age > 90;
};

const oldAges = [100];

type CoursesType = {
  title: string;
  price: number;
};

const course = [
  { title: "Css", price: 110 },
  { title: "JS", price: 280 },
  { title: "React", price: 150 },
];

const chipPredicate = (course: CoursesType) => {
  return course.price < 160;
};

const chipCourses = [];
