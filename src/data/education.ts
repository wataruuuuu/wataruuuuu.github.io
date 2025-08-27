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
    year: "April 2025 - Present",
    institution: "Tohoku University",
    degree: "M.S in Information Science",
    advisor: " <a href='https://www.fai.cds.tohoku.ac.jp/members/js/'>Prof. Jun Suzuki</a>",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "April 2021 — March 2025",
    institution: "Tohoku University",
    degree: "B.S in Engineering",
    advisor: " <a href='https://www.fai.cds.tohoku.ac.jp/members/js/'>Prof. Jun Suzuki</a>",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
