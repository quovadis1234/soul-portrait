export interface Question {
  text: string;
  dim: string;
  left: string;
  right: string;
}

export interface PageData {
  title: string;
  questions: Question[];
}

export const PAGES: PageData[] = [
  {
    title: '维度 I：外向性',
    questions: [
      { text: '1. 热情：Ta是否容易向他人展示友好与温暖？', dim: 'E', left: '疏离', right: '炽热' },
      { text: '2. 合群：Ta是否渴望融入人群，而非长时间独处？', dim: 'E', left: '独行', right: '簇拥' },
      { text: '3. 魄力：在群体中，Ta是否倾向于占据主导地位？', dim: 'E', left: '随流', right: '掌控' },
      { text: '4. 活力：Ta的生活节奏是否总是显得紧凑且高能？', dim: 'E', left: '沉静', right: '奔涌' },
      { text: '5. 寻求刺激：Ta是否热衷于冒险与感官的冲击？', dim: 'E', left: '安稳', right: '猎奇' },
      { text: '6. 积极情感：Ta是否经常表现出愉悦与乐观？', dim: 'E', left: '克制', right: '昂扬' },
    ],
  },
  {
    title: '维度 II：亲和性',
    questions: [
      { text: '1. 信任：Ta是否倾向于相信他人本性纯良？', dim: 'A', left: '戒备', right: '真诚' },
      { text: '2. 坦率：Ta是否为人直爽，不屑于玩弄心计？', dim: 'A', left: '深沉', right: '赤诚' },
      { text: '3. 利他：Ta是否愿意为了成全他人而牺牲自我利益？', dim: 'A', left: '自守', right: '慷慨' },
      { text: '4. 顺从：面对冲突，Ta是否优先选择退让与和解？', dim: 'A', left: '刚硬', right: '柔和' },
      { text: '5. 谦虚：Ta是否习惯掩盖光芒，保持低调？', dim: 'A', left: '张扬', right: '内敛' },
      { text: '6. 同理心：Ta是否容易被他人的苦难激起内心波澜？', dim: 'A', left: '冷峻', right: '感同' },
    ],
  },
  {
    title: '维度 III：神经质',
    questions: [
      { text: '1. 焦虑：Ta是否常处于某种无名的紧张状态？', dim: 'N', left: '松弛', right: '悬空' },
      { text: '2. 愤怒：不如意时，Ta内心是否易燃易怒？', dim: 'N', left: '静水', right: '烈火' },
      { text: '3. 抑郁：Ta是否容易被消沉的阴影覆盖？', dim: 'N', left: '明媚', right: '灰暗' },
      { text: '4. 自我意识：在众目睽睽下，Ta是否感到局促不安？', dim: 'N', left: '从容', right: '敏感' },
      { text: '5. 冲动：Ta是否难以抵抗即时的诱惑与欲望？', dim: 'N', left: '自律', right: '随兴' },
      { text: '6. 脆弱：高压之下，Ta的心理防线是否容易崩塌？', dim: 'N', left: '钢韧', right: '薄脆' },
    ],
  },
  {
    title: '维度 IV：尽责性',
    questions: [
      { text: '1. 能力：Ta是否对掌控生活挑战充满自信？', dim: 'C', left: '游移', right: '笃定' },
      { text: '2. 条理性：Ta是否执着于秩序、计划与整洁？', dim: 'C', left: '随性', right: '严谨' },
      { text: '3. 责任感：Ta是否视承诺与契约为生命线？', dim: 'C', left: '淡漠', right: '重诺' },
      { text: '4. 追求成功：Ta是否为野心和目标不断攀爬？', dim: 'C', left: '知足', right: '登顶' },
      { text: '5. 自律：Ta是否能对抗惰性，完成既定目标？', dim: 'C', left: '懒散', right: '克己' },
      { text: '6. 谨慎：落子之前，Ta是否总是三思而后行？', dim: 'C', left: '博弈', right: '深虑' },
    ],
  },
  {
    title: '维度 V：经验开放性',
    questions: [
      { text: '1. 想象力：Ta的脑海中是否常有光怪陆离的图景？', dim: 'O', left: '写实', right: '瑰丽' },
      { text: '2. 美学体验：Ta是否极易被艺术或自然的美感俘获？', dim: 'O', left: '理性', right: '沉醉' },
      { text: '3. 情感体验：Ta是否追求情感的深度而非平稳？', dim: 'O', left: '淡然', right: '浓烈' },
      { text: '4. 行为体验：Ta是否对陌生的生活方式抱有渴望？', dim: 'O', left: '守旧', right: '破浪' },
      { text: '5. 思想体验：Ta是否热衷于解构复杂的哲学命题？', dim: 'O', left: '务实', right: '思辨' },
      { text: '6. 价值观：Ta是否倾向于审视并挑战传统陈规？', dim: 'O', left: '卫道', right: '叛逆' },
    ],
  },
  {
    title: '维度 VI：暗黑人格',
    questions: [
      { text: '1. 马基雅弗利主义：Ta是否认为目的可以证明手段的合理？', dim: 'D', left: '至纯', right: '权谋' },
      { text: '2. 自恋：Ta是否认为自己理应获得凌驾他人的优越？', dim: 'D', left: '谦卑', right: '称王' },
      { text: '3. 精神病态：Ta是否能在他人受难时保持绝对的冷感？', dim: 'D', left: '柔软', right: '冰冷' },
    ],
  },
  {
    title: '维度 VII：光明人格',
    questions: [
      { text: '1. 康德主义：Ta是否坚守"人本身即是目的"而非工具？', dim: 'L', left: '实用', right: '圣殿' },
      { text: '2. 人道主义：Ta是否对每一个卑微的灵魂保持尊重？', dim: 'L', left: '俯瞰', right: '悲悯' },
      { text: '3. 相信人性：Ta是否相信人类文明终有一抹亮色？', dim: 'L', left: '绝望', right: '拥抱' },
    ],
  },
];
