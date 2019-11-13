import React from 'react';

const Ninja = ({ ninjas, deleteNinja }) => {
  const ninjaMap = ninja => {
    return (
     <div className="ninja" key={ ninja.id }>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        <button onClick={deleteNinja(ninja.id)}>delete</button>
      </div>
    );
  };
  const ninjaList = ninjas.map(ninjaMap);
  return (
      <div className='ninja-list'>{ ninjaList }</div>
  );
};

export default Ninja;
