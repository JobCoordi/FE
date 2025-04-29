import Card from '@/components/common/Card';
<<<<<<< HEAD
import { cardData } from '@/mock/resultCard';
import Pagination from '@/components/common/Pagination';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Pagination
        data={cardData}
        CardComponent={Card}
        pageSize={3}
      />
=======

const cardData = [
  { front: 'HTML', back: '하이퍼텍스트 마크업 언어' },
  { front: 'CSS', back: '스타일 시트' },
  { front: 'JavaScript', back: '동적인 웹을 만드는 언어' },
];

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-10">
      {cardData.map((item, index) => (
        <Card
          key={index}
          containerClassName="h-80 w-48"
          frontClassName="bg-blue-200 text-black"
          backClassName="bg-blue-400 text-black"
          frontText={item.front}
          backText={item.back}
        />
      ))}
>>>>>>> 52a6e0e (refactor: props로 텍스트 받게 수정)
    </div>
  );
}
