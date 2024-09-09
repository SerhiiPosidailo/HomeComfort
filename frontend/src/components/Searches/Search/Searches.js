import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from '../SearchForm/SearchForm';
import { Search } from './Search';
import { goodsService } from '../../../service/goodsService';

import css from './search.module.css'

const Searchs = () => {
  const [goods, setGoods] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [params, setParams] = useSearchParams({ page: '1', query: '' });

  const pageQuery = params.get('page') || '1';
  const query = params.get('query') || '';

  const searchGoods = (queryParam, pageParam) => {
    goodsService.getGoodsQuery(queryParam, pageParam)
      .then(({ data }) => {
        console.log(data);
        setGoods(data.data);
        setTotalPages(data.total_pages);
      });
  };

  useEffect(() => {
    searchGoods(query, pageQuery);
  }, [query, pageQuery]);

  const handlePagePrev = () => {
    setParams(prev => {
      prev.set('page', `${+pageQuery - 1}`);
      return prev;
    });
  };

  const handlePageNext = () => {
    setParams(prev => {
      prev.set('page', `${+pageQuery + 1}`);
      return prev;
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form && form.elements) {
      const queryValue = (form.elements.namedItem('search'))?.value || '';
      setParams(prev => {
        prev.set('query', queryValue);
        prev.set('page', '1');
        return prev;
      });
    }
  };

  return (
    <div>
      <div>
        <SearchForm onSubmit={handleSearchSubmit} />
      </div>
      <div className={css.blockSearch}>
        {goods.map(goods => <Search key={goods.id} goods={goods} />)}
      </div>
      <div className={css.Button}>
        <button onClick={handlePagePrev} disabled={+pageQuery === 1}>&lt;&lt;&lt; </button>
        <span> <b>{pageQuery} сторінка з {totalPages}</b> </span>
        <button onClick={handlePageNext} disabled={+pageQuery === totalPages}>&gt;&gt;&gt;</button>
      </div>
    </div>
  );
};

export { Searchs };