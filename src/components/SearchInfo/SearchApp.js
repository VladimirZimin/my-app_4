import React, { Component } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Notification from "./Notification";
import ArticleList from "./ArticleList";
import SearchForm from "./SearchForm";
import api from "services/api";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export default class SearchApp extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 0,
    largeImageUrl: null,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   this.fetchArticles("react");
  // }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
  }

  fetchArticles = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    try {
      const articles = await api.fetchArticlesWithQuery(searchQuery, page);
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...articles],
        page: prevState.page + 1,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 0,
      articles: [],
    });
  };

  render() {
    const { articles, loading, error } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleSearchFormSubmit} />

        {error && (
          <Notification
            massage={`Whoops, something went wrong: ${error.message}`}
          />
        )}

        {loading && <Spinner />}

        {articles.length > 0 && <ArticleList articles={articles} />}

        {articles.length > 0 && !loading && (
          <button type="button" onClick={this.fetchArticles}>
            Load more
          </button>
        )}
      </>
    );
  }
}
