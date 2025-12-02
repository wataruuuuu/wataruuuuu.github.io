export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "Nov 26, 2025",
    title: "Prize Winner of NeurIPS 2025 Workshop",
    description: "Our team has been selected as a prize winner in the MMU-RAG NeurIPS 2025 Competition.",
    link: "https://neurips.cc/virtual/2025/loc/san-diego/competition/127730",
  },
  {
    date: "Jul 7, 2025",
    title: "Paper accepted at COLM 2025",
    description: "Our paper, \"Layerwise Importance Analysis of Feed-Forward Networks in Transformer-based Language Models,\" has been accepted at COLM 2025.",
    link: "https://colm.org/",
  },
  {
    date: "Mar 13, 2025",
    title: "言語処理学会第31回年次大会 (ANLP 2025) にて若手奨励賞を受賞しました。",
    description: "",
    link: "https://anlp.jp/nlp2025/award.html",
  }
];
