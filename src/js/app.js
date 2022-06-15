import {
  differenceInYears,
  differenceInDays,
  formatDistance,
  format,
} from 'date-fns';
import { uk } from 'date-fns/locale';

const getAge = dateOfBirth => {
  const today = new Date();
  return differenceInYears(today, dateOfBirth);
};

// console.log(getAge(new Date('1990-09-01')));

const getDeadlineInDays = deadlineDate => {
  const today = new Date();
  return differenceInDays(deadlineDate, today);
};

// console.log(getDeadlineInDays(new Date('2022-06-17')));

// console.log(
//   formatDistance(new Date(), new Date('2022-06-13T20:50:40'), {
//     includeSeconds: true,
//     locale: uk,
//   })
// );

console.log(format(new Date(), 'dd MMMM yyyy, HH:mm'));
