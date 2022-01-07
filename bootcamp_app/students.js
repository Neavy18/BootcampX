const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const month = process.argv[2]
const max = process.argv[3]
const values =[`${month}`, `${max}`];

const query = `
SELECT students.id, students.name,cohorts.name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = $1
LIMIT $2;
`
pool.query(query, values).then (res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${cohorts.name} cohort`);
  })
});

// --> CODE FROM THE TOGGLE <--
/* pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack)); */