test("shouls take old men older the 90", () => {
  const ages = [18, 20, 21, 100, 99, 14];

  const oldAges = ages.filter((ages) => ages > 90);

  expect(oldAges.length).toBe(1);

  expect(oldAges.length).toBe(100);
});

test("shouls take courses chipper 160", () => {
  const courses = [
    { title: "Css", price: 110 },
    { title: "JS", price: 280 },
    { title: "React", price: 150 },
  ];

  const chipCourses = courses.filter((course) => course.price < 160);

  expect(chipCourses.length).toBe(2);

  expect(chipCourses[0].title).toBe("Css");
  expect(chipCourses[1].title).toBe("React");
});

test("get only completed tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDane: false },
    { id: 2, title: "Milk", isDane: true },
    { id: 3, title: "Solt", isDane: false },
    { id: 4, title: "Sugar", isDane: true },
  ];

  const completedTasks = tasks.filter((tasks) => tasks.isDane);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].id).toBe(2);
  expect(completedTasks[1].id).toBe(4);
});

test("get only uncompleted tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDane: false },
    { id: 2, title: "Milk", isDane: true },
    { id: 3, title: "Solt", isDane: false },
    { id: 4, title: "Sugar", isDane: true },
  ];

  const uncompletedTasks = tasks.filter((tasks) => !tasks.isDane);

  expect(uncompletedTasks.length).toBe(2);
  expect(uncompletedTasks[0].id).toBe(1);
  expect(uncompletedTasks[1].id).toBe(3);
});
