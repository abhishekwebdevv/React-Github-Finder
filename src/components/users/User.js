import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layouts/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithhubContext from "../../components/context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithhubContext);

  const { user, loading, getUser, getUserRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    followers,
    following,
    public_repos,
    public_gists,
    login,
    company,
    blog,
    bio,
    hireable,
    html_url,
    avatar_url,
    location,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              className="round-img"
              src={avatar_url}
              alt=""
              style={{ width: "150px" }}
            />
            <h1> {login} </h1>
            <p> Location: {location} </p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h1>Bio</h1>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {name && (
                  <Fragment>
                    <strong>Name: </strong> {name}
                  </Fragment>
                )}
              </li>

              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-danger">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
