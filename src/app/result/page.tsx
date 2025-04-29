import Card from '@/components/common/Card';


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
    </div>
  );
}
