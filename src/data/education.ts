export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021—Present",
    institution: "Tohoku University",
    degree: "Department of Electrical, Information and Physics Engineering, School of Engineering",
    advisor: "Prof. Jun Suzuki",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
