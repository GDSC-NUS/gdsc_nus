import React, { Component } from 'react';
import moment from 'moment';
import { Icon, Message } from 'semantic-ui-react';
import ReactLoading from 'react-loading';
import ArticleCard from './ArticleCard';
import PageHeader from './PageHeader';
import Footer from './Footer';
import teamarticledata from '../data/teamarticledata';
// import logo from '../assets/HomePage/event1.jpg';
import constants from '../data/constants';

class BlogPage extends Component {
    state = {
        error: undefined,
        articles: undefined,
        recents: undefined,
        filtered: undefined,
        loading: true
    }

    fetchArticles = () => {
        this.setState({ loading: true }, () => {
            fetch(constants["backend-url"] + '/articles', {
                // fetch('http://localhost:3001/articles', {
                method: "GET"
            }).then(response => response.json()
            ).then((response) => {
                if (response.constructor === Array) {
                    this.setState({ articles: response, filtered: response, loading: false })
                }
            }).catch((error) => {
                this.setState({ error: true, loading: false })
                // console.log('error1: ' + this.state.error)
            })
        })

    }

    fetchRecents = () => {
        fetch(constants["backend-url"] + '/articles?sortBy=created_at:desc', {
            method: "GET"
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.constructor === Array) {
                this.setState({ recents: response })
            }
        }).catch((error) => {
            // if (error.length === 0) 
            //     this.setState({ error: true })
            this.setState({ error: true })
        })
    }

    componentDidMount() {
        this.fetchArticles()
        this.fetchRecents();

        this.handleChange = this.handleChange.bind(this);
        window.scrollTo(0, 0)
    }

    handleChange(e) {
        let currentList = this.state.articles;
        let newList = [];
        if (e.target.value !== "") {
            newList = currentList.filter(item => {
                const lc = item.title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.props.items;
        }
        this.setState({
            filtered: newList
        });
    }

    render() {
        return (
            <div className="blog">
                {<PageHeader />}
                <div className="blog__header">
                    <h1 className="heading-secondary">We Engage and Impact Communities</h1>
                </div>

                <div className="blog__content">
                    <div className="blog__articles">

                        {/* This is a template */}
                        {/* <Link className="card card--clickable blog__article" to="/blog/123">
                            <div className="card__image-box">
                                <img src={logo} alt="event"/>
                            </div>
                            <div className="card__content">
                                <h2>Title</h2>
                                <p>Description</p>
                            </div>
                        </Link>
                        <Link className="card card--clickable blog__article" to="/blog/123">
                            <div className="card__image-box">
                                <img src={logo} alt="event"/>
                            </div>
                            <div className="card__content">
                                <h2>Title</h2>
                                <p>Description</p>
                            </div>
                        </Link> */}
                        {/* End of template */}

                        {!this.state.loading && teamarticledata.teams.map((team, index) => (
                            <ArticleCard
                                cardLink={team.cardLink}
                                key={index}
                                imageLink={team.imageLink}
                                title={team.title}
                                date={moment(new Date(team.createdAt)).fromNow()}
                                content={team.content}
                            />
                        ))}

                        {!!this.state.filtered && !this.state.loading && this.state.filtered.constructor === Array && this.state.filtered.map((article) => (
                            <ArticleCard
                                cardLink={`/blog/${article._id}`}
                                key={article._id}
                                imageLink={constants["backend-url"] + `/articles/${article._id}/picture`}
                                title={article.title}
                                date={moment(new Date(article.createdAt)).fromNow()}
                                content={article.description}
                            />
                        ))}
                        {this.state.loading && (
                            <ReactLoading type={"bars"} color={"#06c1d0"} style={{ margin: 'auto', width: '30%' }} />
                        )}
                        {!!!this.state.articles && !this.state.error && !this.state.loading && (
                            <Message info>
                                There are no articles at the moment!
                            </Message>
                        )}
                        {this.state.error && !this.state.loading && (
                            <Message error>
                                There was an error. Please try again later!
                            </Message>
                        )}
                    </div>

                    <div className="blog__sidebar">
                        <div className="card blog__article">
                            <div className="card__content">
                                <h2 className="heading-tertiary">Recent Posts</h2>
                                <ul className="blog__list">
                                    {/* This is a template */}
                                    {/* <li className="blog__list-item"><a href='/blog/123'>Title</a></li>
                                    <li className="blog__list-item"><a href='/blog/123'>Title</a></li> */}
                                    {/* End of template */}
                                    {!this.state.loading &&
                                        (
                                            <div>
                                                <li className="blog__list-item"><a href='/externalteamA'>External Team A</a></li>
                                                <li className="blog__list-item"><a href='/externalteamB'>External Team B</a></li>
                                                <li className="blog__list-item"><a href='/externalteamC'>External Team C</a></li>
                                            </div>
                                        )
                                    }
                                    {this.state.recents && this.state.recents.constructor === Array && this.state.recents.map((recent) => (
                                        <li className="blog__list-item" key={recent._id}><a href={`/blog/${recent._id}`}>{recent.title}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__content">
                                <div className="search">
                                    <h2 className="heading-tertiary">Search</h2>
                                    <div className="search__box">
                                        <input type="text" className="search__input" onChange={this.handleChange} placeholder="Search articles" />
                                        <button className="search__button">
                                            <Icon name="search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {<Footer />}
            </div>
        )
    }
}

export default BlogPage;