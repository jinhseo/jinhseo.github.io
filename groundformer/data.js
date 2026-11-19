// GroundFormer project page — content data (plain JS, attaches to window)
// Drafted from the ECCV 2026 submission #143 PDF. Edit freely.
window.GFD = {
  meta: {
    title: 'What You Ask is What You Ground: Bridging Question Intent to Temporal Evidence for Grounded VideoQA',
    short: 'GroundFormer',
    venue: 'ECCV 2026',
    // TODO: replace with the camera-ready author list once de-anonymized.
    // Set anonymous: false to render the names below instead of the
    // "Anonymous ECCV 2026 submission" line.
    anonymous: false,
    // `url` is optional. Give an author a url and the name becomes a link;
    // leave it out and the name renders as plain text.
    // `note` marks equal contribution, corresponding author, and so on.
    authors: [
      { name: 'Jinhwan Seo', sup: '1', url: 'https://jinhseo.github.io/'},
      { name: 'Kyubeom Han', sup: '1', url: 'https://qbhan.oopy.io/'},
      { name: 'Jumin Lee', sup: '1', url: 'https://zoomin-lee.github.io/'},
      { name: 'Junhyug Noh', sup: '2', url: 'https://junhyug.github.io/', note: '†' },
      { name: 'Sung-eui Yoon', sup: '1', url: 'https://sgvr.kaist.ac.kr/~sungeui/', note: '†' },
    ],
    // Superscript keys must match the `sup` values above.
    affiliations: [
      { sup: '1', name: 'SGVR Lab, KAIST', url: '' },
      { sup: '2', name: 'PAI Lab, Ewha Womans University' },
    ],
    // Shown under the affiliations. Leave empty to hide.
    authorNote: '† Corresponding author',
    affiliation: 'Anonymous Submission',   // footer line
    repo: 'https://github.com/jinhseo/groundformer',
    arxiv: 'https://arxiv.org/abs/2608.15708',
    // Flip to true once the paper and code are public.
    released: true,
    links: [
      { label: 'Paper', kind: 'paper', href: '#', variant: 'solid', gated: true },
      { label: 'arXiv', kind: 'arxiv', href: 'https://arxiv.org/abs/2608.15708', variant: 'solid', gated: true },
      { label: 'Code', kind: 'github', href: 'https://github.com/jinhseo/groundformer', variant: 'outline', gated: true },
    ],
  },

  // Plain-language framing of the problem, shown in the Motivation section.
  motivation: {
    lead: 'Grounded VideoQA models answer the question well, yet they point at the same moment whatever the question asks.',
    body: 'We call this failure mode question-invariant grounding: the model returns nearly the same segment regardless of the question. GroundFormer traces this to modality isolation and a weak question signal inside the grounding module, then removes both with learnable communication tokens and a MIL cross-attention that derives evidence from answer supervision alone.',
  },

  // Verbatim abstract, kept for reference.
  abstract:
    'We study a critical yet overlooked failure mode in Grounded Video Question Answering: question-invariant grounding, where models predict nearly identical temporal segments for different questions about the same video. We trace this behavior to two structural limitations in prior common designs: (i) modality isolation that fixes video representations before they receive question semantics, and (ii) weak question injection inside the grounding module. To address this, we propose GroundFormer, which conditions video features on question intent before localization via learnable communication tokens that mediate directed visuo-lingual interaction. On top of the question-conditioned features, a factorized MIL cross-attention couples answer selection with temporal evidence under candidate-level supervision, while Gaussian smoothing converts peaked attention into temporally coherent segments. We further introduce a hierarchical multi-modal contrastive loss that aligns video, question, and answer embeddings across a two-pass training pipeline. GroundFormer achieves state-of-the-art grounded VideoQA performance on NExT-GQA and STAR, substantially improving question-discriminative temporal grounding.',

  // Keep the labels short and put the benchmark plus the number to beat in
  // `sub`, so the four tiles line up instead of wrapping unevenly.
  stats: [
    { value: '21.5', label: 'Acc@GQA ↑', sub: 'NExT-GQA · best prior 18.8' },
    { value: '30.7', label: 'Acc@GQA ↑', sub: 'STAR · best prior 27.8' },
    { value: '34.0', label: 'mIoP ↑', sub: 'NExT-GQA · best prior 28.6' },
    { value: '28.2', label: 'PIoU ↓', sub: 'NExT-GQA · prior 85.7 · GT 21.3' },
  ],

  // Chips under the architecture figure.

  steps: [
    { n: '01', title: 'Communication tokens', body: 'A learnable tokens sits between the video and language branches. A [TYPE] token captures the coarse question category; 32 query tokens carry fine-grained question intent.' },
    { n: '02', title: 'Linguistic transfer', body: 'Asymmetric masked self-attention lets the tokens read the question and answer candidates while the language features stay uncontaminated.' },
    { n: '03', title: 'Visual refinement', body: 'The same tokens then write that intent into the video stream, so every frame feature already encodes what the question asks before grounding starts.' },
    { n: '04', title: 'MIL cross-attention', body: 'Token queries attend to video keys and values. The logits factorize into a temporal distribution and a candidate distribution whose product scores a candidate only when supporting frames agree, turning answer supervision into a grounding signal.' },
  ],

  setup: [
    { k: 'Vision encoder', v: 'CLIP ViT-L/14, T = 32 frames' },
    { k: 'Text encoder', v: 'RoBERTa-base' },
    { k: 'GroundFormer block', v: '4 transformer layers, N = 32 query tokens' },
  ],

  // Why it matters.
  useCases: [
    { tag: '01', title: 'Evidence that follows the question', body: 'Pairwise IoU across questions in the same video drops from 85.7 (NG+) and 88.9 (CRA-GQA) to 28.2, close to the ground-truth 21.3. Correlation with the ground-truth overlap structure rises from ~0.005 to 0.121.' },
    { tag: '02', title: 'Largest gains where the moment matters', body: 'Acc@GQA improves on all five NExT-GQA question types, most on Temporal-When (+8.3) and Causal-How (+5.9), the types that hinge on finding one moment.' },
    { tag: '03', title: 'No annotation, no inference overhead', body: 'Grounding is learned from candidate-level QA supervision alone, with no temporal labels during training, and the two-pass pipeline shares weights so test-time cost is unchanged.' },
  ],

  // Introduces the second qualitative figure in the Results section.
  consistencyNote: 'Questions that ask about the same event in different words land on the same interval, and the attention curve under each of them peaks in the same place.',

  figures: {
    teaser: {
      src: 'assets/teaser.png',
      alt: 'Three questions about one video and the temporal segments predicted by NG+, CRA-GQA and GroundFormer',
      caption: 'Given one video and three questions targeting different moments, prior methods return nearly identical segments.',
    },
    overview: {
      src: 'assets/overview.png',
      alt: 'GroundFormer overview: prior works versus question-conditioned grounding',
      caption: 'Prior methods inject the question weakly into the grounding module and collapse different questions onto one salient interval. GroundFormer conditions video features on question semantics first, then couples answer selection with grounding.',
    },
    details: {
      src: 'assets/details.png',
      alt: 'GroundFormer architecture: linguistic transfer, visual refinement, MIL cross-attention',
      caption: 'Communication tokens absorb candidate semantics under an asymmetric mask, propagate that intent into the video tokens, and serve as queries in a factorized MIL cross-attention that yields candidate and temporal distributions.',
    },
    consistency: {
      src: 'assets/qual_2.png',
      alt: 'Four questions on one video: two about the outdoor weather grounded early, two about the dog indoors grounded later',
      caption: 'Four questions on one video. Q1 and Q2 ask about the outdoor weather and land on 1.7\u20134.2s and 1.2\u20135.7s; Q3 and Q4 ask about the dog indoors and both shift to 7.7\u201311.2s. The ground truth pairs them the same way, and the attention curve under each question shows the same split.',
    },
    qualitative: {
      src: 'assets/qual_1.png',
      alt: 'Two videos with three questions each: GroundFormer predicts a distinct interval per question, shown above the ground-truth segments',
      caption: 'Two videos, three questions each. Yellow marks GroundFormer\'s prediction, red the ground truth. The three intervals are distinct and ordered as in the ground truth: on the left, 1.7–8.2s, 3.2–6.7s and 19.7–26.2s against 1.0–5.5s, 3.7–6.0s and 18.2–24.7s.',
    },
  },

  // Results tables, transcribed from the paper.
  // Cell marks:  *value = best (bold)   ~value = second-best (underline)
  tableTabs: ['NExT-GQA', 'STAR', 'Question-invariance', 'Ablation', 'Question type'],
  tables: {
    'NExT-GQA': {
      caption: 'Comparison with state-of-the-art methods on the NExT-GQA test set. GroundFormer sets a new best Acc@GQA with consistent gains across localization quality and thresholds, using 17.6% of the FrozenBiLM parameters.',
      lead: ['Method', 'Arch.', 'Param.'],
      groups: [{ label: 'QA', span: 2 }, { label: 'Localization (IoP)', span: 3 }, { label: 'Localization (IoU)', span: 3 }],
      cols: ['Acc@GQA ↑', 'Acc@VQA ↑', 'mIoP ↑', 'TIoP@0.3', 'TIoP@0.5', 'mIoU ↑', 'TIoU@0.3', 'TIoU@0.5'],
      rows: [
        { lead: ['PH', 'TempCLIP', '130M'], cells: ['15.2', '59.4', '25.4', '28.2', '25.5', '6.6', '9.3', '4.1'] },
        { lead: ['NG+', 'TempCLIP', '130M'], cells: ['16.0', '60.2', '25.7', '31.4', '25.5', '12.1', '17.5', '8.9'] },
        { lead: ['TimeCraft', 'TempCLIP', '130M'], cells: ['18.2', '65.6', '28.1', '~35.1', '27.8', '15.6', '21.2', '9.6'] },
        { lead: ['CRA-GQA', 'TempCLIP', '145M'], cells: ['18.2', '61.1', '~28.6', '34.3', '~28.5', '14.2', '~21.4', '10.6'] },
        { lead: ['PH', 'FrozenBiLM', '1.2B'], sep: true, cells: ['15.8', '69.1', '22.7', '25.8', '22.1', '7.1', '10.0', '4.4'] },
        { lead: ['NG+', 'FrozenBiLM', '1.2B'], cells: ['17.5', '~70.8', '24.2', '28.5', '23.7', '9.6', '13.5', '6.1'] },
        { lead: ['TimeCraft', 'FrozenBiLM', '1.2B'], cells: ['18.5', '*74.7', '26.3', '32.7', '24.9', '13.2', '18.6', '8.4'] },
        { lead: ['CRA-GQA', 'FrozenBiLM', '1.2B'], cells: ['~18.8', '70.2', '26.5', '32.6', '25.9', '13.5', '20.1', '9.6'] },
        { lead: ['QGAC-TR', '—', '—'], sep: true, cells: ['18.3', '63.6', '28.3', '32.8', '27.7', '~15.7', '18.6', '~11.7'] },
        { lead: ['GroundFormer (Ours)', '—', '211M'], ours: true, cells: ['*21.5', '61.7', '*34.0', '*41.5', '*33.7', '*17.5', '*26.5', '*12.8'] },
      ],
    },
    'STAR': {
      caption: 'Comparison with state-of-the-art methods on STAR. The gain is driven by robust temporal grounding: mIoP@0.5 of 49.3 and mIoU@0.5 of 15.8.',
      lead: ['Method', 'Arch.'],
      cols: ['Acc@GQA ↑', 'Acc@VQA ↑', 'mIoP@0.5 ↑', 'mIoU@0.5 ↑'],
      rows: [
        { lead: ['NG+', 'TempCLIP'], cells: ['24.4', '57.3', '41.4', '4.7'] },
        { lead: ['CRA-GQA', 'TempCLIP'], cells: ['26.8', '58.6', '~44.5', '5.5'] },
        { lead: ['NG+', 'FrozenBiLM'], sep: true, cells: ['25.8', '60.1', '40.9', '~7.8'] },
        { lead: ['CRA-GQA', 'FrozenBiLM'], cells: ['~27.8', '~60.5', '43.1', '5.1'] },
        { lead: ['GroundFormer (Ours)', '—'], ours: true, sep: true, cells: ['*30.7', '*61.1', '*49.3', '*15.8'] },
      ],
    },
    'Question-invariance': {
      caption: 'Question-invariant grounding analysis on NExT-GQA. PIoU is the average temporal IoU between grounding predictions for different questions in the same video; lower means less collapse. GT–Pred Corr. is the Pearson correlation between the ground-truth and predicted pairwise IoU across the dataset.',
      lead: ['Metric'],
      cols: ['NG+', 'CRA-GQA', 'GroundFormer', 'Ground truth'],
      rows: [
        { lead: ['PIoU ↓'], cells: ['85.7', '88.9', '*28.2', '21.3'] },
        { lead: ['GT–Pred Corr. ↑'], cells: ['0.005', '0.006', '*0.121', '—'] },
      ],
    },
    'Ablation': {
      caption: 'Ablation on NExT-GQA. Communication tokens give the largest single jump (+3.8 Acc@GQA, +3.1 mIoP), the auxiliary objectives add further gains, and the localization heads strengthen grounding. The single-pass row keeps the answer pass only.',
      lead: ['Configuration'],
      groups: [{ label: 'QA', span: 2 }, { label: 'Localization (IoP)', span: 3 }, { label: 'Localization (IoU)', span: 3 }],
      cols: ['Acc@GQA ↑', 'Acc@VQA ↑', 'mIoP ↑', 'TIoP@0.3', 'TIoP@0.5', 'mIoU ↑', 'TIoU@0.3', 'TIoU@0.5'],
      rows: [
        { lead: ['Baseline · cross-attention grounding head'], cells: ['14.8', '58.5', '26.5', '33.3', '24.8', '14.7', '21.9', '10.6'] },
        { lead: ['+ communication tokens'], cells: ['18.6', '59.8', '29.6', '37.0', '28.6', '17.0', '25.8', '13.0'] },
        { lead: ['+ ℒ_type'], cells: ['19.0', '60.4', '30.5', '37.9', '30.2', '16.9', '25.8', '~13.2'] },
        { lead: ['+ ℒ_mcl'], cells: ['20.1', '61.2', '32.0', '39.5', '30.3', '17.2', '25.8', '12.5'] },
        { lead: ['+ Gaussian smoothing'], cells: ['~20.8', '61.2', '~32.4', '39.3', '~32.0', '16.5', '25.0', '12.0'] },
        { lead: ['Single pass · answer only'], sep: true, cells: ['15.7', '58.2', '26.7', '32.8', '25.9', '14.6', '21.8', '10.8'] },
        { lead: ['GroundFormer · full'], ours: true, cells: ['*21.5', '*61.7', '*34.0', '*41.5', '*33.7', '*17.5', '*26.5', '12.8'] },
      ],
    },
    'Question type': {
      caption: 'Acc@GQA (%) by question type on NExT-GQA. Question conditioning improves grounding across all five types, most on Temporal-When and Causal-How.',
      lead: ['Method'],
      groups: [{ label: 'Causal', span: 2 }, { label: 'Temporal', span: 3 }],
      cols: ['Why', 'How', 'Before & After', 'When', 'Present'],
      rows: [
        { lead: ['NG+'], cells: ['16.9', '17.2', '12.0', '17.5', '10.8'] },
        { lead: ['GroundFormer (Ours)'], ours: true, cells: ['*22.2', '*23.1', '*17.3', '*25.8', '*12.9'] },
      ],
    },
  },

  bibtex: `@inproceedings{seo2026groundformer,
  title     = {What You Ask is What You Ground: Bridging Question
               Intent to Temporal Evidence for Grounded VideoQA},
  author    = {Seo, Jinhwan and Han, Kyubeom and Lee, Jumin
               and Noh, Junhyug and Yoon, Sung-eui},
  booktitle = {European Conference on Computer Vision (ECCV)},
  year      = {2026}
}`,
};
