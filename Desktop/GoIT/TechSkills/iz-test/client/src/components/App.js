import React, { Component } from 'react';
import * as API from '../services/api';

import PersonsListGrid from './PersonsListGrid';
import Pagination from './Pagination';
import ListFilter from './ListFilter';

const INITIAL_STATE = {
  data: [],
  count: null,
  offset: 0,
  limit: 50,
  currentPage: 1,
  filtered: {
    name: '',
    city: '',
    email: '',
    phone: ''
  }
};
export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { filtered, limit, offset } = this.state;
    API.getData(filtered, limit, offset).then(data => {
      this.setState({ data: data.data, count: data.count });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const prev = {
      name: prevState.filtered.name,
      city: prevState.filtered.city,
      email: prevState.filtered.email,
      phone: prevState.filtered.phone,
      currentPage: prevState.currentPage
    };
    const next = {
      name: this.state.filtered.name,
      city: this.state.filtered.city,
      email: this.state.filtered.email,
      phone: this.state.filtered.phone,
      currentPage: this.state.currentPage
    };

    if (
      prev.name !== next.name ||
      prev.city !== next.city ||
      prev.email !== next.email ||
      prev.phone !== next.phone ||
      prev.currentPage !== next.currentPage
    ) {
      const { filtered, limit, offset } = this.state;
      API.getData(filtered, limit, offset).then(data => {
        this.setState({ data: data.data, count: data.count });
      });
    }
  }

  handleFilterChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const { filtered } = this.state;

    this.setState({
      filtered: {
        ...filtered,
        [name]: value
      }
    });
  };

  handleChangeNextPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
      offset: prevState.offset + prevState.limit + 1
    }));
  };

  handleChangePrevPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1,
      offset: prevState.offset - prevState.limit - 1
    }));
  };

  render() {
    const { data, filtered, currentPage, limit, count } = this.state;
    const filteredProps = {
      name: filtered.name,
      city: filtered.city,
      email: filtered.email,
      phone: filtered.phone,
      onFilterChange: this.handleFilterChange
    };

    return (
      <div>
        <ListFilter {...filteredProps} />
        <Pagination
          maxItems={count}
          currentPage={currentPage}
          limitPersons={limit}
          nextPage={this.handleChangeNextPage}
          prevPage={this.handleChangePrevPage}
        />
        <PersonsListGrid data={data} />
      </div>
    );
  }
}
