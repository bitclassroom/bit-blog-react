import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsPage from './posts/PostsPage'
import AuthorsPage from './authors/AuthorsPage'
import AuthorDetailsPage from './authors/details/AuthorDetailsPage'
import PostDetailsPage from './posts/details/PostDetailsPage'

const Main = () => {
    return (
        <main className="container">
            <Switch>
                <Route exact path="/" component={PostsPage} />
                <Route exact path="/authors" component={AuthorsPage} />
                <Route path="/authors/:id" component={AuthorDetailsPage} />
                <Route path="/posts/:id" component={PostDetailsPage} />
            </Switch>
        </main>
    )
}

export default Main