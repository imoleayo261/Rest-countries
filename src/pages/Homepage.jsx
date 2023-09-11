import React from 'react'
import Search from '../component/Search'
import Countries from '../component/Countries'
import Loading from '../assets/utils/Loading';

const Homepage = ({allCountries, isLoading, filterByRegion, filterBySearch, darkMode}) => {
  return (
    <div>
      <Search filterByRegion={filterByRegion} filterBySearch={filterBySearch} />
      {isLoading && <Loading darkMode={darkMode} />}
      {!isLoading && <Countries allCountries={allCountries} />}
    </div>
  );
}

export default Homepage