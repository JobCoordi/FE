import Card from '@/components/common/Card';
<<<<<<< HEAD
import { cardData } from '@/mock/resultCard';
import Pagination from '@/components/common/Pagination';
=======
import {cardData} from '@/mock/resultCard';
>>>>>>> 80a83be (refactor: card- mockData 분리)

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Pagination
        data={cardData}
        CardComponent={Card}
        pageSize={3}
      />
    </div>
  );
}
