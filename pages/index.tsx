import FilterButton from '@/components/FilterButton';
import Nav from '@/components/Nav';
import Rooms from '@/components/Rooms';
import React, { useState } from 'react';


function Home() {
  const [selectedRoom, setSelectedRoom] = useState('Haunted House');

  const handleFilterChange = (newFilter: string) => {
    setSelectedRoom(newFilter);
  };

  return (
    <div>
      <Nav />
      <FilterButton onFilterChange={handleFilterChange} />
      <Rooms selectedRoom={selectedRoom} />
    </div>
  );
}

export default Home;
