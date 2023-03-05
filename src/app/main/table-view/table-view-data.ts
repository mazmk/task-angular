import { MenuItem } from 'primeng/api';

export interface PeriodicElement {
  name: string;
  gender: string;
  birthDate: string;
  class: string;
  email: string;
  teacherId: string;
  subjects: string;
}

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  representative?: Representative;
  activity?: number;
}



export const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Michelle Cain',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'michellecaineed04@gmail.com',
    teacherId: '1CEA2C18',
    subjects: 'Mathematics',
  },
  {
    name: 'Kenna Mason',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'kennamason9d0e9@gmail.com',
    teacherId: '681AC1C4',
    subjects: 'Biology',
  },
  {
    name: 'James Walker',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'jameswalker08b23@gmail.com',
    teacherId: '5FCEFF80',
    subjects: 'Physics',
  },
  {
    name: 'Alexa Villegas',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'alexavillegasd4778@gmail.com',
    teacherId: '7D521319',
    subjects: 'Islamiat',
  },
  {
    name: 'Raul Gould',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'raulgould9ea30@gmail.com',
    teacherId: 'CE94D1E4',
    subjects: 'Pak Study',
  },
  {
    name: 'Ansley Vang',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'ansleyvang43ebf@gmail.com',
    teacherId: 'DF181337',
    subjects: 'English',
  },
  {
    name: 'Allisson Pierce',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'allissonpierce13ba3@gmail.com',
    teacherId: '408E85BB',
    subjects: 'Computer',
  },
  {
    name: 'Tiffany Logan',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'tiffanylogan9de26@gmail.com',
    teacherId: '25714123',
    subjects: 'Economics',
  },
  {
    name: 'Solomon Wilkins',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'solomonwilkins894c6@gmail.com',
    teacherId: '5B8775FE',
    subjects: 'Arts',
  },
  {
    name: 'Nala Shwarzenneger',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'liliashieldsef2bf@gmail.com',
    teacherId: '094A4B72',
    subjects: 'Calculus',
  },
  {
    name: 'Jamie Hanson',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'jamiehanson0cb6b@gmail.com',
    teacherId: '07EA8F20',
    subjects: 'Programming',
  },
  {
    name: 'London Dominguez',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'londondominguez757b4@gmail.com',
    teacherId: '088892CC',
    subjects: 'Accounting',
  },
  {
    name: 'Alvin Thomas',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'alvinthomas53667@gmail.com',
    teacherId: '54901FE5',
    subjects: 'Biology',
  },
  {
    name: 'Harry Dillon',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'harrydillon31b64@gmail.com',
    teacherId: '1EB59804',
    subjects: 'Physics',
  },
  {
    name: 'Kierra Buck',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'kierrabuck4d14e@gmail.com',
    teacherId: 'BA5BBEDC',
    subjects: 'Pak Study',
  },
  {
    name: 'Max Dorsey',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'maxdorseya9ce9@gmail.com',
    teacherId: 'FD937A65',
    subjects: 'English',
  },
  {
    name: 'Renee Bates',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'reneebatese8474@gmail.com',
    teacherId: '7125EC04',
    subjects: 'Computer',
  },
  {
    name: 'Cali Schmidt',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'calischmidtf284a@gmail.com',
    teacherId: 'C39C99BD',
    subjects: 'Economics',
  },
  {
    name: 'Justine Gates',
    gender: 'Male',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'justinegates7c317@gmail.com',
    teacherId: '8DC3BC93',
    subjects: 'Arts',
  },
  {
    name: 'Lilia Shields',
    gender: 'Female',
    birthDate: '2022-12-15 17:15:10.306+05',
    class: '6H + 2',
    email: 'liliashields2bff0@gmail.com',
    teacherId: '1B08D813',
    subjects: 'Calculus',
  },
];
