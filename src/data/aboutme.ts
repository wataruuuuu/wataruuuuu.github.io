export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Wataru Ikeda / 池田 航",
  title: "4th Year Undergraduate Student",
  institution: "Tohoku University",
  // Note that links work in the description
  description:
  "I'm a 4th year undergraduate student at <a href='https://www.tohoku.ac.jp/en/'>Tohoku University</a>. My research interests include [your research interests/field].",
  email: "ikeda.wataru.q5@dc.tohoku.ac.jp",
  imageUrl:
    "https://i.gyazo.com/8a639c037eea594c60eb2f24efc2086c.jpg",
  //googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "wataruuuuu",
  //linkedinUsername: "janesmith",
  twitterUsername: "jkliplop",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
