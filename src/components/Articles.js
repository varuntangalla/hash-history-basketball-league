import React, { Component } from 'react' 
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar' 
import { getTeamsArticles } from '../api'
import Article from './Article'

export default class Articles extends Component{

    state = {
        loading: true, 
        teamArticles: [],
    }

    componentDidMount(){
        getTeamsArticles(this.props.match.params.teamId)
            .then((teamsArticles)=> {
                this.setState(() => ({

                    loading: false,
                    teamsArticles: teamsArticles.map((articles) => articles.title)

                }))
            })

    }

    render() {

        const { loading, teamsArticles } = this.state

        const { params, url } = this.props.match

        const { teamId, articleId } = params
        
        return loading === true 
                ? <h1>LOADING</h1>
                : <div className='container two-column'> 
                    <Sidebar
                        loading={loading} 
                        title='Articles'
                        list={teamsArticles}
                        {...this.props}
                        />
                <Route path={`${url}/:articleId`} render={({ match }) => (
            <Article articleId={articleId} teamId={teamId}>
              {(article) => !article ? <h1>Loading</h1> : (
                <div className='panel'>
                  <article className='article' key={article.id}>
                    <h1 className='header'>{article.title}</h1>
                    <p>{article.body}</p>
                  </article>
                </div>
              )}
            </Article>
          )}/>
        </div>

    }

}