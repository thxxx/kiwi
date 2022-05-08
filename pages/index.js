import React from 'react';

const Index = () => {
  return (
    <div>
      <div>
        메인
      </div>
      {/* global을 붙이면 전체 적용 */}
      <style jsx global>{`
        div{
          color:red;
        }
      `}</style>
    </div>
  );
};

export default Index;