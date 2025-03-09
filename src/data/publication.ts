export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "言語処理学会第31回年次大会（NLP 2025）",
    title: "Transformer LLMにおける層単位のFFN層の重要度検証",
    authors: "池田航, 矢野一樹, 高橋良允, 李宰成, 柴田圭吾, 鈴木潤",
    paperUrl: "",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    //tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    //imageUrl:
    //  "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "言語処理学会第31回年次大会（NLP 2025）",
    title: "LLM 事前学習の効率化と性質改善：埋め込み層および出力層のパラメータ固定による再利用",
    authors: "矢野一樹, 高橋良允, 李宰成, 柴田圭吾, 池田航, 鈴木潤",
    paperUrl: "",
  },
  {
    year: "2025",
    conference: "言語処理学会第31回年次大会（NLP 2025）",
    title: "Transformer LLM の内部挙動改善：隠れ状態ベクトルの数値的収束性の向上",
    authors: "柴田圭吾, 高橋良允, 矢野一樹, 李宰成, 池田航, 鈴木潤",
    paperUrl: "",
  },
];
