"use client";

import { useState } from "react";
import { ComponentType } from 'react';
import { CardProps } from '@/types/card';

interface PaginationProps {
  data: CardProps[];
  CardComponent: ComponentType<CardProps>; 
  pageSize?: number;
}

export default function Pagination({
  data,
  CardComponent,
  pageSize = 3,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = data.slice(startIndex, startIndex + pageSize);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      
      <div className="flex justify-between items-center gap-10">
        {currentData.map((cardProps, index) => (
          <CardComponent key={index} {...cardProps} />
        ))}
      </div>

      <div className="flex justify-end items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          이전
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          다음
        </button>
      </div>
    </div>
  );
}
