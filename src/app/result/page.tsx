import Card from '@/components/common/Card';
import { cardData } from '@/mock/resultCard';
import Pagination from '@/components/common/Pagination';

export default function Page() {
  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      {/* Section 1: 추천 결과 요약 */}
      <section className="max-w-3xl mx-auto mb-10 bg-white rounded-2xl shadow-md p-6 border-l-4 border-amber-400">
        <h2 className="text-2xl font-bold text-amber-600 mb-4">🎯 추천 결과</h2>
        <p className="text-lg mb-2">
          <strong className="text-amber-500">당신의 추천 직업은</strong> <span className="font-semibold">UX 디자이너</span>입니다.
        </p>
        <p className="text-lg mb-2">
          <strong className="text-amber-500">당신의 성격은</strong> 섬세하고 창의적인 편입니다.
        </p>
        <p className="text-lg">
          <strong className="text-amber-500">이런 성향이 있어요:</strong> 새로운 것에 도전하는 걸 좋아하고, 공감 능력이 뛰어나요.
        </p>
      </section>

      {/* Section 2: 추천 직무 카드 목록 */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 border-l-4 border-amber-400">
        <h3 className="text-xl font-semibold text-amber-600 mb-4">📌 관련 직무 추천 카드</h3>
        <Pagination
          data={cardData}
          CardComponent={Card}
          pageSize={3}
        />
      </section>
    </div>
  );
}
